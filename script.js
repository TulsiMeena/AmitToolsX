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

// --- Translation Logic ---
const translations = {
    en: {
        navHome: "Home",
        navPDF: "PDF Editor",
        navTools: "Tools",
        navAbout: "About",
        navContact: "Contact",
        navPrivacy: "Privacy",
        heroTitle: "Image Resizer",
        heroSub: "Resize your images instantly with professional precision.",
        uploadTitle: "Click or Drag to Upload Images",
        uploadSub: "(Supports Batch Processing)",
        batchTitle: "Uploaded Images",
        clearAll: "Clear All",
        resizePresets: "Resize & Presets",
        widthLabel: "Width (px)",
        heightLabel: "Height (px)",
        lockRatio: "Lock Ratio",
        presetsLabel: "Custom Size",
        cropTool: "Advanced Crop Tool",
        filtersTitle: "Image Filters",
        brightness: "Brightness",
        contrast: "Contrast",
        grayscale: "Grayscale",
        watermarkTitle: "Watermark",
        watermarkPlaceholder: "Enter Watermark Text",
        logoLabel: "Logo:",
        outputSettings: "Output Settings",
        formatLabel: "Format",
        qualityLabel: "Quality",
        exifInfo: "EXIF data will be automatically removed for privacy.",
        processBtn: "Process & Download",
        footerAbout: "A premium suite of online utilities for modern developers and creators.",
        footerLinks: "Quick Links",
        footerConnect: "Connect With Us",
        footerCreatedBy: "Created by",
        footerManagedBy: "Managed by",
        cropModalTitle: "Advanced Crop Tool",
        reset: "Reset",
        applyCrop: "Apply Crop",
        // PDF Editor
        pdfToolSelect: "Select",
        pdfToolText: "Text",
        pdfToolLink: "Links",
        pdfToolForms: "Forms",
        pdfToolImage: "Images",
        pdfToolSign: "Sign",
        pdfToolWhiteout: "Whiteout",
        pdfToolAnnotate: "Annotate",
        pdfToolShapes: "Shapes",
        pdfToolDraw: "Draw",
        pdfToolStamp: "Stamp",
        pdfToolFind: "Find",
        pdfExport: "Export PDF",
        pdfUploadBtn: "Upload PDF",
        pdfWelcomeTitle: "Advanced PDF Editor",
        pdfWelcomeSub: "Upload your PDF to start editing. You can add text, signatures, rotate pages, or remove unwanted pages - all in your browser.",
        // Tools Page
        toolsTitle: "Multi-Utility Tools",
        toolsSub: "Fast, secure, and professional tools for daily tasks.",
        // About Page
        aboutTitle: "Meet the Team",
        aboutSub: "The creative minds behind AmitToolsX, dedicated to building powerful online utilities.",
        followers: "Followers",
        posts: "Posts",
        experience: "Experience",
        missionTitle: "Our Mission",
        missionText: "Our mission is to provide high-quality, secure, and accessible digital tools to everyone. We believe that professional editing and utility tools should be free and easy to use without compromising user privacy.",
        visionTitle: "Our Vision",
        visionText: "We envision AmitToolsX as the go-to platform for creators and developers worldwide, offering a complete suite of browser-based utilities that eliminate the need for expensive software.",
        // Index Page New Sections
        whyTitle: "Why Choose AmitToolsX?",
        feature1Title: "100% Privacy",
        feature1Text: "All image and document processing happens locally in your browser. Your files never touch our servers.",
        feature2Title: "Professional Quality",
        feature2Text: "Our high-performance algorithms ensure that your images and PDFs maintain their original quality and clarity.",
        feature3Title: "User-Centric Design",
        feature3Text: "A modern, advanced interface designed for both beginners and professionals to get tasks done quickly.",
        // Contact Page
        contactTitle: "Get In Touch",
        contactSub: "Have questions or feedback? We'd love to hear from you.",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        messageLabel: "Message",
        sendBtn: "Send Message",
        connectSocial: "Connect on Social",
        location: "Our Location",
        // Privacy Page
        privacyTitle: "Privacy Policy",
        p1Title: "1. Data Processing",
        p1Text: "At AmitToolsX, your privacy is our top priority. Unlike other platforms, we don't store your images or documents on any server. Every operation happens entirely within your browser's memory using client-side JavaScript. Your data never leaves your device.",
        p2Title: "2. User Preferences & Cookies",
        p2Text: "We use your browser's Local Storage to save your preferred theme (Dark/Light) and language (English/Hindi). This data stays on your machine. We do not use any third-party tracking cookies or analytical scripts that compromise your anonymity.",
        p3Title: "3. Professional Grade Tools",
        p3Text: "Our tools are built with high-performance algorithms to ensure quality preservation. Whether you are resizing for Instagram or compression for web use, we ensure that the output meets professional standards without any hidden watermarks.",
        p4Title: "4. Reach Out to Us",
        p4Text: "We value your feedback and transparency. If you have concerns about your privacy or suggestions for new features, please reach out to our team (Amit and Aman Meena) via our official social media channels."
    },
    hi: {
        navHome: "होम",
        navPDF: "PDF एडिटर",
        navTools: "टूल्स",
        navAbout: "हमारे बारे में",
        navContact: "संपर्क करें",
        navPrivacy: "गोपनीयता",
        heroTitle: "इमेज रिसाइज़र",
        heroSub: "अपनी इमेज को प्रोफेशनल सटीकता के साथ तुरंत रिसाइज करें।",
        uploadTitle: "इमेज अपलोड करने के लिए क्लिक करें या ड्रैग करें",
        uploadSub: "(बैच प्रोसेसिंग का समर्थन करता है)",
        batchTitle: "अपलोड की गई इमेज",
        clearAll: "सभी साफ़ करें",
        resizePresets: "रिसाइज और प्रीसेट",
        widthLabel: "चौड़ाई (px)",
        heightLabel: "ऊंचाई (px)",
        lockRatio: "अनुपात लॉक करें",
        presetsLabel: "कस्टम साइज",
        cropTool: "एडवांस क्रॉप टूल",
        filtersTitle: "इमेज फ़िल्टर",
        brightness: "चमक (Brightness)",
        contrast: "कंट्रास्ट",
        grayscale: "ग्रेस्केल",
        watermarkTitle: "वॉटरमार्क",
        watermarkPlaceholder: "वॉटरमार्क टेक्स्ट दर्ज करें",
        logoLabel: "लोगो:",
        outputSettings: "आउटपुट सेटिंग्स",
        formatLabel: "फॉर्मेट",
        qualityLabel: "क्वालिटी",
        exifInfo: "गोपनीयता के लिए EXIF डेटा स्वचालित रूप से हटा दिया जाएगा।",
        processBtn: "प्रोसेस और डाउनलोड",
        footerAbout: "आधुनिक डेवलपर्स और क्रिएटर्स के लिए ऑनलाइन उपयोगिताओं का एक प्रीमियम सूट।",
        footerLinks: "त्वरित लिंक",
        footerConnect: "हमसे जुड़ें",
        footerCreatedBy: "द्वारा निर्मित",
        footerManagedBy: "द्वारा प्रबंधित",
        cropModalTitle: "एडवांस क्रॉप टूल",
        reset: "रीसेट",
        applyCrop: "क्रॉप लागू करें",
        // PDF Editor
        pdfToolSelect: "चुनें",
        pdfToolText: "टेक्स्ट",
        pdfToolLink: "लिंक्स",
        pdfToolForms: "फॉर्म्स",
        pdfToolImage: "इमेज",
        pdfToolSign: "हस्ताक्षर",
        pdfToolWhiteout: "व्हाइटआउट",
        pdfToolAnnotate: "एनोटेट",
        pdfToolShapes: "आकार",
        pdfToolDraw: "ड्रॉ",
        pdfToolStamp: "स्टैम्प",
        pdfToolFind: "ढूंढें",
        pdfExport: "PDF एक्सपोर्ट करें",
        pdfUploadBtn: "PDF अपलोड करें",
        pdfWelcomeTitle: "एडवांस PDF एडिटर",
        pdfWelcomeSub: "संपादन शुरू करने के लिए अपना PDF अपलोड करें। आप टेक्स्ट, सिग्नेचर जोड़ सकते हैं, पेज घुमा सकते हैं या अनचाहे पेज हटा सकते हैं - सब कुछ अपने ब्राउज़र में।",
        // Tools Page
        toolsTitle: "मल्टी-यूटिलिटी टूल्स",
        toolsSub: "दैनिक कार्यों के लिए तेज़, सुरक्षित और प्रोफेशनल टूल्स।",
        // About Page
        aboutTitle: "टीम से मिलें",
        aboutSub: "शक्तिशाली ऑनलाइन यूटिलिटीज बनाने के लिए समर्पित अमितटूल्सएक्स के पीछे के रचनात्मक दिमाग।",
        followers: "फॉलोअर्स",
        posts: "पोस्ट्स",
        experience: "अनुभव",
        missionTitle: "हमारा लक्ष्य",
        missionText: "हमारा मिशन सभी को उच्च-गुणवत्ता वाले, सुरक्षित और सुलभ डिजिटल टूल प्रदान करना है। हमारा मानना है कि पेशेवर संपादन और उपयोगिता उपकरण उपयोगकर्ता की गोपनीयता से समझौता किए बिना मुफ्त और उपयोग में आसान होने चाहिए।",
        visionTitle: "हमारा दृष्टिकोण",
        visionText: "हम अमितटूल्सएक्स (AmitToolsX) को दुनिया भर के रचनाकारों और डेवलपर्स के लिए पसंदीदा मंच के रूप में देखते हैं, जो ब्राउज़र-आधारित उपयोगिताओं का एक पूरा सूट पेश करता है जो महंगे सॉफ़्टवेयर की आवश्यकता को समाप्त करता है।",
        // Index Page New Sections
        whyTitle: "अमितटूल्सएक्स (AmitToolsX) क्यों चुनें?",
        feature1Title: "100% गोपनीयता",
        feature1Text: "सभी इमेज और दस्तावेज़ प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से होती है। आपकी फ़ाइलें कभी भी हमारे सर्वर को नहीं छूती हैं।",
        feature2Title: "प्रोफेशनल क्वालिटी",
        feature2Text: "हमारे उच्च-प्रदर्शन एल्गोरिदम यह सुनिश्चित करते हैं कि आपकी इमेज और PDF अपनी मूल गुणवत्ता और स्पष्टता बनाए रखें।",
        feature3Title: "उपयोगकर्ता-केंद्रित डिज़ाइन",
        feature3Text: "शुरुआती और पेशेवरों दोनों के लिए कार्यों को तेज़ी से पूरा करने के लिए डिज़ाइन किया गया एक आधुनिक, उन्नत इंटरफ़ेस।",
        // Contact Page
        contactTitle: "संपर्क करें",
        contactSub: "क्या आपके पास प्रश्न या प्रतिक्रिया है? हमें आपसे सुनकर खुशी होगी।",
        nameLabel: "पूरा नाम",
        emailLabel: "ईमेल पता",
        messageLabel: "संदेश",
        sendBtn: "संदेश भेजें",
        connectSocial: "सोशल पर जुड़ें",
        location: "हमारा स्थान",
        // Privacy Page
        privacyTitle: "गोपनीयता नीति",
        p1Title: "1. डेटा प्रोसेसिंग",
        p1Text: "अमितटूल्सएक्स (AmitToolsX) में, आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता है। अन्य प्लेटफार्मों के विपरीत, हम आपकी इमेज या दस्तावेजों को किसी भी सर्वर पर स्टोर नहीं करते हैं। सभी प्रोसेसिंग पूरी तरह से आपके ब्राउज़र की मेमोरी में क्लाइंट-साइड जावास्क्रिप्ट का उपयोग करके होती है। आपका डेटा आपके डिवाइस से बाहर नहीं जाता है।",
        p2Title: "2. उपयोगकर्ता प्राथमिकताएं और कुकीज़",
        p2Text: "हम आपकी पसंदीदा थीम (डार्क/लाइट) और भाषा (अंग्रेजी/हिंदी) को सहेजने के लिए आपके ब्राउज़र के लोकल स्टोरेज (Local Storage) का उपयोग करते हैं। यह डेटा आपके मशीन पर ही रहता है। हम किसी भी थर्ड-पार्टी ट्रैकिंग कुकीज़ का उपयोग नहीं करते हैं।",
        p3Title: "3. प्रोफेशनल ग्रेड टूल्स",
        p3Text: "हमारे टूल्स उच्च-प्रदर्शन एल्गोरिदम के साथ बनाए गए हैं ताकि क्वालिटी बनी रहे। चाहे आप इंस्टाग्राम के लिए रिसाइज कर रहे हों या वेब उपयोग के लिए कंप्रेस कर रहे हों, हम सुनिश्चित करते हैं कि आउटपुट बिना किसी छिपे हुए वॉटरमार्क के प्रोफेशनल मानकों को पूरा करे।",
        p4Title: "4. हमसे संपर्क करें",
        p4Text: "हम आपकी प्रतिक्रिया और पारदर्शिता को महत्व देते हैं। यदि आपको अपनी गोपनीयता के बारे में कोई चिंता है या नए फीचर्स के लिए सुझाव हैं, तो कृपया हमारे आधिकारिक सोशल मीडिया चैनलों के माध्यम से हमारी टीम (अमित और अमन मीणा) से संपर्क करें।"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if ((el.tagName === 'INPUT' && el.type === 'text') || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    updateLangUI();
}

function updateLangUI() {
    const langBtn = document.getElementById('lang-toggle');
    const langBtnMobile = document.getElementById('lang-toggle-mobile');
    if (langBtn) langBtn.innerText = currentLang === 'en' ? 'हिन्दी' : 'English';
    if (langBtnMobile) langBtnMobile.innerText = currentLang === 'en' ? 'हिन्दी' : 'English';
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    const langBtn = document.getElementById('lang-toggle');
    const langBtnMobile = document.getElementById('lang-toggle-mobile');
    if (langBtn) langBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'hi' : 'en'));
    if (langBtnMobile) langBtnMobile.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'hi' : 'en'));

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }
});

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
    if (themeIcon) themeIcon.className = `fas ${iconClass}`;
    if (themeIconMobile) themeIconMobile.className = `fas ${iconClass}`;
}

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

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
    if (!batchContainer) return;
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

    if (previewImage) {
        previewImage.src = img.dataUrl;
        previewImage.classList.remove('hidden');
    }
    if (previewPlaceholder) previewPlaceholder.classList.add('hidden');

    if (widthInput) widthInput.value = img.naturalWidth;
    if (heightInput) heightInput.value = img.naturalHeight;
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
    if (previewImage) previewImage.classList.add('hidden');
    if (previewPlaceholder) previewPlaceholder.classList.remove('hidden');
    disableControls();
}

