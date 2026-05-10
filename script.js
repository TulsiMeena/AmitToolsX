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
        "cat-favorites": "My List",
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
        "aman-bio": "Expert content creator and tech lead for the platform's social channels. Aman brings over 5 years of experience in the tech industry.",
        "aman-followers": "Followers",
        "aman-posts": "Posts",
        "aman-exp": "Years Exp.",
        "creator-role": "Creator & Lead Developer",
        "amit-bio": "Amit is the visionary behind AmitAIHub, responsible for the platform's design, architecture, and overall development.",
        "contact-h1": "Contact Us",
        "contact-p": "Have questions or suggestions? We'd love to hear from you.",
        "contact-name": "Full Name",
        "contact-email": "Email Address",
        "contact-subject": "Subject",
        "contact-message": "Message",
        "contact-btn": "Send Message",
        "privacy-h1": "Privacy Policy",
        "privacy-p": "Your privacy is important to us. Learn how we handle your data.",
        "privacy-s1-h2": "1. Data Collection Policy",
        "privacy-s1-p": "AmitAIHub does not require user registration for browsing our directory. We only collect information that you voluntarily provide through our contact form or newsletter subscription, such as your name and email address.",
        "privacy-s2-h2": "2. Cookie Usage",
        "privacy-s2-p": "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
        "privacy-s3-h2": "3. Third-Party Links Notice",
        "privacy-s3-p": "Our platform contains links to external websites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
        "privacy-s4-h2": "4. Security Statement",
        "privacy-s4-p": "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
        "privacy-s5-h2": "5. Updates to This Policy",
        "privacy-s5-p": "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
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
        "how-it-works-li3": "Submit a pull request on our GitHub repository.",
        "submit-h2": "Submit a Tool",
        "submit-p": "Know a great AI tool? Share it with the community.",
        "submit-btn": "Submit Now",
        "faq-h2": "Frequently Asked Questions",
        "faq-q1": "What is AmitAIHub?",
        "faq-a1": "AmitAIHub is a curated directory of the best Artificial Intelligence tools available online, categorized for easy discovery.",
        "faq-q2": "Are the tools on this site free?",
        "faq-a2": "We list a variety of tools: some are completely free, some are 'freemium' (free with paid options), and some are paid. We provide pricing labels for each.",
        "faq-q3": "How often is the list updated?",
        "faq-a3": "Our team constantly monitors the AI landscape and updates the directory with new trending tools almost every week.",
        "stat-tools": "Tools Listed",
        "stat-cats": "Categories",
        "stat-users": "Users (K)",
        "stat-support": "Support (H)",
        "share-text": "Check out this awesome AI tool: ",
        "fav-added": "Added to Favorites!",
        "fav-removed": "Removed from Favorites!",
        "price-free": "Free",
        "price-freemium": "Freemium",
        "price-paid": "Paid",
        "no-favorites-h3": "Your list is empty",
        "no-favorites-p": "Click the heart icon on any tool to save it here.",
        "no-tools-h3": "No tools found",
        "no-tools-p": "Try adjusting your search or category filter.",
        "view-details": "View Details",
        "features-h3": "Key Features",
        "workflow-h2": "How AmitAIHub Works",
        "workflow-s1-h": "Explore Tools",
        "workflow-s1-p": "Browse through 1200+ AI tools across various professional categories.",
        "workflow-s2-h": "Compare Features",
        "workflow-s2-p": "View detailed breakdowns of pricing, features, and user capabilities.",
        "workflow-s3-h": "Save to My List",
        "workflow-s3-p": "Collect your favorite tools in your personal list for quick access anytime.",
        "workflow-s4-h": "Boost Productivity",
        "workflow-s4-p": "Integrate the best AI models into your daily workflow and save hours of work.",
        "filter-price": "Pricing:",
        "filter-sort": "Sort By:",
        "sort-newest": "Newest First",
        "sort-trending": "Trending",
        "sort-az": "A - Z",
        "sort-za": "Z - A",
        "price-all": "All Prices",
        "featured-h2": "Featured AI Tools",
        "featured-p": "Hand-picked premium AI tools to skyrocket your growth.",
        "trending-h2": "Trending Now",
        "trending-p": "The most popular AI tools this week.",
        "all-tools-h2": "Explore All AI Tools",
        "all-tools-p": "Browse our complete directory of high-quality AI solutions."
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
        "cat-favorites": "मेरी सूची",
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
        "aman-bio": "प्लेटफॉर्म के सोशल चैनलों के लिए विशेषज्ञ सामग्री निर्माता और तकनीकी प्रमुख। अमन के पास तकनीकी उद्योग में 5 से अधिक वर्षों का अनुभव है।",
        "aman-followers": "फ़ॉलोअर्स",
        "aman-posts": "पोस्ट",
        "aman-exp": "वर्षों का अनुभव",
        "creator-role": "निर्माता और लीड डेवलपर",
        "amit-bio": "अमित AmitAIHub के पीछे के दूरदर्शी हैं, जो प्लेटफॉर्म के डिजाइन, आर्किटेक्चर और समग्र विकास के लिए जिम्मेदार हैं।",
        "contact-h1": "संपर्क करें",
        "contact-p": "प्रश्न या सुझाव हैं? हमें आपसे सुनना अच्छा लगेगा।",
        "contact-name": "पूरा नाम",
        "contact-email": "ईमेल पता",
        "contact-subject": "विषय",
        "contact-message": "संदेश",
        "contact-btn": "संदेश भेजें",
        "privacy-h1": "गोपनीयता नीति",
        "privacy-p": "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। जानें कि हम आपके डेटा को कैसे संभालते हैं।",
        "privacy-s1-h2": "1. डेटा संग्रह नीति",
        "privacy-s1-p": "AmitAIHub को हमारी निर्देशिका ब्राउज़ करने के लिए उपयोगकर्ता पंजीकरण की आवश्यकता नहीं है। हम केवल वही जानकारी एकत्र करते हैं जो आप स्वेच्छा से हमारे संपर्क फ़ॉर्म या न्यूज़लेटर सदस्यता के माध्यम से प्रदान करते हैं, जैसे आपका नाम और ईमेल पता।",
        "privacy-s2-h2": "2. कुकी उपयोग",
        "privacy-s2-p": "हम अपनी सेवा पर गतिविधि को ट्रैक करने और कुछ जानकारी रखने के लिए कुकीज़ और इसी तरह की ट्रैकिंग तकनीकों का उपयोग करते हैं। कुकीज़ डेटा की छोटी मात्रा वाली फाइलें होती हैं जिनमें एक अनाम विशिष्ट पहचानकर्ता शामिल हो सकता है। आप अपने ब्राउज़र को सभी कुकीज़ को अस्वीकार करने या कुकी भेजे जाने पर इंगित करने का निर्देश दे सकते हैं।",
        "privacy-s3-h2": "3. तृतीय-पक्ष लिंक नोटिस",
        "privacy-s3-p": "हमारे मंच में बाहरी वेबसाइटों के लिंक हैं जो हमारे द्वारा संचालित नहीं हैं। कृपया ध्यान रखें कि इन साइटों की सामग्री और प्रथाओं पर हमारा कोई नियंत्रण नहीं है, और हम उनकी संबंधित गोपनीयता नीतियों के लिए जिम्मेदारी या उत्तरदायित्व स्वीकार नहीं कर सकते।",
        "privacy-s4-h2": "4. सुरक्षा विवरण",
        "privacy-s4-p": "आपके डेटा की सुरक्षा हमारे लिए महत्वपूर्ण है, लेकिन याद रखें कि इंटरनेट पर प्रसारण का कोई भी तरीका, या इलेक्ट्रॉनिक स्टोरेज का कोई भी तरीका 100% सुरक्षित नहीं है। हालांकि हम आपके व्यक्तिगत डेटा की सुरक्षा के लिए व्यावसायिक रूप से स्वीकार्य साधनों का उपयोग करने का प्रयास करते हैं, हम इसकी पूर्ण सुरक्षा की गारंटी नहीं दे सकते।",
        "privacy-s5-h2": "5. इस नीति में अपडेट",
        "privacy-s5-p": "हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी बदलाव के बारे में सूचित करेंगे। आपको सलाह दी जाती है कि किसी भी बदलाव के लिए समय-समय पर इस गोपनीयता नीति की समीक्षा करें।",
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
        "nav-install": "ऐप इंस्टॉल करें",
        "submit-h2": "टूल सबमिट करें",
        "submit-p": "एक बेहतरीन AI टूल जानते हैं? इसे समुदाय के साथ साझा करें।",
        "submit-btn": "अभी सबमिट करें",
        "faq-h2": "अक्सर पूछे जाने वाले प्रश्न",
        "faq-q1": "AmitAIHub क्या है?",
        "faq-a1": "AmitAIHub ऑनलाइन उपलब्ध सर्वोत्तम आर्टिफिशियल इंटेलिजेंस टूल्स की एक क्यूरेटेड डायरेक्टरी है, जिसे आसानी से खोजने के लिए वर्गीकृत किया गया है।",
        "faq-q2": "क्या इस साइट पर टूल्स मुफ़्त हैं?",
        "faq-a2": "हम विभिन्न प्रकार के टूल्स सूचीबद्ध करते हैं: कुछ पूरी तरह से मुफ़्त हैं, कुछ 'फ्रीमियम' हैं, और कुछ पेड हैं। हम प्रत्येक के लिए मूल्य निर्धारण लेबल प्रदान करते हैं।",
        "faq-q3": "सूची कितनी बार अपडेट की जाती है?",
        "faq-a3": "हमारी टीम लगातार AI परिदृश्य की निगरानी करती है और लगभग हर हफ्ते नए ट्रेंडिंग टूल्स के साथ डायरेक्टरी को अपडेट करती है।",
        "stat-tools": "सूचीबद्ध उपकरण",
        "stat-cats": "श्रेणियां",
        "stat-users": "उपयोगकर्ता (K)",
        "stat-support": "सहायता (H)",
        "share-text": "इस शानदार AI टूल को देखें: ",
        "fav-added": "पसंदीदा में जोड़ा गया!",
        "fav-removed": "पसंदीदा से हटाया गया!",
        "price-free": "मुफ़्त",
        "price-freemium": "फ्रीमियम",
        "price-paid": "पेड",
        "no-favorites-h3": "आपकी सूची खाली है",
        "no-favorites-p": "किसी भी टूल को यहाँ सहेजने के लिए हार्ट आइकन पर क्लिक करें।",
        "no-tools-h3": "कोई टूल नहीं मिला",
        "no-tools-p": "अपनी खोज या श्रेणी फ़िल्टर को समायोजित करने का प्रयास करें।",
        "view-details": "विवरण देखें",
        "features-h3": "प्रमुख विशेषताएं",
        "workflow-h2": "AmitAIHub कैसे काम करता है",
        "workflow-s1-h": "टूल्स को एक्सप्लोर करें",
        "workflow-s1-p": "विभिन्न व्यावसायिक श्रेणियों में 1200+ AI टूल्स ब्राउज़ करें।",
        "workflow-s2-h": "विशेषताओं की तुलना करें",
        "workflow-s2-p": "मूल्य निर्धारण, सुविधाओं और उपयोगकर्ता क्षमताओं का विस्तृत विवरण देखें।",
        "workflow-s3-h": "मेरी सूची में सहेजें",
        "workflow-s3-p": "किसी भी समय त्वरित पहुंच के लिए अपनी व्यक्तिगत सूची में अपने पसंदीदा टूल एकत्र करें।",
        "workflow-s4-h": "उत्पादकता बढ़ाएं",
        "workflow-s4-p": "अपने दैनिक वर्कफ़्लो में सर्वश्रेष्ठ AI मॉडल को एकीकृत करें और घंटों का काम बचाएं।",
        "filter-price": "कीमत:",
        "filter-sort": "क्रमबद्ध करें:",
        "sort-newest": "नवीनतम पहले",
        "sort-trending": "ट्रेंडिंग",
        "sort-az": "A - Z",
        "sort-za": "Z - A",
        "price-all": "सभी कीमतें",
        "featured-h2": "विशेष रुप से प्रदर्शित AI टूल्स",
        "featured-p": "आपके विकास को आसमान छूने के लिए चुने गए प्रीमियम AI टूल्स।",
        "trending-h2": "अब ट्रेंडिंग",
        "trending-p": "इस सप्ताह के सबसे लोकप्रिय AI टूल्स।",
        "all-tools-h2": "सभी AI टूल्स एक्सप्लोर करें",
        "all-tools-p": "उच्च गुणवत्ता वाले AI समाधानों की हमारी पूरी डायरेक्टरी ब्राउज़ करें।"
    }
};

