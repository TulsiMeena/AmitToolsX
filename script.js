// AI Tools Data
const aiTools = [
    {
        name: "ChatGPT",
        description: "A powerful conversational AI that can write, code, and assist with complex tasks.",
        category: "writing",
        link: "https://chat.openai.com",
        badge: "trending"
    },
    {
        name: "Midjourney",
        description: "An AI-powered system that creates high-quality images from text descriptions.",
        category: "image",
        link: "https://www.midjourney.com",
        badge: "trending"
    },
    {
        name: "GitHub Copilot",
        description: "Your AI pair programmer that helps you write code faster and with less work.",
        category: "coding",
        link: "https://github.com/features/copilot",
        badge: "new"
    },
    {
        name: "ElevenLabs",
        description: "The most realistic AI text-to-speech and voice cloning software.",
        category: "audio",
        link: "https://elevenlabs.io",
        badge: "trending"
    },
    {
        name: "Runway Gen-2",
        description: "A multi-modal AI system that can generate novel videos with text, images, or video clips.",
        category: "video",
        link: "https://runwayml.com",
        badge: "new"
    },
    {
        name: "Claude",
        description: "A next-generation AI assistant for your tasks, no matter the scale.",
        category: "writing",
        link: "https://claude.ai",
        badge: "new"
    },
    {
        name: "Perplexity AI",
        description: "An AI-powered search engine that provides direct answers to questions with citations.",
        category: "productivity",
        link: "https://perplexity.ai",
        badge: "trending"
    },
    {
        name: "Canva Magic Studio",
        description: "All the power of AI, all in one place in Canva for design and creativity.",
        category: "image",
        link: "https://canva.com",
        badge: ""
    },
    {
        name: "Suno AI",
        description: "Make any song you can imagine with Suno AI, the best AI music generator.",
        category: "audio",
        link: "https://suno.com",
        badge: "trending"
    },
    {
        name: "DeepL",
        description: "The world's most accurate translator, powered by neural networks.",
        category: "productivity",
        link: "https://deepl.com",
        badge: ""
    },
    {
        name: "Leonardo.ai",
        description: "Create production-quality visual assets for your projects with unprecedented speed.",
        category: "image",
        link: "https://leonardo.ai",
        badge: "new"
    }
];

