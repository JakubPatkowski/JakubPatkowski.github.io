export type Lang = 'pl' | 'en'

const pl = {
  //  Navigation 
  'nav.home':         'Start',
  'nav.about':        'O mnie',
  'nav.skills':       'Umiejętności',
  'nav.experience':   'Doświadczenie',
  'nav.projects':     'Projekty',
  'nav.education':    'Edukacja',
  'nav.certificates': 'Certyfikaty',
  'nav.contact':      'Kontakt',
  'nav.cv': 'CV',

  //  Hero 
  'hero.greeting':    'Cześć, jestem',
  'hero.viewProjects':'Zobacz moje projekty',
  'hero.contact':     'Kontakt',

  //  About me
  'about.title':    'O mnie',
  'about.subtitle': 'Poznaj mnie lepiej – kim jestem i co robię',
  'about.field':    'Informatyka',

  //  Experience 
  'experience.title':       'Doświadczenie',
  'experience.subtitle':    'Moja ścieżka zawodowa i zdobyte doświadczenie',
  'experience.present':     'Obecnie',
  'experience.details':     'Więcej szczegółów',
  'experience.responsibilities': 'Zakres obowiązków',
  'experience.technologies':     'Technologie',
  'experience.whatILearned':     'Czego się nauczyłem',
  'experience.notFound':         'Doświadczenie nie zostało znalezione',
  'experience.backToList':       'Wróć do doświadczeń',
  'experience.aboutJob':         'O tej pracy',
  'experience.summary':          'Podsumowanie',
  'experience.position':         'Stanowisko',
  'experience.company':          'Firma',
  'experience.period':           'Okres',
  'experience.location':         'Lokalizacja',

  //  Projects
  'projects.title':       'Projekty',
  'projects.subtitle':    'Wybrane projekty z mojego portfolio',
  'projects.details':     'Szczegóły',
  'projects.code':        'Kod',
  'projects.demo':        'Demo',
  'projects.highlights':  'Co zawiera projekt',
  'projects.technologies':'Technologie',
  'projects.featured':    'Wyróżniony',
  'projects.backToList':  'Powrót do listy',
  'projects.notFound':    'Projekt nie został znaleziony',
  'projects.aboutProject':'O projekcie',
  'projects.keyElements': 'Kluczowe elementy',
  'projects.screenshots': 'Screenshoty',
  'projects.noScreenshots':'Brak screenshotów.',
  'projects.links':       'Linki',
  'projects.githubRepo':  'Repozytorium GitHub',
  'projects.allOnGithub': 'Wszystkie projekty na GitHub',
  'projects.lastUpdate':  'Ostatnia aktualizacja: ',
  'projects.githubError': 'Nie udało się pobrać statystyk z GitHub. Wyświetlam dane statyczne.',

  //  Education
  'education.title':    'Edukacja',
  'education.subtitle': 'Moje wykształcenie i zdobyta wiedza akademicka',
  'education.thesis':   'Praca dyplomowa',
  'education.present':  'Obecnie',
  'education.viewProject': 'Zobacz projekt',

  //  Certificates 
  'certificates.title':    'Certyfikaty',
  'certificates.subtitle': 'Ukończone kursy i uzyskane certyfikaty',
  'certificates.verify':   'Weryfikuj',

  //  Contact 
  'contact.title':       'Kontakt',
  'contact.subtitle':    'Skontaktuj się ze mną',
  'contact.whereToFind': 'Gdzie mnie znaleźć',
  'contact.location':    'Lokalizacja',
  'contact.socialMedia': 'Social media',
  'contact.writeToMe':   'Napisz do mnie',
  'contact.message':     'Najlepszym sposobem na kontakt jest LinkedIn – odpisuję zazwyczaj w ciągu doby. Możesz też sprawdzić moje projekty i aktywność na GitHubie.',
  'contact.form.name':              'Imię i nazwisko',
  'contact.form.namePlaceholder':   'Jan Kowalski',
  'contact.form.email':             'Twój adres e-mail',
  'contact.form.emailPlaceholder':  'jan@przyklad.pl',
  'contact.form.message':           'Wiadomość',
  'contact.form.messagePlaceholder':'Cześć Jakub, chciałem/chciałam się skontaktować w sprawie...',
  'contact.form.send':              'Wyślij wiadomość',
  'contact.form.sending':           'Wysyłanie...',
  'contact.form.successMessage':    'Wiadomość wysłana! Odezwę się najszybciej jak to możliwe.',
  'contact.form.sendAnother':       'Wyślij kolejną wiadomość',
  'contact.form.errorMessage':      'Coś poszło nie tak. Spróbuj ponownie lub napisz do mnie na LinkedIn.',
  
  // Footer
  'footer.info': 'Strona w trakcie rozwoju.',

  // Common 
  'common.backToHome': 'Strona główna',
  'common.notFound':   'Nie znaleziono',
  'common.goHome':     'Wróć na stronę główną',

  // CV
  'cv.title':       'Curriculum Vitae',
  'cv.subtitle':    'Pobierz lub wyświetl moje CV w wybranym języku',
  'cv.downloadPl':  'Pobierz PL',
  'cv.downloadEn':  'Pobierz EN',
  'cv.previewPl':   'Wyświetl PL',
  'cv.previewEn':   'Wyświetl EN',
  'cv.note':        'Wersja publiczna – nie zawiera danych kontaktowych',
} as const

