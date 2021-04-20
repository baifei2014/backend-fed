<template>
  <div class="welcome_box">
      <!-- <vue-particles color="#3f95d0"
                    :particleOpacity="0.7"
                    linesColor="#3f95d0"
                    :particlesNumber="100"
                    shapeType="circle"
                    :particleSize="5"
                    :linesWidth="2"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="1"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="repulse">

      </vue-particles> -->
    <div class="welcome_txt">
      欢迎使用推送后台
    </div>

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
<style scoped>
.welcome_box {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  position: relative;
}
.welcome_txt {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  text-shadow: 5px 5px 5px #b1b0b0, 0px 0px 2px #bfbbbb, 2px 2px 3px #bbbbbb;
  color: #3f95d0;
}
</style>