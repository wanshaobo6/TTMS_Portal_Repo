<template>
	<el-container>

  <el-container>

    <el-main><div class="top"><p class="title" style="color:#B3C0D1">角色信息管理</p>
					<div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">信息管理</el-breadcrumb-item>
  <el-breadcrumb-item>角色</el-breadcrumb-item>
  <el-breadcrumb-item>角色信息管理</el-breadcrumb-item>
  
</el-breadcrumb></div>
					<el-row :gutter="20">
						
						<el-col :span="5"><div class="grid-content "><el-input v-model="roleName" placeholder="角色名称"></el-input>
</div></el-col>
						<el-col :span="2"><el-button type="primary" @click="loadData()">查询</el-button><div class="grid-content "></div></el-col>
						 <el-col :span="2"><div class="grid-content ">
               <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

               <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
                 <el-form ref="form" :model="form" label-width="80px">
                   <el-form-item label="活动名称">
                     <el-input v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="备注">
                     <el-input v-model="form.comment"></el-input>
                   </el-form-item>
                   <el-form-item label="授权">
                     <el-tree
                       :data="data"
                       show-checkbox
                       node-key="id"
                       :default-expanded-keys="[2, 3]"
                       :default-checked-keys="[5]">
                     </el-tree>
                   </el-form-item>

                 </el-form>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogFormVisible = false">取 消</el-button>
                   <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                 </div>
               </el-dialog>
             </div></el-col>
						<el-col :span="2"><el-button type="primary">修改</el-button><div class="grid-content "></div></el-col>
						<el-col :span="2"><el-button type="primary">删除</el-button><div class="grid-content "></div></el-col>
					</el-row></div>
					<div class="body">
						<el-table
    :data="tableData" 
         @row-click = "showRow"
    style="width: 100%">
	<el-table-column label="选择" width="180" align="center">
    <template slot-scope="scope">
      <el-radio class="radio"  v-model="radio"  :label="scope.$index">&nbsp;</el-radio>
   </template>
</el-table-column> 

    <el-table-column
      prop="roleID"
      label="角色ID"
      width="270">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="270">
    </el-table-column>
    <el-table-column
      prop="comment"
      label="备注"
	  width="300">
    </el-table-column>
  </el-table>
						
						
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10,15,20]"
      :page-size="rows"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItem">
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
	name: 'RoleManage',
	data() {
		return {
      data: [{
        id: 1,
        label: '信息面板',
        children: [{
          id: 2,
          label: '信息面板',
          children: [{
            id: 3,
            label: '发布通知'
          }, {
            id: 4,
            label: '通知管理',
            disabled: true
          }]
        },]
      },
        {
          id: 5,
          label: '消息中心',
          children: [{
            id: 6,
            label: '通知管理',
            children: [{
              id: 7,
              label: '日志管理'
            }, ]
          },]
        },
        {
          id: 8,
          label: '产品管理',
          children: [{
            id: 9,
            label: '项目信息',
            children: [{
              id: 10,
              label: '新增'
            }, {
              id: 11,
              label: '启用',
              disabled: true
            },
              {
                id: 12,
                label: '禁用',
                disabled: true
              },
              {
                id: 13,
                label: '修改',
                disabled: true
              }]
          },
            {
              id: 14,
              label: '团号',
              children: [{
                id: 10,
                label: '团号管理'
              }]
            },
            {
              id: 15,
              label: '产品',
              children: [{
                id: 10,
                label: '创建产品'
              },{
                id: 10,
                label: '产品列表'
              },{
                id: 10,
                label: '产品分类'
              }]
            },
            {
              id: 14,
              label: '政策',
              children: [{
                id: 10,
                label: '价格政策'
              }]
            },
          ]
        },
        {
          id: 1,
          label: '销售订单',
          children: [{
            id: 3,
            label: '订单',
            children: [{
              id: 4,
              label: '订单管理'
            }, ]
          },]
        },
        {
          id: 1,
          label: '资源管理',
          children: [{
            id: 3,
            label: '信息面板',
            children: [{
              id: 4,
              label: '发布通知'
            }, {
              id: 5,
              label: '通知管理',
              disabled: true
            }]
          },]
        },
        {
          id: 1,
          label: '信息面板',
          children: [{
            id: 3,
            label: '信息面板',
            children: [{
              id: 4,
              label: '发布通知'
            }, {
              id: 5,
              label: '通知管理',
              disabled: true
            }]
          },]
        },
        {
          id: 1,
          label: '信息面板',
          children: [{
            id: 3,
            label: '信息面板',
            children: [{
              id: 4,
              label: '发布通知'
            }, {
              id: 5,
              label: '通知管理',
              disabled: true
            }]
          },]
        },
        {
          id: 1,
          label: '信息面板',
          children: [{
            id: 3,
            label: '信息面板',
            children: [{
              id: 4,
              label: '发布通知'
            }, {
              id: 5,
              label: '通知管理',
              disabled: true
            }]
          },]
        },
        {
          id: 1,
          label: '信息面板',
          children: [{
            id: 3,
            label: '信息面板',
            children: [{
              id: 4,
              label: '发布通知'
            }, {
              id: 5,
              label: '通知管理',
              disabled: true
            }]
          },]
        },

      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {
        name: '',
        comment:'',
      },
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
      roleName: '',
      totalItem:0,//总记录数
	  	currentPage: 1,//当前页
      rows:5 //页大小
		};
	},
  created(){
    //加载分页数据
    this.loadData();
  },
	methods: {
	  //加载分页数据
	  loadData(){
	    this.$http.get("/sysmanage/userauth/rolemanage/page",{
	      params:{
          name : this.roleName,
          page : this.currentPage,
          rows: this.rows
        }
      }).then(resp=>{
        this.totalItem = resp.data.total;
        var datas = [];
        resp.data.items.forEach(item=>{
           var data = {};
           data.roleID = item.id;
           data.roleName = item.name;
           data.comment = item.note;
           datas.push(data);
        });
        this.tableData = datas;
      }).catch(error=>{
          alert(error.message);
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
          this.rows = val;
          this.loadData();
      },
      handleCurrentChange(val) {
	       this.currentPage = val;
        this.loadData();
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
