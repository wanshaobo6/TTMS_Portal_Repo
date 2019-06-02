<template>
	<el-container>
  <el-container>

    <el-main>
      <div class="top">
					<el-row :gutter="20">
						<el-col :span="3"><div class="grid-content "><el-input v-model="groupName" placeholder="团名称"></el-input></div></el-col>
						<el-col :span="3"><div class="grid-content "><el-input v-model="projectName" placeholder="项目名称"></el-input></div></el-col>
						<el-col :span="3"><div class="grid-content "><el-select v-model="valid" placeholder="选择状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
  </el-select></div></el-col>
  <el-col :span="2"><div class="grid-content Search"><el-button type="success">查询</el-button></div></el-col>
  <el-col :span="2"><div class="grid-content "><el-button type="success" @click="dialogFormVisible = true">新增</el-button>

<el-dialog title="创建团" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="团名称" :label-width="formLabelWidth" :rules="[
	  { required: true },]">
      <el-input v-model="form.name" autocomplete="off" placeholder="请输入团名称"></el-input>
    </el-form-item>
    <el-form-item label="所属项目" :label-width="formLabelWidth" :rules="[
	  { required: true },]">
      <div class="choose">
		  <el-select v-model="form.region">
        <el-option label="西安 清风唐韵" value="shanghai"></el-option>
        <el-option label="哈尔滨旅游团" value="beijing"></el-option>
      </el-select></div>
    </el-form-item>
	<el-form-item label="团号说明" :label-width="formLabelWidth">
    <el-input type="textarea" v-model="form.desc" ></el-input>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog></div></el-col>
					</el-row>
						
					</div>
					<div class="body">
						<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
	  prop="name"
      label="团名称"
      width="200">
    </el-table-column>
	<el-table-column
	  prop="project"
	  label="所属项目"
	  width="150">
	</el-table-column>
    <el-table-column
	prop="principal"
      label="负责人"
      width="70">
    </el-table-column>
	<el-table-column
	prop="phone"
	  label="负责人联系方式"
	  width="130">
	</el-table-column>
	<el-table-column
	prop="explain"
	  label="团号说明"
	  width="200">
	</el-table-column>
	<el-table-column
	prop="status"
	  label="状态"
	  width="60">
	  <template slot-scope="scope">
		<span v-if="scope.row.status==='启用'" style="color: green">启用</span>
		<span v-else style="color: red">禁用</span>
	</template>
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
</el-container>
</template>

<script>
export default {
	name: 'GroupManage',
	data() {
		return {
			dialogFormVisible: false,
        form: {
		    	id:'',
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
			 tableData: [{
				 name:'20170605西安四天三夜游团',
				 project:'西安 清风唐韵',
				 principal:'李梅',
				 phone:'18778876545',
				 explain:'20170605西安四天三夜游团',
				 status:'启用',
        }, {
           name:'20170605西安四天三夜游团',
          project:'西安 清风唐韵',
          principal:'李梅',
          phone:'18778876545',
          explain:'20170605西安四天三夜游团',
          status:'启用',
        }, {
          name:'20170605西安四天三夜游团',
         project:'西安 清风唐韵',
         principal:'李梅',
         phone:'18778876545',
         explain:'20170605西安四天三夜游团',
         status:'启用',
        }, {
           name:'20170605西安四天三夜游团',
          project:'西安 清风唐韵',
          principal:'李梅',
          phone:'18778876545',
          explain:'20170605西安四天三夜游团',
          status:'禁用',
        },
		{
		   name:'20170605西安四天三夜游团',
		  project:'西安 清风唐韵',
		  principal:'李梅',
		  phone:'18778876545',
		  explain:'20170605西安四天三夜游团',
		  status:'启用',
		}, {
		  name:'20170605西安四天三夜游团',
		 project:'西安 清风唐韵',
		 principal:'李梅',
		 phone:'18778876545',
		 explain:'20170605西安四天三夜游团',
		 status:'禁用',
		},{
		  name:'20170605西安四天三夜游团',
		 project:'西安 清风唐韵',
		 principal:'李梅',
		 phone:'18778876545',
		 explain:'20170605西安四天三夜游团',
		 status:'禁用',
		},{
		 name:'20170605西安四天三夜游团',
		project:'西安 清风唐韵',
		principal:'李梅',
		phone:'18778876545',
		explain:'20170605西安四天三夜游团',
		status:'启用',
		}],
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
     options: [{
      value: '1',
      label: '启用'
    }, {
      value: '0',
      label: '禁用'
    },],
      groupName:"",
      projectName:"",
      valid:"",
      currentPage: 4,  //当前页
      rows:5,    //每页大小
      totalItem : 20,   //总条数
		};
	},
  created(){
    //this.loadData();
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
      this.loadData();
    },
    handleCurrentChange(val) {
      this.loadData();
    },
    loadData(){
      this.$http.get("/producemanage/project/projectinfomanage/page" , {
         groupName : this.groupName  ,
        projectName: this.projectName,
        valid :this.valid,
        page : this.currentPage,
        rows:this.rows
      }).then(data => {
          //成功
        console.log(data);
      }).catch(error =>{

      });
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
.choose{
		float: left;
	}
.Search{
	float: right;
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
</style>
