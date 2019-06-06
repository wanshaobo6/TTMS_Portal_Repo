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
          <el-col :span="2"><el-button type="primary" @click="loadData()">查询</el-button><div class="grid-content "></div></el-col>
          <el-col :span="2"><div class="grid-content ">
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

            <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
              <el-form :model="form" >
                <el-form-item label="照片" >
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
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
                <el-form-item label="父分类:" >
                  <div class="left"> <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select></div>
                </el-form-item>
                <el-form-item label="子分类:" >
                  <div class="left"><el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select></div>
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
                <span v-show="scope.row.status==1" style="color: green">启用</span>
                <span v-show="scope.row.status!=1" style="color: red">禁用</span>
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
                <el-button size="mini" type="danger" v-show="scope.row.status == 1"  @click="changeStatus(scope.row)">禁用</el-button>
                <el-button size="mini" type="success" v-show="scope.row.status != 1" @click="changeStatus(scope.row)">启用</el-button>
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
  const roleOptions = ['系统管理员', '产品经理', '团负责人'];
  export default {
    name: 'UserManage',
    data() {
      return {
        checkedRoles: ['系统管理员', '产品经理'],
        roles: roleOptions,
        dialogFormVisible: false,
        form: {
          id: '',
          password: '',
          email: '',
          phoneNum: '',
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
        selected: {},
        input1: '',
        currentPage: 1,
        row: 5,
        totalItem:20,
        name:"",
        page:"",
        rows:"",
        imageUrl:""
      };
    },
    created(){
      this.loadData();
    },


    methods: {
      showRow(row) {
        //赋值给radio
        this.radio = this.tableData.indexOf(row);
        this.selected = row;
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
        this.rows = (val);
        this.loadData();
      },
      handleCurrentChange(val) {
        this.currentPage = (val);
        this.loadData();

      },
      loadData(){
        //加载用户信息
        this.$http.get("/sysmanage/userauth/usermanage/page" , {
          params: {
            name:this.name,
            page: this.currentPage,
            rows: this.rows,
          }
        }).then(resp => {
          //成功
          console.log(resp);
          this.totalItem = resp.data.total;
          var tables = [];
          resp.data.items.forEach(userItem => {
            var table = {};
            table.id = userItem.id;
            table.username = userItem.username;
            table.email = userItem.email;
            table.phoneNum = userItem.mobile;
            table.status= userItem.valid;


            tables.push(table);
          });
          this.tableData = tables;
        }).catch(error =>{
          alert(error.message);
        });
      },
      changeStatus(table) {
        this.$http.put("/sysmanage/userauth/usermanage/valid/" + table.id).then(resp => {
          this.tableData.filter(data =>{
            return data.id == table.id;
          })[0].status = !table.status
        }).catch(error => {
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt2M;
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

  .roles{
    float: left;
  }






  .left{
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
  /*照片上传*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
