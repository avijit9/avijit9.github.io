export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "January 2025",
    title: "Paper accepted at Pattern Recognition journal",
    description: "An extended version of CleanAdapt has been accepted at Pattern Recognition journal.",
    link: "https://kwnsfk27.r.eu-west-1.awstrack.me/L0/https:%2F%2Fauthors.elsevier.com%2Fsd%2Farticle%2FS0031-3203(24)01079-3/1/0102019426644e91-5f501971-6ea5-45de-bee3-f29bbbc723e4-000000/Jn82jUiI-nPCYU_GyzxOpicQGlQ=407",
  },
  {
    date: "October 2024",
    title: "Featured in Project Aria Video by Meta!",
    description: "Our autonomous driving research at CVIT is featured on Meta's YouTube channel.",
    link: "https://youtu.be/TTVoW289UoU",
  },
  {
    date: "March 2024",
    title: "Ego-Exo4D is accepted at CVPR 2024",
    description: "",
    link: "https://ego-exo4d-data.org/",
  }
];
