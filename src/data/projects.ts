import type { Project } from '../types'
 
export const projects: Project[] = [
  {
    id: 'korepetycje-online',
    title: 'Korepetycje Online Backend',
    titleEn: 'Online Tutoring Backend',
    description: 'Backend platformy edukacyjnej do korepetycji online z systemem kursów, wirtualną walutą i autoryzacją **JWT**. Napisany w **Spring Boot**. Posiada rozbudowaną bazę danych **PostgreSQL** i zaawansowaną logikę biznesową.',
    descriptionEn: 'Backend of an educational platform for online tutoring with a course system, virtual currency and **JWT** authorization. Implemented in **Spring Boot**. It features a extensive **PostgreSQL** database and advanced business logic.',
    longDescription:
      'Kompleksowy backend dla platformy edukacyjnej umożliwiającej prowadzenie korepetycji online. Projekt powstał jako **praca inżynierska** i demonstruje umiejętność budowania pełnego systemu backendowego z **relacyjną bazą danych**, **autoryzacją** i **logiką biznesową**.',
    longDescriptionEn:
      'A comprehensive backend for an educational platform enabling online tutoring. The project was created as an **engineering thesis** and demonstrates the ability to build a complete backend system with a **relational database**, **authorization** and **business logic**.',
    highlights: [
      'Architektura **REST API** oparta na **Spring Boot** z rozdzieleniem warstw (controller / service / repository)',
      'System autoryzacji i uwierzytelniania oparty na **JWT** z odświeżaniem tokenów',
      'Wirtualna waluta wewnątrz platformy – zakup kursów, historia transakcji',
      'Zarządzanie kursami i materiałami edukacyjnymi (**CRUD**, stany publikacji)',
      'Pełna konteneryzacja w **Dockerze** (app + **PostgreSQL**)',
    ],
    highlightsEn: [
      '**REST API** architecture based on **Spring Boot** with layer separation (controller / service / repository)',
      '**JWT**-based authentication and authorization system with token refresh',
      'In-platform virtual currency – course purchases, transaction history',
      'Course and educational material management (**CRUD**, publication states)',
      'Full **Docker** containerization (app + **PostgreSQL**)',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'REST API', 'Hibernate'],
    githubUrl: 'https://github.com/JakubPatkowski/KorepetycjeOnlineBackend',
    images: [
      '/projects/korepetycje-online-backend/ekorki_erd_diagram.png',
      '/projects/korepetycje-online-backend/ekorki_frontend.png',
      '/projects/korepetycje-online-backend/ekorki_swagger.png',
      '/projects/korepetycje-online-backend/ekorki_tests.png',
    ],
    featured: true,
    category: 'backend',
  },
  {
    id: 'todo-task-api',
    title: 'TodoTask API',
    description: '**REST API** do zarządzania zadaniami zbudowane w **Clean Architecture** z kompletnymi **testami integracyjnymi**.',
    descriptionEn: 'A task management **REST API** built with **Clean Architecture** and comprehensive **integration tests**.',
    longDescription:
      'Projekt demonstracyjny pokazujący implementację **Clean Architecture** w ekosystemie **.NET 8**. Celem było stworzenie referencyjnej implementacji dobrych praktyk: separacja warstw, **dependency injection**, testowanie integracyjne z prawdziwą bazą danych uruchamianą w kontenerze.',
    longDescriptionEn:
      'A demo project showcasing **Clean Architecture** implementation in the **.NET 8** ecosystem. The goal was to create a reference implementation of best practices: layer separation, **dependency injection**, integration testing with a real database running in a container.',
    highlights: [
      '**Clean Architecture** – wyraźny podział na Domain, Application, Infrastructure i API',
      'Pełny zestaw testów integracyjnych z użyciem **Testcontainers** (**PostgreSQL** w Dockerze)',
      'Walidacja danych z **FluentValidation**, obsługa błędów przez **Problem Details** (RFC 7807)',
      'Dokumentacja API przez **Swagger** / **OpenAPI**',
    ],
    highlightsEn: [
      '**Clean Architecture** – clear separation into Domain, Application, Infrastructure and API',
      'Full integration test suite using **Testcontainers** (**PostgreSQL** in Docker)',
      'Data validation with **FluentValidation**, error handling via **Problem Details** (RFC 7807)',
      'API documentation through **Swagger** / **OpenAPI**',
    ],
    technologies: ['.NET 8', 'C#', 'Clean Architecture', 'Testcontainers', 'Docker', 'xUnit', 'PostgreSQL'],
    githubUrl: 'https://github.com/JakubPatkowski/TodoTaskApi',
    images: [
      '/projects/todo-task-api/todo_swagger.png',
      '/projects/todo-task-api/todo_swagger_get.png',
    ],
    featured: true,
    category: 'backend',
  },
  {
    id: 'angular-laravel',
    title: 'Porównywarka Cen Nieruchomości',
    titleEn: 'Real Estate Price Comparison',
    description: '**Fullstack** aplikacja do porównywania cen nieruchomości z danymi z **API NBP**.',
    descriptionEn: 'A **fullstack** application for comparing real estate prices with data from the **NBP API**.',
    longDescription:
      'Aplikacja fullstack łącząca **Angular** na frontendzie z **Laravel** na backendzie. Pobiera i analizuje dane o cenach nieruchomości z **API NBP**, pozwalając użytkownikom porównywać ceny w różnych miastach i na przestrzeni czasu.',
    longDescriptionEn:
      'A fullstack application combining **Angular** on the frontend with **Laravel** on the backend. It fetches and analyzes real estate price data from the **NBP API**, allowing users to compare prices across different cities and over time.',
    highlights: [
      'Frontend w **Angular** z **TypeScript** – komponenty, serwisy, routing',
      'Backend w **Laravel** (**PHP**) – **REST API**, migracje, **Eloquent ORM**',
      'Integracja z publicznym **API NBP** do pobierania danych o cenach',
      'Wykresy i tabele porównawcze w interfejsie użytkownika',
    ],
    highlightsEn: [
      '**Angular** frontend with **TypeScript** – components, services, routing',
      '**Laravel** backend (**PHP**) – **REST API**, migrations, **Eloquent ORM**',
      'Integration with the public **NBP API** for fetching price data',
      'Comparison charts and tables in the user interface',
    ],
    technologies: ['Angular', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/JakubPatkowski/ProjektAngularLaravell',
    images: [
      '/projects/angular-laravel/home_page.png',
      '/projects/angular-laravel/register.png',
      '/projects/angular-laravel/login.png',
      '/projects/angular-laravel/data_table.png'
    ],
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'warsaw-clustering',
    title: 'Warsaw Real Estate Clustering',
    description: '**Klasteryzacja** rynku nieruchomości w Warszawie algorytmem **K-means** z **wizualizacją** na mapach.',
    descriptionEn: '**Clustering** of the Warsaw real estate market using **K-means** algorithm with map **visualizations**.',
    longDescription:
      'Projekt **data science** analizujący rynek nieruchomości w Warszawie. Używa algorytmu **K-means** do grupowania dzielnic według cen i charakterystyki mieszkań. Wyniki wizualizowane są na interaktywnych mapach z użyciem **GeoPandas** i **Folium**.',
    longDescriptionEn:
      'A **data science** project analyzing the Warsaw real estate market. It uses the **K-means** algorithm to group districts by price and apartment characteristics. Results are visualized on interactive maps using **GeoPandas** and **Folium**.',
    highlights: [
      'Eksploracyjna analiza danych (**EDA**) – statystyki opisowe, rozkłady, korelacje',
      'Klasteryzacja **K-means** z optymalnym doborem liczby klastrów (**metoda łokcia**)',
      'Geowizualizacja wyników na mapach Warszawy z **GeoPandas** i **Folium**',
      '**Jupyter Notebook** z pełną dokumentacją metodologii',
    ],
    highlightsEn: [
      'Exploratory data analysis (**EDA**) – descriptive statistics, distributions, correlations',
      '**K-means** clustering with optimal cluster number selection (**elbow method**)',
      'Geovisualization of results on Warsaw maps using **GeoPandas** and **Folium**',
      '**Jupyter Notebook** with full methodology documentation',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'GeoPandas', 'Folium', 'K-means', 'Jupyter'],
    githubUrl: 'https://github.com/JakubPatkowski/WarsawRealEstateClustering',
    images: [
      '/projects/warsaw-clustering/district_boundaries_satelite_map.png',
      '/projects/warsaw-clustering/cluster_open_street_map.png',
      '/projects/warsaw-clustering/heat_map.png',
      '/projects/warsaw-clustering/report_overview.png',
    ],
    featured: true,
    category: 'data-science',
  },
]
 
export const repoToProjectId: Record<string, string> = {
  KorepetycjeOnlineBackend: 'korepetycje-online',
  KosepetycjeOnlineBackend: 'korepetycje-online',
  TodoTaskApi: 'todo-task-api',
  ProjektAngularLaravell: 'angular-laravel',
  WarsawRealEstateClustering: 'warsaw-clustering',
}
 
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}
 
export function getProjectByRepoName(repoName: string): Project | undefined {
  const projectId = repoToProjectId[repoName]
  if (!projectId) return undefined
  return getProjectById(projectId)
}