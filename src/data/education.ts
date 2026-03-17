import type { Education } from '../types'

export const education: Education[] = [
  {
    id: 'pollub-mgr',
    institution: 'Politechnika Lubelska',
    institutionEn: 'Lublin University of Technology',
    degree: 'Magister',
    degreeEn: 'Master of Science',
    field: 'Informatyka',
    fieldEn: 'Computer Science',
    specialization: 'Wytwarzanie oprogramowania i serwisy internetowe',
    specializationEn: 'Software Engineering and Web Services',
    startDate: '2025',
    endDate: 'present',
    description: 'Studia magisterskie na kierunku Informatyka. Specjalizacja skupia się na inżynierii oprogramowania, architekturze systemów i technologiach webowych.',
    descriptionEn: 'Master\'s studies in Computer Science. The specialization focuses on software engineering, system architecture and web technologies.',
  },
  {
    id: 'pollub-inz',
    institution: 'Politechnika Lubelska',
    institutionEn: 'Lublin University of Technology',
    degree: 'Inżynier',
    degreeEn: 'Bachelor of Engineering',
    field: 'Informatyka',
    fieldEn: 'Computer Science',
    startDate: '2020',
    endDate: '2025',
    description: 'Studia inżynierskie zakończone obroną pracy dyplomowej o platformie edukacyjnej do korepetycji online.',
    descriptionEn: 'Engineering studies completed with the defense of a thesis on an educational platform for online tutoring.',
    thesis: {
      title: 'Aplikacja webowa do wspierania procesu korepetycji',
      titleEn: 'A web application to support the tutoring process',
      description: 'Projekt i implementacja platformy edukacyjnej z wykorzystaniem Spring Boot (backend) i React (frontend). System obsługuje zarządzanie kursami, wirtualną walutę i autoryzację JWT.',
      descriptionEn: 'Design and implementation of an educational platform using Spring Boot (backend) and React (frontend). The system handles course management, virtual currency and JWT authorization.',
      projectId: 'korepetycje-online',
    }
  },
  {
    id: 'liceum',
    institution: 'I Liceum Ogólnokształcące im. Stanisława Staszica w Hrubieszowie',
    institutionEn: 'Stanisław Staszic High School No. 1 in Hrubieszów',
    degree: 'Wykształcenie średnie',
    degreeEn: 'Secondary education',
    field: 'Profil matematyczno-fizyczno-informatyczny',
    fieldEn: 'Mathematics, Physics and Computer Science profile',
    startDate: '2017',
    endDate: '2020',
    description: 'Liceum z rozszerzonym programem matematyki, fizyki i informatyki.',
    descriptionEn: 'High school with an advanced curriculum in mathematics, physics and computer science.'
  },
]
