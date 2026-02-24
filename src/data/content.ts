export const personalInfo = {
  name: "Juan David Herrera",
  handle: "juandaherrera",
  photo: "/img/juanda.webp",
  github: "https://github.com/juandaherrera",
  linkedin: "https://www.linkedin.com/in/juan-david-herrera/",
  instagram: "https://www.instagram.com/juandaherrep/",
  currentCompany: "Snoonu",
  currentCompanyUrl: "https://snoonu.com/",
  currentCompanyLogo: "/icons/snoonu_full.svg",
  repoUrl: "https://github.com/juandaherrera/personal_web",
  version: "v6.5.1",
  location: "Palmira, Colombia 🇨🇴",
  timezone: "America/Bogota",
};

export const typewriterTitles = {
  es: ["ML Backend Engineer", "Python Developer", "Data Engineer"],
  en: ["ML Backend Engineer", "Python Developer", "Data Engineer"],
};

export const aboutMe = {
  es: `Soy Ingeniero Industrial y Senior ML Backend Engineer con más de 5 años de experiencia en backend y data engineering. Me enfoco en diseñar y evolucionar sistemas distribuidos orientados a ML, priorizando escalabilidad, resiliencia y excelencia operativa. Actualmente trabajo en Snoonu, donde soy responsable técnico de servicios core construidos con Python y FastAPI, integrando modelos de ML en arquitecturas de microservicios y asegurando alto rendimiento en producción. También tengo experiencia en pipelines de datos y arquitecturas analíticas con Airflow y Snowflake.`,
  en: `I'm an Industrial Engineer and Senior ML Backend Engineer with over 5 years of experience in backend and data engineering. I focus on designing and evolving ML-oriented distributed systems, prioritizing scalability, resilience, and operational excellence. Currently at Snoonu, I act as technical owner of core services built with Python and FastAPI, integrating ML models into scalable microservice architectures and ensuring strong production performance. I also have experience building data pipelines and analytical architectures using Airflow and Snowflake.`,
};

