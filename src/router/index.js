import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

// 固定路由，即不管任何权限的用户都具备的路由
export const constRouter = [

  {
    path: '/hellotest',
    name: 'Hello Vue 测试',
    component: _import('hello/Hello'),
    nodrop: true,
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    component: _import('layout/Layout'),
    hidden: false,
    nodrop: true
  },
  {
    path: '/login',
    name: '登录',
    component: _import('login/Login'),
    nodrop: true,
    hidden: true
  }

]

// 因不同用户权限而不同的路由
export const asyncRouter = [
  {
    path: '/hellotest2',
    name: 'Hello Vue 测试2',
    component: _import('hello/Hello2'),
    nodrop: true,
    hidden: true
  },
  {
    path: '/components',
    name: '组件',
    component: _import('layout/Layout'),
    nodrop: false,
    hidden: false,
    children: [
      {
        path: 'index',
        name: '关于组件的介绍',
        component: _import('components/Index'),
        nodrop: true,
        hidden: false
      },
      {
        path: 'bloglist',
        component: _import('components/BlogList'),
        name: '博客后台管理',
        nodrop: true,
        hidden: false
      },
      {
        path: 'mdeditor',
        component: _import('components/MdEditor'),
        name: 'M↓编辑器',
        nodrop: true,
        hidden: false
      },
      {
        path: 'normaleditor',
        component: _import('components/MormalEditor'),
        name: '普通富文本编辑器',
        nodrop: true,
        hidden: false
      },
      {
        path: 'heightchart',
        component: _import('components/HeightChart'),
        name: '身高百分位表',
        nodrop: true,
        hidden: false
      },
      {
        path: 'fileupload',
        component: _import('components/FileUpload'),
        name: '文件上传',
        nodrop: true,
        hidden: false
      }
    ]
  }
]

export default new Router({
  routes: constRouter
})
