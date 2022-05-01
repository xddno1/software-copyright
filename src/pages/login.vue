<template>
  <div class="login">
    <div class="box">
      <div class="logo"><img src="../assets/logo.png" alt="" /></div>
      <div class="title">专利管理系统</div>
      <el-tabs stretch>
        <el-tab-pane label="学生登录"></el-tab-pane>
        <el-tab-pane label="管理员登录"></el-tab-pane>
      </el-tabs>
      <el-input placeholder="请输入学号/工号/身份证号" class="ipt">
        <i slot="prepend" class="el-icon-user-solid"></i>
      </el-input>
      <el-input placeholder="请输入密码" class="ipt">
        <i slot="prepend" class="el-icon-unlock"></i>
      </el-input>
      <el-button class="btn" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data () {
    return {};
  },
  methods: {
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background: url('../assets/loginbgc.jpg');
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  padding-top: calc(50vh - 225px);
  box-sizing: border-box;
}
.box {
  width: 658px;
  margin: 0 auto;
  /* margin: calc(50vh - 275px) auto 0; */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 0 8%;
  box-sizing: border-box;
}

.logo {
  padding-top: 30px;
}
.logo img {
  margin: 0 auto;
  width: 88%;
}
.title {
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.el-tabs__item {
  color: #cdcdcd;
}
.el-tabs__item:hover {
  color: #cdcdcd;
}
.el-tabs__item:active {
  color: #cdcdcd;
}
.is-active {
  font-weight: bold;
  color: #cdcdcd !important;
}
.el-tabs__active-bar {
  background: white;
}
.el-tabs__nav-wrap::after {
  background-color: rgba(0, 0, 0, 0.1);
}
.ipt {
  margin: 15px 0 0;
}
.btn {
  width: 100%;
  margin: 30px 0 50px;
}
</style>