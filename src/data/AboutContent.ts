import type { Education, WorkExperience, Certification } from "@/models/About";

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
    title: "Web Developer (Volunteer)",
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
