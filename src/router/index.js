import Vue from 'vue';
import Router from 'vue-router';
import AuthRoutes from './modules/auth';

Vue.use(Router);

const routes = [
  ...AuthRoutes,
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
