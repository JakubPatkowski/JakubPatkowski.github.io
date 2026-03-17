import type { PersonalInfo, SocialLink, NavItem } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Jakub Patkowski',
  title: 'Backend Developer',
  location: 'Lublin, Polska',
  locationEn: 'Lublin, Poland',
  avatarUrl: '/JakubPatkowski/avatars/avatar.png',
  bio: 'Backend Developer z półtorarocznym doświadczeniem komercyjnym w .NET. W pracy rozwijam aplikację w architekturze modular monolith oraz DDD i jestem odpowiedzialny za implementację niezależnych serwisów satelitarnych.',
  bioEn: 'Backend Developer with one and a half years of commercial experience in .NET. At work I develop an application based on modular monolith architecture and DDD, and I am responsible for implementing independent satellite microservices.',
  longBio: [
    'Jestem **Backend Developerem** z półtorarocznym doświadczeniem komercyjnym w technologiach **C#/.NET**. Posiadam dobrą znajomość architektury **modular monolith** z **Clean Architecture** i **Domain-Driven Design**.',
    'W pracy rozwijam platformę **Seecore** — wielomodułową aplikację do zarządzania organizacjami i zespołami, zintegrowaną z **AI**. System wykorzystuje **Apache Pulsar** do komunikacji między modułami oraz **Keycloak** do autoryzacji. Aplikacja korzysta z niezależnie wdrożonych serwisów satelitarnych (**Pluginów**), w tym w pełni zaimplementowanego przeze mnie **Huba** — dostarczającego funkcjonalność forum.',
    'Prowadzę długoterminowe kursy z programowania w **C#** i **cyberbezpieczeństwa** w firmie **Giganci Programowania**. W wolnym czasie udzielam prywatnych korepetycji z **matematyki** i **programowania**.',
    'Jestem studentem II semestru studiów magisterskich na **Politechnice Lubelskiej** (Informatyka, specjalizacja: Wytwarzanie oprogramowania i serwisy internetowe). Pracę inżynierską napisałem z wykorzystaniem **Spring Boot**.',
  ],
  longBioEn: [
    'I am a **Backend Developer** with one and a half years of commercial experience in **C#/.NET** technologies. I have a solid knowledge of **modular monolith** architecture with **Clean Architecture** and **Domain-Driven Design**.',
    'At work I develop **Seecore** — a multi-module platform for organisation and team management, integrated with **AI**. The system uses **Apache Pulsar** for inter-module communication and **Keycloak** for authorisation. The application also relies on independently deployed satellite microservices (**Plugins**), including **Hub** — fully developed and implemented by me — which provides forum functionality.',
    'I teach long-term programming courses in **C#** and **cybersecurity** at **Giganci Programowania**. In my spare time I privately tutor students in **mathematics** and **programming**.',
    'I am a second-semester student of a part-time Master\'s programme at **Lublin University of Technology** (Computer Science, specialisation: Software Engineering and Web Services). My engineering thesis was built using **Spring Boot**.',
  ],
  
  resumeUrlPl: '/JakubPatkowski/cv/CV_Jakub_Patkowski_PL.pdf',
  resumeUrlEn: '/JakubPatkowski/cv/CV_Jakub_Patkowski_EN.pdf',
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/JakubPatkowski',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jakub-patkowski-613565346/',
    icon: 'Linkedin',
  },
]

// navItems use translation keys - components call t(item.labelKey)
export const navItems: NavItem[] = [
  { labelKey: 'nav.home',         href: '#hero' },
  { labelKey: 'nav.about',        href: '#about' },
  { labelKey: 'nav.skills',       href: '#skills' },
  { labelKey: 'nav.experience',   href: '#experience' },
  { labelKey: 'nav.projects',     href: '#projects' },
  { labelKey: 'nav.education',    href: '#education' },
  { labelKey: 'nav.certificates', href: '#certificates' },
  { labelKey: 'nav.cv',           href: '#cv' },
  { labelKey: 'nav.contact',      href: '#contact' },
]