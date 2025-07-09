import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import AlarmCenter from '../pages/AlarmCenter.vue';
import VideoMonitor from '../pages/VideoMonitor.vue';
import Report from '../pages/Report.vue';
import AreaConfig from '../pages/AreaConfig.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/alarm-center',
    name: 'AlarmCenter',
    component: AlarmCenter
  },
  {
    path: '/video-monitor',
    name: 'VideoMonitor',
    component: VideoMonitor
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/area-config',
    name: 'AreaConfig',
    component: AreaConfig
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;