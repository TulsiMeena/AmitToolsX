const { PDFDocument, rgb, degrees, StandardFonts } = PDFLib;
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
const moveUpBtn = document.getElementById('action-move-up');
const moveDownBtn = document.getElementById('action-move-down');
const toolSelect = document.getElementById('tool-select');
const toolText = document.getElementById('tool-text');
const toolDraw = document.getElementById('tool-draw');
const toolShape = document.getElementById('tool-shape');
const toolHighlight = document.getElementById('tool-highlight');
const toolWhiteout = document.getElementById('tool-whiteout');
const toolStamp = document.getElementById('tool-stamp');
const toolSignature = document.getElementById('tool-signature');
const toolImage = document.getElementById('tool-image');
const imageUpload = document.getElementById('image-upload');
const textSizeInput = document.getElementById('text-size');
const textColorInput = document.getElementById('text-color');
const textProperties = document.getElementById('text-properties');
const shapeProperties = document.getElementById('shape-properties');
const shapeTypeInput = document.getElementById('shape-type');
const shapeColorInput = document.getElementById('shape-color');
const stampProperties = document.getElementById('stamp-properties');
const stampTypeInput = document.getElementById('stamp-type');
const stampColorInput = document.getElementById('stamp-color');
const highlightProperties = document.getElementById('highlight-properties');
const highlightColorInput = document.getElementById('highlight-color');
const pageBgColorInput = document.getElementById('page-bg-color');
const pdfPasswordInput = document.getElementById('pdf-password');
const watermarkTextInput = document.getElementById('global-watermark-text');
const watermarkColorInput = document.getElementById('watermark-color');
const watermarkOpacityInput = document.getElementById('watermark-opacity');
const exportImagesBtn = document.getElementById('export-images');
const downloadBtn = document.getElementById('download-pdf');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let shapeStartX = 0;
let shapeStartY = 0;

// Initialization
pdfUpload.addEventListener('change', handleFileUpload);
prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
rotateBtn.addEventListener('click', rotateCurrentPage);
deleteBtn.addEventListener('click', deleteCurrentPage);
moveUpBtn.addEventListener('click', movePageUp);
moveDownBtn.addEventListener('click', movePageDown);
toolSelect.addEventListener('click', () => setTool('select'));
toolText.addEventListener('click', () => setTool('text'));
toolDraw.addEventListener('click', () => setTool('draw'));
toolShape.addEventListener('click', () => setTool('shape'));
toolHighlight.addEventListener('click', () => setTool('highlight'));
toolWhiteout.addEventListener('click', () => setTool('whiteout'));
toolStamp.addEventListener('click', () => setTool('stamp'));
toolSignature.addEventListener('click', () => openSignatureModal());
toolImage.addEventListener('click', () => imageUpload.click());
imageUpload.addEventListener('change', handleImageUpload);
exportImagesBtn.addEventListener('click', exportAsImages);
downloadBtn.addEventListener('click', exportPDF);

// Drawing Logic
drawingCanvas.addEventListener('mousedown', startDrawing);
drawingCanvas.addEventListener('mousemove', draw);
drawingCanvas.addEventListener('mouseup', stopDrawing);
drawingCanvas.addEventListener('mouseout', stopDrawing);

// Text Logic
pdfCanvasContainer.addEventListener('click', (e) => {
    if (currentTool === 'text') {
        const rect = pdfCanvasContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (e.target.closest('.text-layer-item') || e.target.closest('.image-layer-item')) return;
        addTextInput(x, y);
    }
});

function setTool(tool) {
    currentTool = tool;
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tool-${tool}`).classList.add('active');

    if (tool === 'draw' || tool === 'shape' || tool === 'highlight' || tool === 'whiteout' || tool === 'stamp') {
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

    if (tool === 'shape') shapeProperties.classList.remove('hidden');
    else shapeProperties.classList.add('hidden');

    if (tool === 'stamp') stampProperties.classList.remove('hidden');
    else stampProperties.classList.add('hidden');

    if (tool === 'highlight') highlightProperties.classList.remove('hidden');
    else highlightProperties.classList.add('hidden');
}

function startDrawing(e) {
    if (currentTool === 'draw' || currentTool === 'shape' || currentTool === 'highlight' || currentTool === 'whiteout' || currentTool === 'stamp') {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        [shapeStartX, shapeStartY] = [e.offsetX, e.offsetY];
    }
}

function draw(e) {
    if (!isDrawing) return;
    const ctx = drawingCanvas.getContext('2d');

    if (currentTool === 'draw') {
        ctx.strokeStyle = '#000000';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    } else if (currentTool === 'highlight') {
        const hex = highlightColorInput.value;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.4)`;
        ctx.lineWidth = 15;
        ctx.lineCap = 'butt';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
}

