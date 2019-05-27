<template>
	<div class="main">
		<div class="top">
			<h3>添加项目信息</h3>
		</div>
		<el-form ref="form" :model="form" label-width="100px">
		  <el-form-item label="项目编号:" :rules="[
      { required: true },]">
		    <el-input v-model="form.id" placeholder="TP性质-日期-国家地区-城市-序号"></el-input>
		  </el-form-item>
		   <el-form-item label="项目名称:" :rules="[
      { required: true },]">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  
		  <el-form-item label="日期:">
		    <el-col :span="11">
		      <el-date-picker type="date" placeholder="起始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
		    </el-col>
		    <el-col class="line" :span="2">-</el-col>
		    <el-col :span="11">
		      <el-date-picker type="date" placeholder="结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="归属部门:">
		    <div class="choose"><el-select v-model="form.region" placeholder="选择归属部门">
		      <el-option label="华中部" value="shanghai"></el-option>
		      <el-option label="东北部" value="beijing"></el-option>
			  <el-option label="东南部" value="shanghai"></el-option>
			  <el-option label="欧美部" value="beijing"></el-option>
			  <el-option label="日韩部" value="shanghai"></el-option>
			  <el-option label="西南部" value="beijing"></el-option>
		    </el-select></div>
		  </el-form-item>
		  <el-form-item label="备注:">
		    <el-input type="textarea" v-model="form.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">确定</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
		</el-form>
		</div>
</template>

<script>
	 export default {
		name: 'addProject',
    data() {
      return {
        form: {
			id:'',
          name: '',
		  region: '',
          date1: '',
          date2: '',
         resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
	.choose{
		float: left;
	}
	.top{
		height: 50px;
		line-height: 50px;
		margin-bottom: 50px;
		margin-left: -480px;
	}
	.main{
		width: 600px;
		height: 500px;
		margin:50px auto;
		/*background:greenyellow;*/
		
		text-align: center;
	}
</style>
