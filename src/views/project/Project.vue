<template>
  <div style="position: relative;">
    <!-- header开始 -->
    <div
      id="header_page_bg"
      style="position: fixed; top: 0; height: 44px; width: 100%; z-index: 10"
    >
      <a-row>
        <a-col :span="3" style="margin-top: 14px;">
          <img
            src="../../assets/img/nav_icon_return.png"
            style="width: 19px; height: 18px;"
            v-on:click="returnHome()"
          />
        </a-col>
        <a-col :span="18">
          <h4
            style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;"
          >
            {{ this.$route.query.projectName }}
          </h4>
        </a-col>
        <a-col :span="3"></a-col>
      </a-row>
    </div>
    <!-- header结束 -->

    <!-- content开始 -->
    <div
      style="margin-top: 10%; width: 100%;height: auto;position: fixed;z-index: 5;"
    >
      <div style="background-color: #F0F0F0; width: 100%; height: 10px;"></div>

      <div
        style="background-color: #FFFFFF; margin-left: 10px; margin-right: 10px"
      >
        <a-row>
          <a-col :span="24">
            <div
              style="margin-top: 10px; margin-left: 20px; margin-right: 20px"
            >
              <div v-on:click="jumpBuild()">
                <div style="border: 1px solid; border-color: #DDDDDD">
                  <a-row>
                    <div style="float: left; display: inline-table;">
                      <img
                        src="../../assets/img/project_build_pg.png"
                        style="width: 6.25rem;height: 100px;"
                      />
                    </div>
                    <div
                      style="float: left; display: inline-table;margin-left: 5%;"
                    >
                      <h5
                        style="font-size: 15px;color: '#333333';float: left;margin-top: 50%;"
                      >
                        建筑模型
                      </h5>
                    </div>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="24">
            <div style="margin-top: 5px; margin-left:20px; margin-right: 20px">
              <div v-on:click="jumpLine()">
                <div style="border: 1px solid; border-color: #DDDDDD">
                  <a-row>
                    <div style="float: left; display: inline-table;">
                      <img
                        src="../../assets/img/project_line_pg.png"
                        style="width: 6.25rem;height: 100px;"
                      />
                    </div>
                    <div
                      style="float: left; display: inline-table;margin-left: 5%;"
                    >
                      <h5
                        style="font-size: 15px;color: '#333333';float: left;margin-top: 50%;"
                      >
                        管线综合
                      </h5>
                    </div>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="24">
            <div style="margin-top: 5px; margin-left:20px; margin-right: 20px">
              <div v-on:click="jumpMonitor()">
                <div style="border: 1px solid; border-color: #DDDDDD">
                  <a-row>
                    <div style="float: left; display: inline-table;">
                      <img
                        src="../../assets/img/project_device_pg.png"
                        style="width: 6.25rem;height: 100px;"
                      />
                    </div>
                    <div
                      style="float: left; display: inline-table;margin-left: 5%;"
                    >
                      <h5
                        style="font-size: 15px;color: '#333333';float: left;margin-top: 50%;"
                      >
                        设备监控
                      </h5>
                    </div>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="24">
            <div
              style="background-color: #F0F0F0; width: 100%; height: 100px; margin-top: 10px"
            >
              &nbsp;
            </div>
          </a-col>
        </a-row>
      </div>
      <div style="background-color: #F0F0F0; width: 100%; height: 10px;"></div>
    </div>
    <!-- content结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      projectId: "",
      companyId: "",
      projectName: ""
    };
  },
  methods: {
    jumpLine() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      this.$router.push(
        "/line/model?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=2"
      );
    },
    jumpBuild() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      this.$router.push(
        "/build/model?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=1"
      );
    },
    jumpMonitor() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      this.$router.push(
        "/monitor?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName
      );
    },

    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    returnHome() {
      this.$router.push("/home");
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
    }
  }
};
</script>

<style>
#header_page_bg {
  background: url("../../assets/img/tabbar_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
</style>
