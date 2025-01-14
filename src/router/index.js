import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Página de inicio

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'), // Carga perezosa
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;