export const technologies = [
  { name: "Python", icon: "python", url: "https://www.python.org/" },
  { name: "FastAPI", icon: "fastapi", url: "https://fastapi.tiangolo.com/" },
  { name: "Celery", icon: "celery", url: "https://docs.celeryq.dev/en/stable/" },
  { name: "Airflow", icon: "apacheairflow", url: "https://airflow.apache.org/" },
  { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
  { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org/" },
  { name: "Redis", icon: "redis", url: "https://redis.io/" },
  { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
  { name: "Kafka", icon: "apachekafka", url: "https://kafka.apache.org/" },
  { name: "RabbitMQ", icon: "rabbitmq", url: "https://www.rabbitmq.com/" },
  {
    name: "AWS",
    icon: "amazonaws",
    iconUrl:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23ff4d2e' d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/></svg>",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Azure",
    icon: "microsoftazure",
    iconUrl:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23ff4d2e' d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/></svg>",
    url: "https://azure.microsoft.com/",
  },
  { name: "GitHub Actions", icon: "githubactions", url: "https://github.com/features/actions" },
  { name: "Git", icon: "git", url: "https://git-scm.com/" },
  { name: "Snowflake", icon: "snowflake", url: "https://www.snowflake.com/" },
  { name: "BigQuery", icon: "googlecloud", url: "https://cloud.google.com/bigquery" },
  { name: "Spark", icon: "apachespark", url: "https://spark.apache.org/" },
  { name: "Django", icon: "django", url: "https://www.djangoproject.com/" },
  { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
  { name: "Railway", icon: "railway", url: "https://railway.app/" },
  { name: "Bitbucket", icon: "bitbucket", url: "https://bitbucket.org/" },
  { name: "Claude Code", icon: "anthropic", url: "https://claude.ai/code" },
  { name: "Antigravity", icon: "google", url: "https://antigravity.google/" },
  { name: "Codex", icon: "devbox", url: "https://openai.com/es-419/codex/" },
  { name: "Datadog", icon: "datadog", url: "https://www.datadoghq.com/" },
  { name: "Grafana", icon: "grafana", url: "https://grafana.com/" },
];

export interface Job {
  title: string;
  titleEn: string;
  startDate: string;
  endDate: string | null;
  description: string;
  descriptionEn: string;
  achievements: string | null;
  achievementsEn: string | null;
  technologies: string[];
}

export interface Company {
  name: string;
  url: string;
  logo: string;
  jobs: Job[];
}

export const experience: Company[] = [
  {
    name: "Snoonu",
    url: "https://www.snoonu.com/",
    logo: "/icons/snoonu.svg",
    jobs: [
      {
        title: "Senior ML Backend Engineer",
        titleEn: "Senior ML Backend Engineer",
        startDate: "2026-02-19",
        endDate: null,
        description:
          "Responsable técnico de servicios core de la plataforma, elevando estándares de arquitectura, escalabilidad y calidad en producción, y asegurando una integración robusta de soluciones de ML.",
        descriptionEn:
          "Technical owner of core platform services, raising standards for architecture, scalability and production quality, ensuring robust integration of ML solutions.",
        achievements: null,
        achievementsEn: null,
        technologies: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "RabbitMQ",
          "AWS",
          "Docker",
          "BigQuery",
        ],
      },
      {
        title: "Middle ML Backend Engineer",
        titleEn: "Middle ML Backend Engineer",
        startDate: "2025-02-10",
        endDate: "2026-02-19",
        description:
          "Encargado del desarrollo, mantenimiento y optimización de varios servicios core en Snoonu, incluyendo el servicio de cálculo de ETAs, el sistema de comunicaciones personalizadas basado en AWS Personalize y el servicio que funciona como feature store centralizado para los usuarios de la plataforma.",
        descriptionEn:
          "Responsible for developing, maintaining, and optimizing several core services at Snoonu, including the ETA calculation service, the personalized communications system based on AWS Personalize, and the centralized feature store service for platform users.",
        achievements:
          "Reduje la latencia P99 del servicio de ETAs de 130 ms a 40 ms (−70%). Instrumentalicé y lideré la migración del equipo hacia Datadog, definiendo estándares de observabilidad. Diseñé, desarrollé y llevé a producción dos servicios desde cero.",
        achievementsEn:
          "Reduced P99 latency of the ETAs service from 130ms to 40ms (−70%). Led team migration to Datadog, defining observability standards. Designed, developed, and shipped two services from scratch.",
        technologies: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "RabbitMQ",
          "DataDog",
          "AWS",
          "Docker",
          "Pydantic-AI",
          "BigQuery",
        ],
      },
    ],
  },
  {
    name: "Rappi",
    url: "https://www.rappi.com.co/",
    logo: "/icons/rappi_mustache.svg",
    jobs: [
      {
        title: "Python Developer & Data Engineer",
        titleEn: "Python Developer & Data Engineer",
        startDate: "2024-03-18",
        endDate: "2025-02-10",
        description:
          "Responsable del mantenimiento y desarrollo del microservicio que calcula las ganancias de los repartidores en cada orden, así como del diseño y mantenimiento de los datamarts de ganancias e incentivos.",
        descriptionEn:
          "Responsible for maintaining and developing the microservice that calculates courier earnings per order, as well as designing and maintaining the earnings and incentives datamarts.",
        achievements:
          "Entrené y desplegué en FastAPI un modelo de ML que predice el costo de +30.000 incentivos a la semana con un margen de error de $50 USD para el 80% de las predicciones. Automaticé, mediante Airflow, más de 8 procesos manuales realizados diariamente por 3 personas del equipo de pagos.",
        achievementsEn:
          "Trained and deployed an ML model in FastAPI that predicts the cost of +30,000 incentives per week with a $50 USD margin of error for 80% of predictions. Automated 8+ manual daily processes via Airflow, previously handled by 3 people.",
        technologies: [
          "Python",
          "FastAPI",
          "Airflow",
          "Docker",
          "Kafka",
          "PostgreSQL",
          "Snowflake",
          "Bitbucket",
        ],
      },
      {
        title: "Senior Data Analyst",
        titleEn: "Senior Data Analyst",
        startDate: "2023-07-01",
        endDate: "2024-03-17",
        description:
          "Responsable de mantener y gestionar la infraestructura de data analytics para el equipo de Incentivos a nivel global, garantizando la disponibilidad de datos precisos y confiables para respaldar la toma de decisiones estratégicas.",
        descriptionEn:
          "Responsible for maintaining and managing the data analytics infrastructure for the global Incentives team, ensuring accurate and reliable data availability to support strategic decision-making.",
        achievements:
          "Diseñé, implementé y gestioné la infraestructura central de data analytics para el equipo de Incentivos en 9 países de Rappi. Lideré un proyecto de segmentación de Incentivos mejorando la asignación presupuestaria mediante segmentaciones basadas en ML.",
        achievementsEn:
          "Designed and managed the central data analytics infrastructure for the Incentives team across 9 countries. Led an Incentives segmentation project improving budget allocation through ML-based segmentation.",
        technologies: ["Python", "Airflow", "Snowflake", "SQL", "Power BI", "Docker"],
      },
      {
        title: "Business Intelligence Analyst",
        titleEn: "Business Intelligence Analyst",
        startDate: "2022-06-01",
        endDate: "2023-07-01",
        description:
          "Apoyar el proceso de toma de decisiones de la operación de Colombia, proporcionando los datos y análisis necesarios para ello.",
        descriptionEn:
          "Supporting Colombia's operational decision-making process by providing the necessary data and analysis.",
        achievements:
          "Más de 15 dashboards y 200 queries optimizados. Modelos predictivos con hasta 95% de precisión para anticipar comportamientos en repartidores. Análisis de texto con NLP para hallar patrones y clasificaciones.",
        achievementsEn:
          "15+ dashboards and 200+ optimized queries. Predictive models with up to 95% accuracy for anticipating courier behaviors. NLP text analysis to identify patterns and classifications.",
        technologies: ["Python", "SQL", "Snowflake", "Power BI", "Airflow"],
      },
    ],
  },
  {
    name: "Tecnoquímicas",
    url: "https://www.tqconfiable.com/",
    logo: "/icons/tq.svg",
    jobs: [
      {
        title: "Data Analyst",
        titleEn: "Data Analyst",
        startDate: "2022-01-01",
        endDate: "2022-06-01",
        description:
          "Procesar y analizar información relacionada con la gestión de Operaciones Farma.",
        descriptionEn:
          "Processing and analyzing information related to Pharma Operations management.",
        achievements:
          "Diseñé e implementé un indicador + tablero en Power BI para medir la eficacia de estimados de venta. Automaticé múltiples presentaciones periódicas en Power BI reduciendo tiempo y mejorando calidad.",
        achievementsEn:
          "Designed and implemented a KPI + Power BI dashboard to measure sales forecast accuracy. Automated multiple periodic presentations in Power BI, reducing time and improving quality.",
        technologies: ["Excel", "Power BI", "Power Query", "DAX", "VBA"],
      },
      {
        title: "Intern",
        titleEn: "Intern",
        startDate: "2021-07-01",
        endDate: "2022-01-01",
        description:
          "Realizar el levantamiento de horas hombre, mapear procesos productivos/administrativos y generar oportunidades de mejora.",
        descriptionEn:
          "Conducting man-hour surveys, mapping productive/administrative processes, and generating improvement opportunities.",
        achievements:
          "Herramienta para levantamiento de información de horas hombre en 450K+ registros. Programación automática de 60+ operarios mediante algoritmos de programación lineal.",
        achievementsEn:
          "Tool for man-hour data collection across 450K+ records. Automated scheduling of 60+ workers using linear programming algorithms.",
        technologies: ["Excel", "VBA", "Python"],
      },
    ],
  },
  {
    name: "Universidad ICESI",
    url: "https://www.icesi.edu.co/",
    logo: "/icons/icesi.svg",
    jobs: [
      {
        title: "Monitor - Investigación de Operaciones",
        titleEn: "Operations Research Teaching Assistant",
        startDate: "2019-01-01",
        endDate: "2020-06-01",
        description:
          "Brindar apoyo en horarios extracurriculares a los estudiantes del curso de investigación de operaciones.",
        descriptionEn: "Providing extracurricular support to Operations Research course students.",
        achievements: null,
        achievementsEn: null,
        technologies: ["Excel", "AMPL", "Python"],
      },
    ],
  },
];

export interface Project {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  note?: string;
  noteEn?: string;
  technologies: string[];
  repositoryUrl: string;
  websiteUrl?: string;
  vibecoded?: boolean;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    name: "Web Personal v6",
    nameEn: "Personal Website v6",
    description:
      "La iteración actual de mi portafolio. Reescrito desde cero en Next.js con TypeScript y Tailwind CSS, y construido con ayuda de IA.",
    descriptionEn:
      "The current iteration of my portfolio. Rewritten from scratch in Next.js with TypeScript and Tailwind CSS, built with the help of AI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Azure Blob Storage",
      "Azure Front Door",
    ],
    repositoryUrl: "https://github.com/juandaherrera/personal-web-v2",
    websiteUrl: "https://www.juandaherrera.com",
    vibecoded: true,
    emoji: "🚀",
    gradientFrom: "#FF6B6B",
    gradientTo: "#FF9E5E",
  },
  {
    name: "Web Personal v5",
    nameEn: "Personal Website v5",
    description:
      "Versión anterior de mi portafolio, desarrollada en solitario con Python y Reflex, desplegada en Azure Container Apps.",
    descriptionEn:
      "Previous version of my portfolio, built solo with Python and Reflex, deployed on Azure Container Apps.",
    note: "El contenedor se apaga sin tráfico, puede tardar unos segundos en despertar 😅",
    noteEn: "The container shuts down when idle, it may take a few seconds to wake up 😅",
    technologies: ["Python", "Reflex", "Chakra UI", "Railway", "Docker", "Azure Container Apps"],
    repositoryUrl: "https://github.com/juandaherrera/personal_web",
    websiteUrl: "https://personal-web.braveriver-b6fac172.eastus.azurecontainerapps.io/",
    emoji: "🐍",
    gradientFrom: "#7C3AED",
    gradientTo: "#A78BFA",
  },
  {
    name: "Finmail (Azure Function)",
    nameEn: "Finmail (Azure Function)",
    description:
      "Sistema de procesamiento de correos electrónicos financieros construido con Azure Functions. Procesa correos transaccionales, extrae la información financiera relevante y la sube a una hoja de cálculo de Google.",
    descriptionEn:
      "Financial email processing system built with Azure Functions. Processes transactional emails, extracts relevant financial information, and uploads it to a Google Sheet.",
    technologies: ["Python", "UV", "Azure Functions", "Finances"],
    repositoryUrl: "https://github.com/juandaherrera/finmail",
    emoji: "💰",
    gradientFrom: "#059669",
    gradientTo: "#34D399",
  },
  {
    name: "Prueba Técnica Data Quality Engineer",
    nameEn: "Data Quality Engineer Technical Test",
    description: "Solución a prueba técnica de Data Quality Engineer.",
    descriptionEn: "Solution to a Data Quality Engineer technical test.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    repositoryUrl: "https://github.com/juandaherrera/prueba-dqe-r5",
    emoji: "📊",
    gradientFrom: "#D97706",
    gradientTo: "#FBBF24",
  },
];

