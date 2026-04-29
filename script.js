// DOM Elements
const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('preview-image');
const previewPlaceholder = document.getElementById('preview-placeholder');
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const aspectRatio = document.getElementById('aspect-ratio');
const qualitySlider = document.getElementById('quality-slider');
const qualityVal = document.getElementById('quality-val');
const downloadBtn = document.getElementById('download-btn');
const batchContainer = document.getElementById('batch-container');
const batchList = document.getElementById('batch-list');
const batchCount = document.getElementById('batch-count');
const clearBatchBtn = document.getElementById('clear-batch');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIcon = document.getElementById('theme-icon');
const themeIconMobile = document.getElementById('theme-icon-mobile');

// Advanced Feature Elements
const presets = document.getElementById('presets');
const brightnessSlider = document.getElementById('filter-brightness');
const contrastSlider = document.getElementById('filter-contrast');
const grayscaleSlider = document.getElementById('filter-grayscale');
const brightnessVal = document.getElementById('brightness-val');
const contrastVal = document.getElementById('contrast-val');
const grayscaleVal = document.getElementById('grayscale-val');
const watermarkText = document.getElementById('watermark-text');
const watermarkLogo = document.getElementById('watermark-logo');
const outputFormat = document.getElementById('output-format');
const openCropBtn = document.getElementById('open-crop');

// State
let images = []; // Array of objects { file, dataUrl, naturalWidth, naturalHeight, ratio }
let activeIndex = -1;
let originalImageRatio;

// --- Theme Logic ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    const iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon';
    themeIcon.className = `fas ${iconClass}`;
    themeIconMobile.className = `fas ${iconClass}`;
}

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// --- File Handling Logic ---
function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const imgData = {
                    file: file,
                    dataUrl: e.target.result,
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight,
                    ratio: img.naturalWidth / img.naturalHeight,
                    name: file.name
                };
                images.push(imgData);
                renderBatchList();
                if (activeIndex === -1) setActiveImage(0);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function renderBatchList() {
    batchContainer.classList.remove('hidden');
    batchCount.innerText = images.length;
    batchList.innerHTML = '';

    images.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = `batch-item flex items-center p-2 rounded-lg cursor-pointer ${index === activeIndex ? 'active' : ''}`;
        item.innerHTML = `
            <img src="${img.dataUrl}" class="w-10 h-10 object-cover rounded mr-3">
            <span class="text-xs truncate flex-1">${img.name}</span>
            <button onclick="removeImage(${index}, event)" class="text-red-400 hover:text-red-300 ml-2">
                <i class="fas fa-times"></i>
            </button>
        `;
        item.onclick = () => setActiveImage(index);
        batchList.appendChild(item);
    });

    if (images.length === 0) {
        batchContainer.classList.add('hidden');
        resetToPlaceholder();
    }
}

function setActiveImage(index) {
    if (index < 0 || index >= images.length) return;
    activeIndex = index;
    const img = images[index];

    previewImage.src = img.dataUrl;
    previewImage.classList.remove('hidden');
    previewPlaceholder.classList.add('hidden');

    widthInput.value = img.naturalWidth;
    heightInput.value = img.naturalHeight;
    originalImageRatio = img.ratio;

    enableControls();
    renderBatchList();
}

function removeImage(index, event) {
    event.stopPropagation();
    images.splice(index, 1);
    if (activeIndex === index) {
        activeIndex = images.length > 0 ? 0 : -1;
        if (activeIndex !== -1) setActiveImage(0);
    } else if (activeIndex > index) {
        activeIndex--;
    }
    renderBatchList();
}

function resetToPlaceholder() {
    previewImage.classList.add('hidden');
    previewPlaceholder.classList.remove('hidden');
    disableControls();
}

function enableControls() {
    [widthInput, heightInput, qualitySlider, presets, brightnessSlider, contrastSlider, grayscaleSlider, watermarkText, watermarkLogo, outputFormat, openCropBtn, downloadBtn].forEach(el => el.disabled = false);
}

function disableControls() {
    [widthInput, heightInput, qualitySlider, presets, brightnessSlider, contrastSlider, grayscaleSlider, watermarkText, watermarkLogo, outputFormat, openCropBtn, downloadBtn].forEach(el => el.disabled = true);
}

uploadBox.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
clearBatchBtn.addEventListener('click', () => {
    images = [];
    activeIndex = -1;
    renderBatchList();
});

// Drag and Drop
uploadBox.addEventListener('dragover', (e) => { e.preventDefault(); uploadBox.classList.add('border-white', 'bg-white/10'); });
uploadBox.addEventListener('dragleave', () => { uploadBox.classList.remove('border-white', 'bg-white/10'); });
uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('border-white', 'bg-white/10');
    handleFiles(e.dataTransfer.files);
});

// Sync Inputs
widthInput.addEventListener('input', () => {
    if (aspectRatio.checked) heightInput.value = Math.floor(widthInput.value / originalImageRatio);
});
heightInput.addEventListener('input', () => {
    if (aspectRatio.checked) widthInput.value = Math.floor(heightInput.value * originalImageRatio);
});
qualitySlider.addEventListener('input', () => qualityVal.innerText = `${qualitySlider.value}%`);

// --- Advanced Processing Logic ---

