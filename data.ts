import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Solve problems",
    about: "find the best solutions ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Open to work!",
    about:
      "I am looking for <b>new challenges</b>!",
  },
  {
    Icon: RiComputerLine,
    title: "Always learning",
    about:
      "I'm currently studying Python",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Mongo",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Node",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "PostgreSQL",
    level: "65",
  },
];

export const lang: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Spanish",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "English",
    level: "75",
  },
]

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Algorithms",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "65",
  },
];

export const projects: IProject[] = [
  { 
    id:1,
    name: "La Montañés Ecommerce",
    description:
      "App developed collaboratively with daily and weekly sprints to a Product Owner.Features: product catalog, user login, shopping cart, order checkout, payment gateway, wishlist, user dashboard and admin dashboard, category creation and special discounts",
    image_path: "/images/la-montanes.png",
    deployed_url: "https://la-montaner.vercel.app/home",
    github_url: "https://github.com/ortizjavi/la-montaner",
    category: ["react"],
    key_techs: ["React", "Node", "Express", "0Auth", "MongoDB Atlas", "Material UI"],
  },
  {
    id: 2,
    name: "Social App Posts",
    image_path: "/images/social-app.png",
    deployed_url: "https://app-mongo-0auth.herokuapp.com/",
    github_url: "https://github.com/GabiArrieta/socialApp-mongo-react-auth",
    category: ["node", "react", "mongo"],
    description:
      "A social networking web app. Users can create an account or login with google, create, like, and delete posts. Developed with 0Auth authentication",
    key_techs: ["React", "Node", "Express", "0Auth", "MongoDB Atlas"],
  },
  {
    id: 3,
    name: "To-do list app",
    image_path: "/images/crud.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/GabiArrieta/crud-node-mongo",
    category: ["react", "mongo", "node"],
    description:
      "CRUD web application for managment tasks. Features of the app are create, update, edit and delete tasks. ",
    key_techs: ["React", "Bootstrap", "Node", "Mongo"],
  },

  {
    id: 4,
    name: "Food Api",
    image_path: "/images/foodPI.png",
    deployed_url: "!#",
    github_url: "https://github.com/GabiArrieta/PI-Food-App",
    category: ["node", "mongo", "react"],
    description:
      "PERN project developed during SoyHenry.com Bootcamp",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "PostgreSQL",
      "REST API",
    ],
  },
  {
    id: 5,
    name: "Dynamic Pagination",
    image_path: "/images/pagination.png",
    deployed_url: "https://pagination-back-front.herokuapp.com/",
    github_url: "https://github.com/GabiArrieta/pagination-front.back",
    category: ["react"],
    description:
      "Practice pagination with back and front",
    key_techs: ["React", "Mongo REST API"],
  },

  {
    id: 6,
    name: "Typescript Practice",
    image_path: "/images/todo-ts.png",
    deployed_url: "https://typescript-todo-gabiarrieta.vercel.app",
    github_url: "https://github.com/GabiArrieta/typescript-todo",
    category: ["express"],
    description:
      "Typescript + React DND",
    key_techs: ["Typescript"],
  },
  {
    id: 7,
    name: "Anime search database ",
    image_path: "/images/animeSearch.png",
    deployed_url: "https://app-anime.vercel.app/",
    github_url: "https://github.com/GabiArrieta/anime-search",
    category: ["express"],
    description:
      'features of the app are filtering by name of anime and you can see on the left the updated 5 top anime of the week based on myanimelist.net',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "API Spoonacular",
    image_path: "/images/apiSpoon.png",
    deployed_url: "https://recipe-food-app.vercel.app/",
    github_url: "https://github.com/GabiArrieta/recipeFood-App",
    category: ["react"],
    description:
      "Goal of this app was to make a small recipe app using Spoonacular api and learn about React and hooks",
    key_techs: ["React", "API"],
  },
];
