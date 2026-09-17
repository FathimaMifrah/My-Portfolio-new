import profilePic from "../assets/profile.jpg";
import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";

export const profile = {
  name: "Fathima Mifrah",
  role: "Intern Software Engineer",
  location: "Thorayaya, Kurunegala",
  email: "fathimamifrah02@gmail.com",
  phone: "0755954323",
  github: "https://github.com/FathimaMifrah",
  linkedin: "https://www.linkedin.com/in/fathima-mifrah",
  avatar: profilePic,
  summary:
    "HNDIT course completer with a strong interest in Software Engineering and a focus on Frontend Development. I have hands-on experience in web development through academic and personal projects, with knowledge of HTML, CSS, JavaScript, React, Node.js, PHP, and MySQL.",
  goal:
    "Currently seeking an internship to gain practical industry experience, contribute to real-world projects, and grow as a Software Engineer.",
  languages: ["English", "Tamil", "Sinhala"],
  softSkills: [
    "Teamwork",
    "Communication",
    "Problem-solving",
    "Adaptability",
    "Time Management",
  ],
};

export const projects = [
  {
    title: "Home Bakers Product Marketplace",
    shortLabel: "Home Bakers",
    description:
      "Developed a web marketplace connecting home bakers with customers, featuring product browsing, ordering, authentication, and management features.",
    tags: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    github: "https://github.com/FathimaMifrah/Home-bakers-product-market-place",
    demo: null,
    image: project1,
  },
  {
    title: "Coffee Shop Management System",
    shortLabel: "Coffee Shop",
    description:
      "A web-based management system designed to manage coffee shop products, customers, orders, sales, and users.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/FathimaMifrah/Coffee-Shop-Management-System",
    demo: null,
    image: project2,
  },
  {
    title: "Boarding House Management System",
    shortLabel: "Boarding House",
    description:
      "Developed a web-based system for managing boarding house information and related activities.",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    github: "https://github.com/FathimaMifrah/Boarding-House-Management-System",
    demo: null,
    image: project3,
  },
];

