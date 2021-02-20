/* eslint-disable no-param-reassign */
import AuthService from '../../services/authentication';

const authentication = {
  state: {
    isLoggedIn: false,
    user: {},
  },
  getters: {
    getUserData: state => state.user,
    getIsLoggedIn: state => state.isLoggedIn,
  },
  mutations: {
    setUserData: (state, payload) => {
      state.user = payload;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
  actions: {
    actionRegisterUser: async ({ commit, dispatch }, payload) => {
      try {
        const response = await AuthService.registerUser(payload);
        commit('setUserData', response);
      } catch (error) {
        // TODO Handle error
        console.log(error);
        // todo create a new error store file
        // have all the getters, mutations and actions
        // dispatch action
        // create a new error component
        // that only shows when the error.state.message
        // is not empty
      }
    },
  },
};

export default authentication;
