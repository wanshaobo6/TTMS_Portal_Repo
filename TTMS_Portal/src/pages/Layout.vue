<template>
  <v-app :dark="dark">
    <!-- 左侧导航条 -->
    <v-navigation-drawer
      :dark="dark"
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed

      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/brand.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title><v-toolbar-title v-text="title"/></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider/>
      <!-- 左侧菜单 -->
      <v-list class="pt-0" dense>
        <v-list-group
          v-model="item.active"
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.action"
          no-action
        >
          <!--一级菜单 -->
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- 二级菜单 -->
          <v-list-tile v-for="subItem in item.menusItems" :key="subItem.title" :to="baseUrl + item.path + subItem.path">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- 顶部工具条 -->
    <v-toolbar
      app
      dark
      :color="dark ? 'secondary' : 'primary'"
    >
      <!-- 隐藏左侧菜单的按钮-->
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <!-- 收起左侧菜单的按钮-->
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <!--模块名称-->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="module in modules"  :key="module.moduleName" v-text="module.moduleName" @click="updateMenus(module)"></v-btn>
      </v-toolbar-items>
      <!-- 顶部导航标题 -->
      <v-spacer></v-spacer>
      <!--用户头像-->
      <v-list-tile avatar>
        <el-button type="primary" @click="dialogFormVisible = true" >修改密码</el-button>
        <v-list-tile-avatar>
          <img :src="curUser.image">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="curUser.username"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-toolbar>

    <!--中间内容主体-->
    <v-content >
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible" style="width:90%">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="输入密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">修改成功</el-button>
        </div>
      </el-dialog>
      <div>
        <!--定义一个路由锚点，Layout的子组件内容将在这里展示-->
          <router-view :user="curUser"/>
      </div>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          password:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dark: false,// 是否暗黑主题
        drawer: true,// 左侧导航是否隐藏
        miniVariant: false,// 左侧导航是否收起
        title: '旅游管理系统',// 顶部导航条名称,
        menuMap: {},
        baseUrl:"",
        items:[],
        modules:[],
        curUser:{}
      }

    },
    computed: {
      // item1() {
      //   const arr = this.$route.path.split("/");
      //   return this.menuMap[arr[1]].name;
      // },
      // item2() {
      //   const arr = this.$route.path.split("/");
      //   return this.menuMap[arr[1]][arr[2]];
      // }
    },
    name: 'App',
    methods:{
      updateMenus(module){
        this.items = module.menus;
        this.baseUrl = module.path;
      }
    },
    watch: {},
    created(){
      //初始化Modules数据
      this.modules = JSON.parse(localStorage.getItem("Modules"));

      // this.modules .forEach(m => {
      //   const p1 = m.path.slice(1);
      //   this.menuMap[p1] = {name: m.title};
      //   m.items.forEach(i => {
      //     this.menuMap[p1][i.path.slice(1)] = i.title;
      //   })
      // });
      //没有modules跳到登录界面
      if(this.modules == null){
        this.$router.push("/Login");
      }
      //查询当前用户的信息
      this.$http.post("/getCuruser").then(resp=>{
        this.curUser = resp.data;
      }).catch(error=>{
        //登录失败  退回登录页面
        this.$router.push("/Login");
      })
    }
  }
</script>

<style scoped>
  .box {
    width: 90%;
  }
  .el-button{
    margin-right: 20px;
  }
</style>
