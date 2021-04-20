import Vue from 'vue'
import Router from 'vue-router'
import {
  routerarr
} from './router.js'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes: routerarr,
  scrollBehavior: () => ({
    y: 0
  }),
});
router.beforeEach((to, from, next) => {

  if (localStorage.token == "" && to.path != '/login') {
    next({
      path: 'login'
    })
  } else if (localStorage.token && to.path == '/login') {
    next({
      path: '/ad'
    });
  } else {
    next();
    
  }
})

export default router