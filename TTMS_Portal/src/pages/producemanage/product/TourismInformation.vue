<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="top"><p class="title" style="color:#B3C0D1">库存分销</p>
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品</el-breadcrumb-item>
            <el-breadcrumb-item>产品分类</el-breadcrumb-item>
            <el-breadcrumb-item>导游信息</el-breadcrumb-item>
          </el-breadcrumb>
          </div>

        <div class="body" style="width:100%;height:100%">
          <div class="body-upside" style="width:100%;height:30%">
            <el-row :gutter="24">
              <el-col :span="10">
                <div class="grid-content"><div class="title01"><b>产品编号：</b><span>&nbsp;&nbsp;&nbsp;TPCN-78956789</span></div>
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
              <el-button type="primary" @click="dialogTableVisible = true">添加导游</el-button>
              <el-dialog title="添加导游" :visible.sync="dialogTableVisible" style="width: 120%">
                <div class="title02">
                  <div class="title03"><el-input placeholder="导游姓名"></el-input></div>
                  <div class="title03"><el-input placeholder="联系方式"></el-input></div>
                  <div class="title03"><el-input placeholder="熟悉语言"></el-input></div>
                  <div class="title03"><el-input placeholder="国籍"></el-input></div>
                  <div class="title03"><el-button type="primary">查询</el-button></div>
                </div>
                <el-table :data="gridData" border>
                  <el-table-column type="selection" width="30"></el-table-column>
                  <el-table-column property="TourismNumber" label="导游编号" width="80"></el-table-column>
                  <el-table-column property="Name" label="姓名" width="60"></el-table-column>
                  <el-table-column property="EnglishName" label="英文名" width="65"></el-table-column>
                  <el-table-column property="Sex" label="性别" width="50"></el-table-column>
                  <el-table-column property="Email" label="邮箱" width="122"></el-table-column>
                  <el-table-column property="Language" label="语言" width="100"></el-table-column>
                  <el-table-column property="Nationality" label="国籍" width="50"></el-table-column>
                  <el-table-column property="Contact" label="联系方式" width="110"></el-table-column>
                  <el-table-column property="Remarks" label="备注" width="110"></el-table-column>
                </el-table>
                <div class="hh" style="padding-top: 30px;">
                  <div class="block">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage3"
                      :page-size="1"
                      layout="prev, pager, next, jumper"
                      :total="10">
                    </el-pagination>
                  </div>
                </div>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </div>

              <div class="kk"><el-table :data="tableData" border style="width:100%">
              <el-table-column prop="TourismNumber" label="导游编号" width="80">
              </el-table-column>
              <el-table-column prop="Name" label="姓名" width="80">
              </el-table-column>
              <el-table-column prop="EnglishName" label="英文名" width="80">
              </el-table-column>
              <el-table-column prop="Sex" label="性别" width="50">
              </el-table-column>
              <el-table-column prop="Email" label="邮箱" width="120">
              </el-table-column>
              <el-table-column prop="Language" label="语言" width="100">
              </el-table-column>
              <el-table-column prop="Nationality" label="国籍" width="50">
              </el-table-column>
              <el-table-column prop="Contact" label="联系方式" width="150">
              </el-table-column>
              <el-table-column prop="Remarks" label="备注" width="120">
              </el-table-column>
              </el-table-column>
              <el-table-column label="操作" align="center" min-width="70">
                　　　　<template slot-scope="scope">
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
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        value1: '',
        value2: '',



        gridData: [{
          TourismNumber: "ct0001",
          Name: "张鹏",
          EnglishName: "lay",
          Sex: "男",
          Email: "zhang@qq.com",
          Language: "中文，英文",
          Nationality: "中国",
          Contact: "13679805590",
          Remarks: "年度十佳导演",
        },
          {TourismNumber: "ct0001",
            Name: "张鹏",
            EnglishName: "lay",
            Sex: "男",
            Email: "zhang@qq.com",
            Language: "中文，英文",
            Nationality: "中国",
            Contact: "13679805590",
            Remarks: "年度十佳导演",}

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
          TourismNumber: "ct0001",
          Name: "张鹏",
          EnglishName: "lay",
          Sex: "男",
          Email: "zhang@qq.com",
          Language: "中文，英文",
          Nationality: "中国",
          Contact: "13679805590",
          Remarks: "年度十佳导演",
        },
          {
            TourismNumber: "ct0001",
            Name: "张鹏",
            EnglishName: "lay",
            Sex: "男",
            Email: "zhang@qq.com",
            Language: "中文，英文",
            Nationality: "中国",
            Contact: "13679805590",
            Remarks: "年度十佳导演",
          }
        ],

      }
    },
    methods:{
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
  .title02{
    display:flex;
  }
  .title03{
    margin: 0px 10px 10px 0px;
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


