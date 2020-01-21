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
    {
        path: '/Pikachu',
        name: 'Pikachu',
        component: Pokemon,
        props: { pokemon: 'Pikachu' }
    },
    {
        path: '/Meowth',
        name: 'Meowth',
        component: Pokemon,
        props: { pokemon: 'Meowth' }
    },
    {
        path: '/Psyduck',
        name: 'Psyduck',
        component: Pokemon,
        props: { pokemon: 'Psyduck' }
    },
    {
        path: '/Machop',
        name: 'Machop',
        component: Pokemon,
        props: { pokemon: 'Machop' }
    },
    {
        path: '/Cubone',
        name: 'Cubone',
        component: Pokemon,
        props: { pokemon: 'Cubone' }
    },
    {
        path: '/Eevee',
        name: 'Eevee',
        component: Pokemon,
        props: { pokemon: 'Eevee' }
    },
    {
        path: '/Chikorita',
        name: 'Chikorita',
        component: Pokemon,
        props: { pokemon: 'Chikorita' }
    },
    {
        path: '/Cyndaquil',
        name: 'Cyndaquil',
        component: Pokemon,
        props: { pokemon: 'Cyndaquil'}
    },
    {
        path: '/Totodile',
        name: 'Totodile',
        component: Pokemon,
        props: { pokemon: 'Totodile'}
    },
    {
        path: '/Treecko',
        name: 'Treecko',
        component: Pokemon,
        props: { pokemon: 'Treecko'}
    },
    {
        path: '/Torchic',
        name: 'Torchic',
        component: Pokemon,
        props: { pokemon: 'Torchic'}
    },
    {
        path: '/Mudkip',
        name: 'Mudkip',
        component: Pokemon,
        props: { pokemon: 'Mudkip'}
    },
    {
        path: '/Skitty',
        name: 'Skitty',
        component: Pokemon,
        props: { pokemon: 'Skitty'}
    },
];

export default routes;