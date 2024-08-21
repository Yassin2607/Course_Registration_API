import { createRouter, createWebHistory } from 'vue-router'
import Register from "@/components/Register.vue";
import CourseOverview from "@/components/CourseOverview.vue";
import CourseDetail from "@/components/CourseDetail.vue";

const routes = [
    {
        path: '/',
        component: Register
    },
    {
        path: '/courses',
        component: CourseOverview,
        name: 'CourseOverview',
        props: true,
        children: [
            {
                path: ':id',
                component: CourseDetail,
                name: 'CourseDetail'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
