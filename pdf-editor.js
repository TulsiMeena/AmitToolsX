const { PDFDocument, rgb, degrees } = PDFLib;
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// State Management
let pdfDoc = null; // pdf-lib document for manipulation
let pdfRender = null; // pdf.js document for rendering
let currentPage = 1;
let totalPages = 0;
let currentScale = 1.5;
let currentTool = 'select';
let pdfBytes = null;
let pageRotations = {}; // pageIndex -> rotation (0, 90, 180, 270)
let annotations = {}; // pageIndex -> array of {type, data}

// DOM Elements
const pdfUpload = document.getElementById('pdf-upload');
const pdfMainCanvas = document.getElementById('pdf-main-canvas');
const pdfCanvasContainer = document.getElementById('pdf-canvas-container');
const drawingCanvas = document.getElementById('drawing-canvas');
const textLayer = document.getElementById('text-layer');
const thumbnailContainer = document.getElementById('thumbnail-container');
const welcomeScreen = document.getElementById('welcome-screen');
const loadingOverlay = document.getElementById('loading-overlay');
const pageCountDisplay = document.getElementById('page-count');
const currentPageNum = document.getElementById('current-page-num');
const totalPagesNum = document.getElementById('total-pages-num');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const rotateBtn = document.getElementById('action-rotate');
const deleteBtn = document.getElementById('action-delete');
const toolSelect = document.getElementById('tool-select');
const toolText = document.getElementById('tool-text');
const toolDraw = document.getElementById('tool-draw');
const toolImage = document.getElementById('tool-image');
const imageUpload = document.getElementById('image-upload');
const textSizeInput = document.getElementById('text-size');
const textColorInput = document.getElementById('text-color');
const textProperties = document.getElementById('text-properties');
const pageBgColorInput = document.getElementById('page-bg-color');
const pdfPasswordInput = document.getElementById('pdf-password');
const downloadBtn = document.getElementById('download-pdf');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Initialization
pdfUpload.addEventListener('change', handleFileUpload);
prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
rotateBtn.addEventListener('click', rotateCurrentPage);
deleteBtn.addEventListener('click', deleteCurrentPage);
toolSelect.addEventListener('click', () => setTool('select'));
toolText.addEventListener('click', () => setTool('text'));
toolDraw.addEventListener('click', () => setTool('draw'));
toolImage.addEventListener('click', () => imageUpload.click());
imageUpload.addEventListener('change', handleImageUpload);
downloadBtn.addEventListener('click', exportPDF);

// Drawing Logic
drawingCanvas.addEventListener('mousedown', startDrawing);
drawingCanvas.addEventListener('mousemove', draw);
drawingCanvas.addEventListener('mouseup', stopDrawing);
drawingCanvas.addEventListener('mouseout', stopDrawing);

// Text Logic
pdfCanvasContainer.addEventListener('click', handleCanvasClick);

