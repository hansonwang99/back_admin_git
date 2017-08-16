import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

// 固定路由，即不管任何权限的用户都具备的路由
export const constRouter = [

  {
    path: '/hellotest',
    name: 'Hello Vue 测试',
    component: _import('hello/Hello')
  },
  {
    path: '/',
    name: '首页',
    component: _import('layout/Layout')
  },
  {
    path: '/login',
    name: '登录',
    component: _import('login/Login')
  }

]

// 因不同用户权限而不同的路由
export const asyncRouter = [
  {
    path: '/hellotest2',
    name: 'Hello Vue 测试2',
    component: _import('hello/Hello2')
  }
]

export default new Router({
  routes: constRouter
})
