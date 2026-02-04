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
        "Genomics Data Analysis | NGS Technology",
        "Statistical methods in Bioinformatics",
        "Machine learning applications in Biology"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Biotechnology",
      institution: "Visvesvaraya Technological University",
      period: "2016 – 2020",
      location: "India",
      highlights: [
        "Molecular Biology",
        "Genetics and Biochemistry",
        "Wet-lab exposure and Research"
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
        "Prepared clean, analysis-ready datasets from public sources (GEO/TCGA) to support downstream analysis and interpretation.",
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
      title: " Single cell RNA sequencing analysis of a melanoma (SKCM) tumor sample treated with antiPD1 immunotherapy,",
      category: "NGS Analysis",
      period: "2026",
      description:
        "Built an end-to-end ingle-cell RNA sequencing (scRNA-seq) analysis of a melanoma (SKCM) tumor sample treated with antiPD1 immunotherapy, derived from the TISCH database (dataset: SKCM_GSE134388_aPD1).",
      technologies: [
        "Python",
        "Scanpy",
        "Git Version Control",
        "Clustering",
        "TISCH Database",
        "Quality Control"
      ],
      highlights: [
        "Analysis Focused on characterizing the tumor immune microenvironment",
        "Identifying major immune and stromal cell populations",
        "Annotating clusters using canonical marker genes",
        "Building a reproducible and interpretable scRNA seq workflow"
      ],
      github: "https://github.com/MahimaMSiddheshwar/scRNAseq-Immunotherapy-TumorMicroenvironment.git"
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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

  insights: [
    {
      id: 1,
      title: "The Future of LLM-Powered Genomics Pipelines",
      summary: "Exploring how large language models are influencing genomics data analysis and workflow automation.",
      date: "2025-01-15",
      category: "AI & Genomics",
      readTime: "5 min read",
      content: "Large language models are revolutionizing genomics data analysis. This article explores how AI is transforming pipeline automation, data interpretation, and quality control in bioinformatics workflows. From automated annotation to intelligent error detection, LLMs are becoming indispensable tools in modern genomics research."
    },
    {
      id: 2,
      title: "Best Practices for Transcriptomic Analysis",
      summary: "An overview of best practices in transcriptomic and network-based analysis workflows.",
      date: "2025-01-10",
      category: "Bioinformatics",
      readTime: "8 min read",
      content: "Transcriptomic analysis requires careful consideration of multiple factors including data quality, normalization methods, and statistical testing. This comprehensive guide covers best practices from raw data processing to downstream analysis, ensuring reproducible and meaningful results in your gene expression studies."
    },
    {
      id: 3,
      title: "Quality Control in Biopharmaceutical Manufacturing",
      summary: "Practical perspectives on ensuring quality and compliance in biologics manufacturing.",
      date: "2025-01-05",
      category: "Quality Control",
      readTime: "6 min read",
      content: "Quality control is critical in biopharmaceutical manufacturing. This article discusses practical approaches to implementing robust QC systems, from raw material testing to final product release, ensuring compliance with regulatory standards while maintaining efficiency and product safety."
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
