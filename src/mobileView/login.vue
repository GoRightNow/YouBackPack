<template>
  <div class="login">
    <el-card style="width: 80%; margin: auto">
      <div style="max-height: 50px" slot="header">
        <p style="text-align: center">你的背包</p>
      </div>
      <el-form ref="form" :model="form">
        <el-form-item label="手机号">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="密码" v-if="way == 'usePWD'">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" v-if="way == 'useMSG'">
          <el-input placeholder="请输入验证码" v-model="VRFCC" class="input-with-select">
            <el-button @click="sendVRFCC" v-model="buttonINFO" slot="append">{{buttonINFO}}</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="float: right; width: 100%" height="60px" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="float: right; width: 100%" type="success" @click="useMessage">短信验证登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>

<script>
    export default {
      name: "login",
      data: function() {
        return {
          VRFCC: '',
          buttonINFO: '发送验证码',
          sendTime: '发送验证码',
          way: "usePWD",
          form: {},
          visible: false,
          time: 60
        }
      },
      methods: {
        onSubmit() {
          console.dir("执行登录");
        },
        useMessage() {
          this.way = "useMSG";
        },
        sendVRFCC() {
          this.$message({message: '验证码已发送', type: "success"});
          let me = this;
          let interval = window.setInterval(function () {
            me.buttonINFO = + me.time + 's';
            --me.time;
            if(me.time < 0) {
              me.buttonINFO = "重新发送";
              me.time = 60;
              window.clearInterval(interval);
            }
          }, 1000);
        }
      }
    }
</script>

<style scoped>
</style>
<style>
  .login .el-card__header {
    padding: 0px;
  }
</style>
