<template>
    <div id="nav" v-bind:class="responsive()" v-on:click.prevent="toggle">
        <slot>
            <button type="button" class="nav-button" title="Menu">
                <span class="hidden">Toggle menu</span>
                <span class="nav-bar nav-bar--1"></span>
                <span class="nav-bar nav-bar--2"></span>
                <span class="nav-bar nav-bar--3"></span>
            </button>
        </slot>
    </div>
</template>

<script>
    import {
        store,
        mutations
    } from '../store.js';
    export default {
        name: 'NavButton',
        props: {
            isMobile: Boolean
        },
        data() {
            return {
                classArray: []
            }
        },
        methods: {
            toggle() {
                mutations.toggleNav();
            },
            responsive() {
                if(this.isMobile) {
                    return 'is-mobile';
                } else {
                    return 'is-desktop';
                }
            }
        },
        computed: {
            isActive() {
                return store.isNavOpen
            }
        }
    }
</script>

<style scoped>

    #nav {
        margin: auto 0;
        justify-content: flex-end;
    }

    .hidden {
        visibility: hidden;
    }

    button {
        cursor: pointer;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }

    .nav-button {
        position: relative;
        height: 30px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165, .84, .44, 1);
    }

    .nav-bar {
        background-color: #000;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 2px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
    }

    .nav-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .nav-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .nav-button:hover .nav-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .nav-bar--2:hover {
        transform: scaleX(1);
    }

    .nav-bar--3 {
        transform: translateY(6px);
    }

    #nav.active .nav-button {
        transform: rotate(-180deg);
    }

    #nav.active .nav-bar {
        background-color: #fff;
    }

    #nav.active .nav-bar--1 {
        transform: rotate(45deg)
    }

    #nav.active .nav-bar--2 {
        opacity: 0;
    }

    #nav.active .nav-bar--3 {
        transform: rotate(-45deg)
    }

    @media only screen and (max-width: 500px) {
        .is-mobile {
            display: block;
        }

        .is-desktop {
            display: none;
        }
    }

    @media only screen and (min-width: 501px) {
        .is-mobile {
            display: none;
        }

        .is-desktop {
            display: block;
        }

        .nav-button {
            transform: rotate(180deg);
        }
    }
</style>