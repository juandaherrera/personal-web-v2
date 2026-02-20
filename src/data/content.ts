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
  version: "v6.0.0",
  location: "Palmira, Colombia 🇨🇴",
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
  { name: "Airflow", icon: "apacheairflow", url: "https://airflow.apache.org/" },
  { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
  { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org/" },
  { name: "Redis", icon: "redis", url: "https://redis.io/" },
  { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
  { name: "Kafka", icon: "apachekafka", url: "https://kafka.apache.org/" },
  { name: "AWS", icon: "amazonwebservices", url: "https://aws.amazon.com/" },
  { name: "Azure", icon: "microsoftazure", url: "https://azure.microsoft.com/" },
  { name: "GitHub Actions", icon: "githubactions", url: "https://github.com/features/actions" },
  { name: "Git", icon: "git", url: "https://git-scm.com/" },
  { name: "Snowflake", icon: "snowflake", url: "https://www.snowflake.com/" },
  { name: "Spark", icon: "apachespark", url: "https://spark.apache.org/" },
  { name: "Django", icon: "django", url: "https://www.djangoproject.com/" },
  { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
  { name: "Railway", icon: "railway", url: "https://railway.app/" },
  { name: "Bitbucket", icon: "bitbucket", url: "https://bitbucket.org/" },
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
        technologies: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "AWS", "Docker", "BigQuery"],
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
        technologies: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "DataDog", "AWS", "Docker", "Pydantic-AI", "BigQuery"],
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
        technologies: ["Python", "FastAPI", "Airflow", "Docker", "Kafka", "PostgreSQL", "Snowflake", "Bitbucket"],
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
        descriptionEn:
          "Providing extracurricular support to Operations Research course students.",
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
  technologies: string[];
  repositoryUrl: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Web Personal",
    nameEn: "Personal Website",
    description: "Portafolio personal desarrollado con Reflex y desplegado en Azure Container Apps.",
    descriptionEn: "Personal portfolio developed with Reflex and deployed on Azure Container Apps.",
    technologies: ["Python", "Reflex", "Chakra UI", "Railway", "Docker", "Azure"],
    repositoryUrl: "https://github.com/juandaherrera/personal_web",
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
  },
  {
    name: "Prueba Técnica Data Quality Engineer",
    nameEn: "Data Quality Engineer Technical Test",
    description: "Solución a prueba técnica de Data Quality Engineer.",
    descriptionEn: "Solution to a Data Quality Engineer technical test.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    repositoryUrl: "https://github.com/juandaherrera/prueba-dqe-r5",
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

export interface CourseSchool {
  name: string;
  logo: string;
  url: string;
  count: number;
}

export const courseSchools: CourseSchool[] = [
  { name: "Platzi", logo: "/icons/platzi.svg", url: "https://platzi.com/", count: 33 },
  { name: "Udemy", logo: "/icons/udemy.svg", url: "https://www.udemy.com/", count: 3 },
  { name: "Google", logo: "/icons/google.svg", url: "https://grow.google/", count: 2 },
  { name: "Coursera", logo: "/icons/coursera.svg", url: "https://www.coursera.org/", count: 1 },
];

export const totalCourses = courseSchools.reduce((acc, s) => acc + s.count, 0);
