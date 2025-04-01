export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "Pattern Recognition",
    title: "Source-free video domain adaptation by learning from noisy labels",
    authors: "Avijit Dasgupta, C. V. Jawahar, Karteek Alahari",
    paperUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0031320324010793",
    codeUrl: "https://avijit9.github.io/CleanAdapt/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Source-free video adapation by a teacher-student framework",
    imageUrl:
      "/images/egodg.png",
    //award: "🏆 Best Paper Runner-up Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "Pattern Recognition",
    title: "Source-free video domain adaptation by learning from noisy labels",
    authors: "Avijit Dasgupta, C. V. Jawahar, Karteek Alahari",
    paperUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0031320324010793",
    codeUrl: "https://avijit9.github.io/CleanAdapt/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Source-free video adapation by a teacher-student framework",
    imageUrl:
      "/images/pr.png",
    //award: "🏆 Best Paper Runner-up Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives",
    authors: "Kristen Grauman, Andrew Westbury, Lorenzo Torresani, Kris Kitani, Jitendra Malik, ..., Avijit Dasgupta* et al.",
    paperUrl: "https://arxiv.org/abs/2311.18259",
    codeUrl: "https://ego-exo4d-data.org/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A diverse, large-scale multimodal multiview video dataset capturing skilled human activities",
    imageUrl:
      "/images/cvpr.png",
    award: "Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2022",
    conference: "ICVGIP",
    title: "Overcoming Label Noise for Source-free Unsupervised Video Domain Adaptation",
    authors: "Avijit Dasgupta, C. V. Jawahar, Karteek Alahari",
    paperUrl: "https://dl.acm.org/doi/10.1145/3571600.3571621",
    codeUrl: "https://avijit9.github.io/CleanAdapt/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A self-training based approach for source-free video domain adaptation",
    imageUrl:
      "/images/icvgip.png",
    award: "🏆 Best Paper Runner-up Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2020",
    conference: "ICPR",
    title: "Context Aware Group Activity Recognition",
    authors: "Avijit Dasgupta, C. V. Jawahar, Karteek Alahari",
    paperUrl: "https://cdn.iiit.ac.in/cdn/cvit.iiit.ac.in/images/ConferencePapers/2021/Context-Aware-ICPR.pdf",
    codeUrl: "",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Combines person-level appearance features with contextual cues (pose and scene context) to enrich representations.",
    imageUrl:
      "/images/icpr.png",
    //award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2017",
    conference: "ISBI",
    title: "A Fully Convolutional Neural Network based Structured Prediction Approach Towards the Retinal Vessel Segmentation",
    authors: "Avijit Dasgupta*, Sonam Singh*",
    paperUrl: "https://arxiv.org/abs/1611.02064",
    codeUrl: "",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A CNN-based approach for retinal blood vessel segmentation.",
    imageUrl:
      "/images/isbi.png",
    //award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  }
];
