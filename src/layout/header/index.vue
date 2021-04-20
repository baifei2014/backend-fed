<template>
<div class="header_index" style="height: 50px;">
  <el-row style="height: 50px;">
    <el-col :span="14" style="height: 50px;">
      <header-breadcrumb></header-breadcrumb>
    </el-col>
    <el-col :span="10" style="height: 50px;">
      <header-rightbox></header-rightbox>
    </el-col>
  </el-row>
</div>
</template>
<script>
import headerBreadcrumb from "./breadcrumb.vue"
import headerRightbox from "./rightbox/index.vue"
export default {
  data() {
   return{

   };
  },
  beforeRouteLeave(to, from, next) {
     next()
  },
  watch: {

  },
  created() {

},
  mounted() {

},
  methods:{

  },
  computed: {

},

  components: {
    headerRightbox,
    headerBreadcrumb
  }
};
</script>
<style scoped>
.header_index{
  width: 100%;
  height: 50px;
  overflow: hidden;
}
</style>