export interface Project {
  title: string;
  category: "ai" | "app";
  categoryLabel: string;
  year: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Publication {
  title: string;
  category: string;
  date: string;
  venue: string;
  description: string;
  tags: string[];
  image: string;
  paperUrl: string;
}

export interface TechnicalHighlight {
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl?: string;
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface ResearchItem {
  title: string;
  summary: string;
  publicationUrl?: string;
}

export interface LeadershipCard {
  title: string;
  subtitle: string;
  bullets: string[];
}

const BASE_PATH = "/daffarabbani.github.io";

export function withBasePath(path: string): string {
  if (!path) return "";
  if (/^(https?:\/\/|data:|blob:)/i.test(path)) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.startsWith(`${BASE_PATH}/`) || normalized === BASE_PATH) {
    return normalized;
  }

  return `${BASE_PATH}${normalized}`;
}

export const portfolioData = {
  personal: {
    name: "Daffa Rabbani",
    role: "Informatics Engineering Graduate • AI (Computer Vision) & Full-Stack Developer",
    location: "Kiaracondong, Bandung City",
    email: "abeydaffa88@gmail.com",
    phone: "+62 895-339-753-195",
    whatsapp: "https://wa.me/62895339753195?text=Halo%20Daffa,%20saya%20tertarik%20dengan%20portofolio%20Anda.",
    github: "https://github.com/DaffaRabbani88", 
    linkedin: "https://www.linkedin.com/in/daffarabbaniii/", 
    instagram: "https://instagram.com/dafarbnn",
    summary:
      "Bachelor of Computer Science graduate from UIN Sunan Gunung Djati Bandung (GPA 3.70/4.00) with hands-on IT infrastructure, network management, and software engineering experience at Diskominfo Jawa Barat. Proficient in Full-Stack Development, Artificial Intelligence (Computer Vision), and Data Science.",
  },

  // Cukup tambahkan objek baru di array ini saat ingin menambah project
 projects: [
    {
      title: "Reversible Face Anonymization & De-anonymization for Automated Proctoring",
      category: "ai",
      categoryLabel: "Final Research Project • Computer Vision",
      year: "2026",
      description:
        "Developed an AI-based automated online exam proctoring system prioritizing student data privacy while enabling authorized identity verification (de-anonymization) via a Dual-Decoder Autoencoder. Published in JTMEI (Vol. 5, No. 4) and accompanied by an interactive Streamlit inference demo.",
      techStack: ["Python", "PyTorch", "OpenCV", "MTCNN", "Streamlit", "Autoencoder"],
      githubUrl: "https://github.com/DaffaRabbani88/reversible-face-anonymization-proctoring",
      demoUrl: "#",
    },
    {
      title: "Jadwalku — Employee Schedule Reminder Application",
      category: "app",
      categoryLabel: "Internship Project • Diskominfo Jabar",
      year: "2024 – 2025",
      description:
        "Engineered a web-based employee scheduling and automated reminder system to optimize internal shift coordination and notifications at Diskominfo Jawa Barat. Managed the full development lifecycle from UI/UX design to backend logic implementation.",
      techStack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
      githubUrl: "https://github.com/DaffaRabbani88/Jadwalku_app",
    },
    {
      title: "Motorcycle Rent Mobile Application",
      category: "app",
      categoryLabel: "Mobile App Development • Flutter",
      year: "2024",
      description:
        "Built a cross-platform mobile application for browsing, booking, and managing motorcycle rentals with real-time unit availability, automated rental duration calculation, and user account management.",
      techStack: ["Flutter", "Dart", "Firebase", "RESTful API"],
      githubUrl: "https://github.com/DaffaRabbani88/Motorcycle_Rent",
    },
    {
      title: "Android Currency Nominal Detector for the Visually Impaired",
      category: "ai",
      categoryLabel: "Computer Vision • Assistive Mobile App",
      year: "2024",
      description:
        "Developed an assistive Android mobile application leveraging computer vision and real-time camera inference to recognize Indonesian Rupiah banknotes and deliver audio feedback for visually impaired users.",
      techStack: ["Android", "Computer Vision", "TensorFlow Lite", "Mobile Inference"],
      githubUrl: "https://github.com/DaffaRabbani88/android-currency-recognition",
    },
    {
      title: "Money Tracker — Personal Finance & Budget App",
      category: "app",
      categoryLabel: "Published Mobile App • Google Play Store",
      year: "2024 – 2025",
      description:
        "Published Android personal finance and expense tracking application on Google Play Store featuring transaction logging, category budgeting, financial summaries, and data export.",
      techStack: ["Flutter", "Dart", "Local Storage", "Google Play"],
      githubUrl: "https://github.com/DaffaRabbani88/budget_Tracker",
      demoUrl: "https://play.google.com/store/apps/details?id=com.denisfirmansyah.budget_tracker&pcampaignid=web_share",
    },
  ] as Project[],

  publications: [
    {
      title: "Anonimisasi dan De-anonimisasi Wajah Reversibel Berbasis Dual-Decoder Autoencoder pada Pengawasan Ujian Daring Berbasis Automatic Proctoring",
      category: "SINTA Accredited Journal",
      date: "Jul 2026",
      venue: "Jurnal Teknik Mesin, Industri, Elektro dan Informatika (JTMEI), Vol. 5, No. 4",
      description:
        "Peer-reviewed scientific article proposing a Dual-Decoder Autoencoder architecture to protect examinee facial privacy during automated online proctoring while enabling authorized identity restoration with optimal PSNR and SSIM balance.",
      tags: ["Deep Learning", "Computer Vision", "Dual-Decoder Autoencoder", "Privacy"],
      image: withBasePath("/publications/jtmei-proctoring.png"),
      paperUrl: "https://ejurnal.politeknikpratama.ac.id/index.php/jtmei/article/view/6493",
    },
    {
      title: "Automation of Halal Food Classification Using Bidirectional Long Short-term Memory on Ingredients List",
      category: "Journal Article",
      date: "2025",
      venue: "Kajian Riset & Teknologi (KJRT) — Azkia Journal",
      description:
        "Developed an automated natural language processing (NLP) classification model using Bidirectional LSTM (BiLSTM) to detect and verify halal status from food product ingredient lists.",
      tags: ["NLP", "BiLSTM", "Deep Learning", "Text Classification"],
      image: withBasePath("/publications/kjrt-halal-bilstm.png"),
      paperUrl: "https://journal.azkia.id/index.php/kjrt/article/view/17",
    },
    {
      title: "Agile Methodology for Motorcycle Rent Application",
      category: "Preprint Paper",
      date: "2024",
      venue: "Preprints.org",
      description:
        "Documented the iterative Agile software development lifecycle, sprint planning, and system architecture behind a cross-platform mobile motorcycle rental application.",
      tags: ["Agile Methodology", "Software Engineering", "Flutter", "Mobile App"],
      image: withBasePath("/publications/preprints-motorcycle-rent.png"),
      paperUrl: "https://www.preprints.org/frontend/manuscript/33e276c6b20394960ead3a8267783275/download_pub",
    },
    {
      title: "Money Tracker — Android Personal Finance & Budget Application",
      category: "Google Play Store",
      date: "Jan 2025",
      venue: "Published on Google Play Store",
      description:
        "Published Android mobile application for personal expense tracking, budget categorization, financial reporting, and data export on Google Play Store.",
      tags: ["Flutter", "Android", "Google Play Store", "Mobile App"],
      image: withBasePath("/publications/playstore-budget-tracker.png"),
      paperUrl: "https://play.google.com/store/apps/details?id=com.denisfirmansyah.budget_tracker&pcampaignid=web_share",
    },
  ] as Publication[],

  technicalHighlights: [
    {
      title: "Full-stack & mobile development",
      description:
        "Next.js, Laravel, and Flutter applications with role-based dashboards, RESTful APIs, and responsive UI.",
    },
    {
      title: "Computer vision & AI pipelines",
      description:
        "Dual-Decoder Autoencoder, MTCNN, and OpenCV inference models trained and evaluated in PyTorch & TensorFlow.",
    },
    {
      title: "Data engineering & pipelines",
      description:
        "Certified Specialist in Data Engineering: ETL workflows, data preprocessing, and scalable analytics architectures.",
    },
    {
      title: "Data analysis & reporting",
      description:
        "BNSP-certified Associate Data Analyst & MOS Excel Specialist: statistical modeling, PivotTables, and BI reporting.",
    },
    {
      title: "Relational database design",
      description:
        "Normalized SQL schemas, query optimization, and data modeling in MySQL and Oracle Database (Oracle Academy certified).",
    },
    {
      title: "Network & Linux operations",
      description:
        "Cisco CCNA & NDG Linux Essentials certified with hands-on E-Government network infrastructure experience.",
    },
  ] as TechnicalHighlight[],

  certifications: [
    {
      title: "Associate Data Analyst Competency Certification",
      issuer: "BNSP — LSP Sains Data dan AI Indonesia",
      date: "Dec 2025 – Dec 2028",
      category: "National Competency",
    },
    {
      title: "National Exam Preparation, Associate Data Analyst",
      issuer: "BNSP",
      date: "Oct 2025",
      category: "Data Analytics",
    },
    {
      title: "Microsoft Office Specialist (MOS) — Excel",
      issuer: "PTIPD UIN Bandung x Lumina Eka Optima",
      date: "2025",
      category: "Data & Analytics",
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "Oct 2024",
      category: "Database",
    },
    {
      title: "Database Design",
      issuer: "Oracle Academy",
      date: "Sep 2024",
      category: "Database",
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "Jan 2025",
      category: "Networking",
    },
    {
      title: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "Jul 2024",
      category: "Linux & Systems",
    },
    {
      title: "Google Play Store Listing Certificate",
      issuer: "Google Play Academy",
      date: "2024",
      category: "Mobile Distribution",
    },
    {
      title: "TOEFA (Test of English for Academics) — Score 624",
      issuer: "UIN Sunan Gunung Djati Bandung",
      date: "Jan 2025 – Jan 2027",
      category: "Language Proficiency",
    },
  ] as Certification[],

 workExperiences: [
    {
      role: "IT & Software Engineering Intern",
      organization: "Dinas Komunikasi dan Informatika Provinsi Jawa Barat (Diskominfo Jabar)",
      period: "2024 – 2025",
      bullets: [
        "Developed 'Jadwalku', an employee schedule reminder web application, using Flutter and Laravel.",
        "Supported E-Government network infrastructure operations, troubleshooting, and public Wi-Fi performance reporting.",
        "Operated vMix live streaming production workflows for official provincial government broadcasts.",
      ],
    },
  ] as WorkExperience[],

  researchExperience: {
    role: "Research Experience",
    subtitle: "Undergraduate scientific publications and applied AI research",
    period: "2024 – 2026",
    items: [
      {
        title: "Reversible Face Anonymization and De-Anonymization Based on Dual-Decoder Autoencoder in Automatic Online Exam Proctoring",
        summary:
          "Trained a shared-encoder Dual-Decoder Autoencoder over 1,000 epochs on ~1.3 million real proctoring face images (6,789 subjects, subject-independent split), achieving SSIM 0.9874 / PSNR 42.32 dB for anonymization and SSIM 0.9555 / PSNR 36.44 dB for recovery. Published in JTMEI, Vol. 5, No. 4 (Dec 2026).",
        publicationUrl: "https://ejurnal.politeknikpratama.ac.id/index.php/jtmei/article/view/6493",
      },
      {
        title: "Automation of Halal Food Classification Using Bidirectional Long Short-Term Memory on Ingredients List",
        summary:
          "Built an automated NLP text classification pipeline using BiLSTM to verify halal status from food ingredient lists. Published in Kajian Riset & Teknologi (KJRT) (2025).",
        publicationUrl: "https://journal.azkia.id/index.php/kjrt/article/view/17",
      },
      {
        title: "Agile Methodology for Motorcycle Rent Application",
        summary:
          "Designed and documented iterative Agile sprint planning and system architecture for a cross-platform mobile rental application. Published on Preprints.org (2024).",
        publicationUrl: "https://www.preprints.org/frontend/manuscript/33e276c6b20394960ead3a8267783275/download_pub",
      },
    ] as ResearchItem[],
  },

  leadershipAndCommunity: [
    {
      title: "Head of Entrepreneurship Division, HIMATIF",
      subtitle: "Informatics Engineering Student Association, UIN SGD Bandung • 2024 – 2025",
      bullets: [
        "Led entrepreneurship initiatives, student merchandise production, and fundraising programs for the Informatics Student Association.",
        "Planned and executed the 'IT Preneur' seminar, managing speaker proposals, branding, and sponsorship outreach for campus competitions.",
      ],
    },
    {
      title: "Technical & Campus Operations Experience",
      subtitle: "Academic Dataset Collection, Production & Event Operations • 2024 – 2026",
      bullets: [
        "Conducted academic dataset collection at the Center of Excellence Advanced Infrastructure and ICT Services (AIIS), Telkom University.",
        "Managed end-to-end garment convection preorders (60+ laboratory coats across sizes S–XXL) and event crew operations.",
      ],
    },
  ] as LeadershipCard[],

  education: {
    degree: "Bachelor of Computer Science in Informatics",
    institution: "UIN Sunan Gunung Djati Bandung",
    period: "August 2022 – August 2026",
    gpa: "3.70 / 4.00",
    note: "Graduated via scientific publication track focusing on Deep Learning & Computer Vision.",
  },

  skills: {
    aiData: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Autoencoder",
      "MTCNN",
      "ONNX",
      "BiLSTM & NLP",
      "NumPy & Pandas",
      "Data Engineering",
    ],
    softwareDev: [
      "Flutter",
      "Dart",
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "RESTful API",
      "MySQL",
      "Oracle SQL",
      "Streamlit",
      "Git & GitHub",
    ],
    toolsInfra: [
      "Network Configuration",
      "Cisco CCNA",
      "Linux (NDG Essentials)",
      "Google Play Console",
      "UI/UX Design",
      "vMix",
      "Microsoft Excel",
      "LaTeX / Overleaf",
    ],
  },
};