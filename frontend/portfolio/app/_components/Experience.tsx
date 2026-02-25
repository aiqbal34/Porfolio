import { Timeline } from "./timeline"
import {
  AI_ML_FirmwareEngineerIntern,
  SoftwareResearchIntern,
  FullStackDeveloper,
  SanDiskIntern,
} from "./experienceData"

export default function Experience() {
  const experiences = [
    {
      date: "2025",
      title: "Software Development Intern",
      company: "SanDisk",
      description: SanDiskIntern,
      accent: "#f59e0b",
      tags: ["React", "FastAPI", "PostgreSQL", "Python", "Vector Search", "LLM/AI"],
    },
    {
      date: "2024",
      title: "AI/ML Firmware Engineer Intern",
      company: "Western Digital",
      description: AI_ML_FirmwareEngineerIntern,
      accent: "#60a5fa",
      tags: ["C/C++", "Python", "AI/ML", "Firmware", "LLM"],
    },
    {
      date: "2024",
      title: "ML Software Research Intern",
      company: "University of California, Davis",
      description: SoftwareResearchIntern,
      accent: "#34d399",
      tags: ["Kotlin", "Android", "Machine Learning", "Computer Vision", "Arduino"],
    },
    {
      date: "2023",
      title: "Full-Stack Software Engineer Intern",
      company: "Crypto Reporting LLC",
      description: FullStackDeveloper,
      accent: "#a78bfa",
      tags: ["React", "AWS Lambda", "Python", "Pandas", "AWS Amplify"],
    },
  ]

  return (
    <div className="relative w-full min-h-screen">
      <Timeline data={experiences} />
    </div>
  )
}