function setTool(tool) {
    currentTool = tool;
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tool-${tool}`).classList.add('active');

    if (tool === 'draw') {
        drawingCanvas.classList.add('active');
    } else {
        drawingCanvas.classList.remove('active');
    }

    if (tool === 'text') {
        pdfCanvasContainer.style.cursor = 'text';
        textProperties.classList.remove('hidden');
    } else {
        pdfCanvasContainer.style.cursor = 'default';
        textProperties.classList.add('hidden');
    }
}

function startDrawing(e) {
    if (currentTool !== 'draw') return;
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing || currentTool !== 'draw') return;
    const ctx = drawingCanvas.getContext('2d');
    ctx.strokeStyle = '#000000';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    isDrawing = false;
}

function handleCanvasClick(e) {
    if (currentTool !== 'text') return;
    if (e.target.closest('.text-layer-item') || e.target.closest('.image-layer-item')) return;

    const rect = pdfCanvasContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    addTextInput(x, y);
}

function addTextInput(x, y, initialValue = '', size = null, color = null) {
    const input = document.createElement('div');
    input.className = 'text-layer-item';
    input.contentEditable = true;
    input.style.left = `${x}px`;
    input.style.top = `${y}px`;
    input.style.fontSize = `${size || textSizeInput.value}px`;
    input.style.color = color || textColorInput.value;
    input.innerText = initialValue;

    // Add delete button
    const delBtn = document.createElement('div');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = '&times;';
    delBtn.onclick = (e) => {
        e.stopPropagation();
        input.remove();
    };
    input.appendChild(delBtn);

    textLayer.appendChild(input);

    if (!initialValue) {
        setTimeout(() => input.focus(), 10);
    }

    input.addEventListener('blur', () => {
        if (!input.innerText.trim()) {
            input.remove();
        }
    });

    // Make draggable (simple version)
    let isDraggingText = false;
    input.addEventListener('mousedown', (e) => {
        if (document.activeElement === input) return;
        isDraggingText = true;
        e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingText) return;
        const rect = pdfCanvasContainer.getBoundingClientRect();
        input.style.left = `${e.clientX - rect.left - 20}px`;
        input.style.top = `${e.clientY - rect.top - 10}px`;
    });

    window.addEventListener('mouseup', () => {
        isDraggingText = false;
    });
}

async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        addImageToPage(event.target.result, 50, 50);
    };
    reader.readAsDataURL(file);
}

function addImageToPage(src, x, y, width = 150) {
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'image-layer-item';
    imgWrapper.style.left = `${x}px`;
    imgWrapper.style.top = `${y}px`;

    const img = document.createElement('img');
    img.src = src;
    img.style.width = `${width}px`;
    img.style.display = 'block';

    const delBtn = document.createElement('div');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = '&times;';
    delBtn.onclick = () => imgWrapper.remove();

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(delBtn);
    textLayer.appendChild(imgWrapper);

    // Draggable logic for images
    let isDraggingImg = false;
    imgWrapper.addEventListener('mousedown', (e) => {
        isDraggingImg = true;
        e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingImg) return;
        const rect = pdfCanvasContainer.getBoundingClientRect();
        imgWrapper.style.left = `${e.clientX - rect.left - (width / 2)}px`;
        imgWrapper.style.top = `${e.clientY - rect.top - 50}px`;
    });

    window.addEventListener('mouseup', () => {
        isDraggingImg = false;
    });
}

async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') return;

    showLoading(true);
    welcomeScreen.classList.add('hidden');

    try {
        const arrayBuffer = await file.arrayBuffer();
        pdfBytes = arrayBuffer;

        // Load for rendering
        pdfRender = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        totalPages = pdfRender.numPages;

        // Load for manipulation
        pdfDoc = await PDFDocument.load(arrayBuffer);

        // Reset state
        currentPage = 1;
        pageRotations = {};
        annotations = {};
        for(let i=0; i<totalPages; i++) {
            pageRotations[i] = 0;
            annotations[i] = [];
        }

        updateUI();
        await renderPage(currentPage);
        await generateThumbnails();

    } catch (error) {
        console.error('Error loading PDF:', error);
        alert('Failed to load PDF. Please try another file.');
    } finally {
        showLoading(false);
    }
}

function updateUI() {
    pageCountDisplay.textContent = `${currentPage}/${totalPages}`;
    currentPageNum.textContent = currentPage;
    totalPagesNum.textContent = totalPages;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
}

async function renderPage(pageNum) {
    if (!pdfRender) return;

    const page = await pdfRender.getPage(pageNum);
    const rotation = pageRotations[pageNum - 1] || 0;

    const viewport = page.getViewport({ scale: currentScale, rotation: rotation });
    const context = pdfMainCanvas.getContext('2d');

    pdfMainCanvas.height = viewport.height;
    pdfMainCanvas.width = viewport.width;

    // Set sizes for drawing canvas and text layer too
    drawingCanvas.width = viewport.width;
    drawingCanvas.height = viewport.height;
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;

    const renderContext = {
        canvasContext: context,
        viewport: viewport
    };

    await page.render(renderContext).promise;

    // Highlight active thumbnail
    document.querySelectorAll('.thumbnail-page').forEach((thumb, idx) => {
        if (idx === pageNum - 1) thumb.classList.add('active');
        else thumb.classList.remove('active');
    });

    updateUI();
    loadPageAnnotations(pageNum - 1);
}

async function generateThumbnails() {
    thumbnailContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const page = await pdfRender.getPage(i);
        const viewport = page.getViewport({ scale: 0.2 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport: viewport }).promise;

        const thumbWrapper = document.createElement('div');
        thumbWrapper.className = `thumbnail-page relative group cursor-pointer rounded-lg overflow-hidden transition-all hover:scale-105 ${i === currentPage ? 'active' : ''}`;
        thumbWrapper.innerHTML = `
            <img src="${canvas.toDataURL()}" class="w-full">
            <div class="absolute bottom-0 left-0 right-0 bg-black/60 text-[10px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">Page ${i}</div>
        `;

        thumbWrapper.onclick = () => changePage(i);
        thumbnailContainer.appendChild(thumbWrapper);
    }
}

async function changePage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages || pageNum === currentPage) return;
    saveCurrentAnnotations();
    currentPage = pageNum;
    await renderPage(currentPage);
}

async function rotateCurrentPage() {
    if (!pdfRender) return;
    const currentRot = pageRotations[currentPage - 1] || 0;
    pageRotations[currentPage - 1] = (currentRot + 90) % 360;
    await renderPage(currentPage);
    await generateThumbnails(); // Update thumbnails to show rotation
}

async function deleteCurrentPage() {
    if (!pdfRender || totalPages <= 1) {
        if (totalPages <= 1) alert("Cannot delete the only page.");
        return;
    }

    if (!confirm(`Are you sure you want to delete page ${currentPage}?`)) return;

    showLoading(true);
    try {
        // We handle deletion logically for rendering first
        // In a real app, we'd rebuild the pdfRender from modified bytes
        // But for simplicity in this browser editor, we'll track 'removed' pages or just rebuild

        const newPdfDoc = await PDFDocument.create();
        const indices = Array.from({length: totalPages}, (_, i) => i).filter(i => i !== (currentPage - 1));

        const copiedPages = await newPdfDoc.copyPages(pdfDoc, indices);
        copiedPages.forEach(page => newPdfDoc.addPage(page));

        const newPdfBytes = await newPdfDoc.save();
        pdfBytes = newPdfBytes;
        pdfDoc = newPdfDoc;

        // Reload pdfRender
        pdfRender = await pdfjsLib.getDocument({ data: pdfBytes }).promise;
        totalPages = pdfRender.numPages;

        // Shift rotations and annotations
        const newRotations = {};
        const newAnnotations = {};
        indices.forEach((oldIdx, newIdx) => {
            newRotations[newIdx] = pageRotations[oldIdx] || 0;
            newAnnotations[newIdx] = annotations[oldIdx] || [];
        });
        pageRotations = newRotations;
        annotations = newAnnotations;

        if (currentPage > totalPages) currentPage = totalPages;

        await renderPage(currentPage);
        await generateThumbnails();
        updateUI();
    } catch (error) {
        console.error("Error deleting page:", error);
    } finally {
        showLoading(false);
    }
}

function showLoading(show) {
    loadingOverlay.classList.toggle('hidden', !show);
}

function saveCurrentAnnotations() {
    if (currentPage === 0) return;
    const pageIdx = currentPage - 1;

    const pageAnnotations = [];

    // Save Text
    const textItems = textLayer.querySelectorAll('.text-layer-item');
    textItems.forEach(item => {
        const textContent = Array.from(item.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent)
            .join('')
            .trim();

        if (textContent) {
            pageAnnotations.push({
                type: 'text',
                x: parseFloat(item.style.left),
                y: parseFloat(item.style.top),
                text: textContent,
                size: parseInt(item.style.fontSize),
                color: item.style.color,
                scale: currentScale
            });
        }
    });

    // Save Images
    const imageItems = textLayer.querySelectorAll('.image-layer-item');
    imageItems.forEach(item => {
        const img = item.querySelector('img');
        pageAnnotations.push({
            type: 'image',
            x: parseFloat(item.style.left),
            y: parseFloat(item.style.top),
            width: parseFloat(img.style.width),
            src: img.src,
            scale: currentScale
        });
    });

    // Save Drawing
    const drawingData = drawingCanvas.toDataURL();
    if (drawingData && drawingData !== 'data:,') {
        pageAnnotations.push({
            type: 'draw',
            data: drawingData,
            scale: currentScale
        });
    }

    annotations[pageIdx] = pageAnnotations;
}

function loadPageAnnotations(pageIdx) {
    textLayer.innerHTML = '';
    const ctx = drawingCanvas.getContext('2d');
    ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

    const pageAnnotations = annotations[pageIdx] || [];
    pageAnnotations.forEach(ann => {
        if (ann.type === 'text') {
            addTextInput(ann.x, ann.y, ann.text, ann.size, ann.color);
        } else if (ann.type === 'image') {
            addImageToPage(ann.src, ann.x, ann.y, ann.width);
        } else if (ann.type === 'draw') {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, drawingCanvas.width, drawingCanvas.height);
            };
            img.src = ann.data;
        }
    });
}

async function exportPDF() {
    if (!pdfDoc) return;
    saveCurrentAnnotations();
    showLoading(true);

    try {
        // We create a fresh document to apply rotations and annotations correctly
        // This avoids issues with multiple saves
        const exportDoc = await PDFDocument.load(pdfBytes);
        const pages = exportDoc.getPages();
        const bgColor = pageBgColorInput.value;
        const password = pdfPasswordInput.value;

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const rotation = pageRotations[i] || 0;
            if (rotation !== 0) {
                page.setRotation(degrees((page.getRotation().angle + rotation) % 360));
            }

            const { width, height } = page.getSize();

            // Apply Background Color
            if (bgColor !== "#ffffff") {
                const hexToRgb = (hex) => {
                    const r = parseInt(hex.slice(1, 3), 16) / 255;
                    const g = parseInt(hex.slice(3, 5), 16) / 255;
                    const b = parseInt(hex.slice(5, 7), 16) / 255;
                    return rgb(r, g, b);
                };
                page.drawRectangle({
                    x: 0,
                    y: 0,
                    width: width,
                    height: height,
                    color: hexToRgb(bgColor),
                });
            }

            const pageAnnotations = annotations[i] || [];
            const renderWidth = drawingCanvas.width;
            const renderHeight = drawingCanvas.height;

            for (const ann of pageAnnotations) {
                if (ann.type === 'text') {
                    const relX = ann.x / renderWidth;
                    const relY = ann.y / renderHeight;
                    const hexToRgb = (hex) => {
                        // Handle rgb(r, g, b) format too if needed, but here mostly hex
                        if (hex.startsWith('#')) {
                            const r = parseInt(hex.slice(1, 3), 16) / 255;
                            const g = parseInt(hex.slice(3, 5), 16) / 255;
                            const b = parseInt(hex.slice(5, 7), 16) / 255;
                            return rgb(r, g, b);
                        }
                        return rgb(0,0,0);
                    };

                    page.drawText(ann.text, {
                        x: relX * width,
                        y: height - (relY * height) - (ann.size * (height/renderHeight) * (currentScale/1.5)),
                        size: ann.size * (width / (renderWidth / currentScale)),
                        color: hexToRgb(ann.color),
                    });
                } else if (ann.type === 'image') {
                    const relX = ann.x / renderWidth;
                    const relY = ann.y / renderHeight;
                    const relW = ann.width / renderWidth;

                    const imageBytes = await fetch(ann.src).then(res => res.arrayBuffer());
                    let image;
                    if (ann.src.includes('image/png')) image = await exportDoc.embedPng(imageBytes);
                    else image = await exportDoc.embedJpg(imageBytes);

                    const imgAspectRatio = image.width / image.height;

                    page.drawImage(image, {
                        x: relX * width,
                        y: height - (relY * height) - ((relW * width) / imgAspectRatio),
                        width: relW * width,
                        height: (relW * width) / imgAspectRatio,
                    });
                } else if (ann.type === 'draw') {
                    const imageBytes = await fetch(ann.data).then(res => res.arrayBuffer());
                    const image = await exportDoc.embedPng(imageBytes);
                    page.drawImage(image, {
                        x: 0,
                        y: 0,
                        width: width,
                        height: height,
                    });
                }
            }
        }

        // Apply Password if set
        if (password) {
            exportDoc.encrypt({
                userPassword: password,
                ownerPassword: password,
                permissions: {
                    printing: 'highResolution',
                    modifying: true,
                    copying: true,
                    annotating: true,
                    fillingForms: true,
                    contentAccessibility: true,
                    documentAssembly: true
                }
            });
        }

        const pdfBytesFinal = await exportDoc.save();
        const blob = new Blob([pdfBytesFinal], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'edited_document.pdf';
        link.click();
    } catch (error) {
        console.error("Error exporting PDF:", error);
        alert("Failed to export PDF.");
    } finally {
        showLoading(false);
    }
}
