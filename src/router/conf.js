import Layout from '@/layout/index.vue'
import nullpage from '@/layout/nullpage.vue'
// 运营管理
export default {
  path: '/conf',
  redirect: '/conf/provider',
  component: Layout,
  name: 'conf',
  hidden: false,
  meta: {
    title: '配置管理',
    icon: 'el-icon-setting',
    role: '0',
    noCache: true
  },
  children: [
    {
      path: 'provider',
      name: 'provider',
      hidden: false,
      component: resolve => require(['@/views/conf/provider.vue'], resolve),
      meta: {
        title: '合作方配置',
        icon: 'el-icon-setting',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'game',
      name: 'game',
      hidden: false,
      component: resolve => require(['@/views/conf/game.vue'], resolve),
      meta: {
        title: '游戏配置',
        icon: 'el-icon-setting',
        role: '0',
        noCache: true
      },
      children: []
    },
    {
      path: 'reward_videoad',
      name: 'reward_videoad',
      hidden: false,
      component: resolve => require(['@/views/conf/reward_videoad.vue'], resolve),
      meta: {
        title: '激励视频入口配置',
        icon: 'el-icon-setting',
        role: '0',
        noCache: true
      },
      children: []
    },
  ]
}