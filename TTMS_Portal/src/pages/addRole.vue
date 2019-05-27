<template>
	<div class="main">
		<div class="top">
			<h3>添加角色</h3>
		</div>
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
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
		</div>
</template>

<script>
	 export default {
		name: 'addRole',
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
