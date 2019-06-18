<template>
  <el-container>

    <el-container>
      <el-main>
        <div class="top">
          <div class="title03">
            <p class="title" style="color:#B3C0D1">信息面板</p>
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
                 <el-col :span="5"><div class="grid-content"><i class="el-icon-tickets"></i><span><b>您的通知</b></span></div></el-col>
                 <el-col :span="14"><div class="grid-content "><span>&nbsp;</span></div></el-col>
                 <el-col :span="1"><div class="grid-content "><span><el-button type="primary" plain v-show="tableData.length == 6">更多</el-button>
</span></div></el-col>
               </el-row>
               <el-table
               :data="tableData"
               style="width: 100%">
               <el-table-column
                 prop="title"
                 label="通知标题"
                 width="150">
               </el-table-column>
               <el-table-column
                 prop="content"
                 label="通知内容"
                 width="250">
               </el-table-column>
               <el-table-column
                 prop="publishTime"
                 label="时间"
                 width="150">
               </el-table-column>
             </el-table>
             </div></el-col>
             <el-col :span="12"><div class="right-top">
               <el-row :gutter="20">
               <el-col :span="5"><div class="grid-content "><i class="el-icon-tickets"></i><span><b>最新消息</b></span></div></el-col>
               <el-col :span="14"><div class="grid-content "><span>&nbsp;</span></div></el-col>
               <el-col :span="1"><div class="grid-content "><span><el-button type="primary" plain v-show="last.length ==  6">更多</el-button>
</span></div></el-col>
             </el-row>
               <el-table
                 :data="last"
                 style="width: 120%">
                 <el-table-column
                   prop="title"
                   label="标题"
                   width="100">
                 </el-table-column>
                 <el-table-column
                   prop="info"
                   label="消息"
                   width="300">
                 </el-table-column>
                 <el-table-column
                   prop="publishTime"
                   label="发布时间"
                   width="140">
                 </el-table-column>
               </el-table>
             </div></el-col>
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
        tableData: [],  //我的通知
        last: [],         //最新系统消息
      }
    },
    methods: {
      loadYourNotify(){
        this.tableData=[];
        this.$http.get("/messagePanel/ofme").then(resp=>{
          resp.data.forEach(item=>{
            var temp={};
            temp.title = item.messagetitle ;
            temp.content =item.messagecontent;
            temp.publishTime = new Date(item.sendtime).format("yyyy-MM-dd hh:mm:ss");
            this.tableData.push(temp);
          })
        }).catch(error=>{
          this.$message.error(error.message);
        })
      },
      loadSystemMessage(){
        this.last = [];
        this.$http.get("/messagePanel/querynewsbysize").then(resp=>{
          resp.data.forEach(item=>{
            var temp={};
            temp.title = item.messagetitle ;
            temp.info =item.messagecontent.substring(0,10)+(item.messagecontent.length<10?"":"...");
            temp.publishTime = new Date(item.sendtime).format("yyyy-MM-dd hh:mm:ss");
            this.last.push(temp);
          })
        }).catch(error=>{
          this.$message.error(error.message);
        })
      }
    },
    created(){
      //加载面板上的一些消息
      this.loadYourNotify();
      this.loadSystemMessage();
    }
  };




</script>

<style>

  .top{
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
  }
  .title02{
   display:flex;

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

.title04{
  display:flex;
  background:#000;

}



</style>
