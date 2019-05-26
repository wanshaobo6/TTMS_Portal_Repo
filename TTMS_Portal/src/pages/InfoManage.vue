<template>
	<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main><div class="top"><p class="title" style="color:#B3C0D1">通知管理</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">消息中心</el-breadcrumb-item>
  <el-breadcrumb-item>通知管理</el-breadcrumb-item>
  <el-breadcrumb-item>通知管理</el-breadcrumb-item>
  
</el-breadcrumb></div>
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content "><el-select v-model="value" placeholder="选择分类">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div>
						</el-col>
						<el-col :span="4"><div class="grid-content "><el-input v-model="input1" placeholder="标题"></el-input>
</div></el-col>
						<el-col :span="5"><div class="grid-content "><div class="block">
   
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="起始日期">
    </el-date-picker>
  </div></div></el-col>
						<el-col :span="5"><div class="block">
   
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="结束日期">
    </el-date-picker>
  </div><div class="grid-content "></div></el-col>
						<el-col :span="4"><el-input v-model="input2" placeholder="发布人"></el-input><div class="grid-content "></div></el-col>
						<el-col :span="1"><el-button type="primary">查询</el-button><div class="grid-content "></div></el-col>
					</el-row></div>
					<div class="body"><el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="number"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="分类"
      width="120">
    </el-table-column>
	<el-table-column
	  prop="title"
	  label="标题"
	  width="420">
	</el-table-column>
	<el-table-column
	  prop="name"
	  label="发送人"
	  width="100">
	</el-table-column>
	<el-table-column
	  prop="name"
	  label="发送部门"
	  width="100">
	</el-table-column>
	<el-table-column
	  prop="date"
	  label="发送时间"
	  width="150">
	</el-table-column>
	<el-table-column
	  prop="public"
	  label="发布"
	  width="50">
	</el-table-column>
    <el-table-column
      prop="operation"
      label="操作">
	  <template slot-scope="scope">
         <el-button
          size="mini"
          type="text" v-if="scope.row.public == '是'"
          >撤回</el-button>
          <el-button
            size="mini"
            type="text"
            v-else>修改 发布</el-button>
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
	name: 'InfoManage',
	data() {
		return {
			options: [{
			  value: '选项1',
			  label: '一级分类'
			}, {
			  value: '选项2',
			  label: '二级分类'
			}, {
			  value: '选项3',
			  label: '三级分类'
			}, ],
			value: '',
			input1: '',
			input2: '',
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
          number: '23',
		  date:'2019-5-26',
          name: '李云飞',
		  public:'是',
		  title:'放暑假过后金安国纪啊好久卡好久',
        }, {
          number: '23',
          name: '李云飞',
		  date:'2019-5-26',
		  public:'是',
		  title:'放暑假过后金安国纪啊好久卡好久',
        }, {
          number: '23',
          name: '李云飞',
		  date:'2019-5-26',
		  public:'是',
		  title:'放暑假过后金安国纪啊好久卡好久',
        }, {
          number: '23',
          name: '李云飞',
		  date:'2019-5-26',
		  title:'放暑假过后金安国纪啊好久卡好久',
		  public:'是',
        },
		{
		  number: '34',
		  name: '万少波',
		  date:'2019-5-26',
		  title:'交的话国际快递好几十块',
		  public:'否',
		},
		{
		  number: '34',
		  name: '万少波',
		  date:'2019-5-26',
		  title:'交的话国际快递好几十块',
		  public:'否',
		},
		{
		  number: '34',
		  name: '万少波',
		  date:'2019-5-26',
		  title:'交的话国际快递好几十块',
		  public:'否',
		},
		{
		  number: '54',
		  name: '欧阳文丽',
		  date:'2019-5-26',
		  title:'富商大贾环境就开始倒计时肯定会',
		  public:'否',
		},
		{
		  number: '54',
		  name: '欧阳文丽',
		  date:'2019-5-26',
		  title:'富商大贾环境就开始倒计时肯定会',
		  public:'否',
		},
		{
		  number: '54',
		  name: '欧阳文丽',
		  date:'2019-5-26',
		  title:'富商大贾环境就开始倒计时肯定会',
		  public:'否',
		}],
		currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
		};
	},
	methods: {
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
