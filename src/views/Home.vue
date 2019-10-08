<template>
  <div style="position: relative;">
    <!-- header开始 -->
    <div
      id="header_page_bg"
      style="position: fixed;  z-index: 10; top: 0; height: 44px; width: 100%; "
    >
      <a-row>
        <a-col :span="3" style="margin-top: 14px;">
          <a
            style="font-size: 15px; width: 19px; height: 18px; margin-left:21px; color: #FFFFFF;"
            >{{ username }}</a
          >
        </a-col>
        <a-col :span="18">
          <h4
            style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;"
          >
            虚拟建造
          </h4></a-col
        >
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
            >
              帮助
            </div>
            <hr style="width:100%;margin-top: 0px;color:blanchedalmond" />
            <div
              style="height: 30px;width: 100%;text-align: center;"
              v-on:click="changePwd()"
            >
              修改密码
            </div>
            <hr style="width:100%;margin-top: 0px;color:blanchedalmond" />
            <div
              style="height: 30px;width: 100%;text-align: center;"
              v-on:click="about()"
            >
              联系我们
            </div>
            <hr style="width:100%;margin-top: 0px;color:blanchedalmond" />
            <div style="height: 30px;width: 100%;text-align: center;">
              版本号:V 1.0
            </div>
          </a-drawer>
          <!-- 更多选项按钮结束 -->
        </a-col>
      </a-row>
    </div>
    <!-- header结束 -->



    <!-- content开始 -->
    <div
      style="margin-top: 44px; margin-left: 10px; margin-right: 10px; background-color: #ffffff; position: relative; z-index: 5;"
    >
      <!--我的项目  标题-->
      <div>
        <a-row>
          <a-col :span="2"
            ><img
              src="../assets/img/tiao.png"
              style="width: 2px; height: 16px; margin-top: 18px"
          /></a-col>
          <a-col :span="14"
            ><h4 style="font-size: 16px;margin-top: 15px; float: left">
              我的项目
            </h4></a-col
          >
        </a-row>
      </div>
      <!--我的项目  标题-->

      <!--我的项目  内容-->
      <div
        v-for="(item, index) in projectList"
        :key="index"
        style="margin-top: 3%; margin-left:20px; margin-right: 20px"
      >
        <div
          v-on:click="jumpModel(companyId, item.projectId, item.projectName)"
        >
          <div style="border: 1px solid; border-color: #DDDDDD">
            <a-row>
              <div style="float: left; display: inline-table;">
                <img
                  v-bind:src="item.projectModelAddr"
                  style="width: 6.25rem;height: 100px;"
                />
              </div>
              <div style="float: left; display: inline-table;margin-left: 5%;">
                <a-row>
                  <h5 style="font-size: 15px;color: '#333333';float: left;">
                    {{ item.projectName }}
                  </h5>
                </a-row>
                <a-row>
                  <h5>开工时间 : {{ dateFormat(item.startTime) }}</h5>
                  <h5>竣工时间 : {{ dateFormat(item.endTime) }}</h5>
                </a-row>
              </div>
            </a-row>
          </div>
        </div>
      </div>
      <div style="background-color: #F0F0F0; width: 100%; margin-top: 10px">
        &nbsp;
      </div>
      <!--我的项目  内容-->
    </div>

    <div
      style="margin-bottom: 49px; margin-left: 10px; margin-right: 10px; position: relative; z-index: 0; background-color: #ffffff;"
    >
      <!--案例项目-->
      <div>
        <a-row>
          <a-col :span="2"
            ><img
              src="../assets/img/tiao.png"
              style="width: 2px; height: 16px; margin-top: 18px"
          /></a-col>
          <a-col :span="14"
            ><h4 style="font-size: 16px;margin-top: 15px; float: left">
              案例模型
            </h4></a-col
          >
        </a-row>
      </div>
      <div style="margin-top: 3%; margin-left:20px; margin-right: 20px">
        <div v-on:click="jumpModel('1', '0', '案例模型')">
          <div style="border: 1px solid; border-color: #DDDDDD">
            <a-row>
              <div style="float: left; display: inline-table;">
                <img
                  src="../assets/img/project_build_pg.png"
                  style="width: 6.25rem;height: 100px;"
                />
              </div>
              <div style="float: left; display: inline-table;margin-left: 5%;">
                <a-row
                  ><h5 style="font-size: 15px;color: '#333333';float: left;">
                    案例模型
                  </h5></a-row
                >
                <a-row>
                  <h5>开工时间 : 2019年06月06日</h5>
                  <h5>竣工时间 : 2020年06月06日</h5>
                </a-row>
              </div>
            </a-row>
          </div>
        </div>
      </div>
      <div style="background-color: #F0F0F0; width: 100%; margin-top: 10px">
        &nbsp;
      </div>
      <!--案例项目-->
    </div>
    <!-- content结束 -->

    <!-- footer开始 -->
    <div
      style="position: fixed; z-index: 8; bottom: 0; width: 100%; height: 49px; background-color: #FAFAFA;"
    >
      <a-row>
        <a-col :span="6" v-on: click="openHome()">
          <div v-on:click="openHome()">
            <img
              src="../assets/img/home_on.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #2180ED; font-size: 11px">首页</a></div>
        </a-col>
        <a-col :span="6" v-on: click="openPay()">
          <div v-on:click="openPay()">
            <img
              src="../assets/img/alipay/612531.jpg"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #666666; font-size: 11px">充值</a></div>
        </a-col>
        <a-col :span="6">
          <div v-on:click="openCommunity()">
            <img
              src="../assets/img/community_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #666666; font-size: 11px">社区</a></div>
        </a-col>
        <a-col :span="6">
          <div v-on:click="openPersonal()">
            <a-icon  style="width: 22px; height: 22px; margin-top: 5px;" type="user" />
          </div>
          <div><a style="color: #666666; font-size: 11px">个人</a></div>
        </a-col>
      </a-row>
    </div>
    <!-- footer结束 -->
  </div>
</template>

<script>
import api from "@/api/api.js";
import global from "@/api/global";

export default {
  data() {
    return {
      visible: false,
      placement: "bottom",
      username: "",
      url: "",
      projectList: [],
      companyId: "",
    };
  },
  mounted() {
    this.$http.post(api.GetProject).then(res => this.homeData(res));
    this.updateHeight = ";margin-top: 45%;";
    this.updateWidth =
      ";margin-left:" + (document.body.scrollWidth - 200) / 2 + "px;";
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
    //关闭检查更新
    closeCheck() {
      this.checkVersion = "display:none";
      this.checkVersion_update = "display:none";
    },
    //检查更新
    update() {
      // http://www.jh-bim.com/public/apk/download/download.html
      // window.open("http://39.96.59.142:8080/project/bimvr.apk");
      window.location = "http://36.112.65.110:8080/project/bimvr.apk";
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
    openPay() {
      this.$router.push("/recharge");
    },
    openCommunity() {
      this.$router.push("/community");
    },
    openPersonal() {
      this.$router.push("/personal");
    }

  }
};

// 首页返回键处理
// 处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
  //首次按键，提示‘再按一次退出应用’
  if (!first) {
    first = new Date().getTime(); //记录第一次按下回退键的时间
    mui.toast("再按一次退出应用"); //给出提示
    setTimeout(function() {
      //1s中后清除
      first = null;
    }, 1000);
  } else {
    if (new Date().getTime() - first < 1000) {
      //如果两次按下的时间小于1s，
      plus.runtime.quit(); //那么就退出app
    }
  }
};
</script>

<style>
#header_page_bg {
  background: url("../assets/img/tabbar_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
#popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
</style>
