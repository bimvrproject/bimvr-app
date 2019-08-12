<template>

  <div>
    <div
      id="header_page_bg"
      style="height: 44px; width: 100%;"
    >
      <a-row>
        <a-col :span="3">
          <img
            src="../../assets/img/nav_icon_return.png"
            style="width: 19px; height: 18px; margin-top: 14.5px;"
            v-on:click="returnHome()"
          />
        </a-col>
        <a-col :span="18">
          <h4 style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;">修改密码</h4>
        </a-col>
        <a-col :span="3">

        </a-col>
      </a-row>
    </div>

    <div style="margin-top: 10px;">
      <div style="background-color: #FFFFFF; height: 80px; margin-top: 10px;">
        <a-row>
          <a-col
            :span="20"
            offset="2"
          >
            <a-input
              placeholder="请输入旧密码"
              addonBefore="旧密码"
              style="margin-top: 5px; outline: none;"
              v-model="oldPwd"
            />
          </a-col>
        </a-row>
        <a-row style="margin-top: 5px;">
          <a-col
            :span="20"
            offset="2"
          >
            <a-input
              placeholder="请输入新密码(6位以上)"
              addonBefore="新密码"
              v-model="newPwd"
            />
          </a-col>
        </a-row>
      </div>
      <div style="background-color: #FFFFFF; margin-top: 10px;">

      </div>
      <div>
        <a-row>
          <a-col :span="24">
            <a-button
              style="margin-top: 5px; width: 90%; border-radius: 20px; background-color: #4E63F5;"
              html-type="submit"
            >
              <a
                style="color: #FFFFFF; font-family: PingFangSC-Medium; font-size: 15px;"
                v-on:click="changePwd()"
              >修改密码</a>
            </a-button>
          </a-col>
        </a-row>
      </div>
    </div>

  </div>

</template>

<script>

import api from '@/api/api.js'
import qs from 'qs';

export default {
  data() {
    return {
      oldPwd: "",
      newPwd: ""
    };
  },
  methods: {
    changePwd() {
      this.$http.post(api.ChangePwd,qs.stringify({ oldPwd: this.oldPwd, newPwd: this.newPwd }))
        .then(res => {
          alert("密码修改成功");
        })
        .catch(err => {
          alert(res.msg);
        })
        .finally(() => {

        });
    },
    returnHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
#header_page_bg {
  background: url("../../assets/img/tabbar_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
</style>
