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
    }
  },
  actions: {},
};

export default authentication;
