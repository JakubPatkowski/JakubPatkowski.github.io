// Projects
export interface Project {
  id: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  longDescription: string
  longDescriptionEn?: string
  highlights?: string[]
  highlightsEn?: string[]
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  images?: string[]
  featured: boolean
  category: 'backend' | 'frontend' | 'fullstack' | 'data-science' | 'other'
}

// Experience
export interface Experience {
  id: string
  company: string
  companyEn?: string
  position: string
  positionEn?: string
  location: string
  locationEn?: string
  startDate: string
  endDate: string | 'present'
  summary?: string
  summaryEn?: string
  responsibilities: string[]
  responsibilitiesEn?: string[]
  technologies: string[]
  detailedDescription?: string[]
  detailedDescriptionEn?: string[]
  whatILearned?: string[]
  whatILearnedEn?: string[]
}

// Education
export interface Education {
  id: string
  institution: string
  institutionEn?: string
  degree: string
  degreeEn?: string
  field: string
  fieldEn?: string
  specialization?: string
  specializationEn?: string
  startDate: string
  endDate: string | 'present'
  description?: string
  descriptionEn?: string
  achievements?: string[]
  achievementsEn?: string[]
  thesis?: {
    title: string
    titleEn?: string
    description?: string
    descriptionEn?: string
    projectId?: string
  }
}

// Certificates
export interface Certificate {
  id: string
  name: string
  nameEn?: string
  issuer: string
  date: string
  credentialUrl?: string
  imageUrl?: string
  description?: string
  descriptionEn?: string
}

// Skills and Technologies
export interface SkillTechnology {
  name: string
  context: string
  contextEn?: string
  iconClass?: string
}

export interface SkillGroup {
  category: string
  categoryEn?: string
  icon: string
  technologies: SkillTechnology[]
}

// Personal Info
export interface PersonalInfo {
  name: string
  title: string
  titleEn?: string
  location: string
  locationEn?: string
  bio: string
  bioEn?: string
  longBio?: string[]
  longBioEn?: string[]
  avatarUrl?: string
  resumeUrl?: string
  resumeUrlPl?: string
  resumeUrlEn?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

// Navigation
export interface NavItem {
  labelKey: string
  href: string
}

// GitHub API
export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  watchers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

// Themes
export type Theme = 'light' | 'dark'
