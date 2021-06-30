import { createRouter, createWebHistory } from 'vue-router'
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../views/home/Home.vue'

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

const url = (url) => {
  const newUrl = url ? url : ''
  return '/vue-study' + newUrl
}

console.log('r43', url())

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: url('/'),
    // path: '/',
    name:'HelloWorld',
    component: HelloWorld
  },
  {
    path: url('/home'),
    // path: '/home',
    name:'Home',
    component: Home
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = createRouter({
  base: '/vue-study/',
  history: routerHistory,
  routes: routes
})

export default router
