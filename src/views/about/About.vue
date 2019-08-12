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
          <h4 style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;">联系我们</h4>
        </a-col>
        <a-col :span="3">

        </a-col>
      </a-row>
    </div>

    <div style="margin-top: 54px;">
      <div style="background-color: #FFFFFF; height: 60px;">
        <div style="width: 80%; text-align: left;">
          <a style="color: #333333; font-size: 15px; margin-left: 20px;">联系我们</a>
        </div>
        <hr style="width:90%;margin-top: 0px;color:blanchedalmond" />
        <div style="margin-top: 10px; text-align: left;">
          <a style="color: #333333; font-size: 12px; margin-left: 12px;">
            &nbsp;&nbsp;
            联系我们
          </a>
          <a style="color: #333333; font-size: 12px; margin-right: 18px; float: right">
            186-0093-6100
            &nbsp;
            <a-icon
              type="phone"
              v-on:click="callPhone()"
            />
          </a>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  methods: {
    callPhone() {
      window.location.href = "tel://18600936100";
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
