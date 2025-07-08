// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/components/test.vue'  // 引入你的组件
import Home from '@/components/HelloWorld.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path: '/test',
    name: 'TestPage',
    component: Test
  },
  // 可以添加更多路由...
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router