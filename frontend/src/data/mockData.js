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
    bio:
      "Passionate Bioinformatics Analyst with experience in genomics data analysis, machine learning, and quality-focused workflows. Completed an M.S. in Bioinformatics at Indiana University Indianapolis and worked on LLM-assisted genomics workflows during an internship at Elucidata Corporation."
  },

  // Education ONLY (keep work roles in the experience section below)
  education: [
    {
      id: 1,
      degree: "Master of Science in Bioinformatics",
      institution: "Luddy School of Informatics, Indiana University Indianapolis",
      period: "August 2023 – May 2025",
      location: "Indianapolis, IN, USA",
      highlights: [
        "Genomics data analysis",
        "Statistical methods in bioinformatics",
        "Machine learning applications in biology"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Biotechnology",
      institution: "(Add your university name)",
      period: "2016 – 2020",
      location: "India",
      highlights: [
        "Molecular biology foundation",
        "Genetics and biochemistry",
        "Wet-lab exposure and research basics"
      ]
    }
  ],

  // Work / Research experience
  experience: [
    {
      id: 1,
      title: "Bioinformatics Analyst Intern – R&D",
      company: "Elucidata Corporation",
      period: "July 2025 – October 2025",
      location: "USA",
      type: "Internship",
      description:
        "Supported evaluation and refinement of AI-assisted genomics workflows with focus on biological coherence, reproducibility, and QC.",
      achievements: [
        "Tested AI-assisted RNA-seq and scRNA-seq workflows across many scenarios and datasets.",
        "Validated outputs against biological expectations and standard genomics practices.",
        "Documented failure modes and collaborated with engineering teams to improve workflow logic."
      ]
    },
    {
      id: 2,
      title: "Research Assistant – Global Health Data Analytics",
      company: "IU BioHealth Informatics Research Center",
      period: "September 2023 – May 2025",
      location: "Indianapolis, IN, USA",
      type: "Research",
      description:
        "Supported academic research projects involving transcriptomic workflows and data engineering for public health datasets.",
      achievements: [
        "Ran and maintained reproducible preprocessing steps (QC, trimming, alignment, feature counts) on HPC/SLURM using tools such as STAR, SAMtools, and BEDTools.",
        "Prepared clean, analysis-ready datasets from public sources (e.g., GEO/TCGA) to support downstream analysis and interpretation.",
        "Strengthened documentation and reproducibility habits through iterative analyses and internal reviews."
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
        "Rotational role across wet-lab and dry-lab support in a pharma R&D environment; transitioned to bioinformatics support focused on expression analyses.",
      achievements: [
        "Supported gene expression analysis and single-cell clustering/annotation using established tools and team workflows.",
        "Interpreted marker genes to support ongoing research and preclinical studies.",
        "Worked within SOP-driven processes and learned GxP/GLP-aligned documentation and audit readiness basics."
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
        "Built an end-to-end ML workflow using public gene-expression datasets to identify candidate biomarkers for breast cancer.",
      technologies: [
        "Python",
        "R",
        "LASSO",
        "SVM",
        "Logistic Regression",
        "GEO"
      ],
      highlights: [
        "Integrated multiple GEO datasets",
        "Performed feature selection using LASSO",
        "Trained and evaluated classification models",
        "Generated performance and interpretability plots"
      ],
      github: "https://github.com/MahimaMSiddheshwar/ML-Projects"
    },
    {
      id: 2,
      title: "WGCNA on COVID-19 and RSV Transcriptomes",
      category: "Network Analysis & Transcriptomics",
      period: "2024",
      description:
        "Applied WGCNA to identify gene co-expression modules and hub genes associated with viral infection responses.",
      technologies: ["R", "WGCNA", "RNA-seq", "GO Enrichment", "Cytoscape"],
      highlights: [
        "Constructed co-expression networks",
        "Identified biologically relevant modules",
        "Performed functional enrichment analysis",
        "Visualized module relationships"
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
        "Compared clustering and preprocessing strategies to support reproducible RNA-seq analysis workflows.",
      technologies: ["R", "Python", "RNA-seq", "Bash", "Git"],
      highlights: [
        "Implemented multiple clustering strategies",
        "Compared results for consistency",
        "Automated workflow steps",
        "Created clear documentation"
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
        "Built an interactive dashboard for exploring environmental and air quality data.",
      technologies: ["Python", "Power BI", "Data Visualization", "API Integration"],
      highlights: [
        "Aggregated data from public sources",
        "Standardized raw datasets",
        "Delivered dashboards showing trends and insights"
      ],
      github: "https://github.com/MahimaMSiddheshwar/Health_Data_Analytics_Hub"
    }
  ],

  skills: {
    "Bioinformatics & Omics Analysis": [
      "RNA-seq Analysis",
      "WGCNA",
      "DESeq2 & edgeR",
      "GSEA",
      "limma",
      "Single-cell Analysis",
      "Genome Assembly & Annotation"
    ],
    "Programming & Data Analysis": [
      "Python",
      "R",
      "Bash",
      "Git",
      "Machine Learning",
      "Statistical Analysis",
      "Data Preprocessing"
    ],
    "Visualization & Tools": [
      "Cytoscape",
      "Power BI",
      "ggplot2",
      "Matplotlib",
      "Plotly",
      "Excel"
    ],
    "Quality Control & Compliance": [
      "cGMP",
      "QSR",
      "ALCOA+",
      "SOP Documentation",
      "Deviation Investigation",
      "CAPA",
      "ISO Standards"
    ],
    "Laboratory Techniques": [
      "PCR",
      "qPCR",
      "Western Blot",
      "ELISA",
      "Cell Culture",
      "Protein Assays",
      "UV-Vis Spectroscopy"
    ],
    "Software & Platforms": [
      "LIMS",
      "SAP",
      "TrackWise",
      "ZenML",
      "Jupyter Notebook",
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
        "Program covering R&D, Quality Control, Quality Assurance, Production, QC Microbiology, and Regulatory Affairs."
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "The Future of LLM-Powered Genomics Pipelines",
      excerpt:
        "Exploring how large language models are influencing genomics data analysis and workflow automation.",
      date: "2025-01-15",
      category: "AI & Genomics",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best Practices for Transcriptomic Analysis",
      excerpt:
        "An overview of best practices in transcriptomic and network-based analysis workflows.",
      date: "2025-01-10",
      category: "Bioinformatics",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Quality Control in Biopharmaceutical Manufacturing",
      excerpt:
        "Practical perspectives on ensuring quality and compliance in biologics manufacturing.",
      date: "2025-01-05",
      category: "Quality Control",
      readTime: "6 min read"
    }
  ]
};

export default portfolioData;
