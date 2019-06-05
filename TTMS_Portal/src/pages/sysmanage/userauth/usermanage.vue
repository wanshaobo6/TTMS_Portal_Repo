<template>
	<el-container>

  <el-container>

    <el-main><div class="top"><p class="title" style="color:#B3C0D1">用户信息管理</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">信息管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户</el-breadcrumb-item>
  <el-breadcrumb-item>用户信息管理</el-breadcrumb-item>
  
</el-breadcrumb></div>
					<el-row :gutter="20">
						
						<el-col :span="4"><div class="grid-content "><el-input v-model="name" placeholder="用户名"></el-input>
</div></el-col>
						<el-col :span="2"><el-button type="primary">查询</el-button><div class="grid-content "></div></el-col>
						 <el-col :span="2"><div class="grid-content ">
               <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

               <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                 <el-form :model="form" >
                   <el-form-item label="用户名:" :rules="[
							  { required: true },]">
                     <el-input v-model="form.id" placeholder="登录账号"></el-input>
                   </el-form-item>
                   <el-form-item label="密码:" :rules="[
							  { required: true },]">
                     <el-input v-model="form.password" placeholder="密码"></el-input>
                   </el-form-item>
                   <el-form-item label="邮箱:">
                     <el-input v-model="form.email" placeholder="邮箱"></el-input>
                   </el-form-item>
                   <el-form-item label="手机号:" :rules="[
											  { required: true },]">
                     <el-input v-model="form.phoneNum" placeholder="手机号"></el-input>
                   </el-form-item>
                   <el-form-item label="角色:">
                     <div class="roles"><el-checkbox-group
                       v-model="checkedRoles"
                       :min="1"
                       :max="2">
                       <el-checkbox v-for="role in roles" :label="role" :key="role">{{role}}</el-checkbox>
                     </el-checkbox-group></div>
                   </el-form-item>

                 </el-form>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogFormVisible = false">取 消</el-button>
                   <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                 </div>
               </el-dialog>
               </div></el-col>
						<el-col :span="2"><el-button type="primary">修改</el-button><div class="grid-content "></div></el-col>
					</el-row></div>
					<div class="body">
						<el-table
    :data="tableData" 
         @row-click = "showRow"

    border
    style="width: 100%">
	<el-table-column label="选择" width="80" align="center">
    <template slot-scope="scope">
      <el-radio class="radio"  v-model="radio"  :label="scope.$index">&nbsp;</el-radio>
   </template>
</el-table-column> 

    <el-table-column
      prop="username"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="230">
    </el-table-column>
    <el-table-column
      prop="phoneNum"
      label="手机号"
	  width="180">
    </el-table-column>
	<el-table-column
	  prop="status"
	  label="状态"
	  width="165">
	   <template slot-scope="scope">
	  	<span v-if="scope.row.status=='1'" style="color: green">启用</span>
	  	<span v-else style="color: red">禁用</span>
	  </template>
	</el-table-column>
	<!-- <el-table-column label="状态" width="180">
	  <template slot-scope="scope">
	    <el-button
	      size="mini"
	      type="success"
	      @click="handleEdit(scope.$index, scope.row)">启用</el-button>
	  </template>
	</el-table-column> -->
	<el-table-column label="操作" width="180">
      <template slot-scope="scope">
		  <el-button
		    size="mini"
		    type="danger" v-if="scope.row.status == '1'"
		    @click="profit(scope.row)" >禁用</el-button>
		    <el-button
		      size="mini"
		      type="success"
		      v-else @click="enable(scope.row)">启用</el-button>
      </template>
    </el-table-column>
  </el-table>
						
						
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15]"
      :page-size="50"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  </div>
  
  </el-main>
  </el-container>
</el-container>
</template>

<script>
	const roleOptions = ['系统管理员', '产品经理', '团负责人'];
export default {
	name: 'UserManage',
	data() {
		return {
			 checkedRoles: ['系统管理员', '产品经理'],
        roles: roleOptions,
			dialogFormVisible: false,
			form: {
				id:'',
			  password:'',
			  email:'',
			  phoneNum:'',
			  region: '',
			  date1: '',
			  date2: '',
			  delivery: false,
			  type: [],
			  resource: '',
			  desc: ''
			},
			formLabelWidth: '120px',
			tableData: [],
		multipleSelection: [],
				radio: '',
				selected:{},
			name: '',
		currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        page:1,
        total:0,
        rows:5,
		};
	},
  created(){
	  this.name==null ? "" : this.name;
    // 在页面加载前获取数据
    this.loadData();
  },
  watch:{
	  rows:{
      handler:function(){
        this.loadData();
      },
      deep:true
    },
    page:{
      handler:function(){
        this.loadData();
      },
      deep:true
    },
    name:{
	    deep:true,
      handler:function () {
        this.loadData();
      }
    }

  },
	methods: {
	  //禁用用户
    profit(user){
      console.log(user.id);
      this.$http.put("/sysmanage/userauth/usermanage/valid/"+user.id).then(

      ).catch(
        error=>{
        alert(error.message);
      })
    },
      enable(user){
        console.log(user.id);
        this.$http.put("/sysmanage/userauth/usermanage/valid/"+user.id).then(

        ).catch(
          error=>{
            alert(error.message);
          });
      },
    loadData(){
      this.$http.get("/sysmanage/userauth/usermanage/page",{
        params:{
          name : this.name,
          page : this.page,
          rows: this.rows
        }
      }).then(resp=>{
        this.total=resp.data.total;
        let datas=[];
          resp.data.items.forEach(e=>{
              var data = {};
            data.id=e.id;
            data.username=e.username;
            data.status=e.valid;
            data.email=e.email;
            data.phoneNum=e.mobile;
            datas.push(data);
          });
        this.tableData = datas;
      }).catch(error=>{
        //alert(error.message);
      })
    },
		showRow(row){
	//赋值给radio
	this.radio = this.tableData.indexOf(row);
	this.selected=row;
},
handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleClick(row) {
        console.log(row);
      },
	  handleSizeChange(val) {
      this.rows=val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
      this.page=val;
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<style>
	html,body {
	
	            overflow:hidden;
	
	            margin:0px;
	
	            width:100%;
	
	            height:100%;
	
	        }

  .roles{
	  float: left;
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
 .page{
	 position: relative;
     padding-top: 20px;
 } 
  .body{
	  margin-top: 5px;
	  margin-bottom: 100px;
	  padding: 10px 0 30px;
  }

  
  .el-main {
    background-color: #E9EEF3;
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
