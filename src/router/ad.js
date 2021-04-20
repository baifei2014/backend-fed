import Layout from '@/layout/index.vue'
import nullpage from '@/layout/nullpage.vue'
// 运营管理
export default {
  path: '/ad',
  redirect: '/ad/adslotlist',
  component: Layout,
  name: 'ad',
  hidden: false,
  meta: {
    title: '广告',
    icon: 'iconguanggao1',
    role: '0',
    noCache: true
  },
  children: [
    {
      path: 'adslotlist',
      name: 'adslotlist',
      hidden: false,
      component: resolve => require(['@/views/ad/adslotlist.vue'], resolve),
      meta: {
        title: '广告位管理',
        icon: 'iconguanggao1',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'adlist',
      name: 'adlist',
      hidden: false,
      component: resolve => require(['@/views/ad/adlist.vue'], resolve),
      meta: {
        title: '广告管理',
        icon: 'iconguanggao1',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'adswitch',
      name: 'adswitch',
      hidden: false,
      component: resolve => require(['@/views/ad/adswitch.vue'], resolve),
      meta: {
        title: '开关配置',
        icon: 'iconguanggao1',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'channel',
      name: 'channel',
      hidden: false,
      component: resolve => require(['@/views/ad/channel.vue'], resolve),
      meta: {
        title: '渠道提审管理',
        icon: 'iconguanggao1',
        role: '0',
        noCache: true
      },
      children: []
    },
  ]
}