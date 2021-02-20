import Login from '../../views/Login.vue';
import Signup from '../../views/Signup.vue';

const authRoute = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
];

export default authRoute;