// DOM Elements
const toolGrid = document.getElementById('toolGrid');
const featuredGrid = document.getElementById('featuredGrid');
const trendingGrid = document.getElementById('trendingGrid');
const searchInput = document.getElementById('toolSearch');
const priceFilter = document.getElementById('priceFilter');
const sortBy = document.getElementById('sortBy');
const categoryButtons = document.querySelectorAll('.category-btn');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const installBtn = document.getElementById('installBtn');
const mobileInstallBtn = document.getElementById('mobileInstallBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');
const backToTopBtn = document.getElementById('backToTop');
const toolModal = document.getElementById('toolModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const successModal = document.getElementById('successModal');
const closeSuccess = document.querySelector('.close-success');

// Favorites Logic
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function toggleFavorite(toolId) {
    let favorites = getFavorites();
    const index = favorites.indexOf(toolId);
    const currentLang = localStorage.getItem('lang') || 'en';

    if (index > -1) {
        favorites.splice(index, 1);
        alert(translations[currentLang]["fav-removed"]);
    } else {
        favorites.push(toolId);
        alert(translations[currentLang]["fav-added"]);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Refresh display if on favorites tab
    const activeBtn = document.querySelector('.category-btn.active');
    if (activeBtn && activeBtn.getAttribute('data-category') === 'favorites') {
        renderFilteredTools();
    } else {
        // Just update the icon color
        const heartIcons = document.querySelectorAll(`.fav-btn[data-id="${toolId}"] i`);
        heartIcons.forEach(icon => {
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
        });
    }
}

// Modal Logic
function openToolModal(toolId) {
    const tool = aiTools.find(t => t.id === toolId);
    if (!tool || !modalBody) return;

    const currentLang = localStorage.getItem('lang') || 'en';
    const visitText = translations[currentLang]["tool-visit"];
    const categoryKey = `cat-${tool.category}`;
    const categoryText = translations[currentLang][categoryKey] || (tool.category.charAt(0).toUpperCase() + tool.category.slice(1) + " AI");
    const pricingKey = `price-${tool.pricing.toLowerCase()}`;
    const pricingText = translations[currentLang][pricingKey] || tool.pricing;

    const longDesc = tool.longDescription || tool.description;
    const features = tool.features || ["Easy to use", "Fast Performance", "Modern UI", "AI Powered"];

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${tool.name}</h2>
            <div class="modal-grid">
                <div class="modal-info-item">
                    <h4 data-i18n="filter-price">${translations[currentLang]["filter-price"]}</h4>
                    <p>${pricingText}</p>
                </div>
                <div class="modal-info-item">
                    <h4 data-i18n="footer-categories">${translations[currentLang]["footer-categories"]}</h4>
                    <p>${categoryText}</p>
                </div>
            </div>
        </div>
        <div class="modal-description">
            <p>${longDesc}</p>
        </div>
        <div class="modal-features">
            <h3 data-i18n="features-h3">${currentLang === 'en' ? 'Key Features' : 'प्रमुख विशेषताएं'}</h3>
            <ul>
                ${features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
            </ul>
        </div>
        <div style="text-align: center; display: flex; flex-direction: column; gap: 15px; align-items: center;">
            <a href="${tool.link}" target="_blank" class="btn btn-primary" style="padding: 12px 60px; width: 100%; max-width: 300px;">${visitText}</a>
            <button class="btn btn-outline share-modal-btn" data-name="${tool.name}" data-link="${tool.link}" style="width: 100%; max-width: 300px;">
                <i class="fas fa-share-alt"></i> Share This Tool
            </button>
        </div>
    `;

    toolModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Add share listener in modal
    const modalShareBtn = modalBody.querySelector('.share-modal-btn');
    if (modalShareBtn) {
        modalShareBtn.addEventListener('click', () => {
            shareTool(modalShareBtn.getAttribute('data-name'), modalShareBtn.getAttribute('data-link'));
        });
    }
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        toolModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === toolModal) {
        toolModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Share Logic
async function shareTool(name, link) {
    const currentLang = localStorage.getItem('lang') || 'en';
    const shareText = translations[currentLang]["share-text"];

    if (navigator.share) {
        try {
            await navigator.share({
                title: name,
                text: shareText + name,
                url: link,
            });
        } catch (err) {
            console.log('Share failed:', err);
        }
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(`${shareText}${name} ${link}`);
        alert(currentLang === 'en' ? 'Link copied to clipboard!' : 'लिंक क्लिपबोर्ड पर कॉपी किया गया!');
    }
}

// Initialize Tools
function displayTools(tools, targetGrid = toolGrid) {
    if (!targetGrid) return;

    const currentLang = localStorage.getItem('lang') || 'en';
    const visitText = translations[currentLang]["tool-visit"];
    const favorites = getFavorites();

    targetGrid.innerHTML = '';

    if (tools.length === 0) {
        const activeBtn = document.querySelector('.category-btn.active');
        const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';

        const noToolsMsg = document.createElement('div');
        noToolsMsg.className = 'glass-card';
        noToolsMsg.style.gridColumn = '1 / -1';
        noToolsMsg.style.textAlign = 'center';
        noToolsMsg.style.padding = '50px';

        if (category === 'favorites') {
            noToolsMsg.innerHTML = `
                <i class="fas fa-heart" style="font-size: 3rem; color: var(--accent-purple); margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 data-i18n="no-favorites-h3">${currentLang === 'en' ? 'Your list is empty' : 'आपकी सूची खाली है'}</h3>
                <p data-i18n="no-favorites-p">${currentLang === 'en' ? 'Click the heart icon on any tool to save it here.' : 'किसी भी टूल को यहाँ सहेजने के लिए हार्ट आइकन पर क्लिक करें।'}</p>
            `;
        } else {
            noToolsMsg.innerHTML = `
                <i class="fas fa-search" style="font-size: 3rem; color: var(--accent-blue); margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 data-i18n="no-tools-h3">${currentLang === 'en' ? 'No tools found' : 'कोई टूल नहीं मिला'}</h3>
                <p data-i18n="no-tools-p">${currentLang === 'en' ? 'Try adjusting your search or category filter.' : 'अपनी खोज या श्रेणी फ़िल्टर को समायोजित करने का प्रयास करें।'}</p>
            `;
        }
        toolGrid.appendChild(noToolsMsg);
        return;
    }

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = `glass-card tool-card ${targetGrid === featuredGrid ? 'featured-card' : ''}`;

        let badgeHTML = '';
        if (tool.badge) {
            const badgeText = translations[currentLang][`badge-${tool.badge}`] || tool.badge.toUpperCase();
            badgeHTML = `<span class="tool-badge badge-${tool.badge}">${badgeText}</span>`;
        }

        const categoryKey = `cat-${tool.category}`;
        const categoryText = translations[currentLang][categoryKey] || (tool.category.charAt(0).toUpperCase() + tool.category.slice(1) + " AI");

        const isFav = favorites.includes(tool.id);
        const heartIcon = isFav ? 'fas fa-heart' : 'far fa-heart';

        const pricingKey = `price-${tool.pricing.toLowerCase()}`;
        const pricingText = translations[currentLang][pricingKey] || tool.pricing;

        card.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-meta">
                    <span class="tool-category">${categoryText}</span>
                    <span class="tool-pricing">${pricingText}</span>
                </div>
                ${badgeHTML}
            </div>
            <h3 class="tool-name-click" data-id="${tool.id}" style="cursor:pointer; transition: 0.3s;">${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-card-actions">
                <button class="btn btn-outline view-details-btn" data-id="${tool.id}" data-i18n="view-details">${currentLang === 'en' ? 'View Details' : 'विवरण देखें'}</button>
                <div class="tool-icon-btns">
                    <button class="icon-btn fav-btn" data-id="${tool.id}" title="Add to Favorites">
                        <i class="${heartIcon}"></i>
                    </button>
                    <button class="icon-btn share-btn" data-name="${tool.name}" data-link="${tool.link}" title="Share">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        `;

        targetGrid.appendChild(card);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleFavorite(btn.getAttribute('data-id')));
    });

    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => shareTool(btn.getAttribute('data-name'), btn.getAttribute('data-link')));
    });

    document.querySelectorAll('.view-details-btn, .tool-name-click').forEach(el => {
        el.addEventListener('click', () => openToolModal(el.getAttribute('data-id')));
    });
}

