<template>
  <el-row class="tac">
    <h5>专利管理系统</h5>
    <el-col :span="4" class="col1">
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        @close="handleClose"
        background-color="#f4f4f4"
        text-color="#333"
        active-text-color="#333"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">回到首页|退出</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">修改密码</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">检索专利</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">管理学校</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">管理院系</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">管理学科</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">管理专业</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-setting"></i>
          <span slot="title">查看访问日志</span>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
      <div class="banquan banquan1">版权所有：</div>
      <div class="banquan">广东海洋大学</div>
    </el-col>
    <el-col :span="20" class="col2">
      <h4>{{ routertitle }}</h4>
      <router-view />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "mm",
  components: {},
  data () {
    return {
      routertitle: "管理院系"
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect (key, keyPath) {
      if (key === '1')
        this.$router.push('/index')
      console.log(key, keyPath);
    }
  },
};
</script>

<style scoped>
.col1 {
  background-color: #f4f4f4;
}
.tac h5 {
  padding: 0.7em 20px;
  margin: 0;
  font-size: 1.5em;
  background-color: #52bab5;
  color: white;
}
.el-menu {
  border-right: 0px;
}
.banquan {
  color: #183c7a;
  font-weight: 700;
  text-align: center;
  margin-top: 15px;
}
.banquan1 {
  margin-top: 35px;
}
.col1 {
  height: calc(100vh - 4.2em);
  border-right: solid 1px #e6e6e6;
}
.el-menu-item.is-active {
  background-color: rgba(82, 186, 181, 0.38) !important;
}
.col2 {
  padding: 40px 60px;
}
</style>