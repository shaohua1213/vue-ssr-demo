// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

/* eslint-disable */
export function createApp () {
  // 创建 router store 实例
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    // 注入 router store 到根 Vue 实例
    store,
    router,
    render: h => h(App)
  })
  // 返回 app 和 router store
  return { app, router, store }
}
