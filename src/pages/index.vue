<template>
  <div class="index">
    <el-button type="primary" v-on:click="routerpush('/login')">登录</el-button>
    <el-button type="primary" v-on:click="routerpush('/sent')">提交</el-button>
    <el-button type="primary" v-on:click="routerpush('/main')">后台</el-button>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data () {
    return {};
  },
  methods: {
    routerpush (str) {
      this.$router.push(str)
    }
  },
};
</script>

<style>
</style>