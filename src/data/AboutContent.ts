import type { Education, WorkExperience, Certification, Statistic } from "@/models/About";

export const personalIntro = "What makes my profile unique? I bring both strong communication and interpersonal skills from my background in sales and recruitment, combined with technical development expertise. I can bridge the gap between business needs and technical solutions.";

export const statistics: Statistic[] = [
  {
    label: "Years Experience",
    value: "3+"
  },
  {
    label: "Projects Completed",
    value: "15+"
  },
  {
    label: "Technologies",
    value: "20+"
  }
];

export const skillsByCategory = {
  Languages: ["TypeScript", "JavaScript", "C#", "HTML5", "CSS3"],
  Frontend: ["React", "Tailwind CSS", "Bootstrap"],
  Backend: ["ASP.NET", ".NET Core", "Node.js"],
  Databases: ["MySQL", "MongoDB"],
  Tools: ["Git", "Docker", "VS Code"]
};

export const education: Education[] = [
  {
    title: "Graduaat Programmeren - Thomas-More Lier",
    period: "2024 - 2026",
  },
  {
    title: "HAVO - Kellebeek College",
    period: "2017 - 2020",
  },
  {
    title: "MAVO",
    period: "2011 - 2015",
  },
];

export const workExperience: WorkExperience[] = [
  {
    title: "Developer (Internship)",
    company: "Ewings",
    period: "Februari 2026 - current",
    description: "",
    skillsUsed: ["ASP.NET", "Playwright", "DynamicWeb"]
  },
  {
    title: "Lead Web Developer (Volunteer)",
    company: "Woonderwijs",
    period: "July 2025 - current",
    description: "",
    skillsUsed: ["Wordpress", "Elementor"]
  },
  {
    title: "Talent acquisition specialist",
    company: "TEC",
    period: "October 2022 - November 2023",
    description: ""
  },
  {
    title: "Technical recruiter/Account manager",
    company: "Jobs Voor Techniekers",
    period: "March 2022 - October 2022",
    description: ""
  }
];

export const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    period: "29/12/2024",
    downloadLink: "/downloads/Certifications/IntroToCybersec.pdf"
  }
];