// English translations – TypeScript will force coverage of the same keys.
const en: Record<keyof typeof pl, string> = {
  'nav.home':         'Home',
  'nav.about':        'About',
  'nav.skills':       'Skills',
  'nav.experience':   'Experience',
  'nav.projects':     'Projects',
  'nav.education':    'Education',
  'nav.certificates': 'Certificates',
  'nav.contact':      'Contact',
  'nav.cv': 'CV',

  'hero.greeting':    "Hi, I'm",
  'hero.viewProjects':'See my projects',
  'hero.contact':     'Contact',

  'about.title':    'About me',
  'about.subtitle': 'Get to know me better – who I am and what I do',
  'about.field':    'Computer Science',

  'experience.title':       'Experience',
  'experience.subtitle':    'My professional path and acquired experience',
  'experience.present':     'Present',
  'experience.details':     'More details',
  'experience.responsibilities': 'Responsibilities',
  'experience.technologies':     'Technologies',
  'experience.whatILearned':     'What I learned',
  'experience.notFound':         'Experience not found',
  'experience.backToList':       'Back to experience',
  'experience.aboutJob':         'About this job',
  'experience.summary':          'Summary',
  'experience.position':         'Position',
  'experience.company':          'Company',
  'experience.period':           'Period',
  'experience.location':         'Location',

  'projects.title':       'Projects',
  'projects.subtitle':    'Selected projects from my portfolio',
  'projects.details':     'Details',
  'projects.code':        'Code',
  'projects.demo':        'Demo',
  'projects.highlights':  'Project highlights',
  'projects.technologies':'Technologies',
  'projects.featured':    'Featured',
  'projects.backToList':  'Back to list',
  'projects.notFound':    'Project not found',
  'projects.aboutProject':'About the project',
  'projects.keyElements': 'Key elements',
  'projects.screenshots': 'Screenshots',
  'projects.noScreenshots':'No screenshots available.',
  'projects.links':       'Links',
  'projects.githubRepo':  'GitHub Repository',
  'projects.allOnGithub': 'All projects on GitHub',
  'projects.lastUpdate':  'Last update: ',
  'projects.githubError': 'Failed to fetch GitHub stats. Showing static data.',

  'education.title':    'Education',
  'education.subtitle': 'My academic background and acquired knowledge',
  'education.thesis':   'Thesis',
  'education.present':  'Present',
  'education.viewProject': 'View project',

  'certificates.title':    'Certificates',
  'certificates.subtitle': 'Completed courses and obtained certificates',
  'certificates.verify':   'Verify',

  'contact.title':       'Contact',
  'contact.subtitle':    'Get in touch',
  'contact.whereToFind': 'Where to find me',
  'contact.location':    'Location',
  'contact.socialMedia': 'Social media',
  'contact.writeToMe':   'Write to me',
  'contact.message':     'The best way to reach me is via LinkedIn – I usually reply within a day. You can also check out my projects and activity on GitHub.',
  'contact.form.name':              'Full name',
  'contact.form.namePlaceholder':   'John Smith',
  'contact.form.email':             'Your email address',
  'contact.form.emailPlaceholder':  'john@example.com',
  'contact.form.message':           'Message',
  'contact.form.messagePlaceholder':'Hi Jakub, I wanted to reach out about...',
  'contact.form.send':              'Send message',
  'contact.form.sending':           'Sending...',
  'contact.form.successMessage':    "Message sent! I'll get back to you as soon as possible.",
  'contact.form.sendAnother':       'Send another message',
  'contact.form.errorMessage':      'Something went wrong. Please try again or reach me on LinkedIn.',

  'footer.info': 'Page under development.',

  'common.backToHome': 'Home',
  'common.notFound':   'Not found',
  'common.goHome':     'Go to home page',

  'cv.title':       'Curriculum Vitae',
  'cv.subtitle':    'Download or preview my CV in your preferred language',
  'cv.downloadPl':  'Download PL',
  'cv.downloadEn':  'Download EN',
  'cv.previewPl':   'Preview PL',
  'cv.previewEn':   'Preview EN',
  'cv.note':        'Public version – does not contain contact details',
}

// Export

export const translations: Record<Lang, Record<keyof typeof pl, string>> = { pl, en }

// Key type – import in components to ensure type-safety
export type TranslationKey = keyof typeof pl
