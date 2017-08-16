// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'  // Progress 进度条
import 'nprogress/nprogress.css'   // Progress 进度条 样式
import { getToken } from './utils/auth'

Vue.config.productionTip = false

Vue.use(ElementUI)

const whiteList = ['/login'] // 免登录白名单
router.beforeEach((to, from, next) => {
  NProgress.start()  // 开启登录页面的进度条
  if (getToken()) {  // 判断是否取到token
    alert('用户已经拿到token')
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {   // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取user_info
          const roles = res.data.role
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters)             // 动态添加可访问路由表
            next({ ...to })                                        // hack方法 确保addRoutes已完成
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({ path: '/login' })
          })
        })
      } else {
        alert('用户已经拿到了user_info')
        next() // 放行该路由
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单里的路径，继续让其访问
      next()
    } else {                                 // 其他不在白名单里的路径全部让其重定向到登录页面！
      next('/login')
      alert('not in white list, now go to the login page')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束NProgress
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