export interface Certification {
  title: string;
  institute: string;
  instituteLogo: string;
  year: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    title: "AZ900 - Azure Certified",
    institute: "Microsoft",
    instituteLogo: "/icons/microsoft.svg",
    year: "2024",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/es-es/JuanDavidHerreraParra-4810/30A17FF8D8BDB9F0?sharingId",
  },
  {
    title: "Data Engineer",
    institute: "Platzi",
    instituteLogo: "/icons/platzi.svg",
    year: "2024",
    credentialUrl:
      "https://platzi.com/p/david.parra/learning-path/8323-data-engineer/diploma/detalle/",
  },
  {
    title: "BBDD para Data Engineers",
    institute: "Platzi",
    instituteLogo: "/icons/platzi.svg",
    year: "2024",
    credentialUrl:
      "https://platzi.com/p/david.parra/learning-path/13487-bases-datos-ingenieria/diploma/detalle/",
  },
];

export interface Education {
  degree: string;
  degreeEn: string;
  institution: string;
  logo: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "Ingeniero Industrial",
    degreeEn: "Industrial Engineer",
    institution: "Universidad ICESI",
    logo: "/icons/icesi.svg",
    period: "2017 – 2022",
  },
];

export interface Course {
  nameEn: string;
  nameEs: string;
  issueDate: string;
  credentialUrl: string;
  technologies: string[];
}

