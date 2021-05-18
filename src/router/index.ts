import {createWebHistory, RouteRecordRaw, createRouter} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/about/About.vue')
    },

]


export default createRouter({
    history: createWebHistory(),
    routes,
})