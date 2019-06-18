<template>
  <el-container>
    <el-container>
      <el-main><div class="top"><p class="title" style="color:#B3C0D1">通知管理</p>
        <div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">消息中心</el-breadcrumb-item>
          <el-breadcrumb-item>通知管理</el-breadcrumb-item>
          <el-breadcrumb-item>发布通知</el-breadcrumb-item>
        </el-breadcrumb></div>
        </div>
        <div class="body">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="发布标题" :rules="[{ required: true },]">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="发布类型" :rules="[{ required: true },]">
              <el-select v-model="form.region" placeholder="请选择发布类型" style="float: left;width: 100%">
                <el-option label="消息通知" value="shanghai"></el-option>
                <el-option label="个人消息" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="部门" :rules="[{ required: true },]" >
              <el-cascader
                v-model="value"
                :options="options"
                @change="handleChange"
                style="float: left;width: 100%"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="发布时间" :rules="[{ required: true },]">
              <el-input v-model="form.time" placeholder="发布时间自动生成"  :disabled="true" ></el-input>
            </el-form-item>
            <el-form-item label="发布内容" >
              <el-input type="textarea" v-model="form.desc" :rows="5"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="info" @click="save">保存</el-button>
              <el-button type="primary" @click="onSubmit">发布</el-button>

              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'NotifyManage',
    data() {
      return {
        form: {
          name: '',
          region: '',
          type: [],
          time:'',
          desc: ''
        },
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',

          }, {
            value: 'daohang',
            label: '导航',

          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      save(){},
      handleChange(value) {
        console.log(value);
      }
    }

  };
</script>

<style>
  html,body {

    overflow:hidden;

    margin:0px;

    width:100%;

    height:100%;

  }


  .title {
    text-align: left;
    font-size: 30px;
    margin-bottom: 15px;
    font-family: "Helvetica Neue";
    font-style: normal;


  }
  .path {
    text-align: left;
    font-size: 17px;
    line-height: 25px;
    height: 25px;
    text-align: center;
    width: -webkit-max-content;
    margin-bottom: 20px;

  }

  .body{
    margin-top: 5px;
    margin-bottom: 100px;
    padding: 10px 0 30px;
  }


  .el-main {

    color: #333;
    text-align: center;
    height:700px;

    margin-top: -60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
