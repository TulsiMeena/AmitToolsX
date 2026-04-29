// --- QR Generator ---
const qrInput = document.getElementById('qr-input');
const generateQrBtn = document.getElementById('generate-qr');
const qrResult = document.getElementById('qr-code');
const downloadQrBtn = document.getElementById('download-qr');

let qrcode = null;

if (generateQrBtn) {
    generateQrBtn.addEventListener('click', () => {
        const text = qrInput.value.trim();
        if (!text) return alert('Please enter text or a URL');

        qrResult.innerHTML = '';
        qrResult.classList.remove('hidden');

        qrcode = new QRCode(qrResult, {
            text: text,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        downloadQrBtn.classList.remove('hidden');
    });

    downloadQrBtn.addEventListener('click', () => {
        const img = qrResult.querySelector('img');
        if (img) {
            const link = document.createElement('a');
            link.download = 'amittoolsx-qr.png';
            link.href = img.src;
            link.click();
        }
    });
}

// --- Password Generator ---
const passOutput = document.getElementById('pass-output');
const passLength = document.getElementById('pass-length');
const passLenVal = document.getElementById('pass-len-val');
const passUpper = document.getElementById('pass-upper');
const passLower = document.getElementById('pass-lower');
const passNum = document.getElementById('pass-num');
const passSym = document.getElementById('pass-sym');
const generatePassBtn = document.getElementById('generate-pass');
const copyPassBtn = document.getElementById('copy-pass');

if (generatePassBtn) {
    const charSets = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        num: '0123456789',
        sym: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    if (passLength) passLength.addEventListener('input', () => passLenVal.innerText = passLength.value);

    generatePassBtn.addEventListener('click', () => {
        let chars = '';
        if (passUpper.checked) chars += charSets.upper;
        if (passLower.checked) chars += charSets.lower;
        if (passNum.checked) chars += charSets.num;
        if (passSym.checked) chars += charSets.sym;

        if (!chars) return alert('Select at least one character type');

        let password = '';
        const len = parseInt(passLength.value);
        for (let i = 0; i < len; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passOutput.value = password;
    });

    if (copyPassBtn) copyPassBtn.addEventListener('click', () => {
        if (!passOutput.value) return;
        navigator.clipboard.writeText(passOutput.value);
        alert('Password copied to clipboard!');
    });
}

// --- Word Counter ---
const wordInput = document.getElementById('word-input');
const countWords = document.getElementById('count-words');
const countChars = document.getElementById('count-chars');
const countSentences = document.getElementById('count-sentences');
const countParagraphs = document.getElementById('count-paragraphs');

if (wordInput) {
    wordInput.addEventListener('input', () => {
        const text = wordInput.value.trim();

        const words = text ? text.split(/\s+/).length : 0;
        const chars = wordInput.value.length;
        const sentences = text ? text.split(/[.!?]+/).filter(Boolean).length : 0;
        const paragraphs = text ? text.split(/\n+/).filter(Boolean).length : 0;

        countWords.innerText = words;
        countChars.innerText = chars;
        countSentences.innerText = sentences;
        countParagraphs.innerText = paragraphs;
    });
}

// --- Unit Converter ---
const unitType = document.getElementById('unit-type');
const unitInput = document.getElementById('unit-input');
const unitOutput = document.getElementById('unit-output');
const convertUnitBtn = document.getElementById('convert-unit');

if (convertUnitBtn) {
    convertUnitBtn.addEventListener('click', () => {
        const val = parseFloat(unitInput.value);
        if (isNaN(val)) return alert('Enter a valid number');

        const type = unitType.value;
        let result = 0;

        if (type === 'length') result = val / 1000 + ' km';
        else if (type === 'weight') result = val * 1000 + ' g';
        else if (type === 'temp') result = (val * 9/5) + 32 + ' °F';

        unitOutput.value = result;
    });
}

// --- Base64 Tool ---
const b64Input = document.getElementById('base64-input');
const b64Output = document.getElementById('base64-output');
const b64EncodeBtn = document.getElementById('b64-encode');
const b64DecodeBtn = document.getElementById('b64-decode');

if (b64EncodeBtn) {
    b64EncodeBtn.addEventListener('click', () => {
        try {
            b64Output.value = btoa(b64Input.value);
        } catch(e) {
            alert('Encoding failed');
        }
    });

    b64DecodeBtn.addEventListener('click', () => {
        try {
            b64Output.value = atob(b64Input.value);
        } catch(e) {
            alert('Invalid Base64 string');
        }
    });
}

// --- JSON Formatter ---
const jsonInput = document.getElementById('json-input');
const formatJsonBtn = document.getElementById('format-json');

if (formatJsonBtn) {
    formatJsonBtn.addEventListener('click', () => {
        try {
            const obj = JSON.parse(jsonInput.value);
            jsonInput.value = JSON.stringify(obj, null, 4);
            alert('JSON Formatted Successfully!');
        } catch(e) {
            alert('Invalid JSON: ' + e.message);
        }
    });
}

// --- Age Calculator ---
const birthDate = document.getElementById('birth-date');
const ageResult = document.getElementById('age-result');
const ageVal = document.getElementById('age-val');
const calcAgeBtn = document.getElementById('calc-age');

if (calcAgeBtn) {
    calcAgeBtn.addEventListener('click', () => {
        const dobStr = birthDate.value;
        if (!dobStr) return alert('Please select a date');

        const dob = new Date(dobStr);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        ageVal.innerText = age;
        ageResult.classList.remove('hidden');
    });
}

// --- Percentage Calculator ---
const percP = document.getElementById('perc-p');
const percTotal = document.getElementById('perc-total');
const percResult = document.getElementById('perc-result');
const calcPercBtn = document.getElementById('calc-perc');

if (calcPercBtn) {
    calcPercBtn.addEventListener('click', () => {
        const p = parseFloat(percP.value);
        const total = parseFloat(percTotal.value);
        if (isNaN(p) || isNaN(total)) return alert('Enter valid numbers');

        const result = (p / 100) * total;
        percResult.innerText = result % 1 === 0 ? result : result.toFixed(2);
    });
}

// --- Thumbnail Downloader ---
const ytUrl = document.getElementById('yt-url');
const ytPreviewContainer = document.getElementById('yt-preview-container');
const ytThumbPreview = document.getElementById('yt-thumb-preview');
const getThumbsBtn = document.getElementById('get-thumbs');
const dlMax = document.getElementById('dl-max');
const dlHigh = document.getElementById('dl-high');

if (getThumbsBtn) {
    getThumbsBtn.addEventListener('click', () => {
        const url = ytUrl.value.trim();
        const videoId = extractVideoId(url);

        if (!videoId) return alert('Invalid YouTube URL');

        const maxRes = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        const highRes = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        ytThumbPreview.src = maxRes;
        dlMax.href = maxRes;
        dlHigh.href = highRes;

        ytPreviewContainer.classList.remove('hidden');
    });

    function extractVideoId(url) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
}

// --- PDF Tools ---
const pdfImagesInput = document.getElementById('pdf-images-input');
const pdfImagesList = document.getElementById('pdf-images-list');
const createPdfBtn = document.getElementById('create-pdf-from-images');

const mergePdfInput = document.getElementById('merge-pdf-input');
const mergePdfList = document.getElementById('merge-pdf-list');
const mergePdfsBtn = document.getElementById('merge-pdfs-btn');

if (pdfImagesInput) {
    pdfImagesInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        pdfImagesList.innerText = files.length > 0 ? files.map(f => f.name).join(', ') : 'No files selected';
    });

    createPdfBtn.addEventListener('click', async () => {
        const files = pdfImagesInput.files;
        if (files.length === 0) return alert('Please select images first');

        try {
            const { PDFDocument } = PDFLib;
            const pdfDoc = await PDFDocument.create();

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                let image;
                if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
                    image = await pdfDoc.embedJpg(arrayBuffer);
                } else if (file.type === 'image/png') {
                    image = await pdfDoc.embedPng(arrayBuffer);
                } else {
                    continue; // Skip unsupported types
                }

                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height,
                });
            }

            const pdfBytes = await pdfDoc.save();
            downloadBlob(pdfBytes, 'amittoolsx-images.pdf', 'application/pdf');
        } catch (error) {
            console.error(error);
            alert('Error creating PDF: ' + error.message);
        }
    });
}

if (mergePdfInput) {
    mergePdfInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        mergePdfList.innerText = files.length > 0 ? files.map(f => f.name).join(', ') : 'No files selected';
    });

    mergePdfsBtn.addEventListener('click', async () => {
        const files = mergePdfInput.files;
        if (files.length < 2) return alert('Please select at least 2 PDF files to merge');

        try {
            const { PDFDocument } = PDFLib;
            const mergedPdf = await PDFDocument.create();

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));
            }

            const pdfBytes = await mergedPdf.save();
            downloadBlob(pdfBytes, 'amittoolsx-merged.pdf', 'application/pdf');
        } catch (error) {
            console.error(error);
            alert('Error merging PDFs: ' + error.message);
        }
    });
}

function downloadBlob(data, fileName, mimeType) {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(url);
}
