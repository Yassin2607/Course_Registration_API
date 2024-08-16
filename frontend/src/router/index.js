import { createRouter, createWebHistory } from 'vue-router'
import Register from "@/components/Register.vue";

const routes = [
    {
        path: '/',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
