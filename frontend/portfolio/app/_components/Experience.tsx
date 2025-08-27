import { Timeline } from "./timeline"
import { motion } from "framer-motion"
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
    },
    {
      date: "2024",
      title: "AI/ML Firmware Engineer Intern",
      company: "Western Digital",
      description: AI_ML_FirmwareEngineerIntern,
    },
    {
      date: "2024",
      title: "ML Software Research Intern",
      company: "University of California, Davis",
      description: SoftwareResearchIntern,
    },
    {
      date: "2023",
      title: "Full-Stack Software Engineer Intern",
      company: "Crypto Reporting LLC",
      description: FullStackDeveloper,
    },
  ]

  return (
    <div className="relative w-full min-h-screen">
      <Timeline data={experiences} />
    </div>
  )
}
