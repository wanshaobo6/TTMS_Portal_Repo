<template>
  <el-container>
      <el-main>
        <div class="top"><p class="title" style="color:#B3C0D1">通知管理</p>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品</el-breadcrumb-item>
            <el-breadcrumb-item>产品列表</el-breadcrumb-item>
            <el-breadcrumb-item>添加附件</el-breadcrumb-item>
          </el-breadcrumb>

        </div>
        <div class="body" style="width:100%;height:100%">
          <div class="body-upside" style="width:100%;height:30%">
            <el-row :gutter="24">
              <el-col :span="10">
                <div class=""><div class="title01"><b>产品编号：</b><span>&nbsp;&nbsp;&nbsp;TPCN-78956789</span></div>
                  <div class="title01"><b>产品负责人:</b><span>&nbsp;&nbsp;&nbsp;王毅</span></div>
                  <div class="title01"><b>价格信息：</b><span>&nbsp;&nbsp;&nbsp;5555￥</span></div>
                </div>
              </el-col>
              <el-col :span="14">
                <div class=" "><div class="title01"><b>产品名称:</b><span>&nbsp;&nbsp;&nbsp;兵马俑制作+大明宫游+拓片体验亲子文化游3晚4天</span></div>
                  <div class="title01"><b>服务日期：</b><span>&nbsp;&nbsp;&nbsp;2019-05-28~2019-6-29</span></div>
                  <div class="title01"><b>状态：</b><span>&nbsp;&nbsp;&nbsp;产品上架</span></div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="body-bottom" style="width:100%;height:70%;">
            <div class="menu" style="padding: 0px 0px 10px 10px ;text-align:left;"><el-button type="primary" @click="dialogFormVisible = true">添加附件</el-button>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="标题" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="文件" :label-width="formLabelWidth">
                  <el-button type="primary" @click="dialogFormVisible = true">上传文件</el-button>
                  未上传文件
                </el-form-item>
              </el-form>
              <div style="padding-left:120px">
                <el-button type="primary">上传</el-button>

              </div>
            </el-dialog>
            </div>


            <div class="kk"><el-table
              :data="tableData"
              border
              style="width:100%">
              <el-table-column
                prop="Title"
                label="标题"
                width="150">
              </el-table-column>
              <el-table-column
                prop="FileName"
                label="文件名"
                width="200">
              </el-table-column>
              <el-table-column
                prop="UploadData"
                label="上传时间"
                width="150">
              </el-table-column>
              <el-table-column
                prop="UploadUser"
                label="上传用户"
                width="150">
              </el-table-column>

              <el-table-column label="操作" align="center" min-width="100">
                　　　　<template slot-scope="scope">
                　　　　　　<el-button type="danger" @click="deleteUser(scope.row.phone)">删除</el-button>
                　　　　</template>
                　　</el-table-column>
            </el-table>

            </div>
          </div>
        </div>

      </el-main>
    </el-container>
</template>

<script>
  export default {
    name: 'ClassifyInformation',
    data() {
      return {
        tableData:[{
          Title:"附件1",
          FileName:"sql.txt",
          UploadData:"2019-6-31",
          UploadUser:"王毅",

        },
          {
            Title:"附件2",
            FileName:"sql.txt",
            UploadData:"2019-6-31",
            UploadUser:"王毅",

          }
        ],

        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };






    },
    methods: {
      deleteUser(val){
        console.log(val)

//这里写相应的逻辑，val是指传进来的参数也就是上面的scope.row.phone；也可以是scope.row.nickname等
      },




    }
  }

</script>
<style>
  html,body {

    overflow:hidden;

    margin:0px;
    width:100%;
    height:100%;
  }

  .path {
    text-align: left;
    font-size: 17px;
    line-height: 25px;
    height: 25px;
    text-align: center;
    width: -webkit-max-content;
    margin-bottom: 10px ;
    padding:10px 10px 20px 10px;
  }
  .page{
    position: relative;
    padding-top: 20px;
  }
  .title {
    text-align: left;
    padding: 10px 10px 10px 10px;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: normal;
    font-style: normal;
  }
  .body{
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 10px 0 30px;
  }

  .title01{
    text-align: left;
    padding:10px 50px 20px 100px;
    font-family: normal;
    font-style: normal;
    font-size:12px;

  }

  .kk{
    border:1px solid #dfe4ed;
  }

  .el-main {
    background-color: #F5F7FA;
    color: #333;
    text-align: center;
    height:700px;
    margin-left: 0px;
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

