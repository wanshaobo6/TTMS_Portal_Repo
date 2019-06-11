<template>
  <el-container>
    <el-main>
      <div class="topic"><h1>报名详情</h1></div>
      <div class="body" style="width:100%;height:100%">
        <div class="body-upside" style="width:100%;height:30%;padding:50px 20px 0px 20px">
          <el-row :gutter="15">

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
          <div class="menu" style="padding: 30px 0px 10px 50px;text-align:left;">
            <el-button type="primary" @click="dialogFormVisible = true">报名</el-button>
            <div class="ff">报名人信息</div>
            <el-dialog title="填写报名人信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="游客编号" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="身份证号码" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否需要陪同" :label-width="formLabelWidth">
                  <el-input v-model="form.Number" autocomplete="off"></el-input>
                </el-form-item><el-form-item label="备注" :label-width="formLabelWidth">
                <el-input v-model="form.Number" autocomplete="off"></el-input>
              </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">报名</el-button>
              </div>
            </el-dialog>
          </div>
          <div class="kk"><el-table
            :data="tableData"
            border
            style="width:90%">
            <el-table-column
              prop="Number"
              label="游客编号"
              width="100">
            </el-table-column>
            <el-table-column
              prop="Name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="Sex"
              label="性别"
              width="100">
            </el-table-column>
            <el-table-column
              prop="Age"
              label="年龄"
              width="100">
            </el-table-column>
            <el-table-column
              prop="IDNumber"
              label="身份证号码"
              width="170">
            </el-table-column> <el-table-column
            prop="Phone"
            label="联系电话"
            width="120">
          </el-table-column> <el-table-column
            prop="Company"
            label="是否需要陪同"
            width="150">
          </el-table-column>
            <el-table-column
              prop="Remarks"
              label="备注"
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
    name: 'Detail',
    data() {
      return {
        tableData:[{
          Number: "01",
          Name:"zahng",
          Sex:"女",
          Age:"20",
          IDNumber:"362229199901260224",
          Phone:"123456789012",
          Company:"否",
          Remarks:"无",
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
    margin-left: 50px;
  }

  .el-main {
    background-color: #F5F7FA;
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
  .ff{
    font-family: "Eras Bold ITC";
    font-size:18px;
    padding:10px 0px 0px 50px;
  }
  .topic{
    text-align: left;
    margin-top: 30px;
  }

</style>

