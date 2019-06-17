<template>
  <el-container>
    <el-main>
      <div class="enroll">
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><el-button  class="primary" icon="el-icon-caret-left" @click="goback">返回上一页</el-button></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><h1 style="float:right;font-size: 30px;">附件下载页面</h1></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
        </el-row>
      </div>
      <div class="body" style="width:100%;height:100%">
        <div class="body-upside" style="width:100%;height:30%">
          <el-row :gutter="24">
            <el-col :span="10">
              <div class="">
                <div class="title01">
                  <b>产品编号：</b>
                  <span>&nbsp;&nbsp;&nbsp;{{curProduct.ProductID}}</span></div>
                <div class="title01">
                  <b>产品负责人:</b>
                  <span>&nbsp;&nbsp;&nbsp;{{curProduct.createuser}}</span></div>
                <div class="title01">
                  <b>价格信息：</b>
                  <span>&nbsp;&nbsp;&nbsp;{{curProduct.price}}</span></div>
              </div>
            </el-col>
            <el-col :span="14">
              <div class=" ">
                <div class="title01">
                  <b>产品名称:</b>
                  <span>&nbsp;&nbsp;&nbsp;{{curProduct.Pname}}</span></div>
                <div class="title01">
                  <b>服务日期：</b>
                  <span>&nbsp;&nbsp;&nbsp;{{new Date(curProduct.start).format("yyyy-MM-dd")}}~{{new Date(curProduct.end).format("yyyy-MM-dd")}}</span></div>
                <div class="title01">
                  <b>状态：</b>
                  <span>{{curProduct.status}}</span>
                 <!-- <span v-if="curProduct.status == 0">&nbsp;&nbsp;&nbsp;待售</span>
                  <span v-if="curProduct.status == 1">&nbsp;&nbsp;&nbsp;上架</span>
                  <span v-if="curProduct.status == 2">&nbsp;&nbsp;&nbsp;下架</span>--></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="body-bottom" style="width:100%;height:70%;">
          <div class="kk">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="Title" label="标题" width="250"></el-table-column>
              <el-table-column prop="FileName" label="文件名" width="200"></el-table-column>
              <el-table-column prop="UploadData" label="上传时间" width="200"></el-table-column>
              <el-table-column prop="UploadUser" label="上传用户" width="200"></el-table-column>
              <el-table-column label="操作" align="center" min-width="100">
                <template slot-scope="scope">　　　　　　
                  <el-button type="danger" @click="downloadfile(scope.row)">下载</el-button>
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
        tableData: [],

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
        formLabelWidth: '120px',
        curProduct: {},   //当前产品
        fileList: [],
      }
    },
    methods:{
    deleteUser(val){
      console.log(val)
    },
    handleRemove(file, fileList){
      console.log(file, fileList);
    },
    handlePreview(file){
      console.log(file);
    },
    handleExceed(files, fileList){
      this.$message.warning('当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件');
    },
    beforeRemove(file, fileList){
      return this.$confirm('确定移除 ${ file.name }？');
    },
    loadCurrentProject(){
      var localProduct = localStorage.getItem("signItem");
      this.curProduct = JSON.parse(localProduct);
    },
    loadAttachments(){
      this.$http.get("/distributorEntry/allAttachment/"+this.curProduct.id).then(resp=>{
        // {
        //   Title: "附件1",
        //     FileName: "sql.txt",
        //   UploadData: "2019-6-31",
        //   UploadUser: "王毅",
        // }
        //{id: 2, filename: "文件2", productId: 2, attachmenttitle: "附件2", invalid: 1}
        this.tableData = [];
        resp.data.forEach(item=>{
          var i = {};
          i.id = item.id;
          i.Title = item.attachmenttitle;
          i.FileName = item.filename;
          i.UploadData = new Date(item.uploadtime).format("yyyy-MM-dd hh:mm:ss");
          i.valid = item.invalid;
          i.UploadUser = item.username;
          this.tableData.push(i);
        })
      }).catch(error=>{

      })
    },
     goback(){
       this.$router.push("/DistributorEntry/DistributorInterface");
     },
      downloadfile(row){
        var downloadElement = document.createElement('a');
        var href = this.$http.defaults.baseURL+"/download/" + row.id; //创建下载的链接
        downloadElement.href = href;
        downloadElement.download = row.filename; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
      }
  },
    created(){
      //加载当前产品
      this.loadCurrentProject();
      //加载所有附件
      this.loadAttachments();
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

