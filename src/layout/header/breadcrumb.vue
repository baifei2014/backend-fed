<template>
  <div style="height: 50px;">
    <el-breadcrumb class="app-breadcrumb"
                   separator="/">
      <el-breadcrumb-item v-for="(item,index) in hioslis"
                          :key="index">
        <span v-if="item.redirect==='noRedirect'||index==hioslis.length-1"
              class="no-redirect">{{ item.meta.title }}</span>
        <a v-else
           @click.prevent="handleLink(item)" style="color:#fff;">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>

export default {
  data () {
    return {
      pathindex: "",
      hioslis: []

    };
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  watch: {
    $route () {
      this.pathindex = this.$route.path;
      this.getrouterlis();
    }
  },
  created () {
    this.pathindex = this.$route.path;
    this.getrouterlis();
  },
  mounted () {

  },
  methods: {
    getrouterlis () {

      let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      var arr = matched.filter((item, index) => {
        if (item.redirect) {
          if (item.redirect != matched[index + 1].path) {
            return true
          }
          return false
        }
        return true

      });
      this.hioslis = arr;
    },
    handleLink (item) {

      if (item.redirect) {
        this.$router.push({ path: item.redirect })
        return
      }
      this.$router.push({ name: item.name })
    }

  },
  computed: {

  },

  components: {

  }
};
</script>
<style scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
.no-redirect {
  color: #fff;
  cursor: text;
}
</style>