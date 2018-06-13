import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import wizzStore from './components/wizzard/store/store.js';

const wizzardStore = new Vuex.Store(wizzStore);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App)
}).$mount('#app')
