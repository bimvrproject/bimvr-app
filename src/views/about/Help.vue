<template>

  <div>
    <div
      id="header_page_bg"
      style="position: fixed; top: 0; height: 44px; width: 100%;"
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
          <h4 style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;">帮助</h4>
        </a-col>
        <a-col :span="3">

        </a-col>
      </a-row>
    </div>

    <div style="margin-top: 64px;">
      <div style="background-color: #FFFFFF; height: 60px;">
        <div>
          <img
            src="../../assets/img/help_detail.png"
            style="width: 100%; display: inline-block"
          >
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  methods: {
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
