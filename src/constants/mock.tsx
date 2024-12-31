import { RiAngularjsFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { RiVuejsFill } from "react-icons/ri";
import { RiSvelteFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";

const frameworks = [
    {
        key: "react",
        title: "React",
        description: "A JavaScript library for building user interfaces.",
        content: "React allows you to build web apps with component-based architecture, making your UI more predictable and easier to maintain.",
        icon: <RiReactjsFill />,
        fillColor: "#61DAFB",
    },
    {
        key: "vue",
        title: "Vue",
        description: "A progressive JavaScript framework for building user interfaces.",
        content: "Vue is designed to be incrementally adoptable, meaning you can scale between libraries and full-fledged frameworks depending on your needs.",
        icon: <RiVuejsFill />,
        fillColor: "#4FC08D",
    },
    {
        key: "angular",
        title: "Angular",
        description: "A platform for building mobile and desktop web applications.",
        content: "Angular provides a full front-end development framework, including a rich ecosystem of tools for routing, state management, and form validation.",
        icon: <RiAngularjsFill />,
        fillColor: "#DD0031",
    },
    {
        key: "svelte",
        title: "Svelte",
        description: "A radical new approach to building user interfaces.",
        content: "Svelte shifts much of the work to compile time, producing highly optimized code, resulting in faster runtime performance compared to traditional frameworks.",
        icon: <RiSvelteFill />,
        fillColor: "#FF3E00",
    },
    {
        key: "next",
        title: "Next.js",
        description: "A React framework for production with server-side rendering and static site generation.",
        content: "Next.js allows you to create React applications with features like automatic code splitting, server-side rendering, and static generation.",
        icon: <RiNextjsFill />,
        fillColor: "#000000",
    },
    {
        key: "nuxt",
        title: "Nuxt.js",
        description: "A framework based on Vue.js for building server-side rendered applications.",
        content: "Nuxt.js enhances Vue with features like server-side rendering (SSR), static site generation, and powerful routing capabilities, making it a solid choice for production-grade applications.",
        icon: <SiNuxtdotjs />,
        fillColor: "#68A063",
    },
];

export {
    frameworks
};