function stopDrawing(e) {
    if (!isDrawing) return;
    const ctx = drawingCanvas.getContext('2d');
    const pageIdx = currentPage - 1;
    if (!annotations[pageIdx]) annotations[pageIdx] = [];

    if (currentTool === 'shape') {
        const type = shapeTypeInput.value;
        const color = shapeColorInput.value;
        const w = e.offsetX - shapeStartX;
        const h = e.offsetY - shapeStartY;

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2;

        if (type === 'rect') ctx.strokeRect(shapeStartX, shapeStartY, w, h);
        else if (type === 'circle') {
            ctx.beginPath();
            const radius = Math.sqrt(w*w + h*h);
            ctx.arc(shapeStartX, shapeStartY, radius, 0, 2*Math.PI);
            ctx.stroke();
        } else if (type === 'line') {
            ctx.beginPath();
            ctx.moveTo(shapeStartX, shapeStartY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        } else if (type === 'arrow') {
            drawArrow(ctx, shapeStartX, shapeStartY, e.offsetX, e.offsetY);
        }

        annotations[pageIdx].push({
            type: 'shape',
            shapeType: type,
            x: shapeStartX,
            y: shapeStartY,
            w: w,
            h: h,
            color: color
        });
    } else if (currentTool === 'whiteout') {
        const w = e.offsetX - shapeStartX;
        const h = e.offsetY - shapeStartY;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(shapeStartX, shapeStartY, w, h);
        annotations[pageIdx].push({
            type: 'whiteout',
            x: shapeStartX,
            y: shapeStartY,
            w: w,
            h: h
        });
    } else if (currentTool === 'stamp') {
        const type = stampTypeInput.value;
        const color = stampColorInput.value;
        drawStamp(ctx, shapeStartX, shapeStartY, type, color);
        annotations[pageIdx].push({
            type: 'stamp',
            stampType: type,
            x: shapeStartX,
            y: shapeStartY,
            color: color
        });
    }
    isDrawing = false;
}

function drawStamp(ctx, x, y, text, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 12);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.font = 'bold 24px Arial';
    const textWidth = ctx.measureText(text).width;
    ctx.strokeRect(-textWidth/2 - 10, -20, textWidth + 20, 40);
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 0, 0);
    ctx.restore();
}

function drawArrow(ctx, fromx, fromy, tox, toy) {
    const headlen = 10;
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
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
        pdfRender = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        totalPages = pdfRender.numPages;
        pdfDoc = await PDFDocument.load(arrayBuffer);

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
        alert('Failed to load PDF.');
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
    drawingCanvas.width = viewport.width;
    drawingCanvas.height = viewport.height;
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;

    await page.render({ canvasContext: context, viewport: viewport }).promise;

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
        thumbWrapper.innerHTML = `<img src="${canvas.toDataURL()}" class="w-full">`;
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
    await generateThumbnails();
}

async function deleteCurrentPage() {
    if (!pdfRender || totalPages <= 1) return;
    if (!confirm(`Delete page ${currentPage}?`)) return;

    showLoading(true);
    try {
        const newPdfDoc = await PDFDocument.create();
        const indices = Array.from({length: totalPages}, (_, i) => i).filter(i => i !== (currentPage - 1));
        const copiedPages = await newPdfDoc.copyPages(pdfDoc, indices);
        copiedPages.forEach(page => newPdfDoc.addPage(page));
        pdfBytes = await newPdfDoc.save();
        pdfDoc = newPdfDoc;
        pdfRender = await pdfjsLib.getDocument({ data: pdfBytes }).promise;
        totalPages = pdfRender.numPages;

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
    } catch (error) { console.error(error); } finally { showLoading(false); }
}

async function movePageUp() {
    if (currentPage <= 1) return;
    await swapPages(currentPage - 1, currentPage - 2);
}

async function movePageDown() {
    if (currentPage >= totalPages) return;
    await swapPages(currentPage - 1, currentPage);
}

