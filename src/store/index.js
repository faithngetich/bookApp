import Vue from 'vue';
import Vuex from 'vuex';

// import Modules
import AuthStore from './modules/authentication';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    AuthStore,
  },
});

export default store;
