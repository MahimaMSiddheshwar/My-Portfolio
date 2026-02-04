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
      title: "Research Assistant – Global Health Data Analytics",
      company: "IU BioHealth Informatics Research Center",
      period: "September 2023 – May 2025",
      location: "USA",
      type: "Research",
      description:
        "As a **Research Assistant** at the **IU BioHealth Informatics Research Center**, I worked in an **academic research setting** supporting **transcriptomic analysis**, including **bulk RNA-seq and single-cell RNA-seq**.",
      achievements: [
        "Most of my work involved **running existing pipelines** and maintaining **reproducible code** for **quality control, trimming, alignment, and feature counting** on **HPC systems using SLURM**, with tools such as **STAR, SAMtools, and BEDTools**.",
        "I was exposed to a broader range of **bioinformatics analyses**, tools, and **introductory machine learning concepts** through lab activities including **reading research papers**, **reproducing published analyses**, and **presenting results within the team**, which helped me become comfortable working in an academic research environment.",
        "I also helped prepare **clean, analysis-ready datasets** from public repositories such as **GEO** and **TCGA**, supporting downstream analysis and interpretation.",
        "Overall, this role strengthened my understanding of **data quality**, **reproducibility**, and **collaborative research practices** in an academic setting."
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
        "Earlier in my career, I worked at **Maxgen Technologies** in India in a **bioinformatics support role** within a **pharma R&D environment**. My role was **rotational**, beginning in the **wet lab** before transitioning into the **dry lab**.",
      achievements: [
        "In the dry lab, I supported **gene expression analysis**, **single-cell RNA-seq clustering and annotation**, and **marker gene interpretation** to assist ongoing research and preclinical studies, largely using **pre-built bioinformatics tools**.",
        "Alongside technical work, I learned to operate within **regulated workflows** by following **SOPs** and **GxP / GLP practices**, gaining an understanding of **documentation standards**, **reproducibility**, and **audit readiness**.",
        "Overall, this role provided early exposure to how **bioinformatics analyses are applied in real drug-development settings**, even while working in a **supporting capacity**."
      ]
    },
      title: "Bioinformatics Specialist",
      company: "Maxgen Technologies (Client: Hetero Pharma)",
      period: "July 2021 – August 2023",
      location: "India (Hybrid)",
      type: "Full-time",
      description:
        "Worked on genomic and transcriptomic data pipelines for biomarker discovery and research support within a pharmaceutical R&D environment.",
      achievements: [
        "Analyzed multi-omics datasets using Python and R; applied statistical and machine learning approaches such as LASSO and SVM to support R&D decision-making.",
        "Developed and maintained custom genomic analysis pipelines with a focus on reproducibility, documentation, and scalability across multiple projects.",
        "Collaborated with R&D and data teams to troubleshoot pipeline issues and optimize workflows, improving turnaround time and analysis consistency."
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
        "Developed an end-to-end machine learning pipeline integrating multiple public genomics datasets to identify candidate biomarkers for breast cancer.",
      technologies: ["Python", "R", "LASSO Regression", "SVM", "Logistic Regression", "GEO Datasets"],
      highlights: [
        "Integrated and harmonized seven GEO datasets",
        "Performed feature selection using LASSO regression",
        "Trained and evaluated SVM and logistic regression models",
        "Identified candidate biomarkers with strong predictive performance",
        "Generated interpretability and performance visualizations"
      ],
      github: "https://github.com/MahimaMSiddheshwar/ML-Projects"
    },
    {
      id: 2,
      title: "WGCNA on COVID-19 and RSV Transcriptomes",
      category: "Network Analysis & Transcriptomics",
      period: "2024",
      description:
        "Applied weighted gene co-expression network analysis to identify key gene modules and hub genes associated with viral infection responses.",
      technologies: ["R", "WGCNA", "RNA-Seq", "Network Analysis", "GO Enrichment"],
      highlights: [
        "Processed and curated RNA-Seq datasets",
        "Constructed co-expression networks",
        "Identified biologically relevant modules and hub genes",
        "Performed functional enrichment analysis",
        "Visualized networks using Cytoscape"
      ],
      github:
        "https://github.com/MahimaMSiddhwar/Comparative-Transcriptomic-Profiling-of-COVID-19-and-RSV"
    },
    {
      id: 3,
      title: "Streamlining RNA-Seq Data Analysis",
      category: "Pipeline Development",
      period: "2024",
      description:
        "Developed and compared RNA-Seq clustering and preprocessing pipelines to establish reproducible and efficient analysis workflows.",
      technologies: ["R", "Python", "RNA-Seq", "Clustering Algorithms", "Bash", "Git"],
      highlights: [
        "Implemented multiple clustering strategies",
        "Compared performance and reproducibility",
        "Automated workflow steps",
        "Created detailed documentation",
        "Established analysis best practices"
      ],
      github:
        "https://github.com/MahimaMSiddhwar/RNA-seq-Data-Analysis-A-Framework-for-Comparing-Computational-Pipelines-"
    },
    {
      id: 4,
      title: "Weather & Air Quality Dashboard",
      category: "Data Visualization & Analytics",
      period: "2025",
      description:
        "Built an interactive dashboard for exploring environmental and air quality data using modern visualization tools.",
      technologies: ["Python", "Power BI", "Data Visualization", "API Integration"],
      highlights: [
        "Aggregated data from multiple public sources",
        "Cleaned and standardized raw datasets",
        "Performed data transformation using Python",
        "Delivered dashboards highlighting trends and insights"
      ],
      github: "https://github.com/MahimaMSiddhwar/Health_Data_Analytics_Hub.git"
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
      "Seaborn",
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
