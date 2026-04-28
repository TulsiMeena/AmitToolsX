document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const resizerControls = document.getElementById('resizer-controls');
    const previewImage = document.getElementById('preview-image');
    const originalInfo = document.getElementById('original-info');

    const widthInput = document.getElementById('width-input');
    const heightInput = document.getElementById('height-input');
    const widthInch = document.getElementById('width-inch');
    const heightInch = document.getElementById('height-inch');
    const aspectRatioLock = document.getElementById('aspect-ratio-lock');

    const formatSelect = document.getElementById('format-select');
    const qualityInput = document.getElementById('quality-input');
    const qualityValue = document.getElementById('quality-value');
    const qualityContainer = document.getElementById('quality-container');

    const brightnessInput = document.getElementById('brightness-input');
    const brightnessValue = document.getElementById('brightness-value');
    const contrastInput = document.getElementById('contrast-input');
    const contrastValue = document.getElementById('contrast-value');
    const grayscaleInput = document.getElementById('grayscale-input');

    const downloadBtn = document.getElementById('download-btn');
    const newInfo = document.getElementById('new-info');

    let originalImage = null;
    let originalWidth = 0;
    let originalHeight = 0;
    let aspectRatio = 1;
    const DPI = 96;

    // --- Upload Logic ---

    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-blue-500', 'bg-blue-50');
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('border-blue-500', 'bg-blue-50');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) handleFiles(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFiles(e.target.files[0]);
    });

    function handleFiles(file) {
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                originalImage = img;
                originalWidth = img.width;
                originalHeight = img.height;
                aspectRatio = originalWidth / originalHeight;

                widthInput.value = originalWidth;
                heightInput.value = originalHeight;

                updateInches();

                previewImage.src = e.target.result;
                const sizeKB = (file.size / 1024).toFixed(2);
                const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
                originalInfo.textContent = `Original: ${originalWidth} x ${originalHeight} px | ${sizeKB} KB (${sizeMB} MB)`;

                resizerControls.classList.remove('hidden');
                dropZone.classList.add('hidden');
                newInfo.classList.remove('hidden');

                if (file.type === 'image/png' || file.type === 'image/webp' || file.type === 'image/jpeg') {
                    formatSelect.value = file.type;
                }
                updateQualityVisibility();
                estimateSize();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // --- Control Logic ---

    widthInput.addEventListener('input', () => {
        if (aspectRatioLock.checked && originalImage) {
            heightInput.value = Math.round(widthInput.value / aspectRatio);
        }
        updateInches();
        estimateSize();
    });

    heightInput.addEventListener('input', () => {
        if (aspectRatioLock.checked && originalImage) {
            widthInput.value = Math.round(heightInput.value * aspectRatio);
        }
        updateInches();
        estimateSize();
    });

    function updateInches() {
        widthInch.textContent = `${(widthInput.value / DPI).toFixed(2)} in`;
        heightInch.textContent = `${(heightInput.value / DPI).toFixed(2)} in`;
    }

    formatSelect.addEventListener('change', () => {
        updateQualityVisibility();
        estimateSize();
    });

    function updateQualityVisibility() {
        if (formatSelect.value === 'image/png') {
            qualityContainer.classList.add('opacity-50', 'pointer-events-none');
        } else {
            qualityContainer.classList.remove('opacity-50', 'pointer-events-none');
        }
    }

    qualityInput.addEventListener('input', () => {
        qualityValue.textContent = `${qualityInput.value}%`;
        estimateSize();
    });

    brightnessInput.addEventListener('input', () => {
        brightnessValue.textContent = `${brightnessInput.value}%`;
        applyPreviewFilters();
    });

    contrastInput.addEventListener('input', () => {
        contrastValue.textContent = `${contrastInput.value}%`;
        applyPreviewFilters();
    });

    grayscaleInput.addEventListener('change', applyPreviewFilters);

    function applyPreviewFilters() {
        const brightness = brightnessInput.value;
        const contrast = contrastInput.value;
        const grayscale = grayscaleInput.checked ? 100 : 0;
        previewImage.style.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)`;
    }

    // --- Size Estimation ---
    let debounceTimer;
    function estimateSize() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (!originalImage) return;

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const targetWidth = parseInt(widthInput.value) || originalWidth;
            const targetHeight = parseInt(heightInput.value) || originalHeight;

            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.drawImage(originalImage, 0, 0, targetWidth, targetHeight);

            const format = formatSelect.value;
            const quality = parseInt(qualityInput.value) / 100;

            canvas.toBlob((blob) => {
                if (blob) {
                    const sizeKB = (blob.size / 1024).toFixed(2);
                    const sizeMB = (blob.size / (1024 * 1024)).toFixed(2);
                    newInfo.textContent = `Estimated New Size: ${sizeKB} KB (${sizeMB} MB)`;
                }
            }, format, quality);
        }, 300);
    }

    // --- Download ---

    downloadBtn.addEventListener('click', () => {
        if (!originalImage) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const targetWidth = parseInt(widthInput.value) || originalWidth;
        const targetHeight = parseInt(heightInput.value) || originalHeight;

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const brightness = brightnessInput.value / 100;
        const contrast = contrastInput.value / 100;
        const grayscale = grayscaleInput.checked ? 1 : 0;

        ctx.filter = `brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale})`;
        ctx.drawImage(originalImage, 0, 0, targetWidth, targetHeight);

        const format = formatSelect.value;
        const quality = parseInt(qualityInput.value) / 100;

        const dataUrl = canvas.toDataURL(format, quality);
        const link = document.createElement('a');
        const extension = format.split('/')[1];
        link.download = `resized-image.${extension}`;
        link.href = dataUrl;
        link.click();
    });
});