// Translations
const translations = {
    en: {
        "nav-home": "Home",
        "nav-tools": "AI Tools",
        "nav-about": "About",
        "nav-contact": "Contact",
        "nav-privacy": "Privacy Policy",
        "hero-h1": "Discover the Best AI Tools in One Place",
        "hero-p": "Explore powerful AI tools for writing, images, coding, video, productivity, and more.",
        "search-placeholder": "Search for AI tools...",
        "cat-all": "All Tools",
        "cat-image": "Image AI",
        "cat-writing": "Writing AI",
        "cat-video": "Video AI",
        "cat-audio": "Audio AI",
        "cat-coding": "Coding AI",
        "cat-productivity": "Productivity AI",
        "newsletter-h2": "Stay Ahead of the Curve",
        "newsletter-p": "Subscribe to our newsletter to get the latest AI tools and news delivered to your inbox.",
        "newsletter-btn": "Subscribe Now",
        "footer-desc": "The ultimate directory for the world's most powerful AI tools and resources.",
        "footer-quick": "Quick Links",
        "footer-categories": "AI Categories",
        "copyright": "© 2026 AmitAIHub. Created by Amit Meena.",
        "about-h1": "About AmitAIHub",
        "about-p": "Empowering your workflow with the best AI tools.",
        "mission-h2": "Our Mission",
        "mission-p1": "At AmitAIHub, our mission is to simplify the complex world of Artificial Intelligence. With thousands of new AI tools launching every month, it can be overwhelming to find the right one for your specific needs. We curate, test, and categorize the most effective AI tools to help you stay ahead in the digital age.",
        "mission-p2": "Whether you're a developer, designer, writer, or business owner, AmitAIHub provides a centralized platform to discover cutting-edge technology that can transform how you work and create.",
        "why-h2": "Why AmitAIHub?",
        "why-li1": "Curated Selection of High-Quality Tools",
        "why-li2": "Daily Updates on Trending AI",
        "why-li3": "User-Friendly Categorization",
        "why-li4": "Completely Free to Use",
        "creator-h2": "Meet the Team",
        "admin-role": "Admin",
        "creator-role": "Creator & Lead Developer",
        "contact-h1": "Contact Us",
        "contact-p": "Have questions or suggestions? We'd love to hear from you.",
        "contact-name": "Full Name",
        "contact-email": "Email Address",
        "contact-subject": "Subject",
        "contact-message": "Message",
        "contact-btn": "Send Message",
        "privacy-h1": "Privacy Policy",
        "privacy-p": "Your privacy is important to us. Learn how we handle your data.",
        "tool-visit": "Visit Tool",
        "badge-new": "NEW",
        "badge-trending": "TRENDING",
        "contact-email-us": "Email Us",
        "contact-call-us": "Call Us",
        "contact-address": "Address",
        "address-text": "India Jaipur Karauli Sapotra mod",
        "reviews-h2": "What Users Say",
        "how-it-works-h2": "How to Add Information?",
        "how-it-works-p1": "AmitAIHub is a community-driven platform. If you want to add a new AI tool or update information, you can:",
        "how-it-works-li1": "Contact us via the contact form with tool details.",
        "how-it-works-li2": "Email us directly at amitda@proton.me.",
        "how-it-works-li3": "Submit a pull request on our GitHub repository."
    },
    hi: {
        "nav-home": "होम",
        "nav-tools": "AI टूल्स",
        "nav-about": "हमारे बारे में",
        "nav-contact": "संपर्क करें",
        "nav-privacy": "गोपनीयता नीति",
        "hero-h1": "सर्वश्रेष्ठ AI टूल्स एक ही स्थान पर खोजें",
        "hero-p": "लेखन, इमेज, कोडिंग, वीडियो, उत्पादकता और बहुत कुछ के लिए शक्तिशाली AI टूल्स का अन्वेषण करें।",
        "search-placeholder": "AI टूल्स खोजें...",
        "cat-all": "सभी टूल्स",
        "cat-image": "इमेज AI",
        "cat-writing": "राइटिंग AI",
        "cat-video": "वीडियो AI",
        "cat-audio": "ऑडियो AI",
        "cat-coding": "कोडिंग AI",
        "cat-productivity": "प्रोडक्टिविटी AI",
        "newsletter-h2": "सबसे आगे रहें",
        "newsletter-p": "नवीनतम AI टूल्स और समाचार अपने इनबॉक्स में पाने के लिए हमारे न्यूज़लेटर को सब्सक्राइब करें।",
        "newsletter-btn": "अभी सब्सक्राइब करें",
        "footer-desc": "दुनिया के सबसे शक्तिशाली AI टूल्स और संसाधनों की अंतिम डायरेक्टरी।",
        "footer-quick": "त्वरित लिंक",
        "footer-categories": "AI श्रेणियां",
        "copyright": "© 2026 AmitAIHub. अमित मीणा द्वारा निर्मित।",
        "about-h1": "AmitAIHub के बारे में",
        "about-p": "सर्वश्रेष्ठ AI टूल्स के साथ आपके वर्कफ़्लो को सशक्त बनाना।",
        "mission-h2": "हमारा मिशन",
        "mission-p1": "AmitAIHub में, हमारा मिशन आर्टिफिशियल इंटेलिजेंस की जटिल दुनिया को सरल बनाना है। हर महीने हजारों नए AI टूल्स लॉन्च होने के साथ, आपकी विशिष्ट आवश्यकताओं के लिए सही उपकरण खोजना भारी पड़ सकता है। हम डिजिटल युग में आपको आगे रहने में मदद करने के लिए सबसे प्रभावी AI टूल्स को क्यूरेट, टेस्ट और वर्गीकृत करते हैं।",
        "mission-p2": "चाहे आप एक डेवलपर, डिज़ाइनर, लेखक या व्यवसाय के मालिक हों, AmitAIHub अत्याधुनिक तकनीक की खोज के लिए एक केंद्रीकृत मंच प्रदान करता है जो आपके काम करने और बनाने के तरीके को बदल सकता है।",
        "why-h2": "AmitAIHub क्यों?",
        "why-li1": "उच्च गुणवत्ता वाले उपकरणों का क्यूरेटेड चयन",
        "why-li2": "ट्रेंडिंग AI पर दैनिक अपडेट",
        "why-li3": "उपयोगकर्ता के अनुकूल वर्गीकरण",
        "why-li4": "उपयोग करने के लिए पूरी तरह से मुफ़्त",
        "creator-h2": "टीम से मिलें",
        "admin-role": "एडमिन",
        "creator-role": "निर्माता और लीड डेवलपर",
        "contact-h1": "संपर्क करें",
        "contact-p": "प्रश्न या सुझाव हैं? हमें आपसे सुनना अच्छा लगेगा।",
        "contact-name": "पूरा नाम",
        "contact-email": "ईमेल पता",
        "contact-subject": "विषय",
        "contact-message": "संदेश",
        "contact-btn": "संदेश भेजें",
        "privacy-h1": "गोपनीयता नीति",
        "privacy-p": "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। जानें कि हम आपके डेटा को कैसे संभालते हैं।",
        "tool-visit": "टूल देखें",
        "badge-new": "नया",
        "badge-trending": "ट्रेंडिंग",
        "contact-email-us": "हमें ईमेल करें",
        "contact-call-us": "हमें कॉल करें",
        "contact-address": "पता",
        "address-text": "भारत जयपुर करौली सपोटरा मोड",
        "reviews-h2": "उपयोगकर्ता क्या कहते हैं",
        "how-it-works-h2": "जानकारी कैसे जोड़ें?",
        "how-it-works-p1": "AmitAIHub एक समुदाय संचालित मंच है। यदि आप एक नया AI टूल जोड़ना चाहते हैं या जानकारी अपडेट करना चाहते हैं, तो आप यह कर सकते हैं:",
        "how-it-works-li1": "टूल विवरण के साथ संपर्क फ़ॉर्म के माध्यम से हमसे संपर्क करें।",
        "how-it-works-li2": "हमें सीधे amitda@proton.me पर ईमेल करें।",
        "how-it-works-li3": "हमारे GitHub रिपॉजिटरी पर पुल रिक्वेस्ट सबमिट करें।",
        "nav-install": "ऐप इंस्टॉल करें"
    }
};

