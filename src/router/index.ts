import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes : Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("@/views/Projects.vue")
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: () => import("@/views/Blogs.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "is-active"
})

export default router