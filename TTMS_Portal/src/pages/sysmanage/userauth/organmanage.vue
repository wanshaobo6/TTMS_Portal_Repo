<template>
	<el-container>
    <el-main><div class="top"><p class="title" style="color:#B3C0D1">组织结构管理</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">机构管理</el-breadcrumb-item>
  <el-breadcrumb-item>组织机构信息管理</el-breadcrumb-item>
</el-breadcrumb></div>
					<el-row :gutter="20">
						<el-col :span="4"><div class="grid-content "><el-input v-model="departmentname" placeholder="机构名称"></el-input></div></el-col>
						<el-col :span="4"><div class="grid-content "><el-select v-model="valid" placeholder="选择状态">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
						<el-col :span="2"><el-button type="primary" @click="loadData()">查询</el-button></el-col>
						<el-col :span="2"><el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

              <el-dialog title="新增组织机构信息" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="机构编码:" :label-width="formLabelWidth" :rules="[
							  { required: true },]">
                    <el-input v-model="form.csbn" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="机构名称:" :label-width="formLabelWidth" :rules="[
							  { required: true },]">
                   <div class="left"> <el-select v-model="form.name" placeholder="请选择机构名称">
                      <el-option label="华东部" value="shanghai"></el-option>
                      <el-option label="华南部" value="beijing"></el-option>
                      <el-option label="欧美部" value="beijing"></el-option>
                    </el-select></div>
                  </el-form-item>
                  <el-form-item label="备注:" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </el-col>

					</el-row></div>
					<div class="body">
						<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
	  prop="id"
      label="机构ID"
      width="140">
    </el-table-column>
    <el-table-column
	prop="name"
      label="机构名称"
      width="140">
    </el-table-column>
	<el-table-column
	prop="code"
	  label="机构编码"
	  width="140">
	</el-table-column>
	<el-table-column
	prop="status"
	  label="状态"
	  width="100">
    <template slot-scope="scope">
      <span v-show="scope.row.status==1" style="color: green" >启用</span>
      <span v-show="scope.row.status!=1" style="color: red" >禁用</span>
    </template>
	</el-table-column>
	<el-table-column
	  label="备注"
	  prop="comment"
	  width="300">
	</el-table-column>
    <el-table-column label="操作">
		
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          v-show="scope.row.status==1"
          @click="changeStatus(scope.row)"
          >禁用</el-button>
		  <el-button
		    size="mini"
		    type="success"
        v-show="scope.row.status!=1"  @click="changeStatus(scope.row)">启用</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItem">
    </el-pagination>
  </div>
  </div>
  
  </el-main>
</el-container>
</template>

<script>
export default {
	name: 'OrganManage',
	data() {
		return {
      dialogFormVisible: false,
      form: {
        name: '',
        csbn: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
			 tableData: [],
			input1: '',
			options: [{
          value: '1',
          label: '启用'
        }, {
          value: '0',
          label: '禁用'
        },],
        value: '',
      departmentname:"",
      valid:"",
      currentPage: 1,  //当前页
      rows:5,    //每页大小
      totalItem : 20,
		};
	},
  created(){
    this.loadData();
  },
	methods: {
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
      this.rows= val;
      this.loadData();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.loadData();
      },
    loadData(){
      this.$http.get("/sysmanage/userauth/organmanage/page" , {
        params: {
          departmentname: this.departmentname,
          valid: this.valid,
          page: this.currentPage,
          rows: this.rows
        }
      }).then(resp => {
        //成功
        console.log(resp);
        this.totalItem = resp.data.total;
        var tables = [];
        resp.data.items.forEach(organItem => {
          var table = {};
          table.id= organItem.id,
            table.name=organItem.departmentname,
          table.status=organItem.valid,
          table.code=organItem.departmentcode,
          table.comment=organItem.note;
          tables.push(table);

        });
        this.tableData = tables;
      }).catch(error =>{
        alert(error.message);
      });
    },
    changeStatus(table) {
      this.$http.put("/sysmanage/userauth/organmanage/valid/" + table.id).then(resp => {
        this.tableData.filter(data =>{
          return data.id == table.id;
        })[0].status = !table.status
      }).catch(error => {
      })
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
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
	width: -webkit-fill-available;
	position:fixed; z-index:999999; top:0px;
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
  .left{
    float: left;
  }
 .page{
	 position: relative;
     padding-top: 20px;
 }
  .body{
	  margin-top: 5px;
	  margin-bottom: 10px;
	  padding: 10px 0 30px;
    height:600px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
	  height:700px;

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
