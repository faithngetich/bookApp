/**
 * Created by adebayooluwadamilola on 2/1/19.
 */

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
  },
  actions: {},
};

export default authentication;
