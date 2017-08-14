import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

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

export default new Router({
  routes: constRouter
})
