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
          src="../../../assets/img/knock-home.png"
        />
        <div
          style="width: 30px;height: 35px;margin-top: 260px;margin-left: 90px; position: fixed; z-index: 50;"
          @click="pz1"
        >
          <img
            style="width: 100%; height: 100%;"
            src="../../../assets/img/b1.png"
          />
        </div>
        <div
          style="width: 30px;height: 35px;margin-top: 270px;margin-left: 190px; position: fixed; z-index: 50;"
          @click="pz2"
        >
          <img
            style="width: 100%; height: 100%;"
            src="../../../assets/img/b2.png"
          />
        </div>
        <div
          style="width: 30px;height: 35px;margin-top: 290px;margin-left: 290px; position: fixed; z-index: 50;"
          @click="pz3"
        >
          <img
            style="width: 100%; height: 100%;"
            src="../../../assets/img/b3.png"
          />
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
    pz1() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/pz1?" +
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
    pz2() {
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
    pz3() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/pz3?" +
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
        "/line/knockcheck?" +
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
    },
    openKnock() {
      let companyId = this.$route.query.companyId;
      let projectId = this.$route.query.projectId;
      let projectName = this.$route.query.projectName;
      let modelId = this.$route.query.modelId;
      this.$router.push(
        "/line/knock?" +
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
</style>
