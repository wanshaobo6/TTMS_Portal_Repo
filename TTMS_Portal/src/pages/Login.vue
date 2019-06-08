<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title> Travel Manage System
                </v-toolbar-title>
                <v-spacer></v-spacer>
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
                <v-btn color="primary" @click="doLogin">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
    e1:false
  }),
  methods: {
    doLogin() {
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

    }
  }
};
</script>

