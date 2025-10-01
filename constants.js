export const METADATA = {
  author: "Mohit Kasat",
  title: "Portfolio | Mohit Kasat",
  description:
    "Mohit Kasat is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "",
  instagramHandle: "@kasat.mohit",
  keywords: [
    "Mohit Kasat",
    "Data Scientist",
    "Python Developer",
    "Software Engineer",
    "Portfolio",
    "AI/ML Developer",
    "Backend Developer",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];
 
export const TYPED_STRINGS = [
  "A passionate Computer Science enthusiast",
  "I build intelligent systems using Machine Learning",
  "I create data-driven solutions for real-world problems",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: mohitkasat83@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mohitkasat/",
  },
  {
    name: "github",
    url: "https://github.com/mohit8383",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/kasat.mohit/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "java",
    "javascript",
    "typescript",
    "docker",
    "flask",
    "AWS",
    "git",
    "postgresql",
    "mongodb",
    "redis",
    "django"
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb", "postgresql"],
  other: ["git", "redux"],
};
export const PROJECTS = [
  {
    name: "Agri-Estore",
    image: "/projects/Agriestore.webp",
    blurImage: "/projects/blur/Agriestore_blur.webp",
    description: "An online Agri Products website built with Spring Boot 📚",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://agristore.onrender.com/",
    tech: ["java", "AWS", "javascript"],
  },
  {
    name: "Hotel Booking System",
    image: "/projects/hotel_booking.webp",
    blurImage: "/projects/blur/hotel_booking_blur.webp",
    description: "A full-featured hotel booking system built with Django and React 🏨",
    gradient: ["#1E3A8A", "#2563EB"],
    url: "https://hotel-management-cqvn.onrender.com",
    tech: ["django", "react", "postgresql", "tailwindcss"],
  },
  {
    name: "Olympic 2024 Dashboard Using Power BI",
    image: "/projects/Olympic.webp",
    blurImage: "/projects/blur/Olympic-blur.webp",
    description: "Interactive Power BI dashboard providing insights on the 2024 Olympics 🏅",
    gradient: ["#142D46", "#2E4964"],
    url: "https://app.powerbi.com/view?r=eyJrIjoiZDhiYzE0MzktYjI1OC00M2M2LWIzMmQtMjUxMWZiM2I5NmY5IiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9&embedImagePlaceholder=true",
    tech: ["powerbi", "pandas", "data-visualization"],
  },
  {
    name: "Image Classification by Machine Learning Using Python",
    image: "/projects/imageclasification normal.webp",
    blurImage: "/projects/blur/imageclassification.webp",
    description:
      "Developed an image classification model using ML techniques to achieve high accuracy 📸",
    gradient: ["#000066", "#6699FF"],
    url: "https://imageclasify.streamlit.app/",
    tech: ["python", "tensorflow", "scikit-learn", "matplotlib"],
  },
];

export const WORK = [
  {
    id: 2,
    company: "PwC (PricewaterhouseCoopers)",
    title: "Risk Consultant – AI & Cybersecurity",
    location: "Gurugram, India",
    range: "Sep 2025 – Present",
    responsibilities: [
      "Supporting clients in AI & Cybersecurity risk consulting projects.",
      "Contributing to cybersecurity frameworks such as ISO 27001 and threat management strategies.",
      "Applying Python, SQL, and data analytics to build secure and scalable solutions.",
      "Collaborating with cross-functional teams to drive risk mitigation and compliance initiatives.",
    ],
    url: "https://www.pwc.in/",
    video: null,
    highlight: true, // Custom property to highlight as current role
  },
  {
    id: 1,
    company: "DRDO",
    title: "Machine Learning Intern",
    location: "Delhi, India",
    range: "Jan 2024 - Mar 2024",
    responsibilities: [
      "Worked on automated content moderation using machine learning for social media platforms.",
      "Developed and fine-tuned models using LSTM, ResNet50, and BERT for multimodal hate speech detection.",
      "Collaborated with the research team to improve accuracy and reduce false positives by over 15%.",
    ],
    url: "https://www.drdo.gov.in/",
    video: "/work/drdo.mp4", // Replace with correct video or remove if not available
  },
];

export const WORK_CONTENTS = {
  PwC: [
    {
      title: "Risk Consultant – AI & Cybersecurity",
      description:
        "Currently working at PwC (PricewaterhouseCoopers) in Gurugram, India, supporting clients in AI & Cybersecurity risk consulting projects.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering organizations to manage AI and cybersecurity risks in a digital world.
        </div>
      ),
    },
    {
      title: "Key Responsibilities",
      description:
        "• Supporting clients in AI & Cybersecurity risk consulting projects.\n• Contributing to cybersecurity frameworks such as ISO 27001 and threat management strategies.\n• Applying Python, SQL, and data analytics to build secure and scalable solutions.\n• Collaborating with cross-functional teams to drive risk mitigation and compliance initiatives.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-left">
          <ul className="list-disc pl-6 space-y-2">
            <li>Supporting clients in AI &amp; Cybersecurity risk consulting projects.</li>
            <li>Contributing to cybersecurity frameworks such as ISO 27001 and threat management strategies.</li>
            <li>Applying Python, SQL, and data analytics to build secure and scalable solutions.</li>
            <li>Collaborating with cross-functional teams to drive risk mitigation and compliance initiatives.</li>
          </ul>
        </div>
      ),
    },
  ],
  DRDO: [
    {
      title: "DRDO Internship",
      description:
        "Worked at the Defence Research and Development Organisation (DRDO) as a Machine Learning Intern focusing on social media content moderation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building AI for national security and digital safety.
        </div>
      ),
    },
    {
      title: "Research & Innovation",
      description:
        "Led the development of a multimodal deep learning system using LSTM, ResNet50, and BERT to detect hate speech from text and images. Collaborated with experts to analyze large datasets and improved the moderation model’s performance significantly.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Machine Learning Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";

