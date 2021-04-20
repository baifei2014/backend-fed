import Layout from '@/layout/index.vue'
import nullpage from '@/layout/nullpage.vue'
// 运营管理
export default {
  path: '/delivery',
  redirect: '/delivery/list',
  component: Layout,
  name: 'delivery',
  hidden: false,
  meta: {
    title: '广告投放',
    icon: 'iconicon_tab_guanggaotoufang',
    role: '0',
    noCache: true
  },
  children: [
    {
      path: 'list',
      name: 'list',
      hidden: false,
      component: resolve => require(['@/views/delivery/list.vue'], resolve),
      meta: {
        title: '投放管理',
        icon: 'iconicon_tab_guanggaotoufang',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'list2',
      name: 'list2',
      hidden: false,
      component: resolve => require(['@/views/delivery/list2.vue'], resolve),
      meta: {
        title: '内容页广告投放',
        icon: 'iconicon_tab_guanggaotoufang',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'preload',
      name: 'preload',
      hidden: false,
      component: resolve => require(['@/views/delivery/preload.vue'], resolve),
      meta: {
        title: '预加载管理',
        icon: 'iconicon_tab_guanggaotoufang',
        role: '0',
        noCache: true
      },
      children: []
    }
  ],
}