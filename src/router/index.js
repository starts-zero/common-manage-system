import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决element-ui导航router报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [{
        path: '/main/shouye',
        name: 'Shouye',
        component: () => import('../views/Shouye.vue')
      },
      {
        path: '/main/goodsmanage',
        name: 'Goods',
        component: () => import('../views/Goods.vue')
      },
      {
        path: '/main/usermanage',
        name: 'User',
        component: () => import('../views/User.vue')
      },
      {
        path: '/main/other1',
        name: 'Other1',
        component: () => import('../views/Other1.vue')
      },
      {
        path: '/main/other2',
        name: 'Other2',
        component: () => import('../views/Other2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
