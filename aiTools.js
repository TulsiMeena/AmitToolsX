// AI Tools Database - 100 Curated Tools
const aiTools = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        description: "A powerful conversational AI that can write, code, and assist with complex tasks.",
        longDescription: "ChatGPT is an advanced language model developed by OpenAI. It is designed to generate human-like text based on the prompts provided by users. It can assist with a wide range of tasks including writing essays, generating code, translating languages, and answering complex questions across various domains.",
        features: ["Text Generation", "Coding Assistance", "Creative Writing", "Translation"],
        category: "writing",
        link: "https://chat.openai.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "midjourney",
        name: "Midjourney",
        description: "An AI-powered system that creates high-quality images from text descriptions.",
        longDescription: "Midjourney is a generative artificial intelligence program and service created and hosted by a San Francisco-based independent research lab Midjourney, Inc. Midjourney generates images from natural language descriptions, called prompts, similar to OpenAI's DALL-E and Stability AI's Stable Diffusion.",
        features: ["High-Res Image Gen", "Artistic Styles", "Community Feed", "Discord Integration"],
        category: "image",
        link: "https://www.midjourney.com",
        badge: "trending",
        pricing: "Paid"
    },
    {
        id: "github-copilot",
        name: "GitHub Copilot",
        description: "Your AI pair programmer that helps you write code faster and with less work.",
        category: "coding",
        link: "https://github.com/features/copilot",
        badge: "new",
        pricing: "Paid"
    },
    {
        id: "elevenlabs",
        name: "ElevenLabs",
        description: "The most realistic AI text-to-speech and voice cloning software.",
        category: "audio",
        link: "https://elevenlabs.io",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "runway-gen2",
        name: "Runway Gen-2",
        description: "A multi-modal AI system that can generate novel videos with text, images, or video clips.",
        category: "video",
        link: "https://runwayml.com",
        badge: "new",
        pricing: "Freemium"
    },
    {
        id: "claude",
        name: "Claude",
        description: "A next-generation AI assistant for your tasks, no matter the scale.",
        category: "writing",
        link: "https://claude.ai",
        badge: "new",
        pricing: "Freemium"
    },
    {
        id: "perplexity",
        name: "Perplexity AI",
        description: "An AI-powered search engine that provides direct answers to questions with citations.",
        category: "productivity",
        link: "https://perplexity.ai",
        badge: "trending",
        pricing: "Free"
    },
    {
        id: "canva-magic",
        name: "Canva Magic Studio",
        description: "All the power of AI, all in one place in Canva for design and creativity.",
        category: "image",
        link: "https://canva.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "suno",
        name: "Suno AI",
        description: "Make any song you can imagine with Suno AI, the best AI music generator.",
        category: "audio",
        link: "https://suno.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "deepl",
        name: "DeepL",
        description: "The world's most accurate translator, powered by neural networks.",
        category: "productivity",
        link: "https://deepl.com",
        badge: "",
        pricing: "Free"
    },
    {
        id: "leonardo",
        name: "Leonardo.ai",
        description: "Create production-quality visual assets for your projects with unprecedented speed.",
        category: "image",
        link: "https://leonardo.ai",
        badge: "new",
        pricing: "Freemium"
    },
    {
        id: "v0",
        name: "v0.dev",
        description: "Generative UI system by Vercel to build professional websites with simple prompts.",
        category: "coding",
        link: "https://v0.dev",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "heygen",
        name: "HeyGen",
        description: "Scale your video production with AI-generated avatars and seamless translations.",
        category: "video",
        link: "https://heygen.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "adobe-firefly",
        name: "Adobe Firefly",
        description: "Generative AI for creators, integrated directly into Adobe Photoshop and Illustrator.",
        category: "image",
        link: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "cursor",
        name: "Cursor",
        description: "The AI-first code editor designed to make you exceptionally productive at software development.",
        category: "coding",
        link: "https://cursor.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "notion-ai",
        name: "Notion AI",
        description: "Work faster, write better, and think bigger with AI integrated directly into your workspace.",
        category: "productivity",
        link: "https://www.notion.so/product/ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "grammarly-go",
        name: "GrammarlyGO",
        description: "Generative AI that helps you write, rewrite, and brainstorm with personalized voice.",
        category: "writing",
        link: "https://www.grammarly.com/grammarlygo",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "descript",
        name: "Descript",
        description: "A new way to make video and podcasts by editing text instead of audio clips.",
        category: "audio",
        link: "https://www.descript.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "copy-ai",
        name: "Copy.ai",
        description: "AI-powered copywriting tool for marketing, social media, and business growth.",
        category: "writing",
        link: "https://www.copy.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "jasper",
        name: "Jasper",
        description: "AI content generator for teams that creates high-quality content 10x faster.",
        category: "writing",
        link: "https://www.jasper.ai",
        badge: "trending",
        pricing: "Paid"
    },
    {
        id: "luma-dream-machine",
        name: "Luma Dream Machine",
        description: "A highly capable AI model that makes high-quality, realistic videos from text and images.",
        category: "video",
        link: "https://lumalabs.ai/dream-machine",
        badge: "new",
        pricing: "Freemium"
    },
    {
        id: "replicate",
        name: "Replicate",
        description: "Run machine learning models in the cloud with an API, from text-to-image to voice.",
        category: "coding",
        link: "https://replicate.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "fireflies-ai",
        name: "Fireflies.ai",
        description: "AI meeting assistant that automatically records, transcribes, and summarizes meetings.",
        category: "productivity",
        link: "https://fireflies.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "tome",
        name: "Tome",
        description: "AI-powered storytelling platform to create compelling presentations and landing pages.",
        category: "productivity",
        link: "https://tome.app",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "otter-ai",
        name: "Otter.ai",
        description: "Get an AI meeting assistant that records audio, writes notes, and captures action items.",
        category: "audio",
        link: "https://otter.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "spline-ai",
        name: "Spline AI",
        description: "Describe what you want to create and let AI generate 3D objects, animations, and scenes.",
        category: "image",
        link: "https://spline.design/ai",
        badge: "new",
        pricing: "Freemium"
    },
    {
        id: "character-ai",
        name: "Character.ai",
        description: "Neural language model chatbot service that can generate human-like text responses.",
        category: "writing",
        link: "https://character.ai",
        badge: "trending",
        pricing: "Free"
    },
    {
        id: "revoicer",
        name: "Revoicer",
        description: "The most realistic AI voiceover generator that expresses human emotions in every voice.",
        category: "audio",
        link: "https://revoicer.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "blackbox-ai",
        name: "Blackbox AI",
        description: "The best AI coding assistant to help you write code faster and search for documentation.",
        category: "coding",
        link: "https://www.blackbox.ai",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "kaiber",
        name: "Kaiber",
        description: "AI creative lab that helps users generate high-quality video animations from prompts.",
        category: "video",
        link: "https://kaiber.ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "remove-bg",
        name: "Remove.bg",
        description: "Remove image backgrounds automatically in 5 seconds with just one click.",
        category: "image",
        link: "https://www.remove.bg",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "gamma",
        name: "Gamma App",
        description: "A new medium for presenting ideas, powered by AI to create docs, decks, and sites.",
        category: "productivity",
        link: "https://gamma.app",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "murf-ai",
        name: "Murf AI",
        description: "Versatile AI voice generator that enables you to create studio-quality voiceovers.",
        category: "audio",
        link: "https://murf.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "reword",
        name: "Reword",
        description: "Write better content for your readers with the help of a collaborative AI editor.",
        category: "writing",
        link: "https://reword.ai",
        badge: "new",
        pricing: "Paid"
    },
    {
        id: "phind",
        name: "Phind",
        description: "The intelligent search engine and AI pair programmer for developers.",
        category: "coding",
        link: "https://www.phind.com",
        badge: "",
        pricing: "Free"
    },
    {
        id: "kling",
        name: "Kling AI",
        description: "The latest breakthrough in video generation capable of producing cinematic 1080p clips.",
        category: "video",
        link: "https://klingai.com",
        badge: "new",
        pricing: "Freemium"
    },
    {
        id: "framer-ai",
        name: "Framer AI",
        description: "Design and publish professional websites with the help of AI in minutes.",
        category: "productivity",
        link: "https://www.framer.com/ai",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "soundraw",
        name: "Soundraw",
        description: "AI music generator for creators, enabling you to customize every aspect of your tracks.",
        category: "audio",
        link: "https://soundraw.io",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "tabnine",
        name: "Tabnine",
        description: "AI assistant for software developers that helps write code faster with deep learning.",
        category: "coding",
        link: "https://www.tabnine.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "invideo",
        name: "InVideo AI",
        description: "Create published-ready videos from simple text ideas with an AI video editor.",
        category: "video",
        link: "https://invideo.io",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "lexica",
        name: "Lexica",
        description: "The search engine for Stable Diffusion images and a powerful generation tool.",
        category: "image",
        link: "https://lexica.art",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "summarize-tech",
        name: "Summarize.tech",
        description: "Get a summary of any long YouTube video, like a lecture or an event.",
        category: "productivity",
        link: "https://www.summarize.tech",
        badge: "",
        pricing: "Free"
    },
    {
        id: "voicemod",
        name: "Voicemod",
        description: "Real-time AI voice changer and soundboard for gamers and content creators.",
        category: "audio",
        link: "https://www.voicemod.net",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "aider",
        name: "Aider",
        description: "Command line chat tool that allows you to edit code in your local git repo with AI.",
        category: "coding",
        link: "https://aider.chat",
        badge: "new",
        pricing: "Free"
    },
    {
        id: "gemini",
        name: "Google Gemini",
        description: "Google's most capable AI model, built to be multimodal and highly efficient.",
        category: "writing",
        link: "https://gemini.google.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "grok",
        name: "Grok",
        description: "A conversational AI with a bit of wit and real-time access to X (formerly Twitter).",
        category: "writing",
        link: "https://x.ai",
        badge: "trending",
        pricing: "Paid"
    },
    {
        id: "mistral",
        name: "Mistral AI",
        description: "Efficient and high-performance open-weight models from the French AI startup.",
        category: "coding",
        link: "https://mistral.ai",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "cohere",
        name: "Cohere",
        description: "Enterprise AI platform offering NLP solutions for search, generation, and summarization.",
        category: "productivity",
        link: "https://cohere.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "huggingface",
        name: "Hugging Face",
        description: "The hub for machine learning models, datasets, and demo apps.",
        category: "coding",
        link: "https://huggingface.co",
        badge: "trending",
        pricing: "Free"
    },
    {
        id: "langchain",
        name: "LangChain",
        description: "Framework for developing applications powered by large language models.",
        category: "coding",
        link: "https://langchain.com",
        badge: "new",
        pricing: "Free"
    },
    {
        id: "pinecone",
        name: "Pinecone",
        description: "Managed vector database for adding long-term memory to AI applications.",
        category: "coding",
        link: "https://www.pinecone.io",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "pika",
        name: "Pika",
        description: "An idea-to-video platform that brings your imagination to life through high-quality video.",
        category: "video",
        link: "https://pika.art",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "synthesia",
        name: "Synthesia",
        description: "AI video generation platform that enables users to create videos with AI avatars.",
        category: "video",
        link: "https://www.synthesia.io",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "pictory",
        name: "Pictory",
        description: "Automatically create short, highly-shareable branded videos from your long-form content.",
        category: "video",
        link: "https://pictory.ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "vidyard",
        name: "Vidyard",
        description: "AI-powered video messaging and hosting platform for business and sales teams.",
        category: "video",
        link: "https://www.vidyard.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "loom",
        name: "Loom AI",
        description: "Async video communication tool that uses AI to summarize videos and suggest titles.",
        category: "video",
        link: "https://www.loom.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "adobe-podcast",
        name: "Adobe Podcast",
        description: "AI-powered audio recording and editing, all in the web browser.",
        category: "audio",
        link: "https://podcast.adobe.com",
        badge: "",
        pricing: "Free"
    },
    {
        id: "riffusion",
        name: "Riffusion",
        description: "Generate music by using stable diffusion to create images of spectrograms.",
        category: "audio",
        link: "https://www.riffusion.com",
        badge: "",
        pricing: "Free"
    },
    {
        id: "mubert",
        name: "Mubert",
        description: "The first AI-generative music ecosystem for creators and brands.",
        category: "audio",
        link: "https://mubert.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "beatoven",
        name: "Beatoven.ai",
        description: "Create unique royalty-free music that fits the mood of your video or podcast.",
        category: "audio",
        link: "https://www.beatoven.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "lalal",
        name: "Lalal.ai",
        description: "High-quality stem splitting based on the world's number one AI-powered technology.",
        category: "audio",
        link: "https://www.lalal.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "quillbot",
        name: "Quillbot",
        description: "AI-powered paraphrasing tool that helps you write better and faster.",
        category: "writing",
        link: "https://quillbot.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "writesonic",
        name: "Writesonic",
        description: "AI writing tool that creates high-quality content for blogs, ads, and emails.",
        category: "writing",
        link: "https://writesonic.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "rytr",
        name: "Rytr",
        description: "AI writing assistant that helps you create high-quality content in just a few seconds.",
        category: "writing",
        link: "https://rytr.me",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "sudowrite",
        name: "Sudowrite",
        description: "The AI writing partner you've always wanted for your next novel or story.",
        category: "writing",
        link: "https://www.sudowrite.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "wordtune",
        name: "Wordtune",
        description: "AI-powered writing companion that helps you rephrase and refine your sentences.",
        category: "writing",
        link: "https://www.wordtune.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "hemingway",
        name: "Hemingway Editor",
        description: "The app that highlights lengthy, complex sentences and common errors.",
        category: "writing",
        link: "https://hemingwayapp.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "frase",
        name: "Frase",
        description: "AI content platform that helps you research, write, and optimize SEO content.",
        category: "writing",
        link: "https://www.frase.io",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "anyword",
        name: "Anyword",
        description: "Data-driven copywriting platform that predicts how your audience will react.",
        category: "writing",
        link: "https://anyword.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "hypotenuse",
        name: "Hypotenuse AI",
        description: "Streamline your content writing with AI that researchers and writes for you.",
        category: "writing",
        link: "https://www.hypotenuse.ai",
        badge: "new",
        pricing: "Paid"
    },
    {
        id: "copysmith",
        name: "CopySmith",
        description: "AI copywriting platform for e-commerce teams and agencies.",
        category: "writing",
        link: "https://copysmith.ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "typeface",
        name: "Typeface",
        description: "Enterprise-grade generative AI for hyper-personalized content creation.",
        category: "writing",
        link: "https://www.typeface.ai",
        badge: "new",
        pricing: "Paid"
    },
    {
        id: "contentbot",
        name: "ContentBot",
        description: "Advanced AI writing assistant for creators, marketers, and businesses.",
        category: "writing",
        link: "https://contentbot.ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "meetgeek",
        name: "MeetGeek",
        description: "AI meeting assistant that record, transcribe and share highlights of your meetings.",
        category: "productivity",
        link: "https://meetgeek.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "read-ai",
        name: "Read AI",
        description: "AI for meetings, email, and chat that provides summaries and insights.",
        category: "productivity",
        link: "https://www.read.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "krisp",
        name: "Krisp",
        description: "AI noise-canceling app that removes background noise from your calls.",
        category: "productivity",
        link: "https://krisp.ai",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "sanebox",
        name: "SaneBox",
        description: "AI-powered email management that cleans up your inbox automatically.",
        category: "productivity",
        link: "https://www.sanebox.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "motion",
        name: "Motion",
        description: "AI calendar and task manager that automatically builds your schedule.",
        category: "productivity",
        link: "https://www.usemotion.com",
        badge: "trending",
        pricing: "Paid"
    },
    {
        id: "akiflow",
        name: "Akiflow",
        description: "Centralized task manager and calendar that uses AI to optimize your day.",
        category: "productivity",
        link: "https://akiflow.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "clockwise",
        name: "Clockwise",
        description: "Smart calendar assistant that optimizes your schedule for focus time.",
        category: "productivity",
        link: "https://www.getclockwise.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "superhuman",
        name: "Superhuman",
        description: "The fastest email experience ever made, enhanced with powerful AI.",
        category: "productivity",
        link: "https://superhuman.com",
        badge: "trending",
        pricing: "Paid"
    },
    {
        id: "magical",
        name: "Magical",
        description: "AI automation tool that speeds up repetitive tasks across any web app.",
        category: "productivity",
        link: "https://www.getmagical.com",
        badge: "",
        pricing: "Free"
    },
    {
        id: "mem",
        name: "Mem",
        description: "AI-powered workspace that organizes your thoughts and information.",
        category: "productivity",
        link: "https://mem.ai",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "taskade",
        name: "Taskade",
        description: "The AI-powered productivity platform for modern teams.",
        category: "productivity",
        link: "https://www.taskade.com",
        badge: "",
        pricing: "Freemium"
    },
    {
        id: "clickup-brain",
        name: "ClickUp Brain",
        description: "The first neural network that connects your tasks, docs, people, and company knowledge.",
        category: "productivity",
        link: "https://clickup.com/features/ai",
        badge: "trending",
        pricing: "Paid"
    },
    {
        id: "asana-intelligence",
        name: "Asana Intelligence",
        description: "AI for work management to help teams work smarter and faster.",
        category: "productivity",
        link: "https://asana.com/product/ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "monday-ai",
        name: "Monday.com AI",
        description: "Empower your team to work faster and more efficiently with AI-powered automations.",
        category: "productivity",
        link: "https://monday.com/ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "krea",
        name: "Krea.ai",
        description: "Real-time AI creative tool for high-quality image generation and enhancement.",
        category: "image",
        link: "https://www.krea.ai",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "magnific",
        name: "Magnific AI",
        description: "The most advanced AI image upscaler and enhancer for professional creators.",
        category: "image",
        link: "https://magnific.ai",
        badge: "new",
        pricing: "Paid"
    },
    {
        id: "clipdrop",
        name: "ClipDrop",
        description: "A suite of AI tools for creators to edit and generate high-quality visuals.",
        category: "image",
        link: "https://clipdrop.co",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "vectormagic",
        name: "Vector Magic",
        description: "Automatically convert bitmap images like JPEGs and PNGs to clean vector art.",
        category: "image",
        link: "https://vectormagic.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "looka",
        name: "Looka",
        description: "AI-powered logo maker and brand identity platform for entrepreneurs.",
        category: "image",
        link: "https://looka.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "brandmark",
        name: "Brandmark",
        description: "Create a professional logo and brand identity with AI in minutes.",
        category: "image",
        link: "https://brandmark.io",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "designs-ai",
        name: "Designs.ai",
        description: "AI-powered platform to create logos, videos, and social media content.",
        category: "image",
        link: "https://designs.ai",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "uizard",
        name: "Uizard",
        description: "Design mobile apps, websites, and wireframes in minutes with AI.",
        category: "image",
        link: "https://uizard.io",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "ms-designer",
        name: "Microsoft Designer",
        description: "Create stunning visuals and social media posts with DALL-E 3 integration.",
        category: "image",
        link: "https://designer.microsoft.com",
        badge: "new",
        pricing: "Free"
    },
    {
        id: "filmora",
        name: "Wondershare Filmora",
        description: "Easy-to-use video editor with powerful AI features like smart cutout and auto reframe.",
        category: "video",
        link: "https://filmora.wondershare.com",
        badge: "",
        pricing: "Paid"
    },
    {
        id: "tabby",
        name: "Tabby",
        description: "A self-hosted AI coding assistant, an open-source alternative to GitHub Copilot.",
        category: "coding",
        link: "https://tabby.ml",
        badge: "new",
        pricing: "Free"
    },
    {
        id: "mintlify",
        name: "Mintlify",
        description: "AI-powered documentation that builds itself and helps developers ship faster.",
        category: "coding",
        link: "https://mintlify.com",
        badge: "trending",
        pricing: "Freemium"
    },
    {
        id: "vimeo-ai",
        name: "Vimeo AI",
        description: "Create, edit, and share professional videos with the help of AI-powered tools.",
        category: "video",
        link: "https://vimeo.com/features/ai-video-editing",
        badge: "",
        pricing: "Freemium"
    }
];
