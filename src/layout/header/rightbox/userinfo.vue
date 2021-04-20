<template>
  <div  style="height:50px;">
    <el-popover placement="bottom"
                width="160"
                popper-class="userinfo_box"
                v-model="visible2">
      <ul class="userinfo_box">
        <h4 class="userinfo_li">{{ userinfo.name}}</h4>
        <!-- <li class="userinfo_li"
            @click="sxuser">
          刷新用户
        </li> -->
        <!-- <li class="userinfo_logoutli"
            @click="logout">
          退出登录
        </li> -->
      </ul>
      <span class="user_name"  style="height:50px;"
            slot="reference">{{ userinfo.name }}</span>
    </el-popover>
  </div>
</template>
<script>
import * as login from "@/api/login.js"
export default {
  data () {
    return {
      visible2: false,
      userinfo: {
        name: ""
      }
    };
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  watch: {

  },
  created () {
    login.getInfo().then(res => {
      this.userinfo = res.data.original;
    })

  },
  mounted () {

  },
  methods: {
    logout () {
      this.$confirm("你是要退出登录吗?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        
      });
    },
    delCookie () {
      var date = new Date();
      date.setTime(date.getTime() - 10000);
      var keys = document.cookie.match(/[^ =;]+(?==)/g);
      // console.log("需要删除的cookie名字：" + keys);
      if (keys) {
        for (var i = keys.length; i--;)
          document.cookie = keys[i] + "=0; expire=" + date.toGMTString() + "; path=/";
      }
    }, 
    sxuser () {

     

    }
  },
  computed: {

  },

  components: {

  }
};
</script>
<style scoped>
.user_name {
  float: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 12px 12px 12px 5px;
  box-sizing: border-box;
}
.userinfo_box {
  width: 100%;
  text-align: center;
}
.userinfo_li {
  width: 100%;
  padding: 8px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.userinfo_logoutli {
  width: 100%;
  border-top: 1px solid #ddd;
  padding: 5px 0;
  margin-top: 10px;
}
</style>