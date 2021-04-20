<template>
  <div>
    <router-view />
  </div>
</template>
<script>

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
  updated () {
    //DOM渲染
  },
  destroyed () {
    //销毁
  },
  methods: {

  },
  computed: {

  },

  components: {

  }
};
</script>
<style scoped>
</style>