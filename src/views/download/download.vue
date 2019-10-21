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
            @click="openapp()"
          >
            我的下载
          </h4>
        </a-col>
        <a-col :span="3"></a-col>
      </a-row>
    </div>
    <!-- header结束 -->
    <!--下载中心-->
    <div style="width: 100%">
      <a-list
        itemLayout="horizontal"
        :dataSource="data"
        style="padding-top: 50px"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" v-bind:href="item.scheme">打开</a>
          <a slot="actions">删除</a>
          <a-list-item-meta>
            <a slot="title">{{ item.name }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import global from "@/api/global";
export default {
  name: "download",
  data() {
    return {
      data: [],
      href: ""
    };
  },
  mounted() {
    this.openapp();
  },
  methods: {
    returnHome() {
      this.$router.push("/personal");
    },
    openapp() {
      let mythis = this;
      this.$http
        .get(api.SelectApp)
        .then(function(response) {
          mythis.data = response.data;
          console.log(mythis.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