// Update translations with install button
translations.en["nav-install"] = "Install App";

// DOM Elements
const toolGrid = document.getElementById('toolGrid');
const searchInput = document.getElementById('toolSearch');
const categoryButtons = document.querySelectorAll('.category-btn');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const installBtn = document.getElementById('installBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');

// Initialize Tools
function displayTools(tools) {
    if (!toolGrid) return;

    const currentLang = localStorage.getItem('lang') || 'en';
    const visitText = translations[currentLang]["tool-visit"];

    toolGrid.innerHTML = '';

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'glass-card tool-card';

        let badgeHTML = '';
        if (tool.badge) {
            const badgeText = translations[currentLang][`badge-${tool.badge}`] || tool.badge.toUpperCase();
            badgeHTML = `<span class="tool-badge badge-${tool.badge}">${badgeText}</span>`;
        }

        const categoryKey = `cat-${tool.category}`;
        const categoryText = translations[currentLang][categoryKey] || (tool.category.charAt(0).toUpperCase() + tool.category.slice(1) + " AI");

        card.innerHTML = `
            ${badgeHTML}
            <span class="tool-category">${categoryText}</span>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank" class="btn btn-outline">${visitText}</a>
        `;

        toolGrid.appendChild(card);
    });
}

// Language Functionality
function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'हिन्दी' : 'EN';
    }

    // Re-render tools to update tool-specific translations
    if (typeof aiTools !== 'undefined' && toolGrid) {
        // Find active category if any
        const activeBtn = document.querySelector('.category-btn.active');
        const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

        const filteredTools = aiTools.filter(tool => {
            const matchesCategory = category === 'all' || tool.category === category;
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                                tool.description.toLowerCase().includes(searchTerm) ||
                                tool.category.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        displayTools(filteredTools);
    }
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || 'en';
        const newLang = currentLang === 'en' ? 'hi' : 'en';
        setLanguage(newLang);
    });
}

// Search Functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTools = aiTools.filter(tool =>
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm)
        );
        displayTools(filteredTools);
    });
}

// Category Filtering
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        const filteredTools = category === 'all'
            ? aiTools
            : aiTools.filter(tool => tool.category === category);

        displayTools(filteredTools);
    });
});

// Mobile Menu Toggle
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });
}

// Theme Toggle
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        const icon = themeToggle.querySelector('i');
        if (newTheme === 'light') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Error:', err));
    });
}

// PWA Install Logic
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'block';
});

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                installBtn.style.display = 'none';
            }
            deferredPrompt = null;
        }
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Load Saved Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (savedTheme === 'light') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Load Saved Language
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
});

// Newsletter Form Handling
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = localStorage.getItem('lang') || 'en';
        alert(lang === 'en' ? 'Thank you for subscribing to our newsletter!' : 'हमारे न्यूज़लेटर को सब्सक्राइब करने के लिए धन्यवाद!');
        newsletterForm.reset();
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = localStorage.getItem('lang') || 'en';
        alert(lang === 'en' ? 'Message sent successfully! We will get back to you soon.' : 'संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।');
        contactForm.reset();
    });
}

// Footer Category Filter Support
document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const category = link.getAttribute('data-category');
        const catBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (catBtn) {
            catBtn.click();
            window.scrollTo({ top: document.getElementById('tools').offsetTop - 100, behavior: 'smooth' });
        }
    });
});
