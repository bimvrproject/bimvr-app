<template>
  <div>
    <!-- header开始 -->
    <div
      id="header_page_bg"
      style="position: fixed; top: 0; height: 44px; width: 100%;"
    >
      <a-row>
        <a-col :span="3">
          <img
            src="../../../assets/img/nav_icon_return.png"
            style="width: 19px; height: 18px; margin-top: 14.5px;"
            v-on:click="openKnock()"
          />
        </a-col>
        <a-col :span="18">
          <h4
            style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;"
          >
            碰撞
          </h4>
        </a-col>
        <a-col :span="3"> </a-col>
      </a-row>
    </div>
    <!-- header结束 -->

    <!-- content开始 -->
    <div style="margin-top: 44px; position: fixed; z-index: 0;">
      <div>
        <img
          style="width: 100%; height: 100%;position: fixed; z-index: 30;"
          src="../../../assets/img/pz3.png"
        />
        <div id="alert">
          <h5 style="margin-top: 10%;font-size: 18px">此处为第三处碰撞点</h5>
          <a-button
            style="margin-top: 2%; width: 45%; border-radius: 20px;height: 20px;"
            @click="repz2"
          >
            返回
          </a-button>
          &nbsp;
          <a-button
            type="primary"
            style="margin-top: 2%; width: 45%; border-radius: 20px;height: 20px;"
            @click="openHome"
          >
            <h4>结束</h4>
          </a-button>
        </div>
      </div>
    </div>
    <!-- content结束 -->

    <!--    
    <div style="margin-top: 44px">
      <img style="width: 100%; height: 100%;" src="../../../assets/img/knock-home.png"/>
    </div> -->

    <!-- footer开始 -->
    <div
      style="position: fixed; bottom: 0; width: 100%; height: 49px; background-color: #FAFAFA"
    >
      <a-row>
        <a-col :span="6">
          <div v-on:click="openModel()">
            <img
              src="../../../assets/img/model_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #666666; font-size: 11px">模型</a></div>
        </a-col>
        <a-col :span="6">
          <div v-on:click="openPicture()">
            <img
              src="../../../assets/img/picture_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #666666; font-size: 11px">图纸</a></div>
        </a-col>
        <a-col :span="6">
          <div v-on:click="openMaterial()">
            <img
              src="../../../assets/img/material_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>
          <div>
            <a style="color: #666666; font-size: 11px">材料</a>
          </div>
        </a-col>
        <a-col :span="6">
          <div v-on:click="openKnock()">
            <img
              src="../../../assets/img/pengzhuang.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>
          <div>
            <a style="color: #2180ED; font-size: 11px">碰撞</a>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- footer结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false
    };
  },

  methods: {
    repz2() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/pz2?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=" +
          modelId
      );
    },
    openHome() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/knockHome?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=" +
          modelId
      );
    },
    change() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/line/knock-check?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=" +
          modelId
      );
    },
    returnModel() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
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
    openModel() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/line/model?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=" +
          modelId
      );
    },
    openPicture() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/line/picture?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=" +
          modelId
      );
    },
    openMaterial() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/line/material?" +
          "companyId=" +
          companyId +
          "&projectId=" +
          projectId +
          "&projectName=" +
          projectName +
          "&modelId=" +
          modelId
      );
    }
  }
};
</script>

<style scoped>
#header_page_bg {
  background: url("../../../assets/img/tabbar_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
#alert {
  width: 190px;
  height: 100px;
  margin-top: 99%;
  margin-left: 115px;
  position: fixed;
  z-index: 50;
  background-color: #dddddd;
  border: 2px solid white;
  opacity: 0.7;
}
</style>
