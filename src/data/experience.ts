import type { Experience } from '../types'
 
export const experiences: Experience[] = [
  {
    id: 'unmanned-systems',
    company: 'Unmanned Systems Poland',
    position: '.NET Backend Developer',
    location: 'Lublin (zdalnie)',
    locationEn: 'Lublin (remote)',
    startDate: '2024-12',
    endDate: 'present',
     summary:
      'Rozwijam platformę **Seecore** – **modularny monolit** do zarządzania organizacjami i zespołami, zintegrowany z **AI**. Architektura **Clean Architecture** + **DDD** + **CQRS**, **Apache Pulsar**, **Keycloak**. Pełna implementacja niezależnego mikroserwisu **HubPlugin**. Uczestniczę w spotkaniach z zagranicznymi inwestorami',
    summaryEn:
      'Developing **Seecore** – a **modular monolith** platform for organisation and team management, integrated with **AI**. **Clean Architecture** + **DDD** + **CQRS**, **Apache Pulsar**, **Keycloak**. Full independent implementation of the **HubPlugin** satellite microservice (forum). Participation in meetings with international investors.',
    responsibilities: [
      'Projektowanie i implementacja modułów backendowych w Clean Architecture + DDD + CQRS',
      'Udział przy budowie systemu uprawnień z mechaniką ACL i bitmaskową',
      'Tworzenie i utrzymanie mikroserwisu satelitarnego HubPlugin (forum, niezależny serwer z własną bazą danych PostgreSQL)',
      'Definiowanie kontraktów, eventów i przepływów integracyjnych przez Apache Pulsar. Integracja z Keycloak, RabbitMQ i protokołem Matrix',
      'Przeprowadzanie code review i pomoc nowemu członkowi zespołu',
      'Tworzenie dokumentacji technicznej i aktualizowanie list tasków i bugów',
      'Tworzenie testów jednostkowych i integracyjnych',
      'Uczestniczenie w daily oraz spotkaniach z zagranicznymi inwestorami'
    ],
    responsibilitiesEn: [
      'Designing and implementing backend modules in Clean Architecture + DDD + CQRS',
      'Participation in building a permissions system with ACL and bitmask mechanics',
      'Building and maintaining the HubPlugin satellite microservice (forum, independent server)',
      'Defining event, contracts and integration flows via Apache Pulsar. Integration with Keycloak, RabbitMQ, and Matrix Protocol',
      'Conducting code review and helping a new team member',
      'Writing technical documentation and updating task and bug lists',
      'Creating unit and integration tests',
      'Participating in daily standups and meetings with international investors',
    ],
    technologies: ['.NET 8', '.NET 10', 'C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Apache Pulsar', 'RabbitMQ', 'Keycloak', 'Docker', 'DDD', 'CQRS', 'Grafana'],
    detailedDescription: [
      'W Unmanned Systems Poland rozwijam platformę **Seecore** — wielomodułową aplikację backendową do zarządzania organizacjami i zespołami, zintegrowaną z **AI**. System zbudowany jest jako **modularny monolit**: poszczególne moduły mają ścisłe granice architektoniczne oparte na **Clean Architecture** i **Domain-Driven Design**, a komunikują się między sobą przez **Apache Pulsar** jak gdyby były osobnymi serwisami.',
      'Jednym z głównych obszarów mojej pracy jest projektowanie i implementacja modułów backendowych. W pełni zaimplementowałem wiele modułów od domeny i bazy danych aż po endpointy.',
      'Poza monolitem rozwijam niezależnie wdrożony serwis satelitarny **HubPlugin** — komponent dostarczający funkcjonalność forum, działający na osobnym serwerze z własną bazą danych **PostgreSQL**. Hub komunikuje się z monolitem przez **REST** i **Apache Pulsar**.',
      'Code review — dbam m.in. o czystość kodu oraz poprawność walidacji, logiki biznesowej i architektury. Piszę szczegółową dokumentację techniczną oraz definiuję oraz aktualizuję listy zadań i bugów na **Notion**',
      'Aktywnie uczestniczę w spotkaniach z zagranicznymi inwestorami'
    ],
    detailedDescriptionEn: [
      'At Unmanned Systems Poland I develop **Seecore** — a multi-module backend application for organisation and team management, integrated with **AI**. The system is built as a **modular monolith**: individual modules have strict architectural boundaries based on **Clean Architecture** and **Domain-Driven Design**, and communicate with each other via **Apache Pulsar** as if they were separate services.',
      'One of my main areas of work is designing and implementing backend modules. I have fully implemented many modules from the domain and database layers all the way to the endpoints.',
      'Beyond the monolith, I independently develop the **HubPlugin** satellite service — a component providing forum functionality, running on a separate server with its own **PostgreSQL** database. Hub communicates with the monolith via **REST** and **Apache Pulsar**.',
      'Code review — I ensure, among other things, code cleanliness and correctness of validation, business logic, and architecture. I write detailed technical documentation and define and update task and bug lists on **Notion**.',
      'I actively participate in meetings with international investors.',
    ],
    whatILearned: [
      'Zaplanowanie i implementacja satelitarnego mikroserwisu HubPlugin',
      'Praktyczne doświadczenie w implementacji aplikacji biznesowych oraz metodologi Agile',
      'DDD w praktyce – agregaty, value objects, serwisy domenowe, zdarzenia domenowe i ich kontrakt',
      'CQRS – separacja modelu zapisu i odczytu, projekcje',
      'Mechanika uprawnień – ACL, bitmaskowe modele, provisioning workspace\'ów',
      'Apache Pulsar – topics, subskrypcje, acknowledgment, projektowanie kontraktów zdarzeń',
      'Autoryzacja za pomocą Keycloak',
      'Przeprowadzanie rzetelnego code review',
      'Metody zarządzania produkcyjną bazą danych',
      'Pisanie dokumentacji technicznej dla innych developerów',
    ],
    whatILearnedEn: [
      'Planning and implementing the HubPlugin satellite microservice',
      'Practical experience in building business applications and Agile methodology',
      'DDD in practice – aggregates, value objects, domain services, domain events and their contracts',
      'CQRS – read/write model separation, projections',
      'Permission mechanics – ACL, bitmask models, workspace provisioning',
      'Apache Pulsar – topics, subscriptions, acknowledgment, designing event contracts',
      'Authentication via Keycloak',
      'Conducting thorough code review',
      'Production database management methods',
      'Writing technical documentation for other developers',
    ],
  },
  {
    id: 'giganci',
    company: 'Giganci Programowania',
    position: 'Instruktor Programowania',
    positionEn: 'Programming Instructor',
    location: 'Lublin',
    startDate: '2024-07',
    endDate: 'present',
    summary:
      'Prowadzenie długoterminowych kursów z **C#**, **C++** i **Cyberbezpieczeństwa** dla grup 8-12 osobowych. Przeprowadzanie lekcji pokazowych z **C#** i **Python**. Planowanie i prowadzenie spotkań.',
    summaryEn:
      'Teaching long-term courses in **C#**, **C++** and **Cybersecurity** for groups of 8–12 students. Conducting demo lessons in **C#** and **Python**. Planning and leading meetings.',
    responsibilities: [
      'Prowadzenie długoterminowych kursów z cyberbezpieczeństwa, C++ i C# dla grup 8-12 osobowych',
      'Przeprowadzanie lekcji pokazowych (C#, Python) dla potencjalnych kursantów',
      'Przygotowywanie materiałów, monitorowanie postępów uczniów',
      'Dostosowywanie tempa nauczania do grupy, komunikacja z rodzicami',
      'Obsługa systemu CRM i Google Meet'
    ],
   responsibilitiesEn: [
      'Teaching long-term courses in Cybersecurity, C++ and C# for groups of 8–12 students',
      'Conducting trial lessons (C#, Python) for prospective students',
      'Preparing materials and monitoring student progress',
      'Adapting teaching pace to the group and communicating with parents',
      'Using CRM system and Google Meet',
    ],
    technologies: ['C#', 'C++', 'Python', 'Cybersecurity'],
    detailedDescription: [
      'W **Giganci Programowania** prowadzę zajęcia w grupach 8-12 osobowych w różnych przedziałach wiekowych. Praca w takiej grupie wymaga dużej elastyczności, planowania oraz kompetencji miękkich',
      'Prowadzę roczne kursy z **C#**, **C++** i **Cyberbezpieczeństwa**. Przeprowadzam również lekcje pokazowe z **C#** i **Pythona**',
      'Na zajęciach poruszam takie tematy jak **programowanie obiektowe**, **aplikacje okienkowe**, **algorytmy**, podstawy programowania aplikacji internetowych, podstawy **Kali Linuxa**, atak na otwarte porty, atak **man in the middle**',
    ],
    detailedDescriptionEn: [
      'At **Coding Giants**, I teach groups of 8-12 people of various ages. Working in such a group requires a lot of flexibility, planning, and soft skills.',
      'I teach annual courses in **C#**, **C++**, and **cybersecurity**. I also conduct demonstration classes in **C#** and **Python**.',
      'In my classes, I cover topics such as **object-oriented programming**, **windowed applications**, **algorithms**, basic web application programming, **Kali Linux** basics, open port attacks, and **man in the middle** attacks.',
    ],
     whatILearned: [
      'Umiejętność tłumaczenia złożonych konceptów prostym językiem',
      'Przygotowywanie i prowadzenie spotkań',
      'Umiejętność prowadzenia wielosobowej grupy',
      'Utrwalenie podstawowej wiedz w danych technologiach',
      'Podstawy cyberbezpieczeństwa, różne rodzaje ataków i jak się przed nimi zabezpieczać',
    ],
    whatILearnedEn: [
      'The ability to explain complex concepts in simple language',
      'Preparing and leading meetings',
      'Ability to lead a multi-person group',
      'Consolidating basic knowledge of specific technologies',
      'Cybersecurity basics, various types of attacks, and how to protect yourself against them',
    ],
  },
 {
    id: 'korepetycje',
    company: 'Działalność własna',
    companyEn: 'Self-employed',
    position: 'Korepetytor',
    positionEn: 'Private Tutor',
    location: 'Lublin / Online',
    startDate: '2019',
    endDate: 'present',
    summary:
      'Posiadam 7 letnie doświadczenie w udzielaniu korepetycji z **matematyki**, **fizyki** i **programowania**. Przygotowanie do matury, nauka **Pythona** i **C++**, zajęcia stacjonarne i online.',
    summaryEn:
      'I have 7 years of experience tutoring **mathematics**, **physics**, and **programming**. I prepare for final exams, teach **Python** and **C++**, and offer both in-person and online classes.',
    responsibilities: [
      'Udzielanie lekcji z fizyki i matematyki. Przygotowywanie uczniów do matury',
      'Nauka programowania Pythona i C++',
      'Dostosowanie tempa nauki do ucznia',
      'Przygotowywanie materiałów dydaktycznych',
      'Planowanie harmonogramu zajęć'
    ],
   responsibilitiesEn: [
      'Giving lessons in physics and mathematics. Preparing students for the final exams',
      'Teaching Python and C++ programming',
      'Adapting learning pace to each student',
      'Preparing teaching materials',
      'Planning the class schedule',
    ],
    technologies: ['Mathematics', 'Physics', 'Python', 'C++'],
    detailedDescription: [
      'Udzielam korepetycji od 2019 roku. Jeszcze w trakcie liceum zaczynałem od **matematyki** i **fizyki** na poziomie maturalnym.',
      'Z czasem rozszerzyłem ofertę o programowanie w **Python** i **C++**',
    ],
    detailedDescriptionEn: [
      'I have been tutoring since 2019. While still in high school, I started with **mathematics** and **physics** at the exam level.',
      'Over time I expanded my offering to include programming in **Python** and **C++**.',
    ],
    whatILearned: [
      'Głębokie usystematyzowanie wiedzy z matematyki i fizyki przez konieczność tłumaczenia',
      'Diagnozy luk w wiedzy i planowanie ścieżki nauki na miarę ucznia',
      'Praktyka umiejętności miękkich w kontaktach z uczniami',
      'Wydajne planowanie spotkań'
    ],
    whatILearnedEn: [
      'Deep systematization of mathematics and physics knowledge through the need to explain',
      'Diagnosing knowledge gaps and planning a learning path tailored to each student',
      'Practising soft skills in interactions with students',
      'Efficient scheduling of sessions',
    ],
  },
]
 
// Dates helpers
export function formatDate(dateStr: string | 'present', lang: 'pl' | 'en' = 'pl'): string {
  if (dateStr === 'present') return lang === 'en' ? 'Present' : 'Obecnie'
 
  const [year, month] = dateStr.split('-')
  if (!month) return year
 
  const monthsPl = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień',
  ]
  const monthsEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
 
  const months = lang === 'en' ? monthsEn : monthsPl
  return `${months[parseInt(month) - 1]} ${year}`
}
 
export function formatDateRange(
  startDate: string,
  endDate: string | 'present',
  lang: 'pl' | 'en' = 'pl',
): string {
  return `${formatDate(startDate, lang)} – ${formatDate(endDate, lang)}`
}
 
export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(e => e.id === id)
}