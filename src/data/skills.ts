import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  // 1. BACKEND
  {
    category: 'Backend',
    categoryEn: 'Backend',
    icon: '⚙️',
    technologies: [
      {
        name: 'C# / .NET 8',
        iconClass: 'devicon-dotnetcore-plain',
        context: 'Modularny monolit (Unmanned Systems Poland), Clean Architecture (TodoTask API), REST API, middleware',
        contextEn: 'Modular monolith (Unmanned Systems Poland), Clean Architecture (TodoTask API), REST API, middleware',
      },
      {
        name: 'Java / Spring Boot',
        iconClass: 'devicon-spring-original',
        context: 'Backend platformy e-learningowej (praca inż.), Spring Security + JWT, Hibernate, Caffeine Cache',
        contextEn: 'E-learning platform backend (engineering thesis), Spring Security + JWT, Hibernate, Caffeine Cache',
      },
      {
        name: 'REST API Design',
        iconClass: 'devicon-swagger-plain',
        context: 'Projektowanie endpointów, Problem Details (RFC 9457), wersjonowanie, OpenAPI / Swagger, WebSocket',
        contextEn: 'Endpoint design, Problem Details (RFC 9457), versioning, OpenAPI / Swagger, WebSocket',
      },
      {
        name: 'Laravel',
        iconClass: 'devicon-laravel-original',
        context: 'Projekt Angular + Laravel, Eloquent ORM, Blade, REST API z autoryzacją',
        contextEn: 'Angular + Laravel project, Eloquent ORM, Blade, REST API with authorization',
      },
    ],
  },

  // 2. Architecture & Patterns
  {
    category: 'Architektura & Wzorce',
    categoryEn: 'Architecture & Patterns',
    icon: '🏗️',
    technologies: [
      {
        name: 'Clean Architecture',
        iconClass: 'devicon-dotnetcore-plain',
        context: 'Separacja warstw Domain / Application / Infrastructure, Dependency Inversion, CQRS',
        contextEn: 'Domain / Application / Infrastructure layer separation, Dependency Inversion, CQRS',
      },
      {
        name: 'Domain-Driven Design',
        iconClass: 'devicon-java-plain',
        context: 'Agregaty, Value Objects, bounded contexts, modelowanie domeny biznesowej',
        contextEn: 'Aggregates, Value Objects, bounded contexts, business domain modeling',
      },
      {
        name: 'Modular Monolith',
        iconClass: 'devicon-csharp-plain',
        context: 'Moduły z własnymi kontekstami w .NET, komunikacja przez kontrakty, izolacja danych',
        contextEn: 'Modules with own contexts in .NET, contract-based communication, data isolation',
      },
      {
        name: 'Microservices',
        iconClass: 'devicon-docker-plain',
        context: 'Dekompozycja serwisów, komunikacja asynchroniczna, niezależny deploy i skalowanie',
        contextEn: 'Service decomposition, asynchronous communication, independent deployment and scaling',
      },
    ],
  },

  // 3. Databases
  {
    category: 'Bazy danych',
    categoryEn: 'Databases',
    icon: '🗄️',
    technologies: [
      {
        name: 'PostgreSQL',
        iconClass: 'devicon-postgresql-plain',
        context: 'Produkcyjne bazy w projektach komercyjnych i własnych, migracje, indeksy, schematy',
        contextEn: 'Production databases in commercial and personal projects, migrations, indexes, schemas',
      },
      {
        name: 'Entity Framework Core',
        iconClass: 'devicon-microsoftsqlserver-plain',
        context: 'Code-First, migracje, LINQ queries, Fluent API, relacje Many-to-Many',
        contextEn: 'Code-First, migrations, LINQ queries, Fluent API, Many-to-Many relationships',
      },
      {
        name: 'MySQL',
        iconClass: 'devicon-mysql-original',
        context: 'Projekt Angular + Laravel, Eloquent ORM, relacje i zapytania',
        contextEn: 'Angular + Laravel project, Eloquent ORM, relations and queries',
      },
    ],
  },

  // 4. Integrations & Communication
  {
    category: 'Integracje & Komunikacja',
    categoryEn: 'Integrations & Communication',
    icon: '🔗',
    technologies: [
      {
        name: 'Keycloak / OAuth2',
        iconClass: 'devicon-oauth-plain',
        context: 'Konfiguracja realmu, OIDC, integracja z .NET przez middleware, zarządzanie rolami',
        contextEn: 'Realm configuration, OIDC, .NET integration via middleware, role management',
      },
      {
        name: 'RabbitMQ',
        iconClass: 'devicon-rabbitmq-original',
        context: 'Kolejki wiadomości, exchange types, routing, dead-letter queues',
        contextEn: 'Message queues, exchange types, routing, dead-letter queues',
      },
      {
        name: 'Apache Pulsar',
        iconClass: 'devicon-apachekafka-original',
        context: 'Komunikacja asynchroniczna między modułami, topiki, subskrypcje, acknowledgment',
        contextEn: 'Asynchronous inter-module communication, topics, subscriptions, acknowledgment',
      },
      {
        name: 'MCP (Model Context Protocol)',
        iconClass: 'devicon-json-plain',
        context: 'Budowanie narzędzi backendowych (tools) do integracji z modelami językowymi AI',
        contextEn: 'Building backend tools for integration with AI language models',
      },
    ],
  },

  // 5. DevOps & Environment
  {
    category: 'DevOps & Środowisko',
    categoryEn: 'DevOps & Environment',
    icon: '🐳',
    technologies: [
      {
        name: 'Docker',
        iconClass: 'devicon-docker-plain',
        context: 'Konteneryzacja aplikacji i baz danych, docker-compose, Testcontainers, multi-stage builds',
        contextEn: 'Application and database containerization, docker-compose, Testcontainers, multi-stage builds',
      },
      {
        name: 'Git / GitHub',
        iconClass: 'devicon-github-original',
        context: 'Feature branches, code review, GitHub Actions CI/CD, GitHub Pages',
        contextEn: 'Feature branches, code review, GitHub Actions CI/CD, GitHub Pages',
      },
      {
        name: 'GitLab CI/CD',
        iconClass: 'devicon-gitlab-plain',
        context: 'Pipelines, automatyczne testy i deploy w środowisku komercyjnym',
        contextEn: 'Pipelines, automated tests and deployment in a commercial environment',
      },
      {
        name: 'Linux (Ubuntu)',
        iconClass: 'devicon-ubuntu-plain',
        context: 'Codzienna praca na serwerach, terminal, konfiguracja środowisk, SSH, systemd',
        contextEn: 'Daily work on servers, terminal, environment configuration, SSH, systemd',
      },
      {
        name: 'Grafana',
        iconClass: 'devicon-grafana-plain',
        context: 'Monitoring aplikacji, dashboardy, wizualizacja metryk i logów',
        contextEn: 'Application monitoring, dashboards, metrics and log visualization',
      },
    ],
  },

  // 6. FRONTEND
  {
    category: 'Frontend',
    categoryEn: 'Frontend',
    icon: '🖥️',
    technologies: [
      {
        name: 'TypeScript / React',
        iconClass: 'devicon-react-original',
        context: 'To portfolio — komponenty, hooki, React Router, integracja z GitHub API',
        contextEn: 'This portfolio — components, hooks, React Router, GitHub API integration',
      },
      {
        name: 'Angular',
        iconClass: 'devicon-angular-plain',
        context: 'Porównywarka Nieruchomości — komponenty, serwisy, routing, formularze reaktywne',
        contextEn: 'Real Estate Comparison — components, services, routing, reactive forms',
      },
      {
        name: 'HTML / CSS / Tailwind',
        iconClass: 'devicon-tailwindcss-original',
        context: 'Responsywne layouty, dark/light mode, utility-first CSS, Tailwind CSS',
        contextEn: 'Responsive layouts, dark/light mode, utility-first CSS, Tailwind CSS',
      },
      {
        name: 'Bootstrap',
        iconClass: 'devicon-bootstrap-plain',
        context: 'Szybkie prototypowanie UI, grid system, gotowe komponenty',
        contextEn: 'Quick UI prototyping, grid system, ready-made components',
      },
    ],
  },

  // 7. Other Competencies
  {
    category: 'Inne kompetencje',
    categoryEn: 'Other Competencies',
    icon: '🧩',
    technologies: [
      {
        name: 'Python / Analiza danych',
        iconClass: 'devicon-python-plain',
        context: 'Klasteryzacja (Warsaw Real Estate), pandas, scikit-learn, wizualizacje, nauczanie',
        contextEn: 'Clustering (Warsaw Real Estate), pandas, scikit-learn, visualizations, teaching',
      },
      {
        name: 'Testowanie (xUnit, JUnit)',
        iconClass: 'devicon-junit-plain',
        context: 'Testy integracyjne z Testcontainers, testy jednostkowe, Moq, WebApplicationFactory',
        contextEn: 'Integration tests with Testcontainers, unit tests, Moq, WebApplicationFactory',
      },
      {
        name: 'C++',
        iconClass: 'devicon-cplusplus-plain',
        context: 'Nauczanie dzieci i młodzieży, rozwiązania algorytmiczne, certyfikat SoloLearn',
        contextEn: 'Teaching children and teenagers, algorithmic solutions, SoloLearn certificate',
      },
      {
        name: 'Cyberbezpieczeństwo',
        // No iconClass - the component renders a Lucide <Shield> (padlock/shield)
        context: 'Cisco Introduction to Cybersecurity, podstawy bezpieczeństwa sieciowego i aplikacyjnego',
        contextEn: 'Cisco Introduction to Cybersecurity, fundamentals of network and application security',
      },
      {
        name: 'Sieci komputerowe',
        // No iconClass - the component renders a Lucide <Globe>
        context: 'Model OSI / TCP-IP, DNS, DHCP, subnetting, konfiguracja routerów i przełączników',
        contextEn: 'OSI / TCP-IP model, DNS, DHCP, subnetting, router and switch configuration',
      },
      {
        name: 'Dokumentacja & Współpraca',
        iconClass: 'devicon-notion-plain',
        context: 'Notion, Slite — dokumentacja techniczna, wiki zespołowe, procesy onboardingowe',
        contextEn: 'Notion, Slite — technical documentation, team wikis, onboarding processes',
      },
    ],
  },
]