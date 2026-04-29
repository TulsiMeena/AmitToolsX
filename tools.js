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

// --- PDF Conversion Tools ---

// JPG to PDF
const jpgToPdfInput = document.getElementById('jpg-to-pdf-input');
const jpgToPdfBtn = document.getElementById('jpg-to-pdf-btn');

if (jpgToPdfBtn) {
    jpgToPdfBtn.addEventListener('click', async () => {
        const files = jpgToPdfInput.files;
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
                    continue;
                }

                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
            }

            const pdfBytes = await pdfDoc.save();
            downloadBlob(pdfBytes, 'amittoolsx_images_to_pdf.pdf', 'application/pdf');
        } catch (error) {
            alert('Conversion failed: ' + error.message);
        }
    });
}

// HTML to PDF (Simple Implementation)
const htmlToPdfUrl = document.getElementById('html-to-pdf-url');
const htmlToPdfBtn = document.getElementById('html-to-pdf-btn');

if (htmlToPdfBtn) {
    htmlToPdfBtn.addEventListener('click', () => {
        const url = htmlToPdfUrl.value.trim();
        if (!url) return alert('Please enter a valid URL');

        // Open the URL in a new tab and suggest printing as PDF
        const win = window.open(url, '_blank');
        if (win) {
            alert('AmitToolsX Hint: Once the page loads, press Ctrl+P (or Cmd+P) and select "Save as PDF" to complete the conversion.');
        } else {
            alert('Pop-up blocked. Please allow pop-ups to use this tool.');
        }
    });
}

// PDF to JPG (Extract Images)
const pdfToJpgInput = document.getElementById('pdf-to-jpg-input');
const pdfToJpgBtn = document.getElementById('pdf-to-jpg-btn');

if (pdfToJpgBtn) {
    pdfToJpgBtn.addEventListener('click', async () => {
        const file = pdfToJpgInput.files[0];
        if (!file) return alert('Please select a PDF file first');

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 2 });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const context = canvas.getContext('2d');
                await page.render({ canvasContext: context, viewport: viewport }).promise;

                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/jpeg', 0.9);
                link.download = `amittoolsx_page_${i}.jpg`;
                link.click();
            }
        } catch (error) {
            alert('Extraction failed: ' + error.message);
        }
    });
}

// Merge PDF (New Implementation)
const mergePdfInputNew = document.getElementById('merge-pdf-input-new');
const mergePdfBtnNew = document.getElementById('merge-pdf-btn-new');

if (mergePdfBtnNew) {
    mergePdfBtnNew.addEventListener('click', async () => {
        const files = mergePdfInputNew.files;
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
            downloadBlob(pdfBytes, 'amittoolsx_merged.pdf', 'application/pdf');
        } catch (error) {
            alert('Merging failed: ' + error.message);
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
