<template>
  <div class="sent">
    <el-row class="tac">
      <h4>专利上传登记页</h4>
      <el-col :span="6">
        <div class="leftbox">
          <el-menu default-active="1" @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-plus"></i>
              <span slot="title">新建提交</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document-checked"></i>
              <span slot="title">提交记录</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-user"></i>
              <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-user"></i>
              <span slot="title">退出登录</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18" class="col2">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="标题" :inline="false">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="120px" inline>
          <el-form-item label="专利类型">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="申请（专利）号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="授权公告日">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="多次公布">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="申请人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="120px" inline>
          <el-form-item label="发明人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="专辑">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="专题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="分类号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="主分类号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="国省代码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="页数">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="代理机构">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="代理人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="主权项">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 20 }"
              v-model="form.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 20 }"
              v-model="form.name"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="upload1">
              <div class="upload2">
                <span>专利申请CAJ文件上传</span>
                <el-upload class="upload-demo" drag action="" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </el-upload>
              </div>
              <div class="upload2">
                <span>专利证书文件上传</span>
                <el-upload class="upload-demo" drag action="" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </el-upload>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即上传</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "sent",
  components: {},
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    logout () {
      this.$confirm('是否确认退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/index')
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        });
      });
    },
    handleSelect (key, keyPath) {
      if (key === '4') {
        this.logout()
      }
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
h4 {
  padding: 0.7em 20px;
  padding-left: 10%;
  margin: 0;
  font-size: 1.5em;
  background-color: #52bab5;
  color: white;
  margin-bottom: 30px;
}
.col2 {
  padding-right: 11%;
  /* padding-right: 35%; */
  box-sizing: border-box;
}
.leftbox {
  margin-left: 40%;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: rgba(82, 186, 181, 0.38) !important;
}
.el-menu-item.is-active {
  background-color: rgba(82, 186, 181, 0.38) !important;
  border-right: 2px solid #52bab5;
  color: #303133;
}
.upload1 {
  display: flex;
  justify-content: space-between;
}
</style>