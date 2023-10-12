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
    date: "June 23 - September 23",
    points: [
      "Developing Topbongda website design mobile version using Next.js and other related technologies.",
      "Design UI, collaborating with backend team to create high-quality products.",
      "Optimize website performance, ensuring cross-browser compatibility.",
      "SEO website, providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PriGuide.Card",
    url: "https://www.priceguide.cards/",
    description:
      "The website allows users to search and build their temp collections. Exchange of information, chat, which can lead to face-to-face exchanges",
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
    name: "Cimigo.com",
    url: "https://cimigo.com/",
    description:
      "Websites for businesses and individuals. Those who wish to seek survey opinions from consumers for the purpose of growing their business.",
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
    name: "Topbongda.com",
    url: "https://topbongda.com/",
    description:
      "Football social network, where people interact, share, view match schedule information, and predict results.",
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
  {
    name: "Jewelry website",
    url: "https://jewelry.onrender.com/",
    description:
      "[Personal project] A website allows users to search for information about jewelry, leave reviews, and manage records of tours they have order. There is also a dashboard that allows admins to perform CRUD operations on the necessary information on the website",
    tags: [
      {
        name: "rectjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jewelry,
    source_code_link: "https://github.com/Hunga9k50doker/Shop-trang-suc",
  },
  {
    name: "Travel website",
    url: "https://setsail.onrender.com",
    description:
      "[Personal project] A website allows users to search for information about tours, leave reviews, and manage records of tours they have booked. There is also a dashboard that allows admins to perform CRUD operations on the necessary information on the website",
    tags: [
      {
        name: "rectjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Hunga9k50doker/Setail",
  },
  //   {
  //     name: "Crowdfunding",
  //     url: "https://crowdfunding-2uux.onrender.com/",
  //     description: "[Personal project] The crowdfunding web3",
  //     tags: [
  //       {
  //         name: "rect-js",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "third-web",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "solodity",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: crowdfunding,
  //     source_code_link: "https://github.com/Hunga9k50doker/cowdfunding",
  //   },
];

export { services, technologies, experiences, testimonials, projects };