async function swapPages(idx1, idx2) {
    showLoading(true);
    try {
        const newPdfDoc = await PDFDocument.create();
        const indices = Array.from({length: totalPages}, (_, i) => i);
        [indices[idx1], indices[idx2]] = [indices[idx2], indices[idx1]];

        const copiedPages = await newPdfDoc.copyPages(pdfDoc, indices);
        copiedPages.forEach(page => newPdfDoc.addPage(page));

        pdfBytes = await newPdfDoc.save();
        pdfDoc = newPdfDoc;
        pdfRender = await pdfjsLib.getDocument({ data: pdfBytes }).promise;

        const r1 = pageRotations[idx1], r2 = pageRotations[idx2];
        const a1 = annotations[idx1], a2 = annotations[idx2];
        pageRotations[idx1] = r2; pageRotations[idx2] = r1;
        annotations[idx1] = a2; annotations[idx2] = a1;

        currentPage = idx2 + 1;
        await renderPage(currentPage);
        await generateThumbnails();
    } catch (error) { console.error(error); } finally { showLoading(false); }
}

function showLoading(show) {
    loadingOverlay.classList.toggle('hidden', !show);
}

function saveCurrentAnnotations() {
    if (currentPage === 0 || !pdfRender) return;
    const pageIdx = currentPage - 1;
    const pageAnnotations = annotations[pageIdx] || [];

    const filteredAnns = pageAnnotations.filter(a => a.type === 'shape' || a.type === 'whiteout' || a.type === 'stamp');

    // Save Text
    textLayer.querySelectorAll('.text-layer-item').forEach(item => {
        const textContent = Array.from(item.childNodes).filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent).join('').trim();
        if (textContent) filteredAnns.push({ type: 'text', x: parseFloat(item.style.left), y: parseFloat(item.style.top), text: textContent, size: parseInt(item.style.fontSize), color: item.style.color, scale: currentScale });
    });

    // Save Images
    textLayer.querySelectorAll('.image-layer-item').forEach(item => {
        const img = item.querySelector('img');
        filteredAnns.push({ type: 'image', x: parseFloat(item.style.left), y: parseFloat(item.style.top), width: parseFloat(img.style.width), src: img.src, scale: currentScale });
    });

    // Save Drawing
    const drawingData = drawingCanvas.toDataURL();
    if (drawingData && drawingData !== 'data:,') filteredAnns.push({ type: 'draw', data: drawingData, scale: currentScale });

    annotations[pageIdx] = filteredAnns;
}

function loadPageAnnotations(pageIdx) {
    textLayer.innerHTML = '';
    const ctx = drawingCanvas.getContext('2d');
    ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

    (annotations[pageIdx] || []).forEach(ann => {
        if (ann.type === 'text') addTextInput(ann.x, ann.y, ann.text, ann.size, ann.color);
        else if (ann.type === 'image') addImageToPage(ann.src, ann.x, ann.y, ann.width);
        else if (ann.type === 'draw') {
            const img = new Image();
            img.onload = () => ctx.drawImage(img, 0, 0, drawingCanvas.width, drawingCanvas.height);
            img.src = ann.data;
        } else if (ann.type === 'shape') {
            ctx.strokeStyle = ann.color;
            ctx.fillStyle = ann.color;
            ctx.lineWidth = 2;
            if (ann.shapeType === 'rect') ctx.strokeRect(ann.x, ann.y, ann.w, ann.h);
            else if (ann.shapeType === 'circle') { ctx.beginPath(); const radius = Math.sqrt(ann.w*ann.w + ann.h*ann.h); ctx.arc(ann.x, ann.y, radius, 0, 2*Math.PI); ctx.stroke(); }
            else if (ann.shapeType === 'line') { ctx.beginPath(); ctx.moveTo(ann.x, ann.y); ctx.lineTo(ann.x + ann.w, ann.y + ann.h); ctx.stroke(); }
            else if (ann.shapeType === 'arrow') { drawArrow(ctx, ann.x, ann.y, ann.x + ann.w, ann.y + ann.h); }
        } else if (ann.type === 'whiteout') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(ann.x, ann.y, ann.w, ann.h);
        } else if (ann.type === 'stamp') {
            drawStamp(ctx, ann.x, ann.y, ann.stampType, ann.color);
        }
    });
}

async function exportAsImages() {
    if (!pdfRender) return;
    showLoading(true);
    for (let i = 1; i <= totalPages; i++) {
        const page = await pdfRender.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `page_${i}.png`;
        link.click();
    }
    showLoading(false);
}

