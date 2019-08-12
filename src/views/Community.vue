<template>
  <div>
    <!-- header开始 -->
    <div
      id="header_page_bg"
      style="position: fixed; top: 0; height: 44px; width: 100%; z-index: 1"
    >
      <a-row>
        <a-col
          :span="3"
          style="margin-top: 14px;"
        >
          <a style="font-size: 15px; width: 19px; height: 18px; margin-left:21px; color: #FFFFFF;">{{ username }}</a>
        </a-col>
        <a-col :span="18">
          <h4 style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;">社区</h4>
        </a-col>
        <a-col :span="3">
          <!-- 更多选项按钮开始 -->
          <a-radio-group
            style="margin-right: 8px"
            :defaultValue="placement"
          ></a-radio-group>
          <img
            src="../assets/img/nav_icon_hide@3x.png"
            style="width: 22px;height: 22px; margin-top: 15px;"
            @click="showDrawer"
          />

          <a-drawer
            title="更多选项"
            :placement="placement"
            :closable="false"
            @close="onClose"
            :visible="visible"
          >
            <div
              style="height: 30px;width: 100%;text-align: center;"
              v-on:click="help()"
            >帮助</div>
            <hr style="width:100%;margin-top: 0px;color:blanchedalmond" />
            <div
              style="height: 30px;width: 100%;text-align: center;"
              v-on:click="changePwd()"
            >修改密码</div>
            <hr style="width:100%;margin-top: 0px;color:blanchedalmond" />
            <div
              style="height: 30px;width: 100%;text-align: center;"
              v-on:click="about()"
            >联系我们</div>
            <hr style="width:100%;margin-top: 0px;color:blanchedalmond" />
            <div style="height: 30px;width: 100%;text-align: center;">版本号:V 1.0.1</div>
          </a-drawer>
          <!-- 更多选项按钮结束 -->
        </a-col>
      </a-row>
    </div>
    <!-- header结束 -->

    <!-- content开始 -->
    <div style="margin-top: 44px; position: fixed; z-index: 0;">
      
      <img style="width: 100%; height: 100%" src="../assets/img/community_pg.png">
      
    </div>
    <!-- content结束 -->

    <!-- footer开始 -->
    <div style="position: fixed; bottom: 0; width: 100%; height: 49px; background-color: #FAFAFA; z-index: 3">
      <a-row>
        <a-col :span="12" v-on: click="openHome()">
          <div v-on:click="openHome()">
            <img
              src="../assets/img/home_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #666666; font-size: 11px">首页</a></div>
        </a-col>
        <a-col :span="12">
          <div v-on:click="openCommunity()">
            <img
              src="../assets/img/community_on.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #2180ED; font-size: 11px">社区</a></div>
        </a-col>

      </a-row>
    </div>
    <!-- footer结束 -->
  </div>
</template>

<script>
import api from "@/api/api.js";

export default {
  data() {
    return {
      visible: false,
      placement: "bottom",
      username: "",
      url: "",
      projectList: [],
      companyId: ""
    };
  },
  mounted() {
    this.$http
      .post(api.GetProject)
      .then(res => this.homeData(res))
      .then(res => {})
      .catch(err => {})
      .finally(() => {});
  },
  methods: {
    homeData(res) {
      if (res.code == "0") {
        this.username = res.data.username;
        this.projectList = res.data.projectList;
        this.companyId = res.data.companyId;
      }
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    help() {
      this.$router.push("/help");
    },
    changePwd() {
      this.$router.push("/forgetPassword");
    },
    about() {
      this.$router.push("/about");
    },
    returnHome() {
      this.$router.push("/home");
    },
    returnSearch() {
      this.$router.push("/search");
    },
    jumpModel(companyId, projectId, projectName) {
      this.$router.push(
        "/project?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName
      );
    },

    dateFormat: function(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0的123
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      // var hours =
      //   date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      // var minutes =
      //   date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      // var seconds =
      //   date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year + "年" + month + "月" + day + "日"
        // +
        // hours +
        // ":" +
        // minutes +
        // ":" +
        // seconds
      );
    },
    openHome() {
      this.$router.push("/home");
    },
    openCommunity() {
      this.$router.push("/community");
    }
  }
};

// 首页返回键处理
// 处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
    //首次按键，提示‘再按一次退出应用’
    if (!first) {
        first = new Date().getTime();//记录第一次按下回退键的时间
        mui.toast('再按一次退出应用');//给出提示
        setTimeout(function() {//1s中后清除
            first = null;
        }, 1000);
    } else {
        if (new Date().getTime() - first < 1000) {//如果两次按下的时间小于1s，
            plus.runtime.quit();//那么就退出app
} } };
</script>

<style>
#header_page_bg {
  background: url("../assets/img/tabbar_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
</style>