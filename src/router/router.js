import Layout from '@/layout/index.vue'
import routeroneview from '@/layout/nullpage.vue'
import delivery from './delivery.js'
import adslot from './ad.js'
import conf from './conf.js'
import statistic from './statistic.js'
export const routerarr = [{
    path: '/',
    redirect: '/login',
    hidden: true,

    meta: {
      role: '0',
      title: "首页"
    },
    children: []
  },
  // {
  //   path: '/webdy',
  //   name: 'webdy',
  //   hidden: true, // 是否隐藏
  //   nopages: true,
  //   component: resolve => require(['@/views/iphone/webdy.vue'], resolve),
  //   meta: {
  //     title: '点阅-web',
  //     icon: 'module',
  //     role: '0',
  //     noCache: true
  //   }
  // },
  adslot,
  delivery,
  statistic,
  conf,
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: resolve => require(['@/public_views/login.vue'], resolve),
    meta: {
      title: '登录',
      icon: 'coffee-cup',
      noCache: true,
      role: '0',
    },
    children: []
  },
  {
    path: '/error',
    name: 'error',
    component: routeroneview,
    redirect: '/error/404',
    hidden: true,
    meta: {
      title: '报错',
      icon: 'coffee-cup',
      role: '0',
      noCache: true
    },
    children: [{
      path: '401',
      name: 'error401',
      component: resolve => require(['@/public_views/error-page/401.vue'], resolve),
      meta: {
        role: '0',
        title: '401',
        icon: 'coffee-cup',
        noCache: true
      },
      children: []
    }, {
      path: '404',
      name: 'error404',
      component: resolve => require(['@/public_views/error-page/404.vue'], resolve),
      meta: {
        role: '0',
        title: '404',
        icon: 'coffee-cup',
        noCache: true
      },
      children: []
    }]
  },
  {
    path: '*',
    name: 'nopage',
    redirect: '/',
    hidden: true,
    meta: {
      role: '0',
    },
  }


]