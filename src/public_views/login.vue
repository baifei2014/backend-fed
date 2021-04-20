<template>
  <div class="login_box">

    <div class="centenlogin">
      <div class="login_title">广告平台</div>
      <div class="centenlogin_inputbox">
        <el-form
          :model="loginData"
          :rules="rules"
          ref="loginData"
          label-width="60px"
          class="demo-ruleForm"
        >
          <el-form-item prop="email" label-width="0" style="margin-bottom: 20px;">
            <el-input
              placeholder="请输入邮箱"
              style="width:300px"
              v-model="loginData.email"
            ><template slot="prepend"><i class="el-icon-user"></i></template></el-input>
          </el-form-item>
          <el-form-item prop="password"  label-width="0" style="margin-bottom: 20px;">
            <el-input
              placeholder="请输入密码"
              style="width:300px"
              type="password"
              @keyup.enter.native="login()"
              v-model="loginData.password"
              show-password
            ><template slot="prepend"><i class="el-icon-unlock"></i></template></el-input>
          </el-form-item>
          <div>
            <el-button
            type="primary"
            class="login_btn"
            @click="login()"
          >登录</el-button>
          </div>
        </el-form>

      </div>
    </div>

  </div>
</template>
<script>
import { postlogin } from "@/api/login.js";
// import { openDB } from "@/utils/fe_db.js";

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
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
  methods: {
    login() {
      this.$refs.loginData.validate((valid, errobj) => {
        if (valid) {
          postlogin(this.loginData).then(res => {
            localStorage.setItem('roles', res.data.roles.concat([0]) || [0]);
            localStorage.setItem('token', res.data.original.access_token);
            localStorage.setItem('dicDataDBver', 1 || res.data.ver);
            // openDB(1)
            this.$router.push({ name: 'ad' });
          })
        } else {
          for (var key in errobj) {
            this.$message({
              message: errobj[key][0].message,
              type: 'error'
            });
          }
          // console.log('error submit!!');
          return false;
        }
      });
    },
  },
  computed: {

  },

  components: {

  }
};
</script>
<style scoped>
.login_box {
  width: 100%;
  height: 100vh;
  border-top: 6px solid #296aef;
}
.centenlogin {
  margin-bottom: 60px;
  box-sizing: border-box;
  margin: 100px auto;
  width: 420px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px 0 rgb(0 60 179 / 12%);
  background: #fff;
}
.login_title {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgb(44 114 255 / 10%), 0 4px 20px 0 rgb(44 114 255 / 5%);
  height: 52px;
  line-height: 52px;
  font-size: 18px;
}
.centenlogin_inputbox {
  /* display: flex; */
}
.demo-ruleForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login_btn {
  margin-bottom: 30px;
  width: 300px;
}
</style>