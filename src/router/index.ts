import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import { blogDatas, projectDatas } from "@/Data.vue";

const routes : Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue")
    },
    {
        path: "/projects",
        name: "ProjectsRoot",
        component: () => import("@/views/ProjectsRoot.vue"),
    },
    {
        path: "/projects/:id",
        name: "Projects",
        component: () => import("@/views/Projects.vue"),
        beforeEnter(to, from) {
            const exists = projectDatas.find(
                (projectData) => projectData.abstract.id === parseInt(to.params.id as string)
            )

            if (!exists) return { name: "NotFound" }
        }
    },
    {
        path: "/blogs",
        name: "BlogsRoot",
        component: () => import("@/views/BlogsRoot.vue")
    },
    {
        path: "/blogs/:id",
        name: "Blogs",
        component: () => import("@/views/Blogs.vue"),
        beforeEnter(to, from) {
            const exists = blogDatas.find(
                (blogData) => blogData.abstract.id === parseInt(to.params.id as string)
            )

            if (!exists) return { name: "NotFound" }
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "is-active"
})

export default router