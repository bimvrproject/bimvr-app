<template>
  <div style="position: relative;">
    <!-- header开始 -->
    <div
      id="header_page_bg"
      style="position: fixed; top: 0; height: 44px; width: 100%;"
    >
      <a-row>
        <a-col :span="3" style="margin-top: 10px;">
          <img
            src="../../assets/img/nav_icon_return.png"
            style="width: 19px; height: 18px; margin-top: 5px;"
            v-on:click="returnProject()"
          />
        </a-col>
        <a-col :span="18">
          <h4
            style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;"
          >
            设备监控
          </h4>
        </a-col>
        <a-col :span="3"></a-col>
      </a-row>
    </div>
    <!-- header结束 -->

    <!-- content开始 -->
    <div style="width: 100%;  margin-top: 50px; position: fixed;">
      <div
        style="margin: 0 auto; width: 95%;height: auto;background-color: #ffffff;"
      >
        <!-- <div style="width: 100%;height: 15px;"></div> -->
        <!--我的项目  内容-->
        <div>
          <a-row>
            <a-col :span="7" id="border">
              <div style="margin-top: 4%">设备名称</div>
            </a-col>
            <a-col :span="9" id="border">
              <div style="margin-top: 4%">设备状态</div>
            </a-col>
            <a-col :span="8" id="border">
              <div style="margin-top: 4%">设备地址</div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="7" id="bordera">
              <div style="margin-top: 4%">轴流风机</div>
            </a-col>
            <a-col :span="9" id="bordera">
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/red.png"
                  style="float: left;margin-left: 6%"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;margin-left: 6%"
                >
                  警报
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  预警
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  正常
                </h4>
              </a-col>
            </a-col>
            <a-col :span="8" id="borderdz">
              <!-- <div style="">北京市海淀区中兴通大厦</div> -->

              北京市海淀区中兴通大厦
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="7" id="bordera">
              <div style="margin-top: 4%">风机盘管</div>
            </a-col>
            <a-col :span="9" id="bordera">
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/red.png"
                  style="float: left;margin-left: 6%"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;margin-left: 6%"
                >
                  警报
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  预警
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  正常
                </h4>
              </a-col>
            </a-col>
            <a-col :span="8" id="borderdz">
              <h6>
                北京市海淀区中兴通大厦
              </h6>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="7" id="bordera">
              <div style="margin-top: 4%">排污泵</div>
            </a-col>
            <a-col :span="9" id="bordera">
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;margin-left: 6%"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  警报
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/yellow.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;margin-left: 6%"
                >
                  预警
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  正常
                </h4>
              </a-col>
            </a-col>
            <a-col :span="8" id="borderdz">
              <h6>
                北京市海淀区中兴通大厦
              </h6>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="7" id="bordera">
              <div style="margin-top: 4%">静压风箱</div>
            </a-col>
            <a-col :span="9" id="bordera">
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;margin-left: 6%"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  警报
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  预警
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/green.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;margin-left: 6%"
                >
                  正常
                </h4>
              </a-col>
            </a-col>
            <a-col :span="8" id="borderdz">
              <h6>
                北京市海淀区中兴通大厦
              </h6>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="7" id="bordera">
              <div style="margin-top: 4%">水箱</div>
            </a-col>
            <a-col :span="9" id="bordera">
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;margin-left: 6%"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  警报
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/white.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;color: #999999;margin-left: 6%"
                >
                  预警
                </h4>
              </a-col>
              <a-col :span="8">
                <img
                  id="img-1"
                  src="../../assets/img/green.png"
                  style="float: left;"
                />
                <h4
                  style="float: left;margin-top: 7px;font-size: 12px;margin-left: 6%"
                >
                  正常
                </h4>
              </a-col>
            </a-col>
            <a-col :span="8" id="borderdz">
              <h6>
                北京市海淀区中兴通大厦
              </h6>
            </a-col>
          </a-row>
        </div>

        <!-- <div style="background-color: #F0F0F0; width: 100%; margin-top: 10px">
        &nbsp;
      </div> -->
        <!--我的项目  内容-->
      </div>
    </div>

    <!-- content结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    returnProject() {
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
#bordera {
  border: 1px solid #dddddd;
  height: 35px;
}
#border {
  border: 1px solid #dddddd;
  height: 35px;
  font-size: 18px;
}
#borderdz {
  border: 1px solid #dddddd;
  lin-height: 35px;
  text-align: center;
  height: 35px;
}
#img-1 {
  width: 10px;
  height: 10px;
  margin-top: 10px;
}
</style>
