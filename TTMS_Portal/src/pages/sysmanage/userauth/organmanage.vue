<template>
	<el-container>
    <el-main><div class="top"><p class="title" style="color:#B3C0D1">组织结构管理</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">机构管理</el-breadcrumb-item>
  <el-breadcrumb-item>组织机构信息管理</el-breadcrumb-item>
</el-breadcrumb></div>
					<el-row :gutter="20">
						<el-col :span="4"><div class="grid-content "><el-input v-model="input1" placeholder="国家名称"></el-input></div></el-col>
						<el-col :span="4"><div class="grid-content "><el-select v-model="value" placeholder="选择状态">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
						<el-col :span="4"><div class="grid-content "></div></el-col>
						<el-col :span="2"><div class="grid-content "><el-button type="primary">查询</el-button></div></el-col>
						<el-col :span="2"><div class="grid-content "><el-button type="primary">新增</el-button></div></el-col>
		
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
          type="danger" v-if="scope.row.status == '启用'"
          >禁用</el-button>
		  <el-button
		    size="mini"
		    type="success"
		    v-else>启用</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[50, 70, 90, 110]"
      :page-size="50"
      layout="total, sizes, prev, pager, next, jumper"
      :total="110">
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
			 tableData: [{
				 id:'6',
				 name:'行政部',
				 code:'EXEC',
				 status:'启用',
				 comment:'负责产品售后工作',
        }, {
           id:'6',
          name:'行政部',
          code:'EXEC',
          status:'启用',
          comment:'负责产品售后工作',
        }, {
           id:'6',
          name:'行政部',
          code:'EXEC',
          status:'禁用',
          comment:'负责产品售后工作',
        }, {
           id:'6',
          name:'行政部',
          code:'EXEC',
          status:'禁用',
          comment:'负责产品售后工作',
        },
		{
		   id:'6',
		  name:'行政部',
		  code:'EXEC',
		  status:'禁用',
		  comment:'负责产品售后工作',
		}, {
		   id:'6',
		  name:'行政部',
		  code:'EXEC',
		  status:'禁用',
		  comment:'负责产品售后工作',
		}],
			input1: '',
			options: [{
          value: '选项1',
          label: '启用'
        }, {
          value: '选项2',
          label: '禁用'
        },],
        value: '',
		currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
		};
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
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
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
