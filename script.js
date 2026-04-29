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

let originalImageRatio;

function handleFile(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        previewImage.src = event.target.result;
        previewImage.classList.remove('hidden');
        previewPlaceholder.classList.add('hidden');

        previewImage.onload = () => {
            widthInput.value = previewImage.naturalWidth;
            heightInput.value = previewImage.naturalHeight;
            originalImageRatio = previewImage.naturalWidth / previewImage.naturalHeight;

            widthInput.disabled = false;
            heightInput.disabled = false;
            downloadBtn.disabled = false;
        };
    };
    reader.readAsDataURL(file);
}

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    handleFile(e.target.files[0]);
});

// Drag and Drop support
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('border-blue-400', 'bg-white/20');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('border-blue-400', 'bg-white/20');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('border-blue-400', 'bg-white/20');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFile(file);
    }
});

widthInput.addEventListener('input', () => {
    if (aspectRatio.checked) {
        heightInput.value = Math.floor(widthInput.value / originalImageRatio);
    }
});

heightInput.addEventListener('input', () => {
    if (aspectRatio.checked) {
        widthInput.value = Math.floor(heightInput.value * originalImageRatio);
    }
});

qualitySlider.addEventListener('input', () => {
    qualityVal.innerText = `${qualitySlider.value}%`;
});

downloadBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const quality = qualitySlider.value / 100;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(previewImage, 0, 0, width, height);

    const link = document.createElement('a');
    link.download = `resized-image-${Date.now()}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', quality);
    link.click();
});
