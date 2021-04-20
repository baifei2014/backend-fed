<template>
  <el-menu-item v-if="!item.children.length" style="height:50px;"
                :index="item.redirect"
                @click="gotorouter(item)">
    <i :class="'isI iconfont '+ (item.meta.icon || 'el-icon-menu')"></i>
    <span slot="title">{{item.meta.title}}</span>
  </el-menu-item>
  <el-submenu v-else
              :index="item.path"
              popper-append-to-body>
    <template slot="title">
      <i :class="'isI iconfont '+ (item.meta.icon || 'el-icon-menu')"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>
    <template v-for="(childitem, childindex) in item.children">
      <div :key="childindex"
           v-if="!childitem.hidden">
        <el-submenu v-if="childitem.ischildren"
                    :index="item.path+'/'+childitem.path">
          <span slot="title">{{childitem.meta.title}}</span>
          <el-menu-item v-for="(child2item, child2index) in childitem.children"
                        :key="child2index"
                        @click="gotorouter(child2item)"
                        :index="item.path+'/'+childitem.path +'/'+child2item.path">{{child2item.meta.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item-group v-else>
          <el-menu-item @click="gotorouter(childitem)"
                        :index="item.path+'/'+childitem.path">{{childitem.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </div>
    </template>

  </el-submenu>
</template>
<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      roles: ['0']
    };
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  watch: {
  
  },
  created () {
   
  },
  mounted () {

  },
  methods: {
    gotorouter (item) {
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
.isI {
  color: #fff;
  font-size: 14px;
  margin-right: 8px;
}

.menu-wrapper {
  box-sizing: inherit;
}
</style>