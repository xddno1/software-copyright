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
      <el-input placeholder="请输入内容" size="small" class="input2"></el-input>
      <el-button icon="el-icon-search" round size="small"></el-button>
    </div>
    <div class="center">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="xueyuan" label="学院"> </el-table-column>
        <el-table-column prop="subject" label="专题"> </el-table-column>
        <el-table-column prop="name" label="申请人" width="90">
        </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="zhuanlinum" label="专利号"> </el-table-column>
        <el-table-column label="操作" width="120">
          <el-popconfirm
            confirm-button-text="是的"
            cancel-button-text="再想想"
            icon="el-icon-info"
            icon-color="red"
            title="确定删除这篇专利吗？"
          >
            <el-button type="text" size="small" class="del" slot="reference"
              >删除</el-button
            >
          </el-popconfirm>
          <el-button type="text" size="small" @click="print">
            在线打印
          </el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import printjs from 'print-js'
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
      }, {
        value: '选项7',
        label: '操作'
      }],
      value: '日期',
      tableData: [{
        date: '2022-01-27',
        xueyuan: '海运学院',
        name: '孙成琪',
        title: '一种海洋污染数据采集方法及系统',
        zhuanlinum: 'CN202210098822.2',
        subject: '材料科学',

      }, {
        date: '2022-01-07',
        xueyuan: '农业学院',
        name: '高振华',
        title: '一种肉羊养殖辅助喂养装置',
        zhuanlinum: 'CN202210013036.8',
        subject: '畜牧与动物医学',
      }, {
        date: '2021-12-13',
        xueyuan: '海运学院',
        name: '孙力军',
        title: '虾头酶解物在调节肠道短链脂肪酸生成以及改善抑郁样行为方面的应用',
        zhuanlinum: 'CN202111517263.6',
        subject: '轻工业手工业',
      }, {
        date: '2022-01-13',
        xueyuan: '电子与信息工程学院',
        name: '宋致远',
        title: '一种基于零值化神经动力学模型求解时变复值线性矩阵方程的方法',
        zhuanlinum: 'CN202210035575.1',
        subject: '自动化技术',
      }, {
        date: '2022-01-10',
        xueyuan: '数学与计算机学院',
        name: '王淑怡',
        title: '智能蜂箱',
        zhuanlinum: 'CN202230011970.7',
        subject: '农业科技',
      }, {
        date: '2020-12-21',
        xueyuan: '农业学院',
        name: '任磊',
        title: '一株海洋细菌及其应用',
        zhuanlinum: 'CN202011523799.4',
        subject: '生物学',
      }]
    };
  },
  methods: {
    print: () => {
      let imgSrc = 'https://s1.ax1x.com/2022/05/01/OpIdSA.png'
      let oWin = window.open('', 'pringwindow', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=1000,height=660')
      oWin.document.fn = function () {
        if (oWin) {
          oWin.print()
          oWin.close()
        }
      }
      let html = '<div style="height: 100%;width: 100%;">' + `<img src="${imgSrc}" onload="fn()" style="height:42.7cm;width: 30cm;" />` + `<img src="${imgSrc}" onload="fn()" style="height:42.7cm;width: 30cm;" />` + `<img src="${imgSrc}" onload="fn()" style="height:42.7cm;width: 30cm;" />` + `<img src="${imgSrc}" onload="fn()" style="height:42.7cm;width: 30cm;" />` + '</div>'
      oWin.document.open()
      oWin.document.write(html)
      oWin.document.close()
    }
  },
};
</script>

<style>
#print {
}
.search {
  z-index: 0;
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
.del,
.del:hover,
.del:focus {
  color: red;
}
</style>