// Centralized Filtering and Rendering
function renderFilteredTools() {
    if (typeof aiTools === 'undefined' || !toolGrid) return;

    // Find active category
    const activeBtn = document.querySelector('.category-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    // Display Featured & Trending only if search is empty and category is 'all'
    const featuredSection = document.getElementById('featured-section');
    const trendingSection = document.getElementById('trending-section');

    if (searchTerm === '' && category === 'all') {
        if (featuredSection) featuredSection.style.display = 'block';
        if (trendingSection) trendingSection.style.display = 'block';

        // Populate Featured (limit to 3)
        const featuredTools = aiTools.filter(t => t.badge === 'trending' || t.pricing === 'Paid').slice(0, 3);
        displayTools(featuredTools, featuredGrid);

        // Populate Trending (limit to 3)
        const trendingTools = aiTools.filter(t => t.badge === 'trending' || t.badge === 'new').slice(4, 7);
        displayTools(trendingTools, trendingGrid);
    } else {
        if (featuredSection) featuredSection.style.display = 'none';
        if (trendingSection) trendingSection.style.display = 'none';
    }
    const price = priceFilter ? priceFilter.value : 'all';
    const sort = sortBy ? sortBy.value : 'newest';
    const favorites = getFavorites();

    let filteredTools = aiTools.filter(tool => {
        // Category Filter
        let matchesCategory = false;
        if (category === 'all') {
            matchesCategory = true;
        } else if (category === 'favorites') {
            matchesCategory = favorites.includes(tool.id);
        } else {
            matchesCategory = tool.category === category;
        }

        // Price Filter
        const matchesPrice = price === 'all' || tool.pricing.toLowerCase() === price;

        // Search Filter
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                            tool.description.toLowerCase().includes(searchTerm) ||
                            tool.category.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesPrice && matchesSearch;
    });

    // Sorting
    filteredTools.sort((a, b) => {
        if (sort === 'az') return a.name.localeCompare(b.name);
        if (sort === 'za') return b.name.localeCompare(a.name);
        if (sort === 'trending') {
            if (a.badge === 'trending' && b.badge !== 'trending') return -1;
            if (a.badge !== 'trending' && b.badge === 'trending') return 1;
            return 0;
        }
        // Default newest: using array order as a proxy for newest if no date provided
        // or just keep original data order
        return 0;
    });

    if (sort === 'newest') {
        // In our static list, we'll assume the original order is newest to oldest
        // or we could reverse it if the data is oldest to newest.
        // For now, let's just keep original order for "newest".
    }

    displayTools(filteredTools);
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
    renderFilteredTools();
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
    searchInput.addEventListener('input', () => {
        renderFilteredTools();
    });
}

// Advanced Filter Listeners
if (priceFilter) {
    priceFilter.addEventListener('change', () => {
        renderFilteredTools();
    });
}

if (sortBy) {
    sortBy.addEventListener('change', () => {
        renderFilteredTools();
    });
}

// Category Filtering
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFilteredTools();
    });
});