export interface CourseSchool {
  name: string;
  logo: string;
  url: string;
  courses: Course[];
}

export const courseSchools: CourseSchool[] = [
  {
    name: "Platzi",
    logo: "/icons/platzi.svg",
    url: "https://platzi.com/",
    courses: [
      {
        nameEn: "Work Environment for Data and AI",
        nameEs: "Entorno de Trabajo para Data e IA",
        issueDate: "2024-05-03",
        credentialUrl:
          "https://platzi.com/p/david.parra/learning-path/13490-datos-fundamentos-tecnicos/diploma/detalle/",
        technologies: ["Git", "CookieCutter", "Python", "Anaconda", "Docker"],
      },
      {
        nameEn: "Bash Shell Programming Course",
        nameEs: "Curso de Programación en Bash Shell",
        issueDate: "2024-04-28",
        credentialUrl: "https://platzi.com/p/david.parra/curso/1468-bash-shell/diploma/detalle/",
        technologies: ["Bash"],
      },
      {
        nameEn: "Handling Missing Data: Imputation Course",
        nameEs: "Curso de Manejo de Datos Faltantes: Imputación",
        issueDate: "2024-04-10",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/4197-datos-faltantes-imputacion/diploma/detalle/",
        technologies: ["Python", "Statistics"],
      },
      {
        nameEn: "Exploratory Data Analysis Course",
        nameEs: "Curso de Análisis Exploratorio de Datos",
        issueDate: "2024-03-29",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/3568-analisis-exploratorio-datos/diploma/detalle/",
        technologies: ["Python", "Statistics"],
      },
      {
        nameEn: "Mathematics for Data Science: Descriptive Statistics",
        nameEs: "Curso de Matemáticas para Data Science: Estadística Descriptiva",
        issueDate: "2024-03-10",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/2353-estadistica-descriptiva/diploma/detalle/",
        technologies: ["Python", "Statistics"],
      },
      {
        nameEn: "Data Visualization with Matplotlib and Seaborn",
        nameEs: "Curso de Visualización de Datos con Matplotlib y Seaborn",
        issueDate: "2024-03-07",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/2913-matplotlib-seaborn/diploma/detalle/",
        technologies: ["Python"],
      },
      {
        nameEn: "PostgreSQL for Data Science",
        nameEs: "Curso de PostgreSQL Aplicado a Ciencia de Datos",
        issueDate: "2024-02-13",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/1780-postgresql-datos/diploma/detalle/",
        technologies: ["SQL", "PostgreSQL"],
      },
      {
        nameEn: "Handling Missing Data: Detection and Exploration",
        nameEs: "Curso de Manejo de Datos Faltantes: Detección y Exploración",
        issueDate: "2024-02-02",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/4196-datos-faltantes/diploma/detalle/",
        technologies: ["Python", "Pandas"],
      },
      {
        nameEn: "Principles of Data Visualization for Business Intelligence",
        nameEs: "Curso de Principios de Visualización de Datos para Business Intelligence",
        issueDate: "2024-02-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/2195-visualizacion-datos/diploma/detalle/",
        technologies: ["Power BI"],
      },
      {
        nameEn: "FastAPI: Database, Modularization, and Deployment",
        nameEs: "Curso de FastAPI: Base de Datos, Modularización y Deploy a Producción",
        issueDate: "2023-12-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/5355-fastapi-modularizacion-datos/diploma/detalle/",
        technologies: ["Python", "FastAPI"],
      },
      {
        nameEn: "FastAPI: Introduction, Operations, Validation, and Authentication",
        nameEs: "Curso de FastAPI: Introducción, Operaciones, Validaciones y Autenticación",
        issueDate: "2023-12-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/5354-fastapi/diploma/detalle/",
        technologies: ["Python", "FastAPI"],
      },
      {
        nameEn: "AWS Practical Course: Compute with EC2",
        nameEs: "Curso Práctico de AWS: Cómputo con EC2",
        issueDate: "2023-11-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/3073-aws-ec2/diploma/detalle/",
        technologies: ["AWS", "EC2"],
      },
      {
        nameEn: "AWS Practical Course: IAM Roles and Security",
        nameEs: "Curso Práctico de AWS: Roles y Seguridad con IAM",
        issueDate: "2023-11-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/3044-aws-iam/diploma/detalle/",
        technologies: ["AWS", "IAM"],
      },
      {
        nameEn: "Practical AWS Storage Course",
        nameEs: "Curso Práctico de Storage en AWS",
        issueDate: "2023-11-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/1424-storage-aws/diploma/detalle/",
        technologies: ["AWS", "S3"],
      },
      {
        nameEn: "Data Warehousing and OLAP Modeling Course",
        nameEs: "Curso de Data Warehousing y Modelado OLAP",
        issueDate: "2023-11-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/7034-data-warehouse/diploma/detalle/",
        technologies: ["AWS", "SQL"],
      },
      {
        nameEn: "Docker Course",
        nameEs: "Curso de Docker",
        issueDate: "2023-11-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/2066-docker/diploma/detalle/",
        technologies: ["Docker"],
      },
      {
        nameEn: "ETL Fundamentals with Python and Pentaho",
        nameEs: "Curso de Fundamentos de ETL con Python y Pentaho",
        issueDate: "2023-11-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/6211-fundamentos-etl/diploma/detalle/",
        technologies: ["AWS", "Python", "SQL"],
      },
      {
        nameEn: "Introduction to AWS: Compute, Storage, and Databases",
        nameEs: "Curso de Introducción a AWS: Cómputo, Almacenamiento y Bases de Datos",
        issueDate: "2023-11-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/2732-aws-computo/diploma/detalle/",
        technologies: ["AWS"],
      },
      {
        nameEn: "Introduction to AWS: Cloud Computing Fundamentals",
        nameEs: "Curso de Introducción a AWS: Fundamentos de Cloud Computing",
        issueDate: "2023-11-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/2731-aws-fundamentos/diploma/detalle/",
        technologies: ["AWS"],
      },
      {
        nameEn: "Introduction to AWS: Networks, Governance, and Machine Learning",
        nameEs: "Curso de Introducción a AWS: Redes, Gobernanza y Machine Learning",
        issueDate: "2023-11-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/2733-aws-redes/diploma/detalle/",
        technologies: ["AWS"],
      },
      {
        nameEn: "Professional Work Environment Setup for Data Science",
        nameEs: "Curso de Configuración Profesional de Entorno de Trabajo para Ciencia de Datos",
        issueDate: "2023-10-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/2435-entorno-ciencia-datos/diploma/detalle/",
        technologies: ["CookieCutter", "Python", "Jinja", "Git"],
      },
      {
        nameEn: "Data Science Work Environment with Jupyter Notebooks and Anaconda",
        nameEs:
          "Curso de Entorno de Trabajo para Ciencia de Datos con Jupyter Notebooks y Anaconda",
        issueDate: "2023-10-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/2434-jupyter-notebook/diploma/detalle/",
        technologies: ["Anaconda", "Git"],
      },
      {
        nameEn: "Database Fundamentals",
        nameEs: "Curso de Fundamentos de Bases de Datos",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/1566-bd/diploma/detalle/",
        technologies: ["MySQL", "SQL"],
      },
      {
        nameEn: "Data Engineering Fundamentals",
        nameEs: "Curso de Fundamentos de Ingeniería de Datos",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/5514-course/diploma/detalle/",
        technologies: ["ETL"],
      },
      {
        nameEn: "Introduction to MongoDB",
        nameEs: "Curso de Introducción a MongoDB",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/4987-mongodb/diploma/detalle/",
        technologies: ["MongoDB", "Docker"],
      },
      {
        nameEn: "MongoDB Data Modeling",
        nameEs: "Curso de Modelado de Datos en MongoDB",
        issueDate: "2023-10-01",
        credentialUrl:
          "https://platzi.com/p/david.parra/curso/5356-mongodb-modelado/diploma/detalle/",
        technologies: ["MongoDB"],
      },
      {
        nameEn: "Introduction to the Terminal and Command Line",
        nameEs: "Curso de Introducción a la Terminal y Línea de Comandos",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/2292-course/diploma/detalle/",
        technologies: ["Bash"],
      },
      {
        nameEn: "Data Manipulation and Transformation with Pandas and NumPy",
        nameEs: "Curso de Manipulación y Transformación de Datos con Pandas y NumPy",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/2912-pandas-numpy/diploma/detalle/",
        technologies: ["Python", "Pandas", "NumPy"],
      },
      {
        nameEn: "PostgreSQL Course",
        nameEs: "Curso de PostgreSQL",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/1480-postgresql/diploma/detalle/",
        technologies: ["PostgreSQL", "SQL"],
      },
      {
        nameEn: "Python: Comprehensions, Functions, and Error Handling",
        nameEs: "Curso de Python: Comprehensions, Funciones y Manejo de Errores",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/4260-course/diploma/detalle/",
        technologies: ["Python"],
      },
      {
        nameEn: "Python: PIP and Virtual Environments",
        nameEs: "Curso de Python: PIP y Entornos Virtuales",
        issueDate: "2023-10-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/4261-course/diploma/detalle/",
        technologies: ["Python", "PIP", "Docker"],
      },
      {
        nameEn: "Prompt Engineering with ChatGPT",
        nameEs: "Curso de Prompt Engineering con ChatGPT",
        issueDate: "2023-04-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/7296-chatgpt/diploma/detalle/",
        technologies: ["Prompt Engineering"],
      },
      {
        nameEn: "Professional Git and GitHub",
        nameEs: "Curso Profesional de Git y GitHub",
        issueDate: "2023-03-01",
        credentialUrl: "https://platzi.com/p/david.parra/curso/1557-git-github/diploma/detalle/",
        technologies: ["Git", "GitHub"],
      },
    ],
  },
  {
    name: "Udemy",
    logo: "/icons/udemy.svg",
    url: "https://www.udemy.com/",
    courses: [
      {
        nameEn: "Redis 5 Course",
        nameEs: "Curso de Redis 5",
        issueDate: "2024-09-05",
        credentialUrl:
          "https://rappi.udemy.com/certificate/UC-665c6c28-2672-4504-8fb1-d4c7e07c86e8/",
        technologies: ["Redis"],
      },
      {
        nameEn: "Complete Microsoft Azure Fundamentals AZ-900",
        nameEs: "Curso Completo de Microsoft Azure Fundamentales AZ-900",
        issueDate: "2024-01-01",
        credentialUrl: "https://www.udemy.com/certificate/UC-d9659f63-61a8-4820-9cfd-29378648af9a/",
        technologies: ["Azure"],
      },
      {
        nameEn: "Advanced Django Course",
        nameEs: "Curso de Django Avanzado",
        issueDate: "2021-04-01",
        credentialUrl: "https://www.udemy.com/certificate/UC-a8f432a4-17f6-4e6a-b801-7b1bc2170622/",
        technologies: ["Python", "Django", "HTML", "CSS", "SQL", "Git"],
      },
    ],
  },
  {
    name: "Google",
    logo: "/icons/google.svg",
    url: "https://grow.google/intl/es/courses-and-tools/",
    courses: [
      {
        nameEn: "Advanced Google Analytics",
        nameEs: "Curso avanzado de Google Analytics",
        issueDate: "2019-07-15",
        credentialUrl:
          "https://analytics.google.com/analytics/academy/certificate/R33dVGyQSmaJSqbbW_nS_w",
        technologies: ["Google Analytics"],
      },
      {
        nameEn: "Google Analytics for Beginners",
        nameEs: "Google Analytics para Principiantes",
        issueDate: "2019-07-01",
        credentialUrl:
          "https://analytics.google.com/analytics/academy/certificate/RbhZX3hCR5iHhNvzdYwcrg",
        technologies: ["Google Analytics"],
      },
    ],
  },
  {
    name: "Coursera",
    logo: "/icons/coursera.svg",
    url: "https://www.coursera.org/",
    courses: [
      {
        nameEn: "Complete Spark with Databricks (Big Data)",
        nameEs: "Curso Completo de Spark con Databricks (Big Data)",
        issueDate: "2024-01-01",
        credentialUrl: "https://www.coursera.org/account/accomplishments/records/RQG5CWHQTY6G",
        technologies: ["Azure Databricks", "Python", "Apache Spark", "SQL"],
      },
    ],
  },
];

