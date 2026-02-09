// src/data/projects.ts

export interface Project {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  url: string;
}

export const projects = [
  {
    title: "Prashant Portfolio",
    category: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and professional journey.",
    thumbnail: "/work/Portfolio.png",
    url: "https://pportfolio-1.netlify.app/"
  },
  {
    title: "Kinara",
    category: "Management System",
    description:
      "Kinara is a modern hotel room booking platform designed for effortless stays. Discover comfortable accommodations, seamless reservations, and a smooth user experience—all in one place",
    thumbnail: "/work/Kinara.png",
    url: "https://kinara-inky.vercel.app/"
  },
  {
    title: "Civiclens AI",
    category: "Management System",
    thumbnail: "/work/CivicLensAI.png",
    url: "https://civiclens-ai1.netlify.app/",
    description:
      "CivicLens-AI is an AI-powered civic platform that helps citizens report issues and enables authorities to prioritize and resolve them faster",
  },
  {
    title: "ATSCORE : Resume Matching System",
    category: "Business",
    thumbnail: "/work/ATScore.png",
    url: "https://atscore.vercel.app/",
    description:
      "ATSCORE is an AI-powered resume matching system that evaluates ATS-style compatibility using NLP-driven semantic and skill-based analysis.",
  },
  {
    title: "Harshal Portfolio",
    category: "Portfolio",
    thumbnail: "/work/HarshalPortfolio.png",
    url: "https://harshal-patil-portfolio-xi.vercel.app/",
    description:
      "Harshal's personal portfolio showcasing his projects and skills.",
  },
  {
    title: "PDFUTILS : AI Document Processing",
    category: "Web App",
    thumbnail: "/work/PDFUtils.png",
    url: "https://mypdfutils.vercel.app/",
    description:
      "PDFUTILS is an AI-driven document processing platform that extracts, cleans, and structures text for scalable machine learning workflows",
  },
  {
    title: "Allergy Sentinel",
    category: "Business Web App",
    thumbnail: "/work/AllergySentinel.png",
    url: "https://allergy-sentinel.vercel.app/",
    description:
      "Allergy Sentinel is an AI-powered food label analysis platform that detects allergens and potential carcinogenic ingredients from packaged food labels using OCR and intelligent text analysis.",
  },
  {
    title: "Saurabh Portfolio",
    category: "Portfolio",
    thumbnail: "/work/SaurabhPortfolio.png",
    url: "https://saurabhhumane.vercel.app/",
    description:
      "Saurabh's personal portfolio showcasing his projects and skills & Professional journey",
  },

];
