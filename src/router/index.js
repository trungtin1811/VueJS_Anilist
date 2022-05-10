import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/HomePage.vue";
import HomeContent from "../components/home/HomeAnimeContent.vue";
import SearchContent from "../components/search/SearchContent.vue";
import Detail from "../components/DetailPage.vue";
import DetailOverview from "../components/detail/DetailOverview.vue";
import DetailWatch from "../components/detail/DetailWatch.vue";
import DetailCharacters from "../components/detail/DetailCharacters.vue";

const routes = [{
        path: "/",
        name: "home-page",
        component: Home,
        redirect: "/home",
        children: [{
                path: "home",
                component: HomeContent,
            },
            {
                path: "search",
                component: SearchContent,
            },
            {
                path: "search/:sectionId",
                name: "search-page",
                component: SearchContent,
            },
        ],
    },
    {
        path: "/anime/:animeId",
        name: "anime-page",
        component: Detail,
        children: [
            { path: "", component: DetailOverview },
            { path: "overview", component: DetailOverview },
            { path: "watch", component: DetailWatch },
            { path: "characters", component: DetailCharacters },
        ],
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;