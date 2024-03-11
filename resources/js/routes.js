import Viewarticles from "./components/articles/Viewarticles.vue";
import Addarticle from "./components/articles/Addarticle.vue";
import Editarticle from "./components/articles/Editarticle.vue"; 

export const routes = [
    {
        name: "Viewarticles",
        path: "/listart",
        component: Viewarticles,
    },
    {
        name: "Addarticle",
        path: "/addarticle",
        component: Addarticle,
    },
    {
        name: "Editarticle",
        path: "/editarticle/:id", // Ajoutez un paramètre dynamique pour l'ID de l'article
        component: Editarticle,
    }
];
