export interface Education {
    institution: string;
    degree: string;
    location: string;
    year: string;
    score: string;
    scoreType: "cgpa" | "percentage";
    highlights: string[];
}

export const education: Education[] = [
    {
        institution: "Harcourt Butler Technical University",
        degree: "Bachelor of Technology in Computer Science & Engineering",
        location: "Kanpur, India",
        year: "2023 — 2027",
        score: "CGPA: 7.5",
        scoreType: "cgpa",
        highlights: [
            "Computer Science & Engineering specialization",
            "Active in open-source communities and hackathons",
            "Founded Open Dev Society during undergraduate studies",
        ],
    },
    {
        institution: "Modern Public School",
        degree: "CBSE Class 12th — Physics, Chemistry & Mathematics",
        location: "",
        year: "2022",
        score: "94.2%",
        scoreType: "percentage",
        highlights: ["Physics, Chemistry, Mathematics stream", "Consistently top-performing student"],
    },
    {
        institution: "Saint Momina School",
        degree: "CBSE Class 10th",
        location: "",
        year: "2020",
        score: "91.8%",
        scoreType: "percentage",
        highlights: ["Strong academic foundation", "All-round academic excellence"],
    },
];

export const certifications = [
    {
        title: "Foundation of Generative AI",
        issuer: "Udacity — Nanodegree Program",
    },
    {
        title: "Aspire Leader Program Completion",
        issuer: "Harvard-affiliated Aspire Leaders Program",
    },
    {
        title: "Introduction to AI",
        issuer: "Amazon Web Services (AWS)",
    },
];
