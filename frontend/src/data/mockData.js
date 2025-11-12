// Mock data for Mahima Siddheshwar's Portfolio
const portfolioData = {
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
      highlights: [
        "Focusing on genomics data analysis",
        "Statistical methods in bioinformatics",
        "Machine learning applications in biology"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Biotechnology",
      institution: "Sapthagiri College of Engineering (Affiliated to VTU)",
      period: "August 2016 - August 2020",
      location: "Bangalore, India",
      highlights: [
        "Foundation in molecular biology",
        "Laboratory techniques",
        "Biotechnology fundamentals"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      title: "Bioinformatic Analyst Intern – R&D",
      company: "Elucidata Corporation",
      period: "July 2025 – October 2025",
      location: "USA",
      type: "Internship",
      description:
        "Architected LLM-powered RNA-Seq and genomics pipelines; delivered reproducible, high-accuracy analyses and stakeholder-ready outputs.",
      achievements: [
        "Architected LLM-powered RNA-Seq and genomics pipelines using Python/R, extracting features from 50+ datasets (GEO/TCGA) with 100% traceability; reduced data inconsistencies by 25% and accelerated variant annotation/interpretation by 30%.",
        "Conducted integrative statistical analyses on multi-omics and clinical data; produced reproducible reports informing 5+ R&D decisions and shortened analysis timelines by 35% via optimized workflows and multivariate modeling.",
        "Collaborated with 10+ scientists/engineers to evaluate and refine bioinformatics tools; achieved 20% accuracy gains using prompt engineering and scalability testing on HPC.",
        "Supported analysis of health trends and disease patterns; contributed to 3+ study designs with HIPAA/GDPR-compliant metadata management and ethical standards.",
        "Prepared interactive visualizations and stakeholder summaries using Power BI and Cytoscape; provided on-demand technical support and training to drive tool adoption and data quality."
      ]
    },
    {
      id: 2,
      title: "Research Assistant – Global Health Data Analytics",
      company: "IU BioHealth Informatics Research Center",
      period: "September 2023 – May 2025",
      location: "USA",
      type: "Research",
      description:
        "Integrated public health repositories, engineered dashboards, and maintained reproducible RNA-Seq pipelines for cohort and outcomes research.",
      achievements: [
        "Integrated 100+ records from CDC/WHO repositories into standardized datasets; applied cross-referencing and statistical methods to eliminate 35% inconsistencies, enabling robust trend analysis and 20% faster cohort studies.",
        "Developed Power BI dashboards for geographic and disease-burden monitoring from genomic data; visualized multivariate indicators that reduced manual analysis time by 40% and supported 15+ R&D presentations.",
        "Documented and version-controlled bioinformatics pipelines (Git) to achieve 100% reproducibility across 20+ RNA-Seq analyses while upholding HIPAA/GDPR standards.",
        "Collaborated with multidisciplinary teams; contributed to 5+ research protocols focused on health outcomes, global trends, and experiment design."
      ]
    },
    {
      id: 3,
      title: "Bioinformatics Specialist",
      company: "Maxgen Technologies (Client: Hetero Pharma)",
      period: "July 2021 – August 2023",
      location: "India (Hybrid)",
      type: "Full-time",
      description:
        "Hands-on on genomic data pipelines for biomarker discovery; delivered analytics that improved R&D decisions and process scalability.",
      achievements: [
        "Analyzed multi-omics datasets with Python/R/SQL/JMP/Power BI; applied LASSO/SVM and Cytoscape network visualizations to surface trends, supporting R&D decisions and process enhancements by 15%.",
        "Developed and maintained custom genomic pipelines for biomarker discovery; integrated RNA-Seq features to streamline therapeutic insights and ensure reproducibility across 100+ analyses.",
        "Troubleshot and optimized pipeline performance in collaboration with R&D and data teams; improved scalability by 20% and accelerated approvals in pharma environments."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Machine Learning Pipeline for Breast Cancer Biomarker Discovery",
      category: "Machine Learning & Genomics",
      period: "2025",
      description:
        "Developed comprehensive ML pipeline integrating multiple genomics datasets to identify key biomarkers for breast cancer using advanced statistical methods.",
      technologies: ["Python", "R", "LASSO Regression", "SVM", "Logistic Regression", "GEO Datasets"],
      highlights: [
        "Integrated 7 GEO datasets for comprehensive analysis",
        "Applied LASSO regression for feature selection",
        "Implemented SVM and Logistic Regression models",
        "Identified key biomarkers with high predictive accuracy",
        "Created interpretability visualizations"
      ],
      github: "https://github.com/MahimaMSiddheshwar/ML-Projects"
    },
    {
      id: 2,
      title: "WGCNA on COVID-19 and RSV Transcriptomes",
      category: "Network Analysis & Transcriptomics",
      period: "2024",
      description:
        "Constructed weighted gene co-expression networks to identify hub genes and understand molecular mechanisms in viral infections.",
      technologies: ["R", "WGCNA", "RNA-Seq", "Network Analysis", "GO Enrichment"],
      highlights: [
        "Curated and processed RNA-Seq samples",
        "Constructed WGCNA networks for viral infections",
        "Identified hub genes and their biological significance",
        "Performed functional enrichment analysis",
        "Generated interactive network visualizations"
      ],
      github:
        "https://github.com/MahimaMSiddheshwar/Comparative-Transcriptomic-Profiling-of-COVID-19-and-RSV"
    },
    {
      id: 3,
      title: "Streamlining RNA-Seq Data Analysis",
      category: "Pipeline Development",
      period: "2024",
      description:
        "Developed and optimized RNA-Seq clustering pipelines to determine the most effective approach for transcriptomic data analysis.",
      technologies: ["R", "Python", "RNA-Seq", "Clustering Algorithms", "Bash", "Git"],
      highlights: [
        "Developed multiple RNA-Seq clustering approaches",
        "Compared pipeline performance and accuracy",
        "Implemented automated workflow management",
        "Created comprehensive documentation",
        "Established best practices for reproducibility"
      ],
      github:
        "https://github.com/MahimaMSiddheshwar/RNA-seq-Data-Analysis-A-Framework-for-Comparing-Computational-Pipelines-"
    },
    {
      id: 4,
      title: "Weather & Air Quality Dashboard",
      category: "Data Visualization & Analytics",
      period: "2025",
      description:
        "Created interactive dashboard for monitoring environmental data with real-time visualization capabilities.",
      technologies: ["Python", "Power BI", "Data Visualization", "API Integration"],
      highlights: [
        "Integrated multiple environmental data sources",
        "Built real-time monitoring capabilities",
        "Created intuitive user interfaces",
        "Implemented geographic trend analysis"
      ],
      github: "#"
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
      "UV-Vis Spectroscopy",
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
      description:
        "Comprehensive program covering R&D, Quality Control, Quality Assurance, Production, QC Microbiology and Regulatory Affairs"
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "The Future of LLM-Powered Genomics Pipelines",
      excerpt:
        "Exploring how large language models are revolutionizing genomics data analysis and pipeline automation.",
      date: "2025-01-15",
      category: "AI & Genomics",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best Practices for Transcriptomic Analysis",
      excerpt:
        "A comprehensive guide to weighted gene co-expression network analysis for identifying biological modules.",
      date: "2025-01-10",
      category: "Bioinformatics",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Quality Control in Biopharmaceutical Manufacturing",
      excerpt:
        "Insights from the field: ensuring compliance and quality in biologics production.",
      date: "2025-01-05",
      category: "Quality Control",
      readTime: "6 min read"
    }
  ],

  insights: [
    {
      id: 1,
      title: "The Future of LLM-Powered Genomics Pipelines",
      category: "AI & Genomics",
      date: "2025-01-14",
      readTime: "5 min read",
      summary:
        "Exploring how large language models are revolutionizing genomics data analysis and pipeline automation.",
      content:
        "Large Language Models (LLMs) have opened a new frontier in genomics research..."
    },
    {
      id: 2,
      title: "Best Practices for Transcriptomic Analysis",
      category: "Bioinformatics",
      date: "2025-01-09",
      readTime: "8 min read",
      summary:
        "A comprehensive guide to weighted gene co-expression network analysis for identifying biological modules.",
      content:
        "Transcriptomic analysis has become one of the cornerstones of modern biology..."
    },
    {
      id: 3,
      title: "Quality Control in Biopharmaceutical Manufacturing",
      category: "Quality Control",
      date: "2025-01-04",
      readTime: "6 min read",
      summary:
        "Insights from the field: ensuring compliance and quality in biologics production.",
      content:
        "Biopharmaceuticals, especially monoclonal antibodies, require rigorous quality control (QC)..."
    }
  ]
};

export default portfolioData;
