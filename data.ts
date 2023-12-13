import { IoMdLaptop } from "react-icons/io";
import { FaServer } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    Icon: IoMdLaptop,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Engineering",
    about:
      "I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions",
  },
  {
    Icon: FaCode,
    title: "Full Stack Websites",
    about:
      "I can develop your web application from scratch to finish with all access to change anything by yourself",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Mongo DB",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Express Js",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Node js",
    level: "40",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Fresh Market",
    description:
      "This app gives information about the foods and alse recipes of foods",
    image_path: "/images/freshMarket.jpg",
    deployed_url: "https://fresh-market-app.netlify.app/",
    github_url: "https://github.com/OSSwebmaster2003/fresh-market",
    category: ["react"],
    key_techs: ["React", "The Meal DB"],
  },
  {
    id: 2,
    name: "Quiz App",
    image_path: "/images/quizApp.jpg",
    deployed_url: "https://otabek-typescript-quiz-app.netlify.app/",
    github_url: "https://github.com/OSSwebmaster2003/react-typescript-quiz",
    category: ["react", "typescript"],
    description:
      "An web app which you can solve random quizes made by Trivia api",
    key_techs: ["React", "Typescript", "Styled Components"],
  },

  {
    id: 3,
    name: "FinSweet",
    image_path: "/images/finSweet.jpg",
    deployed_url: "https://otabek-finsweet.netlify.app/",
    github_url: "https://github.com/OSSwebmaster2003/finsweet",
    category: ["react"],
    description: "A website of FinSweet nonprofit team working worldwide",
    key_techs: ["React", "Redux", "SASS", "Chart.js", "Swiper.js"],
  },

  {
    id: 4,
    name: "Andijon Qishloq Xo'jaligi",
    image_path: "/images/andjon.jpg",
    deployed_url: "https://andijon-qishloq-xojalik-instituti.netlify.app/",
    github_url:
      "https://github.com/OSSwebmaster2003/andijon_qishloq_xojalik_instituti",
    category: ["react"],
    description:
      "The official website of the institute of Andijon Qishloq Xo'jaligi",
    key_techs: ["React", "ANTD", "Redux-Toolkit"],
  },

  {
    id: 5,
    name: "Portfolio Website",
    image_path: "/images/portfolio.jpg",
    deployed_url: "https://otabek1509.vercel.app/",
    github_url: "https://github.com/OSSwebmaster2003/portfolio",
    category: ["react", "next", "typescript"],
    description: "Simple portfolio website for myself",
    key_techs: ["React", "Typescript", "Next", "Frame-motion"],
  },

  {
    id: 6,
    name: "Note App",
    image_path: "/images/noteApp.jpg",
    deployed_url: "https://otabek-typescript-note-app.netlify.app/",
    github_url: "https://github.com/OSSwebmaster2003/note-app",
    category: ["typescript", "react"],
    description: "A website that helps users to make their notes and use it",
    key_techs: ["React", "typescript", "bootstrap", "uuid"],
  },

  {
    id: 7,
    name: "Primetech",
    image_path: "/images/primetech.jpg",
    deployed_url: "https://otabek-privatecompany.netlify.app/",
    github_url: "https://github.com/OSSwebmaster2003/primeTech",
    category: ["react"],
    description: "The official website of primetech company",
    key_techs: ["React", "SASS", "Swiper js", "Redux-Toolkit"],
  },
  {
    id: 8,
    name: "Social Media",
    image_path: "/images/social-media.jpg",
    deployed_url: "https://webmaestro-landing-static-social-media.vercel.app/",
    github_url:
      "https://github.com/OSSwebmaster2003/landing-static-social-media",
    category: ["react"],
    description:
      "Just a small landing page website without functionality. I have done this project because of learning Material UI library",
    key_techs: ["React", "MUI", "React Icons"],
  },
  {
    id: 9,
    name: "Study Advisor",
    image_path: "/images/study-advisor.jpg",
    deployed_url: "https://knowledge-study-advisor.vercel.app/",
    github_url: "https://github.com/OSSwebmaster2003/knowledge_study_advisor",
    category: ["html"],
    description:
      "This is the demo version of real project that i received on Upwork platform , i finished the project for the client and here you can see it",
    key_techs: ["Html", "Css", "Javascript", "Owl-Carousel"],
  },
  {
    id: 10,
    name: "Admin Dashboard",
    image_path: "/images/admin-dashboard.jpg",
    deployed_url: "https://webmaestro-admin-dashboard.onrender.com",
    github_url: "https://github.com/OSSwebmaster2003/MERNSTACK_ADMIN_DASHBOARD",
    category: ["react", "mern"],
    description:
      "The MERN Stack project created with the help of MERN and Materail Ui and project is still in progress. It works a little bit slowlier as i used the free version of onrender.com for my server",
    key_techs: ["Mongo DB", "Express", "React", "Node", "MUI", "Nivo Charts"],
  },
];
