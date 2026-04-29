// --- QR Code Generator Logic ---
const qrInput = document.getElementById('qr-input');
const generateQrBtn = document.getElementById('generate-qr');
const qrCodeContainer = document.getElementById('qr-code');
const downloadQrBtn = document.getElementById('download-qr');

let qrcode = null;

generateQrBtn.addEventListener('click', () => {
    const text = qrInput.value.trim();
    if (!text) {
        alert("Please enter some text or a URL");
        return;
    }

    qrCodeContainer.innerHTML = '';
    qrCodeContainer.classList.remove('hidden');

    qrcode = new QRCode(qrCodeContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Wait for the canvas to be rendered then show download button
    setTimeout(() => {
        downloadQrBtn.classList.remove('hidden');
    }, 100);
});

downloadQrBtn.addEventListener('click', () => {
    const img = qrCodeContainer.querySelector('img');
    const canvas = qrCodeContainer.querySelector('canvas');
    const link = document.createElement('a');
    link.download = 'qrcode-amittoolsx.png';
    link.href = img ? img.src : canvas.toDataURL();
    link.click();
});

// --- Password Generator Logic ---
const passOutput = document.getElementById('pass-output');
const passLength = document.getElementById('pass-length');
const passLenVal = document.getElementById('pass-len-val');
const passUpper = document.getElementById('pass-upper');
const passLower = document.getElementById('pass-lower');
const passNum = document.getElementById('pass-num');
const passSym = document.getElementById('pass-sym');
const generatePassBtn = document.getElementById('generate-pass');
const copyPassBtn = document.getElementById('copy-pass');

const charset = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    num: '0123456789',
    sym: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

passLength.addEventListener('input', () => {
    passLenVal.innerText = passLength.value;
});

function generatePassword() {
    let characters = '';
    if (passUpper.checked) characters += charset.upper;
    if (passLower.checked) characters += charset.lower;
    if (passNum.checked) characters += charset.num;
    if (passSym.checked) characters += charset.sym;

    if (!characters) {
        alert("Please select at least one character type");
        return;
    }

    let password = '';
    const array = new Uint32Array(parseInt(passLength.value));
    window.crypto.getRandomValues(array);

    for (let i = 0; i < array.length; i++) {
        password += characters.charAt(array[i] % characters.length);
    }
    passOutput.value = password;
}

generatePassBtn.addEventListener('click', generatePassword);

copyPassBtn.addEventListener('click', () => {
    if (!passOutput.value) return;
    navigator.clipboard.writeText(passOutput.value);
    const icon = copyPassBtn.querySelector('i');
    icon.classList.replace('fa-copy', 'fa-check');
    setTimeout(() => icon.classList.replace('fa-check', 'fa-copy'), 2000);
});

// Initial password
if (passOutput) generatePassword();

// --- Word Counter Logic ---
const wordInput = document.getElementById('word-input');
const countWords = document.getElementById('count-words');
const countChars = document.getElementById('count-chars');
const countSentences = document.getElementById('count-sentences');
const countParagraphs = document.getElementById('count-paragraphs');

wordInput.addEventListener('input', () => {
    const text = wordInput.value.trim();

    // Words
    const words = text ? text.split(/\s+/).length : 0;
    countWords.innerText = words;

    // Characters
    countChars.innerText = wordInput.value.length;

    // Sentences
    const sentences = text ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    countSentences.innerText = sentences;

    // Paragraphs
    const paragraphs = text ? text.split(/\n+/).filter(Boolean).length : 0;
    countParagraphs.innerText = paragraphs;
});
