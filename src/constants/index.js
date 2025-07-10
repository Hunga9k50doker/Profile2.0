import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs as react,
  nextjs,
  redux,
  automarketbg,
  automarket,
  tailwind,
  nodejs,
  mongodb,
  solodity,
  thirdweb,
  crowdfunding,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  pixelcent,
  priceguide,
  searchjob,
  cimigo,
  topbongda,
  travel,
  threejs,
  vietdev,
  jewelry,
  antd,
  mui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    disabled: false,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  //   disabled: true,
  // },
  {
    title: "Web3 Developer",
    icon: creator,
    disabled: false,
  },
  {
    title: "Backend Developer",
    icon: backend,
    disabled: false,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "Antd Design",
    icon: antd,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  //   {
  //     name: "Third Web",
  //     icon: thirdweb,
  //   },
  //   {
  //     name: "Solodity",
  //     icon: solodity,
  //   },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "Pixelcent",
    icon: pixelcent,
    iconBg: "#383E56",
    date: "July 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js, Next.Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FrontEnd Developer, Designer",
    company_name: "VietDev",
    icon: vietdev,
    iconBg: "#111827",
    date: "June 23 - June 24",
    points: [
      "Developing Topbongda website design mobile version using Next.js and other related technologies.",
      "Design UI, collaborating with backend team to create high-quality products.",
      "Optimize website performance, ensuring cross-browser compatibility.",
      "SEO website, providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Frelancer",
    icon: automarket,
    iconBg: "#383E56",
    date: "June 2024 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Search for customers- Receive and discuss customer requirements, provide quotes",
      "Develop an implementation plan, analyze by each stage",
      "Create a procedure for checking and evaluating the completion level of the project",
      "Hand over the completed product, maintain the product.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Automarket",
    url: "https://amautomarket.com/",
    description: "[Personal project] A website allows users  find, buy, sell any sripts, tools automation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: automarketbg,
    source_code_link: null,
  },
  {
    name: "Cimigo.com",
    url: "https://cimigo.com/",
    description: "Websites for businesses and individuals. Those who wish to seek survey opinions from consumers for the purpose of growing their business.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cimigo,
    source_code_link: "https://github.com/Hunga9k50doker/Cimigo",
  },
  {
    name: "PriGuide.Card",
    url: "https://www.priceguide.cards/",
    description: "The website allows users to search and build their temp collections. Exchange of information, chat, which can lead to face-to-face exchanges",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: priceguide,
    source_code_link: "https://github.com/Hunga9k50doker/PriceGuild",
  },

  {
    name: "Topbongda.com",
    url: "https://topbongda.com/",
    description: "Football social network, where people interact, share, view match schedule information, and predict results.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "antd",
        color: "orange-text-gradient",
      },
    ],
    image: topbongda,
    source_code_link: "https://github.com/Hunga9k50doker/topbongda_fe",
  },
];

export { services, technologies, experiences, testimonials, projects };
