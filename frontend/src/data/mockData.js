// Mock data for Mahima Siddheshwar's Portfolio
export const portfolioData = {
  personal: {
    fullName: "Mahima Mahabaleshwar Siddheshwar",
    displayName: "Mahima Siddheshwar",
    tagline: "Bridging Biology and Data Science",
    location: "Indianapolis, IN, USA",
    email: "mahimamahabaleshwar@gmail.com",
    phone: "317-506-5008",
    linkedin: "https://www.linkedin.com/in/mahima-siddheshwar-98a585196",
    bio: "Passionate Bioinformatics Analyst with expertise in genomics data analysis, machine learning, and quality control systems. Pursued M.S. in Bioinformatics at Indiana University Indianapolis while gaining hands-on experience in LLM-powered genomics pipelines at Elucidata Corporation."
  },

  education: [
    {
      id: 1,
      degree: "Master of Science in Bioinformatics",
      institution: "Luddy School of Informatics, Indiana University Indianapolis",
      period: "August 2023 - May 2025",
      location: "Indianapolis, IN, USA",
      highlights: ["Focusing on genomics data analysis", "Statistical methods in bioinformatics", "Machine learning applications in biology"]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Biotechnology",
      institution: "Sapthagiri College of Engineering (Affiliated to VTU)",
      period: "August 2016 - August 2020",
      location: "Bangalore, India",
      highlights: ["Foundation in molecular biology", "Laboratory techniques", "Biotechnology fundamentals"]
    }
  ],

  experience: [
    {
      id: 1,
      title: "Bioinformatic Analyst Intern – R&D",
      company: "Elucidata Corporation",
      period: "July 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "Building and maintaining LLM-powered genomics pipelines while performing statistical and integrative analyses on genomics and clinical data.",
      achievements: [
        "Built and maintained LLM-powered genomics pipelines",
        "Performed statistical and integrative analyses on genomics and clinical data",
        "Collaborated with scientists and engineers to optimize workflows",
        "Assisted in developing LLM-powered tools using prompt engineering",
        "Supported data analysis using R and Python to identify health trends",
        "Documented and version-controlled genomic pipelines"
      ]
    },
    {
      id: 2,
      title: "Research Assistant – Global Health Data Analytics",
      company: "IU BioHealth Informatics Research Center",
      period: "September 2023 – May 2025",
      location: "Indianapolis, IN",
      type: "Research",
      description: "Leading data integration and visualization projects for global health analytics with focus on public health data standardization.",
      achievements: [
        "Integrated 100+ records from various sources, ensuring traceability and metadata consistency",
        "Cleaned, standardized, and cross-referenced public health data",
        "Designed Power BI dashboards to monitor geographic trends and disease burden",
        "Delivered health indicator visualizations",
        "Documented and version-controlled pipelines"
      ]
    },
    {
      id: 3,
      title: "Executive - Quality Control (QC) Analyst",
      company: "Biocon Biologics Limited",
      period: "July 2021 - August 2023",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Ensured quality standards in biopharmaceutical manufacturing through comprehensive testing and compliance protocols.",
      achievements: [
        "Conducted biological sample testing ensuring 100% data traceability under GMP standards",
        "Inspected packaging materials, achieving 100% compliance",
        "Operated and maintained HPLC, UV, Osmometer, and particulate analyzers",
        "Investigated OOS/OOT/OOE events, initiating CAPAs",
        "Trained new analysts and supported cross-functional teams",
        "Led 5S and change management initiatives"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Machine Learning Pipeline for Breast Cancer Biomarker Discovery",
      category: "Machine Learning & Genomics",
      period: "2024",
      description: "Developed comprehensive ML pipeline integrating multiple genomics datasets to identify key biomarkers for breast cancer using advanced statistical methods.",
      technologies: ["Python", "R", "LASSO Regression", "SVM", "Logistic Regression", "GEO Datasets"],
      highlights: [
        "Integrated 7 GEO datasets for comprehensive analysis",
        "Applied LASSO regression for feature selection",
        "Implemented SVM and Logistic Regression models",
        "Identified key biomarkers with high predictive accuracy",
        "Created interpretability visualizations"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "WGCNA on COVID-19 and RSV Transcriptomes",
      category: "Network Analysis & Transcriptomics",
      period: "2024",
      description: "Constructed weighted gene co-expression networks to identify hub genes and understand molecular mechanisms in viral infections.",
      technologies: ["R", "WGCNA", "RNA-Seq", "Network Analysis", "GO Enrichment"],
      highlights: [
        "Curated and processed RNA-Seq samples",
        "Constructed WGCNA networks for viral infections",
        "Identified hub genes and their biological significance",
        "Performed functional enrichment analysis",
        "Generated interactive network visualizations"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Streamlining RNA-Seq Data Analysis",
      category: "Pipeline Development",
      period: "2024",
      description: "Developed and optimized RNA-Seq clustering pipelines to determine the most effective approach for transcriptomic data analysis.",
      technologies: ["R", "Python", "RNA-Seq", "Clustering Algorithms", "Bash", "Git"],
      highlights: [
        "Developed multiple RNA-Seq clustering approaches",
        "Compared pipeline performance and accuracy",
        "Implemented automated workflow management",
        "Created comprehensive documentation",
        "Established best practices for reproducibility"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Weather & Air Quality Dashboard",
      category: "Data Visualization & Analytics",
      period: "2023",
      description: "Created interactive dashboard for monitoring environmental data with real-time visualization capabilities.",
      technologies: ["Python", "Power BI", "Data Visualization", "API Integration"],
      highlights: [
        "Integrated multiple environmental data sources",
        "Built real-time monitoring capabilities",
        "Created intuitive user interfaces",
        "Implemented geographic trend analysis"
      ],
      github: "#",
      demo: "#"
    }
  ],

  skills: {
    "Bioinformatics & Omics Analysis": [
      "RNA-seq Analysis",
      "WGCNA (Weighted Gene Co-expression Network Analysis)",
      "DESeq2 & edgeR",
      "GSEA (Gene Set Enrichment Analysis)",
      "limma",
      "Single-cell Analysis",
      "Genome Assembly & Annotation"
    ],
    "Programming & Data Analysis": [
      "Python",
      "R",
      "Bash Scripting",
      "Git Version Control",
      "Machine Learning (SVM, LASSO, Logistic Regression)",
      "Statistical Analysis",
      "Data Mining & Preprocessing"
    ],
    "Visualization & Tools": [
      "Cytoscape",
      "Power BI",
      "ggplot2",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Excel Advanced Analytics"
    ],
    "Quality Control & Compliance": [
      "CGMP (Current Good Manufacturing Practices)",
      "QSR (Quality System Regulation)",
      "ALCOA+ Principles",
      "SOP Review & Documentation",
      "Deviation Investigation",
      "CAPA Tracking",
      "ISO Standards"
    ],
    "Laboratory Techniques": [
      "PCR & qPCR",
      "Western Blotting",
      "ELISA",
      "Cell Culture (Mammalian & Bacterial)",
      "Protein Assays",
      "HPLC & UV-Vis Spectroscopy",
      "Sample Preparation"
    ],
    "Software & Platforms": [
      "LIMS (Laboratory Information Management Systems)",
      "SAP",
      "Trackwise",
      "ZenML Pipelines",
      "Jupyter Notebooks",
      "RStudio"
    ]
  },

  certifications: [
    {
      id: 1,
      name: "Certification in Biosciences Program",
      issuer: "Biocon Academy & Keck Graduate Institute",
      period: "2021",
      description: "Comprehensive program covering R&D, Quality Control, Quality Assurance, Production, QC Microbiology and Regulatory Affairs"
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "The Future of LLM-Powered Genomics Pipelines",
      excerpt: "Exploring how large language models are revolutionizing genomics data analysis and pipeline automation.",
      date: "2025-01-15",
      category: "AI & Genomics",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "WGCNA Best Practices for Transcriptomic Analysis",
      excerpt: "A comprehensive guide to weighted gene co-expression network analysis for identifying biological modules.",
      date: "2025-01-10",
      category: "Bioinformatics",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Quality Control in Biopharmaceutical Manufacturing",
      excerpt: "Insights from the field: ensuring compliance and quality in biologics production.",
      date: "2025-01-05",
      category: "Quality Control",
      readTime: "6 min read"
    }
  ]
};

export default portfolioData;
