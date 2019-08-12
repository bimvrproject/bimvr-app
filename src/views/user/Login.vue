<template>
  <a-layout id="login_page_bg">
    <div style="margin: 0 auto; width: 20%; margin-top: 12.14%;">
      <img
        src="../../assets/logo.png"
        style="height: 100%; width: 100%; backgroundRepeat:'no-repeat'; backgroundPosition:'center center'"
      />
    </div>

    <div style="margin-top: 4.49%;">
      <a
        style="color: #FFFFFF; font-size: 15px; font-family: PingFangSC-Medium;"
        >账号密码登录</a
      >
    </div>

    <div
      style="margin-top: 4.94%; margin-bottom: 1.49%;"
      v-show="show"
      id="login_message"
    >
      <a
        style="color: #E82251; font-size: 12px; font-family: PingFangSC-Medium;"
        >{{ msg }}</a
      >
    </div>

    <a-layout-content>
      <a-form
        id="formLogin"
        ref="formLogin"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          style="margin-top: 5.99%; font-family: PingFangSC-Medium; color: #FFFFFF; size: 15px;"
        >
          <a-input
            style="width: 80%; height: 5.99%;"
            background="red"
            type="text"
            placeholder="账号"
            v-decorator="[
              'username',
              {
                rules: [
                  { required: true, message: '请输入帐户名' },
                  { validator: handleUsernameOrEmail }
                ],
                validateTrigger: 'change'
              }
            ]"
          >
            <a-icon
              slot="prefix"
              type="user"
              :style="{ color: 'rgba(0,0,0,.25)' }"
            />
          </a-input>
        </a-form-item>

        <a-form-item
          style="margin-top: 1.49%; font-family: PingFangSC-Medium; color: #FFFFFF; size: 15px;"
        >
          <a-input
            style="width: 80%; height: 5.99%; border-radius: 20px;"
            type="password"
            autocomplete="false"
            placeholder="密码"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }],
                validateTrigger: 'blur'
              }
            ]"
          >
            <a-icon
              slot="prefix"
              type="lock"
              :style="{ color: 'rgba(0,0,0,.25)' }"
            />
          </a-input>
        </a-form-item>

        <div>
          <a
            style="margin-top: 1.49%; font-family: PingFangSC-Medium; color: #FEFEFE; font-size: 12px;"
            >忘记密码？</a
          >
          <a
            v-on:click="guestLogin()"
            style="margin-top: 1.49%; margin-left: 40%; font-family: PingFangSC-Medium; color: #FEFEFE; font-size: 12px;"
            >游客登录</a
          >
        </div>

        <a-form-item>
          <a-button
            style="margin-top: 11.24%; width: 80%; border-radius: 20px;"
            html-type="submit"
            :loading="state.loginBtn"
            :disabled="state.loginBtn"
          >
            <a
              style="color: #2180ed; font-family: PingFangSC-Medium; font-size: 15px;"
              >登录</a
            >
          </a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>
  </a-layout>
</template>

<script>
import api from "@/api/api.js";
import qs from "qs";

export default {
  data() {
    return {
      msg: "",
      show: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    };
  },
  methods: {
    handleUsernameOrEmail(rule, value, callback) {
      const { state } = this;
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      callback();
    },
    handleSubmit(e) {
      e.preventDefault();
      const {
        form: { validateFields },
        state,
        customActiveKey
      } = this;

      state.loginBtn = true;

      validateFields(customActiveKey, { force: true }, (err, values) => {
        if (!err) {
          //请求登录接口
          this.$http
            .post(
              api.Login,
              qs.stringify({
                username: values.username,
                password: values.password
              })
            )
            .then(res => this.loginSuccess(res))
            .catch(err => this.requestFailed(err))
            .finally(() => {
              state.loginBtn = false;
            });
        } else {
          setTimeout(() => {
            state.loginBtn = false;
          }, 600);
        }
      });
    },
    loginSuccess(res) {
      // 如果登录成功，存储token
      if (res.code == "0") {
        this.$store.commit("settoken", res.data.token);
        window.localStorage.setItem("token", res.data.token);
        this.$router.push("/home");
      } else {
        this.msg = res.msg;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1200);
      }
    },
    requestFailed() {
      this.msg = "应用发生错误";
      this.show = true;
    },
    guestLogin() {
      //请求登录接口
      this.$http
        .post(
          api.Login,
          qs.stringify({ username: "guest", password: "123456" })
        )
        .then(res => this.loginSuccess(res))
        .catch(err => this.requestFailed(err))
        .finally(() => {
          state.loginBtn = false;
        });
    }
  }
};
</script>

<style scoped>
#login_page_bg {
  background: url("../../assets/img/login_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
</style>
