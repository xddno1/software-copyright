<template>
  <div class="search">
    <div class="top">
      <span>检索：按</span>
      <el-select
        v-model="value"
        placeholder="请选择"
        size="small"
        class="input1"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>检索&nbsp;关键字</span>
      <el-input
        v-model="input"
        placeholder="请输入内容"
        size="small"
        class="input2"
      ></el-input>
      <el-button icon="el-icon-search" round size="small"></el-button>
    </div>
    <div class="center">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="date" label="学院"> </el-table-column>
        <el-table-column prop="subject" label="专题"> </el-table-column>
        <el-table-column prop="name" label="申请人"> </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="title" label="专利号"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  components: {},
  data () {
    return {
      options: [{
        value: '选项1',
        label: '日期'
      }, {
        value: '选项2',
        label: '学院'
      }, {
        value: '选项3',
        label: '申请人'
      }, {
        value: '选项4',
        label: '标题'
      }, {
        value: '选项5',
        label: '专利号'
      }, {
        value: '选项6',
        label: '专题'
      }],
      value: '日期',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1518',
        subject: ''
      }, {
        date: '2016-05-04',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1517'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1519'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1516'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1517'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1519'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1516'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        title: '上海市普陀区金沙江路 1517'
      }]
    };
  },
  methods: {
  },
};
</script>

<style>
.search {
}
.top {
  text-align: center;
  margin-bottom: 25px;
}
.input1 {
  width: 100px;
}
.input2 {
  width: 200px;
  display: inline-block;
}
</style>