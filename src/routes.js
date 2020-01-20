import Home from './components/Home.vue';
import Pokemon from './components/Pokemon.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Bulbasaur',
        name: 'Bulbasaur',
        component: Pokemon
    },
    {
        path: '/Charmander',
        name: 'Charmander',
        component: Pokemon
    },
];

export default routes;