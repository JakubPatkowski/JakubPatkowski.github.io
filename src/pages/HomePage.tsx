import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { 
  AboutSection,
  CertificatesSection,
  ContactSection,
  CvSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from "./sections";

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!scrollTo) return

    // Timeout
    const timer = setTimeout(() => {
      const el = document.getElementById(scrollTo)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)

    // Clear state
    window.history.replaceState({}, '')

    return () => clearTimeout(timer)
  }, [location.state])

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <CvSection /> 
      <ContactSection />
    </main>
  )
}
