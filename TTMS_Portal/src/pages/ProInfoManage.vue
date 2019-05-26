<template>
	<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main><div class="top"><p class="title" style="color:#B3C0D1">项目信息管理</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
  <el-breadcrumb-item>项目</el-breadcrumb-item>
  <el-breadcrumb-item>项目信息管理</el-breadcrumb-item>
  
</el-breadcrumb></div>
					<el-row :gutter="20">
						<el-col :span="3"><div class="grid-content "><el-input v-model="input1" placeholder="项目编号"></el-input></div></el-col>
						<el-col :span="3"><div class="grid-content "><el-input v-model="input2" placeholder="项目名称"></el-input></div></el-col>
						<el-col :span="4"><div class="grid-content "><el-select v-model="value" filterable placeholder="选择归属部门">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
  <el-col :span="5"><div class="grid-content ">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="起始日期">
    </el-date-picker>
  </div></el-col>
   <el-col :span="5"><div class="grid-content ">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="终止日期">
    </el-date-picker>
  </div></el-col>
						<el-col :span="3"><div class="grid-content "><el-select v-model="value" placeholder="选择状态">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
						
		
					</el-row>
					<div class="Search"><el-button type="primary">查询</el-button>
						<el-button type="primary" @click="addProject(scope.$index, scope.row)">新增</el-button></div>
						<!-- @click="addProject(scope.$index, scope.row)" -->
					</div>
					<div class="body">
						<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
	  prop="id"
      label="项目编号"
      width="210">
    </el-table-column>
	<el-table-column
	  prop="name"
	  label="项目名称"
	  width="140">
	</el-table-column>
	<el-table-column
	  prop="department"
	  label="归属部门"
	  width="100">
	</el-table-column>
    <el-table-column
	prop="start"
      label="开始日期"
      width="100">
    </el-table-column>
	<el-table-column
	prop="end"
	  label="结束日期"
	  width="100">
	</el-table-column>
	<el-table-column
	prop="status"
	  label="状态"
	  width="60">
	  <template scope="scope">
		<span v-if="scope.row.status==='启用'" style="color: green">启用</span>
		<span v-else style="color: red">禁用</span>
	</template>
	</el-table-column>
	<el-table-column
	  label="备注"
	  prop="comment"
	  width="220">
	</el-table-column>
    <el-table-column label="操作">
		
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
          size="mini"
           v-if="scope.row.status == '启用'"
          >禁用</el-button>
		  <el-button
		    size="mini"
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
</el-container>
</template>

<script>
export default {
	name: 'ProInfoManage',
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
			 tableData: [{
				 id:'TPCN-CHN-20170605-XA-11',
				 name:'西安，清风唐韵',
				 department:'华中部',
				 start:'2019-5-26',
				 end:'2019-5-31',
				 status:'启用',
				 comment:'西安，清风唐韵的项目',
        }, {
          id:'TPCN-CHN-20170605-XA-11',
          name:'西安，清风唐韵',
          department:'日韩部',
          start:'2019-5-26',
          end:'2019-5-31',
          status:'禁用',
          comment:'西安，清风唐韵的项目',
        }, {
         id:'TPCN-CHN-20170605-XA-11',
         name:'西安，清风唐韵',
         department:'华中部',
         start:'2019-5-26',
         end:'2019-5-31',
         status:'禁用',
         comment:'西安，清风唐韵的项目',
        }, {
          id:'TPCN-CHN-20170605-XA-11',
          name:'西安，清风唐韵',
          department:'华中部',
          start:'2019-5-26',
          end:'2019-5-31',
          status:'启用',
          comment:'西安，清风唐韵的项目',
        },
		{
		  id:'TPCN-CHN-20170605-XA-11',
		  name:'西安，清风唐韵',
		  department:'日韩部',
		  start:'2019-5-26',
		  end:'2019-5-31',
		  status:'禁用',
		  comment:'西安，清风唐韵的项目',
		}, {
		 id:'TPCN-CHN-20170605-XA-11',
		 name:'西安，清风唐韵',
		 department:'华中部',
		 start:'2019-5-26',
		 end:'2019-5-31',
		 status:'启用',
		 comment:'西安，清风唐韵的项目',
		},{
		 id:'TPCN-CHN-20170605-XA-11',
		 name:'西安，清风唐韵',
		 department:'西南部',
		 start:'2019-5-26',
		 end:'2019-5-31',
		 status:'禁用',
		 comment:'西安，清风唐韵的项目',
		},{
		 id:'TPCN-CHN-20170605-XA-11',
		 name:'西安，清风唐韵',
		 department:'日韩部',
		 start:'2019-5-26',
		 end:'2019-5-31',
		 status:'禁用',
		 comment:'西安，清风唐韵的项目',
		}],
			input1: '',
			input2: '',
			options1: [{
          value: '选项1',
          label: '华中部'
        }, {
          value: '选项2',
          label: '东北部'
        }, {
          value: '选项3',
          label: '东南部'
        }, {
          value: '选项4',
          label: '欧美部'
        }, {
          value: '选项5',
          label: '日韩部'
        },
		{
		  value: '选项5',
		  label: '西南部'
		}],
        value: '',
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
		 addProject(index, row){
		    this.$router.push({ path: "addProject"})
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
.Search{
	margin-top: 10px;
	  margin-left: 860px;
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
  	background:#E9EEF3;
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
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
	height:700px;
	
	position: fixed;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
	height:700px;
	margin-left: 200px;
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