// Presets
presets.addEventListener('change', () => {
    const val = presets.value;
    if (val === 'ig-post') { widthInput.value = 1080; heightInput.value = 1080; }
    else if (val === 'ig-story') { widthInput.value = 1080; heightInput.value = 1920; }
    else if (val === 'fb-cover') { widthInput.value = 851; heightInput.value = 315; }
    else if (val === 'yt-thumb') { widthInput.value = 1280; heightInput.value = 720; }

    if (val !== 'custom' && aspectRatio.checked) {
        // For presets, we usually don't want to force ratio if it doesn't match,
        // but let's keep it simple: if locked, it will adjust.
        widthInput.dispatchEvent(new Event('input'));
    }
});

// Filter Labels
brightnessSlider.addEventListener('input', () => brightnessVal.innerText = `${brightnessSlider.value}%`);
contrastSlider.addEventListener('input', () => contrastVal.innerText = `${contrastSlider.value}%`);
grayscaleSlider.addEventListener('input', () => grayscaleVal.innerText = `${grayscaleSlider.value}%`);

// --- Process & Download ---
downloadBtn.addEventListener('click', async () => {
    if (activeIndex === -1) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const quality = qualitySlider.value / 100;
    const format = outputFormat.value;

    canvas.width = width;
    canvas.height = height;

    // 1. Apply Filters
    ctx.filter = `brightness(${brightnessSlider.value}%) contrast(${contrastSlider.value}%) grayscale(${grayscaleSlider.value}%)`;

    // 2. Draw Image
    ctx.drawImage(previewImage, 0, 0, width, height);

    // Reset filter for watermark
    ctx.filter = 'none';

    // 3. Add Text Watermark
    if (watermarkText.value) {
        ctx.font = `${width / 20}px Arial`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.textAlign = 'right';
        ctx.fillText(watermarkText.value, width - 20, height - 20);
    }

    // 4. Add Logo Watermark
    if (watermarkLogo.files[0]) {
        const logoImg = await loadImage(URL.createObjectURL(watermarkLogo.files[0]));
        const logoSize = width * 0.15;
        ctx.drawImage(logoImg, 20, height - logoSize - 20, logoSize, logoSize);
    }

    // 5. Download
    const link = document.createElement('a');
    link.download = `amittoolsx-${Date.now()}.${format.split('/')[1]}`;
    link.href = canvas.toDataURL(format, quality);
    link.click();
});

function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}

// --- Cropping Tool Logic ---
const cropModal = document.getElementById('crop-modal');
const closeCrop = document.getElementById('close-crop');
const applyCrop = document.getElementById('apply-crop');
const resetCrop = document.getElementById('reset-crop');
const cropCanvas = document.getElementById('crop-canvas');
const cropOverlay = document.getElementById('crop-overlay');
const cropCtx = cropCanvas.getContext('2d');

let isCropping = false;
let startX, startY, currentX, currentY;

openCropBtn.addEventListener('click', () => {
    cropModal.classList.remove('hidden');
    cropCanvas.width = previewImage.naturalWidth;
    cropCanvas.height = previewImage.naturalHeight;
    cropCtx.drawImage(previewImage, 0, 0);
});

closeCrop.addEventListener('click', () => {
    cropModal.classList.add('hidden');
    cropOverlay.classList.add('hidden');
});

cropCanvas.addEventListener('mousedown', (e) => {
    isCropping = true;
    const rect = cropCanvas.getBoundingClientRect();
    const scaleX = cropCanvas.width / rect.width;
    const scaleY = cropCanvas.height / rect.height;
    startX = (e.clientX - rect.left) * scaleX;
    startY = (e.clientY - rect.top) * scaleY;

    cropOverlay.classList.remove('hidden');
    updateOverlay(e);
});

window.addEventListener('mousemove', (e) => {
    if (!isCropping) return;
    updateOverlay(e);
});

window.addEventListener('mouseup', () => {
    isCropping = false;
});

function updateOverlay(e) {
    const rect = cropCanvas.getBoundingClientRect();
    const scaleX = rect.width / cropCanvas.width;
    const scaleY = rect.height / cropCanvas.height;

    const mouseX = (e.clientX - rect.left);
    const mouseY = (e.clientY - rect.top);

    const x = Math.min(startX * scaleX, mouseX);
    const y = Math.min(startY * scaleY, mouseY);
    const w = Math.abs(startX * scaleX - mouseX);
    const h = Math.abs(startY * scaleY - mouseY);

    cropOverlay.style.left = `${x}px`;
    cropOverlay.style.top = `${y}px`;
    cropOverlay.style.width = `${w}px`;
    cropOverlay.style.height = `${h}px`;

    currentX = (x / scaleX);
    currentY = (y / scaleY);
    this.cropW = (w / scaleX);
    this.cropH = (h / scaleY);
}

applyCrop.addEventListener('click', () => {
    if (!this.cropW || !this.cropH) return;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = this.cropW;
    tempCanvas.height = this.cropH;

    tempCtx.drawImage(cropCanvas, currentX, currentY, this.cropW, this.cropH, 0, 0, this.cropW, this.cropH);

    const croppedDataUrl = tempCanvas.toDataURL();
    images[activeIndex].dataUrl = croppedDataUrl;
    images[activeIndex].naturalWidth = this.cropW;
    images[activeIndex].naturalHeight = this.cropH;
    images[activeIndex].ratio = this.cropW / this.cropH;

    setActiveImage(activeIndex);
    closeCrop.click();
});

resetCrop.addEventListener('click', () => {
    cropOverlay.classList.add('hidden');
    this.cropW = 0;
    this.cropH = 0;
});
