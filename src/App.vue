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
  methods: {

  },
  computed: {

  },

  components: {

  }
};
</script>
<style>
body {
  background-color: #f5f9ff;
  margin: 0;
}
</style>