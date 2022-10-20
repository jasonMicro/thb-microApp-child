import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard';

Vue.use(VueRouter);
const routes = [
  {
    path: '/chart',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = new VueRouter({
  routes
});

export default router;
