import {
    Laptop,
    Palette,
    Code,
    Terminal,
    BarChart,
    Shield,
    BookA,
    FileSpreadsheet,
    type LucideIcon
} from "lucide-react";

export interface Course {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    slug: string;
    fullDescription: string;
    modules: string[];
    duration: string;
    level: string;
    image?: string;
}

export const courses: Course[] = [
    {
        id: "1",
        title: "English Language",
        slug: "english-language",
        description: "Master spoken and written English, grammar, and communication skills for professional and academic success.",
        icon: BookA,
        duration: "3 Months",
        level: "Beginner to Advanced",
        fullDescription: "Our English Language course is designed to take you from basics to fluency. Whether you want to improve your conversation skills, master grammar, or prepare for academic challenges, this comprehensive program covers it all. We focus on four core pillars: Reading, Writing, Listening, and Speaking.",
        modules: [
            "Grammar & Sentence Structure",
            "Vocabulary Building",
            "Professional Communication",
            "Public Speaking & Presentation",
            "Creative Writing",
            "Accent & Pronunciation"
        ],
        image: "/images/english.png"
    },
    {
        id: "2",
        title: "CIT (Certificate in IT)",
        slug: "cit",
        description: "A comprehensive foundation course covering Windows, Internet usage, and essential computer skills.",
        icon: Laptop,
        duration: "3 Months",
        level: "Beginner",
        fullDescription: "The Certificate in Information Technology (CIT) is the perfect starting point for anyone looking to build a career in IT or simply improve their digital literacy. You will gain hands-on experience with operating systems, internet tools, and office productivity software.",
        modules: [
            "Introduction to Computers & Windows",
            "Typing Speed & Accuracy",
            "Internet surfing & Email Etiquette",
            "Microsoft Word (Documentation)",
            "Microsoft Excel (Spreadsheets)",
            "Microsoft PowerPoint (Presentations)",
            "Inpage (Urdu Typesetting)"
        ],
        image: "/images/cit.png"
    },
    {
        id: "3",
        title: "Graphic Designing",
        slug: "graphic-designing",
        description: "Learn Adobe Photoshop and Illustrator. Master typography, layout, and visual identity creation.",
        icon: Palette,
        duration: "3 Months",
        level: "Beginner to Intermediate",
        fullDescription: "Unleash your creativity with our Graphic Designing course. Learn industry-standard tools like Adobe Photoshop and Illustrator to create stunning visuals, logos, social media posts, and marketing materials. This course combines artistic theory with technical skills.",
        modules: [
            "Principles of Design & Color Theory",
            "Adobe Photoshop Mastery",
            "Adobe Illustrator Vectors",
            "Logo Design & Branding",
            "Typography & Layout",
            "Social Media Design",
            "Freelancing Basics for Designers"
        ],
        image: "/images/grapics-design.png"
    },
    {
        id: "4",
        title: "Digital Marketing",
        slug: "digital-marketing",
        description: "Social media marketing, content strategy, SEO basics, and running effective ad campaigns.",
        icon: BarChart,
        duration: "2 Months",
        level: "Beginner",
        fullDescription: "In the digital age, marketing is everything. Learn how to reach your audience, build a brand, and drive sales through Digital Marketing. We cover the main social platforms, content creation strategies, and the basics of Search Engine Optimization (SEO).",
        modules: [
            "Social Media Marketing (Facebook, Instagram)",
            "Content Strategy & Creation",
            "Facebook Ads Manager",
            "Basics of SEO",
            "Canva for Marketers",
            "Building an Online Presence"
        ],
        image: "/images/digital-marketing.png"
    },
    {
        id: "5",
        title: "Basic Programming",
        slug: "basic-programming",
        description: "Start your coding journey with logic building in Python or C++. Perfect for beginners.",
        icon: Code,
        duration: "2 Months",
        level: "Beginner",
        fullDescription: "This course is designed to build a strong foundation in computer science and programming logic. You'll learn how to think like a programmer, write clean code, and solve problems using popular languages like C++ or Python.",
        modules: [
            "Introduction to Programming Logic",
            "Variables & Data Types",
            "Control Structures (If/Else, Loops)",
            "Functions & Arrays",
            "Problem Solving Techniques",
            "Building Simple Console Applications"
        ],
        image: "/images/basic-programming.png"
    },
    {
        id: "6",
        title: "Ethical Hacking (Basics)",
        slug: "ethical-hacking",
        description: "Understand cybersecurity fundamentals, network safety, and how to protect digital assets.",
        icon: Shield,
        duration: "2 Months",
        level: "Intermediate",
        fullDescription: "Enter the world of Cybersecurity. This course introduces you to the concepts of ethical hacking, network security, and vulnerability assessment. Learn how to protect systems by understanding how they can be compromised.",
        modules: [
            "Introduction to Cybersecurity",
            "Linux Basics",
            "Network Fundamentals",
            "Information Gathering",
            "System Hacking Basics",
            "Web App Security Overview"
        ],
        image: "/images/ethical-hacking.png"
    },
    {
        id: "7",
        title: "MS Office Automation",
        slug: "ms-office",
        description: "Deep dive into Word, Excel, and PowerPoint for office productivity and data management.",
        icon: FileSpreadsheet,
        duration: "2 Months",
        level: "Beginner",
        fullDescription: "Master the tools that drive the modern office. From drafting professional documents in Word to analyzing data in Excel and creating impactful presentations in PowerPoint, this course makes you an office automation pro.",
        modules: [
            "Advanced MS Word Formatting",
            "Excel Formulas & Functions",
            "Excel Charts & Data Analysis",
            "PowerPoint Animation & transitions",
            "Document Integration",
            "Office Shortcuts & Tips"
        ],
        image: "/images/ms-office.png"
    },
    {
        id: "8",
        title: "Web Development (Frontend)",
        slug: "web-development",
        description: "Build responsive websites using HTML, CSS, and basic JavaScript. The first step to becoming a dev.",
        icon: Terminal,
        duration: "3 Months",
        level: "Beginner",
        fullDescription: "Become a web developer and build your own websites. This course focuses on Frontend Development, teaching you the core technologies of the web: HTML for structure, CSS for styling, and JavaScript for interactivity.",
        modules: [
            "HTML5 Structure & Semantics",
            "CSS3 Styling & Flexbox/Grid",
            "Responsive Web Design",
            "JavaScript Basics (Variables, DOM)",
            "Bootstrap / Tailwind CSS Overview",
            "Deploying Websites"
        ],
        image: "/images/web-dev.png"
    },
];
