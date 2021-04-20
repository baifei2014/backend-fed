<template>
  <div class="header_rightbox" style="height:50px;">
    
    <userdata ></userdata>
  </div>
</template>
<script>
import userdata from "./userinfo.vue"

export default {
  data () {
    return {

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

  },
  computed: {

  },

  components: {
userdata
  }
};
</script>
<style scoped>
.header_rightbox {
  width: 100%;
  height: 50px;
  overflow: hidden;
}
</style>