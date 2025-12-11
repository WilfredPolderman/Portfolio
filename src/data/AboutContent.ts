import type { Education, WorkExperience, Certification } from "@/models/About";

export const education: Education[] = [
  {
    title: "Graduaat Programmeren - Thomas-More Lier",
    period: "2023 - 2025",
  },
  {
    title: "HAVO - Kellebeek College",
    period: "2022 - 2023",
  },
];

export const workExperience: WorkExperience[] = [
  {
    title: "Web Developer (Volunteer)",
    company: "Woonderwijs",
    period: "July 2025 - current",
    description: ""
  },
  {
    title: "Talent acquisition specialist",
    company: "TEC",
    period: "October 2022 - November 2023",
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
