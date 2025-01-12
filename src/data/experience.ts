export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  /*{
    date: "Dec 2021 -  Aug 2024",
    title: "Senior Research Scientist",
    company: "Cognizer Inc.",
    description:
      "Led the research team to develop legal AI products",
    companyUrl: "https://cognizer.ai/",
  },*/
  {
    date: "Feb 2019 -  Apr 2019",
    title: "Visiting Research Fellow",
    company: "Thoth, Inria",
    description:
      "Worked on action recognition in videos",
    advisor: "Karteek Alahari",
    companyUrl: "https://www.inria.fr/fr/centre-inria-universite-grenoble-alpes",
  },
  {
    date: "Oct 2016 - Dec 2016",
    title: "Research Intern",
    company: "CVIT, IIIT Hyderabad",
    description:
      "Worked on deep neural network visualization",
    advisor: "Prof. C. V. Jawahar",
    companyUrl: "https://cvit.iiit.ac.in/",
  },
  {
    date: "July 2014 - Oct 2016",
    title: "Junior Research Fellow",
    company: "IIT Kharagpur",
    description:
      "Worked on medical imaging to detect oral cancer from thermal images",
    advisor: "Prof. Sudipta Mukhopadhyay",
    companyUrl: "https://www.iitkgp.ac.in/",
  },
  {
    date: "June 2012 - July 2013",
    title: "Research Intern",
    company: "MIU, ISI Kolkata",
    description:
      "Worked on biologically inspired image filters",
    advisor: "Prof. Kuntal Ghosh",
    companyUrl: "https://www.isical.ac.in/",
  }
];
