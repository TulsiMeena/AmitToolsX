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
        name: "Notion AI",
        description: "Integrated AI features within Notion to help you write, brainstorm, and summarize.",
        category: "productivity",
        link: "https://notion.so",
        badge: ""
    },
    {
        name: "Jasper AI",
        description: "An AI content platform that helps teams create high-quality content 10x faster.",
        category: "writing",
        link: "https://jasper.ai",
        badge: ""
    },
    {
        name: "DALL-E 3",
        description: "OpenAI's latest image generation system that understands nuanced requests.",
        category: "image",
        link: "https://openai.com/dall-e-3",
        badge: "trending"
    },
    {
        name: "Cursor",
        description: "An AI-powered code editor designed for pair programming with an AI.",
        category: "coding",
        link: "https://cursor.sh",
        badge: "new"
    },
    {
        name: "Descript",
        description: "A simple, powerful, and fun way to edit videos and podcasts using AI.",
        category: "audio",
        link: "https://descript.com",
        badge: ""
    }
];

// DOM Elements
const toolGrid = document.getElementById('toolGrid');
const searchInput = document.getElementById('toolSearch');
const categoryButtons = document.querySelectorAll('.category-btn');
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');

// Initialize Tools
function displayTools(tools) {
    if (!toolGrid) return;

    toolGrid.innerHTML = '';

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'glass-card tool-card';

        const badgeHTML = tool.badge ? `<span class="tool-badge badge-${tool.badge}">${tool.badge}</span>` : '';

        card.innerHTML = `
            ${badgeHTML}
            <span class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)} AI</span>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank" class="btn btn-outline">Visit Tool</a>
        `;

        toolGrid.appendChild(card);
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
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light' && themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Newsletter Form Handling
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! We will get back to you soon.');
        contactForm.reset();
    });
}

// Initial Display
displayTools(aiTools);

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
