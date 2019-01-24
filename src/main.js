import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const config = {
  apiKey: process.env.VUE_API_KEY,
  authDomain: process.env.VUE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_DATABASE_URL,
  projectId: process.env.VUE_PROJECT_ID,
  storageBucket: process.env.VUE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
