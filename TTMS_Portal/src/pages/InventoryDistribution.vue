<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="top"><p class="title" style="color:#B3C0D1">库存分销</p>
          <div class="path"><el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品</el-breadcrumb-item>
            <el-breadcrumb-item>产品分类</el-breadcrumb-item>
            <el-breadcrumb-item>产品分销</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
        </div>
        <div class="body" style="width:100%;height:100%">
          <div class="body-upside" style="width:100%;height:30%">
            <el-row :gutter="24">
              <el-col :span="10">
                <div class="grid-content bg-purple"><div class="title01"><b>产品编号：</b><span>&nbsp;&nbsp;&nbsp;TPCN-78956789</span></div>
                  <div class="title01"><b>产品负责人:</b><span>&nbsp;&nbsp;&nbsp;王毅</span></div>
                  <div class="title01"><b>价格信息：</b><span>&nbsp;&nbsp;&nbsp;5555￥</span></div>
                </div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple"><div class="title01"><b>产品名称:</b><span>&nbsp;&nbsp;&nbsp;兵马俑制作+大明宫游+拓片体验亲子文化游3晚4天</span></div>
                  <div class="title01"><b>服务日期：</b><span>&nbsp;&nbsp;&nbsp;2019-05-28~2019-6-29</span></div>
                  <div class="title01"><b>状态：</b><span>&nbsp;&nbsp;&nbsp;产品上架</span></div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="body-bottom" style="width:100%;height:70%;">
            <div class="menu" style="padding: 0px 0px 10px 10px ;text-align:left;">
              <el-button type="primary" @click="dialogFormVisible = true">添加分销商</el-button></div>
            <el-dialog title="添加分销商" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="分销商" :label-width="formLabelWidth">
                  <div class="left">  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select></div>
                </el-form-item>

                <el-form-item label="分配数量" :label-width="formLabelWidth" :rules="[
	  { required: true },]" >
                  <el-input v-model="form.name" autocomplete="off" ></el-input>
                </el-form-item>
            <div class="left">    <el-form-item label="销售日期" :label-width="formLabelWidth" :rules="[
	  { required: true },]">

                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="开始日期">
                    </el-date-picker>
-
                    <el-date-picker
                      v-model="value2"
                      type="date"
                      placeholder="结束日期">
                    </el-date-picker>

                </el-form-item>
            </div>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <div class="kk"><el-table :data="tableData" border style="width:100%">
              <el-table-column prop="DistributorNumber" label="分销商编号" width="150">
              </el-table-column>
              <el-table-column prop="DistributorName" label="分销商名称" width="150">
              </el-table-column>
              <el-table-column prop="AssignedAmount" label="分配数量" width="150">
              </el-table-column>
              <el-table-column prop="StartData" label="销售开始日期" width="150">
              </el-table-column>
              <el-table-column prop="EndData" label="销售终止日期" width="150">
              </el-table-column>


              <el-table-column label="操作" align="center" min-width="70">
                <template>
                　　　　<el-button type="info" @click="modifyUser(scope.row.phone)">修改</el-button>
                  　　　　　　<el-button type="info" @click="deleteUser(scope.row.phone)">删除</el-button>
</template>

　　</el-table-column>
            </el-table>

            </div>
          </div>
        </div>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'TourismInformation',
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',

        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',

        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },

        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px',


        tableData: [{
          DistributorNumber: "9",
          DistributorName: "西安青年旅行社",
          AssignedAmount: "6",
          StartData: "2019-6-1",
          EndData: "2019-7-30",
        },
          {
            DistributorNumber: "9",
            DistributorName: "西安青年旅行社",
            AssignedAmount: "6",
            StartData: "2019-6-1",
            EndData: "2019-7-30",
          },
        ],

      }
    },
        methods:{
          deleteUser(val){
            console.log(val)

//这里写相应的逻辑，val是指传进来的参数也就是上面的scope.row.phone；也可以是scope.row.nickname等
          },
//修改用户
          modifyUser(val){
            let self = this;
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
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: -webkit-fill-available;
    position:fixed; z-index:999999; top:0px;
  }
  .left{
    float: left;

  }

  .path {
    text-align: left;
    font-size: 17px;
    line-height: 25px;
    height: 25px;
    text-align: center;
    width: -webkit-max-content;
    margin-bottom: 10px ;
    background:#E9EEF3;
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
    font-family: stXinkai;
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
    font-family: Arial;
    font-style: normal;
    font-size:16px;

  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:700px;
    background-color: #e5e9f2;

    position: fixed;
  }
  .kk{
    border:1px solid #dfe4ed;
  }
  .ff{
    border:1px solid #dfe4ed;
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

</style>