function enableControls() {
    const controls = [widthInput, heightInput, qualitySlider, presets, brightnessSlider, contrastSlider, grayscaleSlider, watermarkText, watermarkLogo, outputFormat, openCropBtn, downloadBtn];
    controls.forEach(el => { if(el) el.disabled = false; });
}

function disableControls() {
    const controls = [widthInput, heightInput, qualitySlider, presets, brightnessSlider, contrastSlider, grayscaleSlider, watermarkText, watermarkLogo, outputFormat, openCropBtn, downloadBtn];
    controls.forEach(el => { if(el) el.disabled = true; });
}

if (uploadBox) {
    uploadBox.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
    if (clearBatchBtn) clearBatchBtn.addEventListener('click', () => {
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
    if (widthInput) widthInput.addEventListener('input', () => {
        if (aspectRatio.checked) heightInput.value = Math.floor(widthInput.value / originalImageRatio);
    });
    if (heightInput) heightInput.addEventListener('input', () => {
        if (aspectRatio.checked) widthInput.value = Math.floor(heightInput.value * originalImageRatio);
    });
    if (qualitySlider) qualitySlider.addEventListener('input', () => qualityVal.innerText = `${qualitySlider.value}%`);

    // --- Advanced Processing Logic ---

    // Presets
    if (presets) presets.addEventListener('change', () => {
        const val = presets.value;
        if (val === 'ig-post') { widthInput.value = 1080; heightInput.value = 1080; }
        else if (val === 'ig-story') { widthInput.value = 1080; heightInput.value = 1920; }
        else if (val === 'fb-cover') { widthInput.value = 851; heightInput.value = 315; }
        else if (val === 'yt-thumb') { widthInput.value = 1280; heightInput.value = 720; }

        if (val !== 'custom' && aspectRatio.checked) {
            widthInput.dispatchEvent(new Event('input'));
        }
    });

    // Filter Labels
    if (brightnessSlider) brightnessSlider.addEventListener('input', () => brightnessVal.innerText = `${brightnessSlider.value}%`);
    if (contrastSlider) contrastSlider.addEventListener('input', () => contrastVal.innerText = `${contrastSlider.value}%`);
    if (grayscaleSlider) grayscaleSlider.addEventListener('input', () => grayscaleVal.innerText = `${grayscaleSlider.value}%`);

    // --- Process & Download ---
    if (downloadBtn) downloadBtn.addEventListener('click', async () => {
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
}

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
const cropCtx = cropCanvas ? cropCanvas.getContext('2d') : null;

if (openCropBtn) {
    let isCropping = false;
    let startX, startY, currentX, currentY;
    let cropW = 0, cropH = 0;

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
        cropW = (w / scaleX);
        cropH = (h / scaleY);
    }

    applyCrop.addEventListener('click', () => {
        if (!cropW || !cropH) return;

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = cropW;
        tempCanvas.height = cropH;

        tempCtx.drawImage(cropCanvas, currentX, currentY, cropW, cropH, 0, 0, cropW, cropH);

        const croppedDataUrl = tempCanvas.toDataURL();
        images[activeIndex].dataUrl = croppedDataUrl;
        images[activeIndex].naturalWidth = cropW;
        images[activeIndex].naturalHeight = cropH;
        images[activeIndex].ratio = cropW / cropH;

        setActiveImage(activeIndex);
        closeCrop.click();
    });

    resetCrop.addEventListener('click', () => {
        cropOverlay.classList.add('hidden');
        cropW = 0;
        cropH = 0;
    });
}
