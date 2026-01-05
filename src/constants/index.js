import {
  ShippingUnassigned,
  shippingify,
  apaAdmin,
  apaPatient,
  apaDoc,
  figma4,
  forkify,
  admin,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  threejs,
  terminalback,
  DgigiCrafterz,
  terminal,
  route,
  altice,
  electron,
  bootstrap,
  next,
  movies,
  games,
  mapty,
  bankist,
  food,
  crud,
  expenses,
  bankistAdvanced,
  cSharp,
  linkSharing,
  ICloudReady,
  Boost,
  OpportunitiesControl,
  LeadsBulkAction,
  EmployeeExperience,
  CFR,
  Prepwise,
  WeCodeForYou,
} from "../assets";

export const navLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: next,
  },

  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs,
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
    name: "Electron JS",
    icon: electron,
  },
  {
    name: "C#",
    icon: cSharp,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Front-End Engineer",
    company_name: "WeCodeForYou.io",
    icon: WeCodeForYou,
    iconBg: "#383E56",
    date: "Oct 2025 - Present",
    points: [
      "Developed the Front-end of an Admin CMS software for Stars Group Fashion Retail Company. Built with React Router 7.",
      "Collaborated with my peer Developers & Designers on building 4 websites for the leading Heavy Transportation and Logistics company, EgyTrans.",
      "Contributed to the development of a Fintech Software that operates in Saudi Arabia.",
    ],
  },
  {
    title: "Front-End Engineer",
    company_name: "iCloud-Ready",
    icon: ICloudReady,
    iconBg: "#383E56",
    date: "Sept 2024 - Oct 2025",
    points: [
      "Developing and maintaining web applications using React, Next.js, and Gatsby.",
      "Playing a key role in supporting & developing the iCloud-Ready CRM & iLpApps productivity app.",
      "Collaborating with the design and product teams to create visually appealing and user-friendly interfaces that meet project requirements and goals.",
    ],
  },
  // {
  //   title: "Front-End Engineer",
  //   company_name: "Boost Training & Consulting",
  //   icon: Boost,
  //   iconBg: "#383E56",
  //   date: "Oct 2024 - Dec 2024",
  //   points: [
  //     "Developing and maintaining the company's official website.",
  //     "Collaborating with the design and product teams to create new visually appealing and user-friendly web applications that meet project requirements and goals.",
  //   ],
  // },
  {
    title: "Front-End Developer",
    company_name: "DigiCrafterz",
    icon: DgigiCrafterz,
    iconBg: "#383E56",
    date: "Nov 2023 - Sept 2024",
    points: [
      "Developing and maintaining web and desktop applications using React, Next.js,and Electron.js.",
      " Playing a key role in cross-platform application development, leveraging Electron.js to reach a broader audience with consistent user experience.",
      " Collaborating with the design and product teams to create visually appealing and user-friendly interfaces that meet project requirements and goals.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Terminal",
    icon: terminal,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2023",
    points: [
      "Developing and maintaining web applications using NextJS, React, and Electron JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // Route Training
  // {
  //   title: "Front End Web Developer Trainee",
  //   company_name: "Route Academy",
  //   icon: route,
  //   iconBg: "#E6DEDD",
  //   date: "Jul 2022 - Dec 2022",
  //   points: [
  //     "Acquired strong foundations in computer science fundamentals, including Object-Oriented Programming (OOP), Data Structures, and Algorithms, using C++",
  //     "Developed proficiency in a wide range of web development technologies, including HTML, CSS, Sass, Bootstrap, JavaScript, TypeScript, jQuery, React JS, Redux, Git, and GitHub",
  //     "Participated in hands-on projects and exercises, applying learned concepts to real-world scenarios and enhancing problem-solving skills",
  //     "Showcased proficiency in React JS by developing projects that leveraged its component-based architecture and state management capabilities",
  //   ],
  // },
  {
    title: "Senior Business Technical Support & Billing Agent",
    company_name: "Altice USA",
    icon: altice,
    iconBg: "#383E56",
    date: "Apr 2022 - Aug 2022",
    points: [
      " Represented the First-level of Business customer troubleshooting to Altice business customers, over the phone",
    ],
  },
  {
    title: "Corporate Executive Customer Relations Specialist",
    company_name: "Altice USA",
    icon: altice,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Mar 2022",
    points: [
      " Responsible for resolving the most highly escalated customer-initiated issues received by internal & partner employees, agencies, and executives to obtain the best possible resolution while maintaining the highest professional standards.",
    ],
  },
  {
    title: "Residential Technical Support & Billing Agent",
    company_name: "Altice USA",
    icon: altice,
    iconBg: "#E6DEDD",
    date: "May 2020 - Oct 2021",
    points: [
      " Successfully resolved technical issues and billing inquiries for a huge number of residential customers on a daily basis, maintaining a customer satisfaction rating of 98%",
    ],
  },
];

const projects = [
  // Prepwise
  {
    name: "Prepwise",
    description: [
      `• Prepwise is an AI-powered mock interview platform that helps Tech job seekers practice and master their interview skills through real-time AI-driven conversations`,
      `• Provides comprehensive feedback analysis across communication skills, technical knowledge, problem-solving, and cultural fit`,
      `• Built with cutting-edge voice AI technology for natural, interactive interview experiences`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "FireStore Database",
        color: "blue-text-gradient",
      },
      {
        name: "Vapi AI",
        color: "green-text-gradient",
      },
    ],
    image: Prepwise,
    source_code_link: "https://github.com/ahmedsalah117/mock-interviews",
    preview_link: "https://mock-interviews-five.vercel.app/",
    showLinks: true,
    showGithubLink: true,
    showPreviewLink: true,
  },
  // IlpApps OKR
  {
    name: "IlpApps OKR",
    description: [
      `• A robust and unified management platform designed to streamline business operations, enhance productivity, and foster employee engagement.`,
      `• This platform serves as a complete business command center, integrating critical tools to help organizations align their goals, strategies, and day-to-day tasks seamlessly.`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Ant Design",
        color: "pink-text-gradient",
      },
    ],
    image: CFR,
    source_code_link: "",
    preview_link: "https://www.ilpapps.com/",
    showLinks: true,
    showGithubLink: false,
    showPreviewLink: true,
  },
  //iCloud-Ready CRM
  {
    name: "iCloud-Ready CRM",
    description: [
      `• iCloud-Ready CRM is a cutting-edge platform tailored for real estate professionals to enhance efficiency, improve lead management, and drive sales growth`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Ant Design",
        color: "pink-text-gradient",
      },
    ],
    image: OpportunitiesControl,
    source_code_link: "",
    preview_link: "https://www.icloud-ready.com/real-estate-crm",
    showLinks: true,
    showGithubLink: false,
    showPreviewLink: true,
  },

  {
    name: "Shippingify Admin",
    description: [
      `• Shippingify Admin is a robust shipping management system developed by the talented team at DigiCrafterz, designed to streamline operations for shipping companies of all sizes. As a front-end developer at DigiCrafterz, I played a key role in developing the user interface and collaborating with back-end developers to integrate APIs, ensuring a seamless and efficient user experience.`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "React TS",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: ShippingUnassigned,
    source_code_link: "",
    preview_link: "",
    showLinks: false,
    showGithubLink: false,
  },
  {
    name: "APA Doctor",
    description: [
      "• APA Doctor is a cutting-edge medical practice management application developed by the talented team at DigiCrafterz in collaboration with AdvancedMD, a leading provider of cloud-based healthcare technology solutions. Tailored specifically for American doctors, APA Doctor offers a robust suite of features to empower doctors in efficiently managing their practice.",
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Electron JS",
        color: "pink-text-gradient",
      },
    ],
    image: apaDoc,
    source_code_link: "",
    preview_link: "",
    showLinks: false,
    showGithubLink: false,
  },
  {
    name: "APA Patient",
    description: [
      `• APA Patient is an innovative desktop application developed by the talented team at DigiCrafterz in collaboration with AdvancedMD, a leading provider of cloud-based healthcare technology solutions. Serving as the patient counterpart to the "APA Doctor" application, APA Patient empowers individuals to take control of their healthcare journey with a comprehensive suite of features.`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Electron JS",
        color: "pink-text-gradient",
      },
    ],
    image: apaPatient,
    source_code_link: "",
    preview_link: "",
    showLinks: false,
    showGithubLink: false,
  },
  {
    name: "APA Admin",
    description: [
      `• APA Admin is a sophisticated clinic management and analytics application developed by the skilled team at DigiCrafterz in collaboration with AdvancedMD, a leading provider of cloud-based healthcare technology solutions. Tailored for doctors who own clinics or medical practices, APA Admin serves as a comprehensive tool for managing operations, overseeing staff, and gaining valuable insights into clinic performance.`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "React TS",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: apaAdmin,
    source_code_link: "",
    preview_link: "",
    showLinks: false,
    showGithubLink: false,
  },

  {
    name: "Figma clone",
    description: [
      "• A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.",
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "green-text-gradient",
      },
      {
        name: "Fabric js",
        color: "pink-text-gradient",
      },
    ],
    image: figma4,
    source_code_link: "https://github.com/ahmedsalah117/figma_clone",
    preview_link: "https://figma-clone-delta.vercel.app/",
    showLinks: true,
    showGithubLink: true,
  },

  {
    name: "Admin Dashboard",
    description: [
      "• This application is designed for managing and visualizing data in a user-friendly and customizable manner.",
      "• It includes various components such as a calendar, kanban board, color picker, and a text editor.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SyncFusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link:
      "https://github.com/ahmedsalah117/admin-dashboard/tree/master",
    preview_link: "https://ahmedsalah117.github.io/admin-dashboard/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "Link Sharing App",
    description: [
      `• This is a minimalistic Link Sharing App. Developed as part of a Front-end coding challenge during a hiring process with a potential employer.`,
    ],
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "pink-text-gradient",
      },
    ],
    image: linkSharing,
    source_code_link:
      "https://github.com/ahmedsalah117/link_sharing_app/tree/master",
    preview_link: "https://link-sharing-app-three-sigma.vercel.app/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "The Movies App",
    description: [
      "• A professional and visually appealing platform that showcases the latest trending movies and actors.",

      "• You can use the following credentials to login: ",
      "email : testtest@testtest.com",
      "pass : Ahmed@1171998",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "blue-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/ahmedsalah117/The-movies-app",
    preview_link: "https://ahmedsalah117.github.io/The-movies-app/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "Game Over",
    description: [
      "• Single Page React JS Application (SPA) which displays video games playable on both web browsers and Windows.",

      "• You can use the following credentials to login",

      "email: testtest@testtest.com",

      "password: Ahmed@1171998",
    ],
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "context_API",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: games,
    source_code_link: "https://github.com/ahmedsalah117/game-over",
    preview_link: "https://ahmedsalah117.github.io/game-over/",
    showLinks: true,
  },
  {
    name: "Mapty",
    description: [
      "• This app allows users to track their running and cycling activities using the Leaflet library to display a map and the geolocation API to determine the user's coordinates and display them on the map.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "LeafLet",
        color: "green-text-gradient",
      },
      {
        name: "maps",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/ahmedsalah117/Mapty-app",
    preview_link: "https://ahmedsalah117.github.io/Mapty-app/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "Food Order App",
    description: [
      "• This is a demo food order app. Through this project I managed to create a great opportunity to sharpen my skills in React context API, handling HTTP requests, and user input handling (forms).",
    ],
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "form_handling",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/ahmedsalah117/food-order-application",
    preview_link: "https://ahmedsalah117.github.io/food-order-application/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "Forkify",
    description: [
      "• This project was developed to practice my JavaScript skills in various areas especially OOP , DOM manipulation and the MVC architecture.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "MVC_Architecture",
        color: "pink-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/ahmedsalah117/forkify-app",
    preview_link:
      "https://6483915c30c84a1898e3cfe9--forkify-ahmed-bahnasy.netlify.app/",
    showLinks: true,
    showGithubLink: true,
  },

  {
    name: "Bank Landing Page",
    description: [
      "• This is a simple bank landing page built using Html , CSS , and Javascript . This was mainly built to practice advanced JS DOM Manipulation, and images lazy loading",
      ,
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Lacy_loading",
        color: "green-text-gradient",
      },
      {
        name: "DOM_Manipulation",
        color: "pink-text-gradient",
      },
    ],
    image: bankistAdvanced,
    source_code_link: "https://github.com/ahmedsalah117/bankist-advanced",
    preview_link: "https://ahmedsalah117.github.io/bankist-advanced/",
    showLinks: true,
    showGithubLink: true,
  },

  {
    name: "Bankist",
    description: [
      "• This is a simple demo bank application built using Html , CSS , and Javascript . This was mainly built to practice JS array methods , dates , times , Numbers , and Math methods.",
      "• The app was built in an amazing UI. You can use the user 'js' and pin '1111' to try it out.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Array_Methods",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/ahmedsalah117/Bankist-app",
    preview_link: "https://ahmedsalah117.github.io/Bankist-app/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "Expenses Calculator",
    description: [
      "• This is an expenses tracker app that helps users track all of their expenses in an organized way and have a yearly overview of their expenses.",
    ],
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "React_Props",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: expenses,
    source_code_link: "https://github.com/ahmedsalah117/Expenses-Tracker",
    preview_link: "https://ahmedsalah117.github.io/Expenses-Tracker/",
    showLinks: true,
    showGithubLink: true,
  },
  {
    name: "CRUD Table",
    description: [
      "• This is a CRUD system built using JavaScript and Bootstrap to make sure I grasped the fundamentals of JavaScript",
      "• The app allows users to enter product information and store it in the browser's local storage",
      "• Users can view, update, and delete the product information.",
      ,
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CRUD_Operations",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/ahmedsalah117/CRUD-System",
    preview_link: "https://ahmedsalah117.github.io/CRUD-System/",
    showLinks: true,
    showGithubLink: true,
  },
];

export { services, technologies, experiences, projects };
