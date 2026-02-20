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
      location: "Bangalore,India",
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
      title: "Spatial Transcriptomics of Breast Cancer Tissue",
      category: "Omics Analysis & Data Visualization",
      period: "2026",
      description:
        "Mapping the tumor microenvironment at spatial resolution using 10x Genomics Visium resolving how cancer, stromal, and immune cells communicate across tissue space.",
      technologies: ["Python", "Scanpy", "Squidpy", "Moran's I", "CellChatDB", "10x Genomics Visium", "Leiden Clustering"],
      highlights: [
        "ER+ Luminal A Subtype Confirmed Spatially",
        "S9 Spatially Coherent TME Domains at Resolution 0.5",
        "2,486 Spatially Variable Genes — 11.6% of Transcriptome"
      ],
      github: "https://spatial-biology.vercel.app/"
    },
    {
      id: 3,
      title: "Bioinformatic Insights Website",
      category: "Complete Overview from Life Science Research",
      period: "2026",
      description:
        "Mapping the tumor microenvironment at spatial resolution using 10x Genomics Visium resolving how cancer, stromal, and immune cells communicate across tissue space.",
      technologies: ["Python", "Scanpy", "Squidpy", "Moran's I", "CellChatDB", "10x Genomics Visium", "Leiden Clustering"],
      highlights: [
        "Aggregated data from public sources",
        "Curated Bioscience Personal Website",
        "Delivered learnings showing trends and insights from the field",
        "Designed for recruiters and hiring managers to quickly understand my skills and experience"
      ],
      github: "https://bioinformatics-insights.vercel.app/"
    },
    {
      id: 4,
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
      id: 5,
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
      github: "https://github.com/MahimaMSiddheshwar/Comparative-Transcriptomic-Profiling-of-COVID-19-and-RSV",
    },
    {
      id: 6,
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
      github: "https://github.com/MahimaMSiddheshwar/RNA-seq-Data-Analysis-A-Framework-for-Comparing-Computational-Pipelines-",
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
      issuer: "Biocon Academy & Keck Graduate Institute, California",
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
      date: "2026-02-04",
      category: "AI & Genomics",
      readTime: "5 min read",
      content: "Large language models are revolutionizing genomics data analysis. This article explores how AI is transforming pipeline automation, data interpretation, and quality control in bioinformatics workflows. From automated annotation to intelligent error detection, LLMs are becoming indispensable tools in modern genomics research."
    },
    {
      id: 2,
      title: "Best Practices for Transcriptomic Analysis",
      summary: "An overview of best practices in transcriptomic and network-based analysis workflows.",
      date: "2026-02-04",
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
    date: "2026-02-04",
    category: "AI & Genomics",
    readTime: "5 min read",
    content:
      "🔬 OVERVIEW\n" +
      "Large language models (LLMs) are increasingly being used as productivity tools in genomics and bioinformatics. They are not replacing core algorithms (alignment, quantification, differential analysis), but they can reduce time spent on repetitive tasks like organizing inputs, generating analysis templates, interpreting QC reports, and turning results into readable summaries.\n\n" +

      "🧠 WHAT AN LLM IS GOOD AT (IN PRACTICE)\n" +
      "LLMs are strong at pattern-based reasoning and language tasks. In genomics workflows, that often translates into:\n" +
      "• Converting a research goal into a structured analysis checklist\n" +
      "• Drafting pipeline skeletons (folder structure, config files, command templates)\n" +
      "• Explaining what common metrics mean (mapping rate, duplication, mitochondrial %, etc.)\n" +
      "• Summarizing outputs into short, human-readable notes for lab updates\n\n" +

      "🧬 WHERE LLMs CAN HELP ACROSS A TYPICAL PIPELINE\n" +
      "1) STUDY SETUP & METADATA\n" +
      "• Helping clean sample metadata tables (consistent naming, group labels)\n" +
      "• Suggesting a clear comparison structure (treated vs control, paired design)\n" +
      "• Flagging missing fields that will matter later (batch, replicate, timepoint)\n\n" +

      "2) QC INTERPRETATION\n" +
      "LLMs can help you interpret QC patterns, for example:\n" +
      "• Low mapping + high rRNA reads → possible contamination or reference mismatch\n" +
      "• High duplication → low complexity library or over-amplification\n" +
      "• High mitochondrial % in scRNA-seq → stressed/dying cells or dissociation artifacts\n" +
      "This is useful because QC reports contain many metrics, and beginners often don’t know what matters most.\n\n" +

      "3) ASSISTING DOWNSTREAM NARRATIVE\n" +
      "After differential expression or clustering, an LLM can help:\n" +
      "• Summarize marker genes into likely cell type labels (with references to known markers)\n" +
      "• Convert enrichment outputs into biologically meaningful statements\n" +
      "• Draft “Results” bullets for a slide deck or portfolio page\n\n" +

      "⚙️ WHAT LLMs SHOULD NOT DO (WITHOUT CAREFUL REVIEW)\n" +
      "• Final scientific decisions (e.g., declaring a pathway is “important” without context)\n" +
      "• Interpreting results without checking experimental design and confounders\n" +
      "• Producing ‘confident’ statements without evidence or validation\n" +
      "• Replacing domain checks like: known markers, controls, replicate consistency\n\n" +

      "✅ HOW TO USE LLMs SAFELY (A SIMPLE WORKFLOW)\n" +
      "Step 1: Use LLMs to draft and organize (templates, checklists, documentation)\n" +
      "Step 2: Run real tools for the analysis (STAR/Salmon/Scanpy/Seurat, etc.)\n" +
      "Step 3: Validate results using biology + QC + known references\n" +
      "Step 4: Use the LLM again to help write a clean summary of what you verified\n\n" +

      "📌 TAKEAWAY\n" +
      "LLMs are best used as a co-pilot for structuring workflows and communicating results. They can speed up routine work, but biological correctness still depends on careful QC, validated reasoning, and human review."
  },

  {
    id: 2,
    title: "Best Practices for Transcriptomic Analysis",
    excerpt:
      "An overview of best practices in transcriptomic and network-based analysis workflows.",
    date: "2026-01-15",
    category: "Bioinformatics",
    readTime: "8 min read",
    content:
      "🧪 OVERVIEW\n" +
      "Transcriptomic analysis can look “simple” (run alignment → run DE → plot volcano), but most errors happen because of weak experimental design, poor QC, or incorrect assumptions during preprocessing. This guide summarizes practical best practices that keep results biologically meaningful and reproducible.\n\n" +

      "🧭 1) START WITH A CLEAR STUDY DESIGN\n" +
      "Before touching the FASTQs or expression matrix, define:\n" +
      "• What is the primary question? (e.g., treated vs untreated, tumor vs normal)\n" +
      "• What is the comparison structure? (paired? time-series? multiple groups?)\n" +
      "• Which covariates matter? (batch, sex, age, tissue site, sequencing run)\n" +
      "• What is your success definition? (biological interpretation, predictive model, biomarkers)\n\n" +

      "🔍 2) QC IS NOT OPTIONAL\n" +
      "QC is where you prevent wasted downstream work. In bulk RNA-seq:\n" +
      "• Check read quality and adapter contamination\n" +
      "• Confirm mapping rates and rRNA contamination\n" +
      "• Review duplication/library complexity\n" +
      "• Confirm gene body coverage (3’ bias can indicate degradation)\n\n" +
      "In single-cell RNA-seq:\n" +
      "• Filter cells with very low genes/UMIs (empty droplets)\n" +
      "• Filter extreme mitochondrial % (stressed/dying cells)\n" +
      "• Watch doublets (high genes/UMIs) where two cells appear as one\n\n" +

      "⚙️ 3) NORMALIZATION AND PREPROCESSING (DO IT RIGHT)\n" +
      "Bulk RNA-seq:\n" +
      "• Use accepted methods (DESeq2 size factors, edgeR TMM, etc.)\n" +
      "• Avoid comparing raw counts directly\n" +
      "• Transform carefully for visualization (VST/rlog/log2 CPM)\n\n" +
      "Single-cell:\n" +
      "• Normalize consistently (log-normalization or SCTransform-like approaches)\n" +
      "• Choose HVGs appropriately\n" +
      "• Scale only where needed (not always mandatory for every method)\n\n" +
      "If integrating datasets:\n" +
      "• Confirm batch structure\n" +
      "• Use appropriate integration methods (Harmony, scVI, Seurat integration)\n" +
      "• Always validate that biology is preserved (markers still make sense)\n\n" +

      "📊 4) STATISTICS: MATCH THE MODEL TO THE DESIGN\n" +
      "Common mistakes:\n" +
      "• Ignoring batch effects in a multi-run dataset\n" +
      "• Treating paired samples as unpaired\n" +
      "• Using the wrong unit (cells as replicates instead of donors in scRNA)\n\n" +
      "Best practice:\n" +
      "• Use a design matrix that reflects reality\n" +
      "• Validate with diagnostic plots (PCA/UMAP by batch and condition)\n" +
      "• Report effect size + adjusted p-values (not p-values alone)\n\n" +

      "🧬 5) INTERPRETATION: DON’T STOP AT A GENE LIST\n" +
      "After DE or marker discovery:\n" +
      "• Use gene set/pathway analysis (GSEA, Reactome, GO)\n" +
      "• Interpret directionality (up vs down regulated pathways)\n" +
      "• Confirm whether results match expected biology or literature\n\n" +
      "For network analysis:\n" +
      "• WGCNA can summarize patterns into modules\n" +
      "• Modules should be validated with traits + enrichment\n" +
      "• Hub genes should be treated as candidates, not final conclusions\n\n" +

      "📁 6) REPRODUCIBILITY (WHAT RECRUITERS AND LABS CARE ABOUT)\n" +
      "Your analysis is only valuable if it can be reproduced.\n" +
      "Practical habits:\n" +
      "• Save parameters + software versions\n" +
      "• Keep intermediate outputs (QC reports, processed matrices)\n" +
      "• Use consistent folder structure\n" +
      "• Write short READMEs explaining inputs → steps → outputs\n\n" +

      "✅ TAKEAWAY\n" +
      "Good transcriptomic analysis is less about fancy plots and more about correct design, solid QC, appropriate normalization/statistics, and careful biological interpretation—backed by reproducible documentation."
  },

  {
    id: 3,
    title: "Quality Control in Biopharmaceutical Manufacturing",
    excerpt:
      "Practical perspectives on ensuring quality and compliance in biologics manufacturing.",
    date: "2026-01-05",
    category: "Quality Control",
    readTime: "6 min read",
    content:
      "🏭 OVERVIEW\n" +
      "Quality Control (QC) in biopharmaceutical manufacturing is about ensuring consistency, safety, and compliance. QC teams verify that raw materials, in-process samples, and final products meet predefined acceptance criteria. The goal is not only to detect failures, but to prevent them through disciplined systems and documentation.\n\n" +

      "✅ 1) WHAT QC REALLY ENSURES\n" +
      "QC ensures:\n" +
      "• Identity: Is this the correct material/product?\n" +
      "• Purity: Are impurities within limits?\n" +
      "• Potency: Does it meet functional strength requirements?\n" +
      "• Safety: Is it free from harmful contamination (where applicable)?\n" +
      "• Consistency: Are results stable across batches and time?\n\n" +

      "🧾 2) STRONG QC IS A SYSTEM (NOT JUST TESTING)\n" +
      "Testing is one part. Strong QC also includes:\n" +
      "• SOP-driven execution (same method, same steps, every time)\n" +
      "• Good documentation practices (GDP)\n" +
      "• Controlled templates, versioning, and traceability\n" +
      "• Clear roles for review, approval, and release\n\n" +

      "📑 3) DOCUMENTATION: ALCOA+ MINDSET\n" +
      "Even correct results can become unusable if documentation is weak.\n" +
      "ALCOA+ emphasizes that records should be:\n" +
      "• Attributable (who did it)\n" +
      "• Legible (readable)\n" +
      "• Contemporaneous (recorded at the time)\n" +
      "• Original (or true copy)\n" +
      "• Accurate (no missing context)\n" +
      "Plus: Complete, Consistent, Enduring, Available\n\n" +

      "⚠️ 4) DEVIATIONS AND INVESTIGATIONS\n" +
      "In real manufacturing, deviations happen (instrument issues, out-of-range results, procedural errors).\n" +
      "Good QC response involves:\n" +
      "• Documenting the deviation immediately\n" +
      "• Performing an investigation (root cause analysis)\n" +
      "• Assessing impact (does it affect product quality?)\n" +
      "• Implementing CAPA (fix and prevent recurrence)\n\n" +

      "🛠️ 5) CAPA: HOW QUALITY IMPROVES OVER TIME\n" +
      "CAPA = Corrective and Preventive Actions.\n" +
      "Corrective: Fix what happened now\n" +
      "Preventive: Prevent the same issue later\n" +
      "Examples:\n" +
      "• Updating SOP steps\n" +
      "• Retraining analysts\n" +
      "• Adding system checks to catch errors earlier\n" +
      "• Improving equipment maintenance schedules\n\n" +

      "📌 TAKEAWAY\n" +
      "Quality control is not only about running tests. It is a disciplined system of repeatability, documentation, investigation, and prevention that protects product quality and ultimately patient safety."
  }
]
};

export default portfolioData;
