export type Project = {
    id: number;
    name: string;
    description: string;
    category: string;
    tags: string[];
    status: 'online' | 'degraded' | 'offline';
    uptime: string;
    link: string;
};

export const projects: Project[] = [
    {
        id: 1,
        name: "Crypto Arb Bot",
        description: "Automated arbitrage trading bot scanning 5 exchanges for price discrepancies in real-time.",
        category: "Bots",
        tags: ["Python", "Docker", "AWS"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    },
    {
        id: 2,
        name: "DevHub Dashboard",
        description: "The frontend interface you are currently viewing. Aggregates status and portfolio links.",
        category: "Web Apps",
        tags: ["HTML", "Tailwind", "JS"],
        status: "online",
        uptime: "100%",
        link: "#"
    },
    {
        id: 3,
        name: "Image Opt API",
        description: "Serverless function to compress and resize images on the fly for production apps.",
        category: "API",
        tags: ["Node.js", "Vercel", "Sharp"],
        status: "degraded", // degraded for demo
        uptime: "98.2%",
        link: "#"
    },
    {
        id: 4,
        name: "Daily Digest Script",
        description: "CRON job that scrapes tech news and emails a summary every morning at 8 AM.",
        category: "Scripts",
        tags: ["Go", "GitHub Actions", "SMTP"],
        status: "online",
        uptime: "100%",
        link: "#"
    },
    {
        id: 5,
        name: "Legacy Auth Server",
        description: "OAuth2 provider for older internal tools. Scheduled for deprecation in Q4.",
        category: "Backend",
        tags: ["Java", "Spring Boot", "MySQL"],
        status: "offline", // offline for demo
        uptime: "0%",
        link: "#"
    },
    {
        id: 6,
        name: "Portfolio V2",
        description: "Previous personal website built with Gatsby. Archived but hosted.",
        category: "Web Apps",
        tags: ["React", "Gatsby", "Netlify"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    },
    {
        id: 7,
        name: "teste1",
        description: "teste1",
        category: "teste1",
        tags: ["tag1", "tag2", "tag3", "tag4", "tag3", "tag3"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    },
    {
        id: 8,
        name: "Portfolio V2",
        description: "Previous personal website built with Gatsby. Archived but hosted.",
        category: "Web Apps",
        tags: ["React", "Gatsby", "Netlify"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    },
    {
        id: 9,
        name: "Portfolio V2",
        description: "Previous personal website built with Gatsby. Archived but hosted.",
        category: "Web Apps",
        tags: ["React", "Gatsby", "Netlify"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    },
    {
        id: 10,
        name: "Portfolio V2",
        description: "Previous personal website built with Gatsby. Archived but hosted.",
        category: "Web Apps",
        tags: ["React", "Gatsby", "Netlify"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    },
    {
        id: 11,
        name: "Portfolio V2",
        description: "Previous personal website built with Gatsby. Archived but hosted.",
        category: "Web Apps",
        tags: ["React", "Gatsby", "Netlify"],
        status: "online",
        uptime: "99.9%",
        link: "#"
    }
];