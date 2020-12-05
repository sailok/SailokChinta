import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import PageNotFound from '../components/PageNotFound';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills,
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience,
    },
    {
        path: '/eduction',
        name: 'Education',
        component: Education,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound,
    },
]

export default new Router({
    mode: 'history',
    routes,
});