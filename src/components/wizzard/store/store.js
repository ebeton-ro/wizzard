import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const wizzardStore = new Vuex.Store({
    state: {
        options: [],
        activeOption: null
    },
    mutations: {
        setActiveOption(state, option){
            state.activeOption = option;
        }
    }
});