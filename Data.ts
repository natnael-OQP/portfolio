import { IProject, IAbout, ISkill } from "./interface";
import { FaCaretRight } from "react-icons/fa";


export const AboutData: IAbout = {
    name: 'Hi, my name is', 
    title1: 'Natnale Abebe.',
    title2: ' I build things for the web.',
    description: "I'm currently in my fourth year (out of five) studying computer science at University Of Gondar. I enjoy building exceptional digital experiences. Currently, I’m focused on building an E-commerce PWA site.   I'm experienced in developing  products for the web, from simple landing pages to full-fledged web apps.",
    buttonText:"check out my projects"
};
// ---------------------------------------------------------------- languages 
    export const languages: ISkill[] = [
    {
        Icon: FaCaretRight,
        name: "JavaScript (ES6+)",
        level: "45",
    },
    {
        Icon: FaCaretRight,
        name: "TypeScript",
        level: "60",
    },
    {
        Icon: FaCaretRight,
        name: "ReactJS",
        level: "60",
    },
    {
        Icon: FaCaretRight,
        name: "NextJs",
        level: "80",
    },
    {
        Icon: FaCaretRight,
        name: "Tailwind CSS",
        level: "70",
    },
    // {
    //     Icon: FaCaretRight,
    //     name: "Redux tool-kit",
    //     level: "80",
    // },
    // {
    //     Icon: FaCaretRight,
    //     name: "Firebase",
    //     level: "80",
    // },
    // {
    //     Icon: FaCaretRight,
    //     name: "Styled-Components",
    //     level: "45",
    // },
    {
        Icon: FaCaretRight,
        name: "Git + Github",
        level: "45",
    },
    {
        Icon: FaCaretRight,
        name: "SEO",
        level: "45",
    },
];
// ------------------------------------------------------- tools 
export const tools: ISkill[] = [
    {
        Icon: FaCaretRight,
        name: "yarn",
        level: "85",
    },
    {
        Icon: FaCaretRight,
        name: "git and github",
        level: "45",
    },
    {
        Icon: FaCaretRight,
        name: "axios",
        level: "60",
    },
    {
        Icon: FaCaretRight,
        name: "SWR",
        level: "45",
    },
];
// ---------------------
export const Learning = [
    {
        Icon: FaCaretRight,
        name:"typeScript"
    },
    {
        Icon: FaCaretRight,
        name:"PWA"
    }
]
// ---------------------------------------------------------------- Project -------------------------------------------------------

export const projects: IProject[] = [
    // E-commerces -1 
    { 
        name: "E-Suke(E-commerces)",
        description:"This app show products user can add items to the cart and user can remove items from the cart Realtime Reviews Chat auth and you can log in with your Google account(authentication), items detail page, and much more ",
        image_path: "/images/e-suke.png",
        deployed_url: "https://e-suke.netlify.app/",
        github_url: "https://github.com/natnael-OQP/ecommerce-2.0",
        category: ["react"],
        key_techs: ["React", "Redux", "reduxjs/toolkit","Firebase","styled Components"],
    },
    // ኢትዮ-Real-Estate -2
    {
        name: "ኢትዮ-Real-Estate",
        image_path: "/images/real-estate.png",
        deployed_url: "https://ema-real-estate-group.vercel.app/",
        github_url: "https://github.com/natnael-OQP/real-estate-site",
        category: ["Nextjs", "react"],
        description:"ኢትዮ-Real-Estate is an amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page , and much more, ",
        key_techs: ["React", "Nextjs", "chakra-ui","millify", "axios",],
    },
    // airbnb clone -3
    {
        name: "Airbnb Clone",
        image_path: "/images/aribnb-clone.png",
        deployed_url: "https://ema-group-airbnb-clone.vercel.app/",
        github_url: "https://github.com/natnael-OQP/Airbnb-clone",
        category: ["Nextjs", "react"],
        description:"a simple airbnb clone build with Nextjs(ssg and ssr), tailwindcss, Mapbox, axios ",
        key_techs: ["React", "Nextjs", "tailwindcss","Mapbox", "axios",],
    },
    // Piper chat -4 
    {
        name: "Piper chat",
        image_path: "/images/piper-caht.png",
        deployed_url: "http://piper-chat.vercel.app/",
        github_url: "https://github.com/natnael-OQP/piper-chat",
        category: ["NextJs", "react"],
        description:" Typical Social Media App where one can post,like ,comment,delate your posts, Populated with authentication, etc...",
        key_techs: ["React", "NextJS","next-auth","tailwindcss", "Firebase v9","recoil"],
    },
    // Netflix Clone -5
    {
        name: "Netflix Clone",
        image_path: "/images/netflix-clone.png",
        deployed_url: "https://netflix-clone-with-nathan.netlify.app/",
        github_url: "https://github.com/natnael-OQP/netflix-clone",
        category: ["", "react"],
        description:"a simple netflix clone ypu can watch trailers  build with reactjs,firebase,redux",
        key_techs: ["React","reduxjs/toolkit", "firebase","styled-components","axios",],
    },
    // Gmail clone -6
    {
        name: "Gmail Clone",
        deployed_url: "https://gmail-clone-with-nathan.netlify.app/",
        github_url: "https://github.com/natnael-OQP/gmail-clone",
        category: [ "react"],
        description:" Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React","reduxjs/toolkit", "firebase","styled-components","axios",],
    },
    // Ethio chat -7
    {
        name: "Ethio chat",
        deployed_url: "https://etio-chat.netlify.app/",
        github_url: "https://github.com/natnael-OQP/classroom",
        category: [ "react"],
        description:"Basic Realtime Chat App where one can create a room can talk to each other ",
        key_techs: ["React","@reduxjs/toolkit","firebase","styled-components"],
    },
    // NGO Site -8
    {
        name: "NGO site",
        deployed_url: "https://etio.netlify.app/",
        github_url: "https://github.com/natnael-OQP/NGO",
        category: [ "react"],
        description:"One of the first projects on ReactJS",
        key_techs: ["React","react-router","styled-components","react-scroll",],
    },
];