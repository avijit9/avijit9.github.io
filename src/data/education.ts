export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisors?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2017—Present",
    institution: "IIIT Hyderabad",
    degree: "M.S. + Ph.D. in Computer Science",
    advisors: "Prof. C. V. Jawahar and Dr. Karteek Alahari",
  },
  {
    year: "2009—2013",
    institution: "West Bengal University of Technology",
    degree: "B.Tech. in Electronics and Communication Engineering"
  }
];