// Category Cards Filtering
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        // Clear search
        if (searchInput) searchInput.value = '';

        // Find corresponding category button and click it
        const catBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (catBtn) {
            catBtn.click();
        } else {
            // Fallback: manually set active and render
            categoryButtons.forEach(b => b.classList.remove('active'));
            renderFilteredTools();
        }

        // Scroll to tools section
        const toolsSection = document.getElementById('tools');
        if (toolsSection) {
            window.scrollTo({
                top: toolsSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
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
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Error:', err));
    });
}

// PWA Install Logic
let deferredPrompt;
const installBanner = document.getElementById('installBanner');
const installBannerBtn = document.getElementById('installBannerBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'block';
    if (mobileInstallBtn) mobileInstallBtn.style.display = 'flex';
    if (installBanner) installBanner.style.display = 'block';
});

const handleInstall = async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            if (installBtn) installBtn.style.display = 'none';
            if (mobileInstallBtn) mobileInstallBtn.style.display = 'none';
            if (installBanner) installBanner.style.display = 'none';
        }
        deferredPrompt = null;
    }
};

if (installBtn) {
    installBtn.addEventListener('click', handleInstall);
}

if (installBannerBtn) {
    installBannerBtn.addEventListener('click', handleInstall);
}

if (mobileInstallBtn) {
    mobileInstallBtn.addEventListener('click', handleInstall);
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderFilteredTools();

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

// Helper to show success modal
function showSuccess(title, message) {
    if (!successModal) return;
    document.getElementById('successTitle').innerText = title;
    document.getElementById('successMessage').innerText = message;
    successModal.style.display = 'block';
}

if (closeSuccess) {
    closeSuccess.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
}

// Newsletter Form Handling
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = localStorage.getItem('lang') || 'en';
        const title = lang === 'en' ? 'Subscribed!' : 'सब्सक्राइब किया गया!';
        const msg = lang === 'en' ? 'Thank you for subscribing to our newsletter!' : 'हमारे न्यूज़लेटर को सब्सक्राइब करने के लिए धन्यवाद!';
        showSuccess(title, msg);
        newsletterForm.reset();
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = localStorage.getItem('lang') || 'en';
        const title = lang === 'en' ? 'Sent!' : 'भेज दिया गया!';
        const msg = lang === 'en' ? 'Message sent successfully! We will get back to you soon.' : 'संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।';
        showSuccess(title, msg);
        contactForm.reset();
    });
}

// Footer Category Filter Support
document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        const catBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (catBtn) {
            catBtn.click();
            window.scrollTo({ top: document.getElementById('tools').offsetTop - 100, behavior: 'smooth' });
        }
    });
});

// Back to Top functionality
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
    });
});

// Stats Animation Logic
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;

    stats.forEach(stat => {
        const updateCount = () => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;
            const inc = target / speed;

            if (count < target) {
                stat.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                stat.innerText = target;
            }
        };
        updateCount();
    });
}

// Intersection Observer for Stats
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}