// Signature Modal Logic
const signatureModal = document.getElementById('signature-modal');
const signaturePad = document.getElementById('signature-pad');
const signatureText = document.getElementById('signature-text');
const clearPadBtn = document.getElementById('clear-pad');
const closeSignatureBtn = document.getElementById('close-signature');
const addSignatureBtn = document.getElementById('add-signature-btn');
const tabDraw = document.getElementById('tab-draw');
const tabType = document.getElementById('tab-type');
const drawContainer = document.getElementById('draw-container');
const typeContainer = document.getElementById('type-container');

let sigPadCtx = signaturePad.getContext('2d');
let sigIsDrawing = false;
let sigCurrentTab = 'draw';

function openSignatureModal() {
    signatureModal.classList.remove('hidden');
    clearSignaturePad();
}

function closeSignatureModal() {
    signatureModal.classList.add('hidden');
}

function clearSignaturePad() {
    sigPadCtx.clearRect(0, 0, signaturePad.width, signaturePad.height);
}

signaturePad.addEventListener('mousedown', (e) => {
    sigIsDrawing = true;
    sigPadCtx.beginPath();
    sigPadCtx.moveTo(e.offsetX, e.offsetY);
});

signaturePad.addEventListener('mousemove', (e) => {
    if (!sigIsDrawing) return;
    sigPadCtx.lineTo(e.offsetX, e.offsetY);
    sigPadCtx.stroke();
});

signaturePad.addEventListener('mouseup', () => sigIsDrawing = false);

clearPadBtn.addEventListener('click', clearSignaturePad);
closeSignatureBtn.addEventListener('click', closeSignatureModal);

tabDraw.addEventListener('click', () => {
    sigCurrentTab = 'draw';
    drawContainer.classList.remove('hidden');
    typeContainer.classList.add('hidden');
    tabDraw.classList.add('border-blue-400');
    tabDraw.classList.remove('text-white/40', 'border-transparent');
    tabType.classList.remove('border-blue-400');
    tabType.classList.add('text-white/40', 'border-transparent');
});

tabType.addEventListener('click', () => {
    sigCurrentTab = 'type';
    drawContainer.classList.add('hidden');
    typeContainer.classList.remove('hidden');
    tabType.classList.add('border-blue-400');
    tabType.classList.remove('text-white/40', 'border-transparent');
    tabDraw.classList.remove('border-blue-400');
    tabDraw.classList.add('text-white/40', 'border-transparent');
});

document.querySelectorAll('#font-options button').forEach(btn => {
    btn.addEventListener('click', () => {
        signatureText.style.fontFamily = btn.getAttribute('data-font');
        document.querySelectorAll('#font-options button').forEach(b => b.classList.remove('bg-blue-400/20'));
        btn.classList.add('bg-blue-400/20');
    });
});

addSignatureBtn.addEventListener('click', () => {
    let sigData = '';
    if (sigCurrentTab === 'draw') {
        sigData = signaturePad.toDataURL();
    } else {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 400;
        tempCanvas.height = 100;
        const tCtx = tempCanvas.getContext('2d');
        tCtx.font = `bold 40px ${signatureText.style.fontFamily || 'cursive'}`;
        tCtx.fillStyle = '#000000';
        tCtx.textAlign = 'center';
        tCtx.textBaseline = 'middle';
        tCtx.fillText(signatureText.value || 'Signature', 200, 50);
        sigData = tempCanvas.toDataURL();
    }
    addImageToPage(sigData, 100, 100, 200);
    closeSignatureModal();
});

