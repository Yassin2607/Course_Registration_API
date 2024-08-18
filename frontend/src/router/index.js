import { createRouter, createWebHistory } from 'vue-router'
import Register from "@/components/Register.vue";
import CourseOverview from "@/components/CourseOverview.vue";

const routes = [
    {
        path: '/',
        component: Register
    },
    {
        path: '/courses',
        component: CourseOverview
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
