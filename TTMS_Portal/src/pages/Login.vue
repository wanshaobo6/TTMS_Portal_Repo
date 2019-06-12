<template>
  <v-app >
    <v-content >
      <div class="img">
      <v-container fluid fill-height >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title> Travel Manage System
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <el-switch
                  v-model="isEmp"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" label="用户名" type="text"/>
                  <v-text-field
                    prepend-icon="lock"
                    v-model="password"
                    label="密码"
                    id="password"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'text' : 'password'"
                 ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" v-show="isEmp" @click="empDoLogin">职工登录</v-btn>
                  <v-btn color="primary"  v-show="!isEmp" @click="distributorDoLogin">供销商登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </div>
    </v-content>
    <v-dialog v-model="dialog" width="300px">
      <v-alert icon="warning" color="error" :value="true" v-text="errorTip">
      </v-alert>
    </v-dialog>
  </v-app>

</template>

<script>
export default {
	name: "Login",
  data: () => ({
    username: "",
    password: "",
    errorTip:"",
    dialog: false,
    e1:false,
    isEmp:true,  //是否是职员
  }),
  methods: {
    empDoLogin() {
      if (!this.username || !this.password) {
        this.errorTip = "用户名和密码不能为空";
        this.dialog = true;
        return false;
      }
      this.$http.post("/login", this.$qs.stringify({
        username: this.username,
        password: this.password
      })).then((resp)=>{
        console.log(resp)
        this.$router.push("/");
        //保存
       localStorage.setItem("Modules",JSON.stringify(resp.data));
      }).catch((error)=>{
        console.log(error.message);
        this.errorTip = error.message;
        this.dialog = true;
        localStorage.setItem("Modules",JSON.stringify("[]"));
      });
    },
    distributorDoLogin(){
      if (!this.username || !this.password) {
        this.errorTip = "用户名和密码不能为空";
        this.dialog = true;
        return false;
      }
      this.$http.post("/distributorEntry/login", this.$qs.stringify({
        distributorname: this.username,
        password: this.password
      })).then((resp)=>{
        console.log(resp)
        this.$router.push("/DistributorEntry/DistributorInterface");
      }).catch((error)=>{
        console.log(error.message);
        this.errorTip = error.message;
        this.dialog = true;
      });
    },
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
  .img{
    background-image: url("../assets/Login.jpg");
    margin-top: -60px;
    height: 100%;
    width: 100%;
    background-size:100% 100%;
  }
</style>
