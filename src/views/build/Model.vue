<template>
  <div>
    <!-- header开始 -->
    <div
      id="header_page_bg"
      style="position: fixed; top: 0; height: 44px; width: 100%;"
    >
      <a-row>
        <a-col :span="3"
          ><img
            src="../../assets/img/nav_icon_return.png"
            style="width: 19px; height: 18px; margin-top: 14.5px;"
            v-on:click="returnModel()"
        /></a-col>
        <a-col :span="18"
          ><h4
            style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;"
          >
            模型全景
          </h4></a-col
        >
        <a-col :span="3"></a-col>
      </a-row>
    </div>
    <!-- header结束 -->

    <!-- content开始 -->
    <div
      style="margin-top: 44px; margin-bottom: 49px; width: 100%; height: 100%;"
    >
      <iframe
        v-bind:src="this.resUrl"
        v-bind:height="this.ifreamHeight"
        width="100%"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <!-- content结束 -->

    <!-- footer开始 -->
    <div
      style="position: fixed; bottom: 0; width: 100%; height: 49px; background-color: #FAFAFA"
    >
      <a-row>
        <a-col :span="8">
          <div v-on:click="openModel()">
            <img
              src="../../assets/img/model_on.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #2180ED; font-size: 11px">模型</a></div>
        </a-col>
        <a-col :span="8">
          <div v-on:click="openPicture()">
            <img
              src="../../assets/img/picture_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>

          <div><a style="color: #666666; font-size: 11px">图纸</a></div>
        </a-col>
        <a-col :span="8">
          <div v-on:click="openMaterial()">
            <img
              src="../../assets/img/material_off.png"
              style="width: 22px; height: 22px; margin-top: 5px;"
            />
          </div>
          <div><a style="color: #666666; font-size: 11px">材料</a></div>
        </a-col>
      </a-row>
    </div>
    <!-- footer结束 -->
  </div>
</template>

<script>
import api from "@/api/api.js";
import qs from "qs";

export default {
  data() {
    return {
      ifreamHeight: document.body.scrollHeight - 93,
      resUrl: ""
    };
  },
  mounted() {
    this.$http
      .post(
        api.GetResModel,
        qs.stringify({
          modelId: this.$route.query.modelId,
          projectId: this.$route.query.projectId,
          companyId: this.$route.query.companyId
        })
      )
      .then(res => {
        this.resUrl = res.data.url;
      })
      .catch(err => {})
      .finally(() => {});
  },
  methods: {
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
        "/build/model?" +
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
        "/build/picture?" +
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
        "/build/material?" +
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
  background: url("../../assets/img/tabbar_bg.png");
  background-size: 100% 100%;
  height: 100%;
}
</style>