export const totalCourses = courseSchools.reduce((acc, s) => acc + s.courses.length, 0);

export interface Testimonial {
  name: string;
  linkedin: string;
  relation: string;
  relationEn: string;
  date: string;
  originalLang: "es" | "en";
  feedback: string;
  feedbackTranslation: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria Restrepo",
    linkedin: "https://www.linkedin.com/in/mar%C3%ADa-restrepo-jimeno-12/",
    relation: "Fue mi Product Manager en Rappi",
    relationEn: "She was my Product Manager at Rappi",
    date: "2024-12-18",
    originalLang: "es",
    feedback:
      "Juan Da me encanta trabajar contigo, me siento muy apoyada en todo. Eres un crack, haces un trabajo impecable, eres muy rapido y sin errores. Me siento muy tranquila de tenerte en el equipo pues se que lo que haces lo haces bien. Me gusta mucho que entiendes el para que de las cosas y el impacto que tienen, lo que hace que propongas ideas y puntos de vista. Gracias por el apoyo en este camino!!",
    feedbackTranslation:
      "Juan Da, I love working with you, I feel really supported in everything. You’re a rockstar, you do impeccable work, you’re super fast and make no mistakes. I feel very at ease having you on the team because I know that whatever you do, you do it well. I really appreciate that you understand the why behind things and their impact, which leads you to propose ideas and share thoughtful perspectives. Thanks for all the support along this journey!!",
  },
  {
    name: "JuanSe Agudelo",
    linkedin: "https://www.linkedin.com/in/juans-agudelo/",
    relation: "Trabajamos juntos en Rappi",
    relationEn: "We worked together at Rappi",
    date: "2024-12-12",
    originalLang: "es",
    feedback:
      "Dandonos ejemplo, creo que haz traido mucho valor al innovar no solo en earnings, sino tambien haz introducido ideas comunes como el auto merging y auto tag de rappiflow support, que facilito el trabajo de todos. Esto no solo posiciona al equipo, sino que nos inspira a ser asi de curiosos como tu, continua desarrollando esa curiosidad de volver el trabajo mas dinamico y creativo para todos. <3",
    feedbackTranslation:
      "Leading by example, I think you’ve brought a lot of value, not only by innovating in Earnings, but also by introducing great ideas like auto-merging and auto-tagging from Rappiflow Support, which made everyone’s work easier. This not only positions the team strongly, but also inspires us to be as curious as you are. Keep nurturing that curiosity to make work more dynamic and creative for all of us. <3",
  },
  {
    name: "Abraham Farfan",
    linkedin: "https://www.linkedin.com/in/abraham-farfan-07b53092",
    relation: "Trabajamos juntos en Rappi",
    relationEn: "We worked together at Rappi",
    date: "2025-04-08",
    originalLang: "en",
    feedback:
      "Juan David is one of the most capable and well-rounded data professionals I've had the chance to work with. His ability to design scalable, automated solutions and to model complex operational challenges is truly outstanding.\n\nHe combines deep analytical thinking with strong execution. Whether building data pipelines, developing models, or structuring systems to support decision-making, Juan David consistently delivers high-impact, reliable solutions that drive measurable improvements.\n\nBeyond his technical excellence, what sets him apart is his structured thinking, attention to detail, and clear communication. He approaches problems with both rigor and creativity, always aiming for solutions that are not only technically sound but also aligned with broader business goals.",
    feedbackTranslation:
      "Juan David es uno de los profesionales de datos más completos y capaces con los que he tenido la oportunidad de trabajar. Su habilidad para diseñar soluciones escalables y automatizadas, y para modelar desafíos operativos complejos, es realmente impresionante.\n\nCombina un pensamiento analítico profundo con una ejecución muy sólida. Ya sea construyendo pipelines de datos, desarrollando modelos o estructurando sistemas para apoyar la toma de decisiones, Juan David entrega de forma constante soluciones confiables, de alto impacto y que generan mejoras medibles.\n\nMás allá de su excelencia técnica, lo que realmente lo diferencia es su pensamiento estructurado, su atención al detalle y su comunicación clara. Aborda los problemas con rigor y creatividad al mismo tiempo, siempre buscando soluciones que no solo sean técnicamente sólidas, sino que también estén alineadas con los objetivos del negocio.",
  },
  {
    name: "RJ AcostAmado",
    linkedin: "https://www.linkedin.com/in/rjacostamado/",
    relation: "Fue mi profesor en Icesi",
    relationEn: "Was my professor at Icesi",
    date: "2021-04-13",
    originalLang: "en",
    feedback:
      "Juan David was a student in the stochastic processes course I deliver every semester as part of the undergraduate program in the IE dept. at Universidad ICESI; about two years ago. It did not take too long for me to notice his eagerness in the use of stochastic models to study systems of interest for an IE. He was very rigorous and detail oriented during the course; and as far as I have seen, he has been in the rest of his studies as well. I believe that might have been driven by his curiosity about how all these tools can be actually implemented successfully in a company to generate value. It has been easy for me to sense that curiosity every time we talk.\n\nI have no doubt about his discipline and willingness to perform responsibly and I can foresee, not only a bright future for him; which I think must be a side effect of his discipline; but also him becoming a key team player in the organization that he joins to build his professional career.",
    feedbackTranslation:
      "Juan David fue estudiante en el curso de procesos estocásticos que dicto cada semestre como parte del programa de pregrado del departamento de Ingeniería Industrial en la Universidad ICESI, hace aproximadamente dos años. No pasó mucho tiempo antes de que notara su interés genuino por usar modelos estocásticos para estudiar sistemas relevantes para un ingeniero industrial. Durante el curso fue muy riguroso y detallista, y por lo que he podido ver, también lo ha sido en el resto de sus estudios. Creo que eso está muy impulsado por su curiosidad sobre cómo todas estas herramientas pueden implementarse de manera exitosa en una empresa para generar valor. Esa curiosidad siempre ha sido evidente cada vez que conversamos.\n\nNo tengo ninguna duda sobre su disciplina y su compromiso para asumir responsabilidades con seriedad. Puedo anticipar no solo un futuro muy prometedor para él, que sin duda será consecuencia de esa misma disciplina, sino también que se convertirá en una pieza clave dentro del equipo de la organización en la que decida construir su carrera profesional.",
  },
  {
    name: "Andrés Parra",
    linkedin: "https://www.linkedin.com/in/andresparrasharko/",
    relation: "Fue mi jefe durante una investigación de mercado en Sharko",
    relationEn: "Was my manager during a market research project at Sharko",
    date: "2021-03-12",
    originalLang: "es",
    feedback:
      "Juan es una persona integral, comprometida con los resultados esperados de su trabajo. Juan trabaja proactivamente en encontrar soluciones encaminadas a los objetivos propuestos. Es una persona investigadora y bastante confiable cuando se le asigna una labor. Además resaltó su carisma y seriedad al momento de asignar un reto profesional.",
    feedbackTranslation:
      "Juan is a well-rounded professional, fully committed to delivering the expected results in his work. He proactively looks for solutions aligned with the defined goals. He’s inquisitive and highly reliable when assigned a task. I also want to highlight his charisma and professionalism when taking on a new challenge.",
  },
  {
    name: "Silvio Valencia Giraldo",
    linkedin: "https://www.linkedin.com/in/silviovalenciag/",
    relation: "Estudiamos juntos en Icesi",
    relationEn: "We studied together at Icesi",
    date: "2021-03-10",
    originalLang: "es",
    feedback:
      "Compartí con Juan David en varios proyectos universitarios donde se destacó por tener los mejores resultados. Se caracteriza por su rápida capacidad de aprendizaje, en especial la de programas tecnológicos y adaptación a los diferentes enfoques de la ingeniería industrial, permitiéndole enfrentar diferentes retos apoyándose en sus capacidades.",
    feedbackTranslation:
      "I worked with Juan David on several university projects, where he consistently stood out for achieving top results. He’s known for his fast learning ability, especially when it comes to technical tools, and for adapting to different Industrial Engineering approaches, which allows him to take on diverse challenges by leveraging his strengths.",
  },
  {
    name: "Jorge Alberto Quesada",
    linkedin: "https://www.linkedin.com/in/quesadaj/",
    relation: "Fue mi profesor en Icesi",
    relationEn: "He was my professor at Icesi",
    date: "2021-03-10",
    originalLang: "es",
    feedback:
      "Juan David se caracteriza por ser una persona que aprende rápidamente, con gran facilidad para el análisis de situaciones problemáticas proponiendo soluciones muy bien estructuradas de manera lógica y ordenada. Sus interacciones se caracterizan por ser empáticas lo cual favorece el trabajo en equipo y la negociación de posturas para lograr consensos. Se caracteriza por su dedicación y compromiso para el logro de objetivos.",
    feedbackTranslation:
      "Juan David stands out for being a fast learner, with a strong ability to analyze complex situations and propose well-structured, logical, and organized solutions. His interactions are empathetic, which fosters teamwork and helps facilitate alignment and consensus. He is also known for his dedication and commitment to achieving goals.",
  },
  {
    name: "Andres Felipe Osorio Muriel",
    linkedin: "https://www.linkedin.com/in/andres-felipe-osorio-muriel-21b56524/",
    relation:
      "Fue mi profesor en Icesi y mi jefe durante las monitorías de Investigación de Operaciones",
    relationEn:
      "He was my professor at Icesi and my supervisor during the Operations Research teaching assistantships",
    date: "2021-03-10",
    originalLang: "es",
    feedback:
      "Tuve la oportunidad de trabajar con Juan David cuando me apoyó como monitor en el curso de investigación de operaciones por varios semestres. Durante este tiempo Juan David mostró alta responsabilidad con las tareas asignadas como también empatía y acompañamiento a estudiantes del curso.\n\nJuan David ha sido uno de los mejores estudiantes que he tenido en el curso de investigación de operaciones, su alta capacidad analítica y su interés en el aprendizaje lo hacen un muy buen candidato para cualquier posición.",
    feedbackTranslation:
      "I had the opportunity to work with Juan David when he supported me as a teaching assistant in the Operations Research course for several semesters. During that time, he consistently showed strong responsibility in the tasks assigned to him, as well as empathy and support toward the students in the course.\n\nJuan David has been one of the best students I’ve had in Operations Research. His strong analytical skills and genuine interest in learning make him an excellent candidate for any position.",
  },
  {
    name: "Daniela Marquez Feijoo",
    linkedin: "https://www.linkedin.com/in/daniela-marquez-feijoo-a121031b/",
    relation: "Fue mi líder en Rappi",
    relationEn: "She was my manager at Rappi",
    date: "2023-12-07",
    originalLang: "es",
    feedback:
      "Soy muy afortunada de compartir con una persona tan brillante y con tanta buena onda para cambiar el negocio. Reconozco en ti habilidades tecnicas pero sobretodo destaco Juanda tu capacidad para estructurar modelos con data, probar y aprender para ejecutar. Has logrado estructurar un proceso que era completamente manual, minimizando los errores, consiguiendo resultados y haciendonos la vida mas facil. Somos muy afortunados de tenerte. Te extrañamos en Colombia.",
    feedbackTranslation:
      "I feel very lucky to work alongside someone so brilliant and with such great energy to drive change in the business. I recognize your technical skills, but above all, Juanda, I want to highlight your ability to structure data-driven models, test, learn, and execute. You managed to turn a completely manual process into a structured one, minimizing errors, delivering results, and making life easier for all of us. We’re very fortunate to have you. We miss you in Colombia.",
  },
  {
    name: "Yulieth Sofia Montes",
    linkedin: "https://www.linkedin.com/in/yulieth-montes-araque-049516118/",
    relation: "Trabajamos juntos en Rappi",
    relationEn: "We worked together at Rappi",
    date: "2023-12-23",
    originalLang: "es",
    feedback:
      "Juan David, es un ejemplo para todo el team, sus logros su conocimiento y capacidad de romper paradigmas a su corta edad. Lo que más admiro de el es la humildad que tiene con su conocimiento, a pesar de su cargo es una persona sencilla y colaboradora. A nivel de funciones siempre esta apoyando y viendo de que forma nos puede 'hacer más sencillo' las funciones de los demás.",
    feedbackTranslation:
      "Juan David is an example for the whole team, his achievements, knowledge, and ability to break paradigms at such a young age are truly impressive. What I admire most about him is his humility despite all his expertise. Regardless of his role, he remains approachable and collaborative. In his day-to-day work, he’s always looking for ways to support others and make everyone’s tasks easier.",
  },
];

export const vibecodeCredits = [
  {
    name: "Claude Code",
    icon: "anthropic",
    url: "https://claude.ai/code",
  },
  {
    name: "Copilot",
    icon: "githubcopilot",
    url: "https://github.com/features/copilot",
  },
];
