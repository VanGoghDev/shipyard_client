import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue"
import shipYardPost from "../views/ShipyardPost.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/post/:id',
        name: 'post',
        component: shipYardPost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;