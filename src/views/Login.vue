<template>
  <div class="flex-row page">
    <el-card>
      <el-row class="title">
        <el-col>云讯宠物医院管理信息系统</el-col>
      </el-row>
      <el-row class="flex-row row">
        <el-col :span="10">
          <span>用户名:</span>
        </el-col>
        <el-col :offset="1" :span="12">
          <el-input v-model="username" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row class="flex-row row">
        <el-col :span="10">
          <span>密码:</span>
        </el-col>
        <el-col :offset="1" :span="12">
          <el-input
            v-model="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-col>
      </el-row>
      <el-row class="row" :class="{ hide: !errorContent }">
        <span class="error">{{ errorContent }}</span>
      </el-row>
      <el-row class="flex-row row">
        <el-col :span="12">
          <el-button type="primary" size="small" round @click="login"
            >登录</el-button
          >
        </el-col>
        <el-col :span="12">
          <el-button type="info" size="small" round @click="clear"
            >清空</el-button
          >
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { login as loginService } from "../plugins/api/userService";

export default {
  name: "login",
  mounted() {},
  data() {
    return {
      username: "",
      password: "",
      errorContent: ""
    };
  },
  methods: {
    login: async function() {
      if (this.username.trim().length <= 0) {
        this.errorContent = "用户名不能为空";
        return;
      }
      if (this.password.length <= 0) {
        this.errorContent = "密码不能为空";
        return;
      }
      let user = { UserName: this.username.trim(), Password: this.password };
      try {
        let result = await loginService(user);
        if (result && result.code == 200) {
          this.$store.commit("updateToken", result.content.token);
          let redirectUrl = this.$route.query.redirect;
          if (redirectUrl) {
            this.$router.push({ path: redirectUrl });
          } else {
            this.$router.push({ name: "home" });
          }
        } else {
          this.errorContent = result.error;
        }
      } catch (ex) {
        this.errorContent = ex.error;
        console.log(ex);
      }
    },
    clear: function() {
      this.username = "";
      this.password = "";
      this.errorContent = "";
    }
  }
};
</script>
<style>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.page {
  width: 100vw;
  height: 100vh;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-bottom: 40px;
}
.row {
  margin-top: 5px;
  margin-bottom: 5px;
}
.right {
  float: right;
}
.left {
  float: left;
}
.hide {
  visibility: collapse;
}
.error {
  color: red;
}
</style>
