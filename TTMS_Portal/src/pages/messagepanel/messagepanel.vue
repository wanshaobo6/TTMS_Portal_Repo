<template>
  <el-container>

    <el-container>
      <el-main>
        <div class="top">
          <div class="title03">
            <p class="title" style="color:#B3C0D1">信息面板</p>
            <p style="color:#2c3e50 ;font-size:15px ">更新时间:2019-5-26</p>
          </div>
          <div class="title02">
            <span>待办事处<p>7</p></span>
            <el-divider direction="vertical"></el-divider>
            <span>最新通知<p>8</p></span>
            <el-divider direction="vertical"></el-divider>
            <span>最新消息<p>2</p></span>
          </div>
        </div>

        <div class="body" style="width:100%;height:100%">

           <el-row :gutter="24">
             <el-col :span="12"><div class="left-top">
               <el-row :gutter="20">
                 <el-col :span="5"><div class="grid-content"><i class="el-icon-tickets"></i><span><b>最新通知</b></span></div></el-col>
                 <el-col :span="14"><div class="grid-content "><span>&nbsp;</span></div></el-col>
                 <el-col :span="1"><div class="grid-content "><span><el-button type="primary" plain>更多</el-button>
</span></div></el-col>
               </el-row><el-table
               :data="tableData"
               style="width: 100%">
               <el-table-column
                 prop="createTime"
                 label="时间"
                 width="150">
               </el-table-column>
               <el-table-column
                 prop="inform"
                 label="通知"
                 width="150">
               </el-table-column>
               <el-table-column
                 prop="name"
                 label="姓名"
                 width="180">
               </el-table-column>
             </el-table>
             </div></el-col>
             <el-col :span="12"><div class="right-top">
               <el-row :gutter="20">
               <el-col :span="5"><div class="grid-content "><i class="el-icon-tickets"></i><span><b>最新通知</b></span></div></el-col>
               <el-col :span="14"><div class="grid-content "><span>&nbsp;</span></div></el-col>
               <el-col :span="1"><div class="grid-content "><span><el-button type="primary" plain>更多</el-button>
</span></div></el-col>
             </el-row>
               <el-table
                 :data="last"
                 style="width: 120%">
                 <el-table-column
                   prop="createTime"
                   label="时间"
                   width="140">
                 </el-table-column>
                 <el-table-column
                   prop="information"
                   label="订单信息"
                   width="340">
                 </el-table-column>
               </el-table></div></el-col>
           </el-row>
           <el-row :gutter="22">
             <el-col :span="11"><div class="left-bottom">
               <el-col :span="5"><div class="grid-content ">
                 <i class="el-icon-tickets"></i><span><b>待办事项</b></span></div></el-col>

             </div></el-col>
             <el-col :span="11"><div class="right-bottom">
               <el-row :gutter="20">
                   <el-col :span="6"><div class="grid-content "><i class="el-icon-tickets"></i><span><b>最新汇率</b></span></div></el-col>
                   <el-col :span="5"><div class="grid-content "><span>&nbsp;</span></div></el-col>
                   <el-col :span="9"><div class="grid-content"><span>更新时间:2019-5-26</span></div></el-col>
                 </el-row>
                   <el-row>
                     <el-col :span="5"><div class="grid-content"><span style="border:1px solid #B3C0D1; padding:5px 15px 5px 5px; background: #B3C0D1">菲律宾比索</span></div></el-col>
                     <el-col :span="5"><div class="grid-content" ><span style="border:1px solid #B3C0D1;padding:5px 25px 5px 40px ">0.12</span></div></el-col>
                   </el-row>
             </div></el-col>
           </el-row>


        </div>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'InfoManage',
    data() {
      return {
        tableData: [{
          createTime: "2019-5-26",
          inform: "出团通知",
          name: "王毅"
        },],
        last: [
          {
            createTime: "2019-5-26",
            information: "三亚夏季5日游已经分配分销商：海南旅游网有限公司",
          },
          {
            createTime: "2019-5-26",
            information: "云南丽江夏季十日九夜精品游",
          },
          {
            createTime: "2019-5-26",
            information: "北京五日四夜夏季精品游已经分配分配商：北京国际旅游有限公司",
          },
          {
            createTime: "2019-5-26",
            information: "湖南长沙三日游已经分配分配商：湖南旅游集团有限公司",
          },
          {
            createTime: "2019-5-26",
            information: "四川七日夏季精品游",
          },
          {
            createTime: "2019-5-26",
            information: "四川七日夏季精品游",
          },
        ],

        methods: {
        }
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
  .top{
    display:flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
  }
  .title02{
   display:flex;

  }







  .title {
    text-align: left;
    font-size: 20px;
    margin-bottom: 15px;
    font-family: "Helvetica Neue";
    font-style: normal;


  }


  .el-col {
    border-radius: 4px;
  }
  .left- {
    position: relative;
    padding: 10px 10px 10px 10px;

  }
  .{
    margin-top: 5px;
    margin-bottom: 100px;
    padding: 10px 10px 10px 10px;

  }


  .el-main {

    color: #333;
    text-align: center;
    height:700px;
    margin-top:-60px ;
    background-color: white;
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


  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.body{
  margin-top: 10px;
  margin-left: 10px;

}
.left-top{
  height: 300px;
}
  .right-top{
    height: 400px;
  }
  .left-bottom{
    height: 150px;
    padding: 80px 0px 0px 0px;
  }
  .right-bottom{
    height: 150px;
    padding:60px 0px 0px 0px;
  }
.title04{
  display:flex;
  background:#000;

}



</style>
