<template>
  <div>
    <el-container>
      <el-header class="header_box" style="height: 50px;">
        <el-row style="height:50px;">
          <el-col :span="4"  style="height:50px;">
            <header-navbtn v-model="isActive"
                            class="hamburger-container"
                            :isActive="isActive"></header-navbtn>
          </el-col>
          <el-col :span="20"  style="height:50px;">
            <header-box></header-box>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="c-container">
        <aside-nav :isActive="isActive"></aside-nav>
        <el-main class="c-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import asideNav from "./sidebar"
import headerNavbtn from "./header/navbtn.vue"
import headerBox from "./header/index.vue"

export default {
  data () {
    return {
      isActive: false,
      pathindex: ""
    };
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  watch: {
    $route () {
      this.pathindex = this.$route.path;
    }
  },
  created () {

    this.pathindex = this.$route.path;

  },
  mounted () {

  },
  methods: {

  },
  computed: {

  },

  components: {
    asideNav,
    headerBox,
    headerNavbtn

  }
};
</script>
<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100vh;
}

.el-main {
  background-color: #fafafa;
  color: rgb(46, 46, 46);
  padding: 10px;
  padding-top: 15px;
}
.aside_box {
  overflow: hidden;
}

.header_box {
  width: 100%;
  position: fixed;
  flex-direction: row;
  padding: 0;
  overflow: hidden;
  z-index: 9;
  color: #fff;
  margin-bottom: 0;
  background: #262F3E;
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.c-container {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
}
.c-main {
  background-color: #f5f9ff;
}
</style>