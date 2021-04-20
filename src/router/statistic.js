import Layout from '@/layout/index.vue'
import nullpage from '@/layout/nullpage.vue'
// 运营管理
export default {
  path: '/statistic',
  redirect: '/statistic/switch',
  component: Layout,
  name: 'statistic',
  hidden: false,
  meta: {
    title: '数据统计',
    icon: 'icondianpu',
    role: '0',
    noCache: true
  },
  children: [
    {
      path: 'switch',
      name: 'switch',
      hidden: false,
      component: resolve => require(['@/views/statistic/switch.vue'], resolve),
      meta: {
        title: '实时上报禁用配置',
        icon: 'icondianpu',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'day',
      name: 'day',
      hidden: false,
      component: resolve => require(['@/views/statistic/day.vue'], resolve),
      meta: {
        title: '投放按天统计',
        icon: 'icondianpu',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'hour',
      name: 'hour',
      hidden: false,
      component: resolve => require(['@/views/statistic/hour.vue'], resolve),
      meta: {
        title: '投放按小时统计',
        icon: 'icondianpu',
        role: '0',
        noCache: true
      },
      children: []
    },
  ]
}