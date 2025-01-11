export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Avijit Dasgupta",
  title: "Ph.D. Candidate",
  institution: "IIIT Hyderabad",
  // Note that links work in the description
  description:
    `
    I am a Ph.D. student in Computer Science at <a href="https://www.iiit.ac.in">IIIT Hyderabad, India</a> and a member of the <a href="https://cvit.iiit.ac.in">CVIT lab</a>, jointly advised by 
    <a href="https://faculty.iiit.ac.in/~jawahar/">C. V. Jawahar</a>, IIIT Hyderabad, and 
    <a href="https://thoth.inria.fr/members/karteek-alahari/">Karteek Alahari</a> at the <a href="https://thoth.inria.fr">THOTH group</a>, Inria. 
    My research focuses on developing video understanding models with the ability to generalize effectively across previously unseen domains. 
    <br><br>
    In 2019, I've spent three wonderful months as a visiting researcher at the THOTH group, Inria. 
    My Ph.D. is funded by the Google India Ph.D. Fellowship, 2017 (1 out of 4 recipients). Thank you Google!
  `,
  email: "avijit.dasgupta@research.iiit.ac.in",
  imageUrl:
    "/images/avijit.png",
  googleScholarUrl: "https://scholar.google.com/citations?user=u9iEMdwAAAAJ&hl=en&oi=ao",
  githubUsername: "avijit9",
  linkedinUsername: "avijit-dasgupta-517717104",
  twitterUsername: "avijit9d",
  blogUrl: "https://",
  cvUrl: "/files/avijit_cv.pdf",
  institutionUrl: "https://www.iiit.ac.in",
  // altName: "",
  // secretDescription: "I like dogs.",
};
