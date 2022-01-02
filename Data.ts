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
        name: "CSS3",
        level: "45",
    },
    {
        Icon: FaCaretRight,
        name: "HTML5",
        level: "45",
    },
    {
        Icon: FaCaretRight,
        name: "Sass",
        level: "45",
    },
    {
        Icon: FaCaretRight,
        name: "Styled-Components",
        level: "45",
    },
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
        name: "TailwindCss",
        level: "70",
    },
    {
        Icon: FaCaretRight,
        name: "Redux tool-kit",
        level: "80",
    },
    {
        Icon: FaCaretRight,
        name: "Firebase",
        level: "80",
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
// ---------------------------------------------------------------- Project 

export const projects: IProject[] = [
    { 
        name: "COVID Tracker",
        description:
        "This app shows a statistical vi about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
        "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
        "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
        "React",
        "Redux",
        "Node",
        "Express",
        "Mongo",
        "REST API",
        "Bootstrap",
        ],
    },

    {
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
        "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
        "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },

    {
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
        "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
        'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
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
        name: "Football App",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
        "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];