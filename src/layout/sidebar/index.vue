<template>
  <div class="asideNav_box">
    <el-menu :default-active="pathindex"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             mode="vertical"
             background-color="#1e222d"
             text-color="#fff"
             active-text-color="#FBB917"
             active-background-color="#ffd04b"
             :unique-opened="false"
             :collapse-transition="false"
             :collapse="isActive">

      <submenuitem style="width:100%;"
                   v-for="(item, index) in routerisarr"
                   :key="index"
                   :item="item"></submenuitem>

    </el-menu>

  </div>
</template>
<script>
import { routerarr } from "@/router/router.js"
import submenuitem from "./submenu.vue"
import * as login from "@/api/login.js"
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },

  },
  data () {
    return {
      routerisarr: [],
      pathindex: "/ad/adslot",
      roles: ['0']
    };
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  watch: {
    $route () {
      var routestr = this.$route.path.split('/').splice(0, 3).join('/');
      this.pathindex = routestr;
    }
  },
  created () {
    let user = window.localStorage.roles || "0";
    this.roles = user.split(',')
    var routestr = this.$route.path.split('/').splice(0, 3).join('/');
    this.pathindex = routestr;
    var arr = [];
    routerarr.forEach(element => {
      
      if (!element.hidden && this.roles.indexOf(element.meta.role || "0") >= 0) {
       var ichildren =[];
       var elechildren = element.children || [];
        elechildren.forEach(items => {
          if (!items.hidden && this.roles.indexOf(items.meta.role || "0") >= 0) {
            ichildren.push(items)
          }
        });
         arr.push({
           ...element,
           children:ichildren
         })
      }
    });
    this.routerisarr = arr.map(item => {
      //  v-if="roles.indexOf(item.meta.role) >= 0"
      return {
        ...item,
        children: item.children || []
      }
    });
    // this.getuserdata();
  },
  mounted () {

  },
  methods: {
    getuserdata () {
      login.getInfo().then(res => {
        this.roles = res.data.roles.concat(['0']);
        window.localStorage.setItem('roles', this.roles);
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {

  },

  components: {
    submenuitem
  }
};
</script>
<style scoped>
.asideNav_box {
  max-width: 220px;
  height: 100vh;
  background: #2a333b;
  color: #fff;
  font-weight: 600;
}
.aside_title {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #50aae8; */
  overflow: hidden;
}

.el-menu-vertical-demo {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 51px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>