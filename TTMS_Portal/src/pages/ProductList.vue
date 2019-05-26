<template>
	<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main><div class="top"><p class="title" style="color:#B3C0D1">产品列表</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
  <el-breadcrumb-item>产品</el-breadcrumb-item>
  <el-breadcrumb-item>产品列表</el-breadcrumb-item>
</el-breadcrumb></div>
					<div class="firstRow">
						<el-row :gutter="20">
												<el-col :span="3"><div class="grid-content "><el-select v-model="value" placeholder="状态">
						  <el-option
						    v-for="item in options"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value">
						  </el-option>
						</el-select></div></el-col>
						<el-col :span="3"><div class="grid-content "><el-select v-model="value" placeholder="一级分类">
						  <el-option
						    v-for="item in options1"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value">
						  </el-option>
						</el-select></div></el-col>
						<el-col :span="3"><div class="grid-content "><el-select v-model="value" placeholder="二级分类">
						  <el-option
						    v-for="item in options2"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value">
						  </el-option>
						</el-select></div></el-col>
						<el-col :span="3"><div class="grid-content "><el-select v-model="value" placeholder="三级分类">
						  <el-option
						    v-for="item in options3"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value">
						  </el-option>
						</el-select></div></el-col>
												<el-col :span="4"><div class="grid-content "><el-input v-model="input2" placeholder="项目名称"></el-input></div></el-col>
												
												<el-col :span="4"><div class="grid-content "><el-input v-model="input3" placeholder="产品编号"></el-input></div></el-col>
												</el-row>
					</div>
						
						<div class="secondRow">
							<el-row :gutter="20">
						<el-col :span="5"><div class="grid-content "> <div class="block">
    
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div></div></el-col>
						<el-col :span="5"><div class="grid-content "><div class="block">
    
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div></div></el-col>
  <el-col :span="2"><el-button type="primary">查询</el-button></el-col>
						<el-col :span="2"><el-button type="primary">查询</el-button></el-col>
						<el-col :span="2"><el-button type="success">修改</el-button></el-col>
						<el-col :span="2"><el-button >待售</el-button></el-col>
						<el-col :span="2"><el-button >上架</el-button></el-col>
						<el-col :span="2"><el-button >下架</el-button></el-col>
					</el-row></div>
					 <div class="thirdRow">
						 <el-row :gutter="20">
						 							<el-col :span="3"><div class="grid-content "><el-button type="warning">库存分销</el-button></div></el-col>
						 	<el-col :span="3"><div class="grid-content "><el-button type="info">价格政策</el-button></div></el-col>
							<el-col :span="2"><div class="grid-content "><el-button type="primary">附件</el-button></div></el-col>
							<el-col :span="3"><div class="grid-content "><el-button type="info">导游信息</el-button></div></el-col>
							<el-col :span="3"><div class="grid-content "><el-button type="info">行程设置</el-button></div></el-col>
						 							</el-row>
						 </div>
					 </div>
					 </div>
					<div class="body">
						<el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="30">
    </el-table-column>
    <el-table-column
      prop="classify"
      label="类别"
      width="120">
    </el-table-column>
	<el-table-column
	  prop="project"
	  label="所属项目"
	  width="120">
	</el-table-column>
	<el-table-column
	  prop="Tname"
	  label="团名称"
	  width="120">
	</el-table-column>
	<el-table-column
	  prop="ProductID"
	  label="产品编号"
	  width="150">
	</el-table-column>
	<el-table-column
	  prop="Pname"
	  label="产品名称"
	  width="120">
	</el-table-column>
	<el-table-column
	  prop="start"
	  label="服务开始时间"
	  width="100">
	</el-table-column>
	<el-table-column
	  prop="end"
	  label="服务结束时间"
	  width="100">
	</el-table-column>
	<el-table-column
	  prop="pre"
	  label="预"
	  width="40">
	</el-table-column>
	<el-table-column
	  prop="already"
	  label="已"
	  width="40">
	</el-table-column>
	<el-table-column
	  prop="remain"
	  label="余"
	  width="40">
	</el-table-column>
	<el-table-column
	  prop="price"
	  label="产品价格"
	  width="60">
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
	name: 'ProductList',
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
			  label: '待售'
			}, {
			  value: '选项2',
			  label: '上架'
			}, {
			  value: '选项3',
			  label: '下架'
			},  ],
			options1: [{
			  value: '选项1',
			  label: '公司'
			}, {
			  value: '选项2',
			  label: '公司的符合'
			}, {
			  value: '选项3',
			  label: '图集推荐'
			},  ],
			options2: [{
			  value: '选项1',
			  label: '嗯嗯好'
			}, {
			  value: '选项2',
			  label: '计划公开'
			}, {
			  value: '选项3',
			  label: '二维表'
			},  ],
			options3: [{
			  value: '选项1',
			  label: '双方的'
			}, {
			  value: '选项2',
			  label: '发挥好'
			}, {
			  value: '选项3',
			  label: '不方便'
			},  ],
			value: '',
			input1: '',
			input2: '',
			input3: '',
			 
		currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
		tableData: [{
			status:'待售',
			classify:'国内游-东北部-哈尔滨',
			project:'哈尔滨灯节冬季项目',
			Tname:'杭州五日游团',
			ProductID:'TPCN-CHN-2017207-HBR-10-001',
			Pname:'20171216哈尔滨灯节豪华游',
			start:'2019-5-26',
			end:'2019-5-31',
			pre:'30',
			already:'0',
			remain:'30',
			price:'3000',
			
        }, {
          status:'待售',
          classify:'国内游-东北部-哈尔滨',
          project:'哈尔滨灯节冬季项目',
          Tname:'杭州五日游团',
          ProductID:'TPCN-CHN-2017207-HBR-10-001',
          Pname:'20171216哈尔滨灯节豪华游',
          start:'2019-5-26',
          end:'2019-5-31',
          pre:'30',
          already:'0',
          remain:'30',
          price:'3000',
        }, {
          status:'待售',
          classify:'国内游-东北部-哈尔滨',
          project:'哈尔滨灯节冬季项目',
          Tname:'杭州五日游团',
          ProductID:'TPCN-CHN-2017207-HBR-10-001',
          Pname:'20171216哈尔滨灯节豪华游',
          start:'2019-5-26',
          end:'2019-5-31',
          pre:'30',
          already:'0',
          remain:'30',
          price:'3000',
        }
		, {
		  status:'待售',
		  classify:'国内游-东北部-哈尔滨',
		  project:'哈尔滨灯节冬季项目',
		  Tname:'杭州五日游团',
		  ProductID:'TPCN-CHN-2017207-HBR-10-001',
		  Pname:'20171216哈尔滨灯节豪华游',
		  start:'2019-5-26',
		  end:'2019-5-31',
		  pre:'30',
		  already:'0',
		  remain:'30',
		  price:'3000',
		}, {
			
         status:'待售',
         classify:'国内游-东北部-哈尔滨',
         project:'哈尔滨灯节冬季项目',
         Tname:'杭州五日游团',
         ProductID:'TPCN-CHN-2017207-HBR-10-001',
         Pname:'20171216哈尔滨灯节豪华游',
         start:'2019-5-26',
         end:'2019-5-31',
         pre:'30',
         already:'0',
         remain:'30',
         price:'3000',
        },
		 {
		 	
		  status:'待售',
		  classify:'国内游-东北部-哈尔滨',
		  project:'哈尔滨灯节冬季项目',
		  Tname:'杭州五日游团',
		  ProductID:'TPCN-CHN-2017207-HBR-10-001',
		  Pname:'20171216哈尔滨灯节豪华游',
		  start:'2019-5-26',
		  end:'2019-5-31',
		  pre:'30',
		  already:'0',
		  remain:'30',
		  price:'3000',
		 },
		 {
		 	
		  status:'待售',
		  classify:'国内游-东北部-哈尔滨',
		  project:'哈尔滨灯节冬季项目',
		  Tname:'杭州五日游团',
		  ProductID:'TPCN-CHN-2017207-HBR-10-001',
		  Pname:'20171216哈尔滨灯节豪华游',
		  start:'2019-5-26',
		  end:'2019-5-31',
		  pre:'30',
		  already:'0',
		  remain:'30',
		  price:'3000',
		 },
		 {
		 	
		  status:'待售',
		  classify:'国内游-东北部-哈尔滨',
		  project:'哈尔滨灯节冬季项目',
		  Tname:'杭州五日游团',
		  ProductID:'TPCN-CHN-2017207-HBR-10-001',
		  Pname:'20171216哈尔滨灯节豪华游',
		  start:'2019-5-26',
		  end:'2019-5-31',
		  pre:'30',
		  already:'0',
		  remain:'30',
		  price:'3000',
		 },
		 {
		 	
		  status:'待售',
		  classify:'国内游-东北部-哈尔滨',
		  project:'哈尔滨灯节冬季项目',
		  Tname:'杭州五日游团',
		  ProductID:'TPCN-CHN-2017207-HBR-10-001',
		  Pname:'20171216哈尔滨灯节豪华游',
		  start:'2019-5-26',
		  end:'2019-5-31',
		  pre:'30',
		  already:'0',
		  remain:'30',
		  price:'3000',
		 },],
		 
        multipleSelection: []
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
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
  .thirdRow{
	  margin-left: -10px;
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
  .el-row {
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 0;
    }
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
    
    background-color: #f9fafc;
  }
</style>
