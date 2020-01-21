import Home from './components/Home.vue';
import Pokemon from './components/Pokemon.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Bulbasaur',
        name: 'Bulbasaur',
        component: Pokemon,
        props: { pokemon: 'Bulbasaur' }
    },
    {
        path: '/Charmander',
        name: 'Charmander',
        component: Pokemon,
        props: { pokemon: 'Charmander' }
    },
    {
        path: '/Squirtle',
        name: 'Squirtle',
        component: Pokemon,
        props: { pokemon: 'Squirtle' }
    },
];

export default routes;