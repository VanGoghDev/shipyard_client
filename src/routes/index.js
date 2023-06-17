import { createRouter, createWebHistory } from "vue-router";
import defaultLayout from "../components/DefaultLayout.vue";
import shipYardPost from "../views/ShipyardPost.vue";
import studyBook from "../views/StudyBook.vue";
import posts from "../views/ShipyardPosts.vue"
import login from "../views/Login.vue"
import gallery from "../views/Gallery.vue"
import contacts from "../views/Contacts.vue"
import profile from "../views/Profile.vue"
import sandbox from "../views/Sandbox.vue"

const routes = [
    {
        path: '/',
        name: 'defaultLayout',
        component: defaultLayout,
        children: [
            {
                path: '/study-book',
                name: 'study-book',
                component: studyBook
            },
            {
                path: '/posts',
                name: 'posts',
                component: posts
            },
            {
                path: '/post/:id',
                name: 'post',
                component: shipYardPost
            },
            {
                path: '/gallery',
                name: 'gallery',
                component: gallery
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: contacts
            },
            {
                path: '/profile',
                name: 'profile',
                component: profile
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/sandbox',
        name: 'sandbox',
        component: sandbox
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;