async function exportPDF() {
    if (!pdfDoc) return;
    saveCurrentAnnotations();
    showLoading(true);
    try {
        const exportDoc = await PDFDocument.load(pdfBytes);
        const pages = exportDoc.getPages();
        const bgColor = pageBgColorInput.value;
        const password = pdfPasswordInput.value;
        const watermark = watermarkTextInput.value;

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const rotation = pageRotations[i] || 0;
            if (rotation !== 0) page.setRotation(degrees((page.getRotation().angle + rotation) % 360));

            let { width, height } = page.getSize();
            const hexToRgb = (hex) => rgb(parseInt(hex.slice(1, 3), 16) / 255, parseInt(hex.slice(3, 5), 16) / 255, parseInt(hex.slice(5, 7), 16) / 255);

            if (bgColor !== "#ffffff") page.drawRectangle({ x: 0, y: 0, width, height, color: hexToRgb(bgColor) });

            const pageAnnotations = annotations[i] || [];
            let renderWidth = drawingCanvas.width;
            let renderHeight = drawingCanvas.height;

            for (const ann of pageAnnotations) {
                const relX = ann.x / renderWidth;
                const relY = ann.y / renderHeight;
                if (ann.type === 'text') {
                    page.drawText(ann.text, { x: relX * width, y: height - (relY * height) - (ann.size * (height/renderHeight) * (currentScale/1.5)), size: ann.size * (width / (renderWidth / currentScale)), color: hexToRgb(ann.color) });
                } else if (ann.type === 'image') {
                    const relW = ann.width / renderWidth;
                    const imgBytes = await fetch(ann.src).then(res => res.arrayBuffer());
                    const image = ann.src.includes('image/png') ? await exportDoc.embedPng(imgBytes) : await exportDoc.embedJpg(imgBytes);
                    const aspectRatio = image.width / image.height;
                    page.drawImage(image, { x: relX * width, y: height - (relY * height) - ((relW * width) / aspectRatio), width: relW * width, height: (relW * width) / aspectRatio });
                } else if (ann.type === 'draw') {
                    const image = await exportDoc.embedPng(await fetch(ann.data).then(res => res.arrayBuffer()));
                    page.drawImage(image, { x: 0, y: 0, width, height });
                } else if (ann.type === 'shape') {
                    const relW = ann.w / renderWidth;
                    const relH = ann.h / renderHeight;
                    const config = { x: relX * width, y: height - (relY * height), borderColor: hexToRgb(ann.color), borderWidth: 2 };
                    if (ann.shapeType === 'rect') page.drawRectangle({ ...config, y: config.y - (relH * height), width: relW * width, height: relH * height });
                    else if (ann.shapeType === 'circle') { const radius = Math.sqrt(Math.pow(relW * width, 2) + Math.pow(relH * height, 2)); page.drawCircle({ ...config, radius }); }
                    else if (ann.shapeType === 'line') page.drawLine({ start: { x: relX * width, y: height - (relY * height) }, end: { x: (ann.x + ann.w) / renderWidth * width, y: height - ((ann.y + ann.h) / renderHeight * height) }, color: config.borderColor, thickness: 2 });
                    else if (ann.shapeType === 'arrow') {
                        const start = { x: relX * width, y: height - (relY * height) };
                        const end = { x: (ann.x + ann.w) / renderWidth * width, y: height - ((ann.y + ann.h) / renderHeight * height) };
                        page.drawLine({ start, end, color: config.borderColor, thickness: 2 });
                        // Draw arrow head
                        const angle = Math.atan2(end.y - start.y, end.x - start.x);
                        const headlen = 10 * (width / renderWidth);
                        page.drawLine({ start: end, end: { x: end.x - headlen * Math.cos(angle - Math.PI / 6), y: end.y - headlen * Math.sin(angle - Math.PI / 6) }, color: config.borderColor, thickness: 2 });
                        page.drawLine({ start: end, end: { x: end.x - headlen * Math.cos(angle + Math.PI / 6), y: end.y - headlen * Math.sin(angle + Math.PI / 6) }, color: config.borderColor, thickness: 2 });
                    }
                } else if (ann.type === 'whiteout') {
                    const relW = ann.w / renderWidth;
                    const relH = ann.h / renderHeight;
                    page.drawRectangle({ x: relX * width, y: height - (relY * height) - (relH * height), width: relW * width, height: relH * height, color: rgb(1, 1, 1) });
                } else if (ann.type === 'stamp') {
                    const stampColor = hexToRgb(ann.color);
                    page.drawRectangle({
                        x: (relX * width) - 50,
                        y: (height - (relY * height)) - 15,
                        width: 100,
                        height: 30,
                        borderColor: stampColor,
                        borderWidth: 2,
                        rotate: degrees(-15)
                    });
                    page.drawText(ann.stampType, {
                        x: (relX * width) - 40,
                        y: (height - (relY * height)) - 5,
                        size: 15,
                        color: stampColor,
                        rotate: degrees(-15)
                    });
                }
            }

            if (watermark) {
                const opacity = parseInt(watermarkOpacityInput.value) / 100;
                page.drawText(watermark, { x: 50, y: 50, size: 50, color: hexToRgb(watermarkColorInput.value), opacity, rotate: degrees(45) });
            }
        }

        if (password) exportDoc.encrypt({ userPassword: password, ownerPassword: password, permissions: { printing: 'highResolution', modifying: true, copying: true, annotating: true, fillingForms: true, contentAccessibility: true, documentAssembly: true } });

        const blob = new Blob([await exportDoc.save()], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'amittoolsx_edited.pdf';
        link.click();
    } catch (error) { console.error(error); alert("Export failed."); } finally { showLoading(false); }
}
