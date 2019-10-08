<template>
  <div>
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

    <div class="box">
      <img
        src="../../assets/img/nav_icon_return.png"
        style="width: 19px; height: 18px;"
        v-on:click="returnHome()"
      />
      <div class="title">会员中心</div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="juxing">
              <img src="../../assets/img/alipay/chaoji.png" />
              <a class="xiangmu">项目成果导出特权+碰撞检查+VIP特权</a>
              <div class="qian">
                <a class="qina1">￥1699</a>
                <a class="qian2">/年</a>
                <a class="qian3">￥2199/年</a>
              </div>
            </div>
            <div class="tuoyuan1">
              <h1 style="color: #676a6d;padding-left: 50px">立即以1699元开通</h1>
<!--              <img src="../../assets/img/alipay/1699.png" />-->
            </div>
            <div class="zhong">
              <div class="twotitle">
                <img src="../../assets/img/alipay/juxing14.png"  width="100px" />
                <a>会员权益</a>
                <img
                  class="fanzhuan"
                  src="../../assets/img/alipay/juxing14.png"
                  width="100px"
                />
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/1.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">三维查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/2.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">图纸查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/3.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desct1">便携式VR眼镜</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/4.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">VR查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/5.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">数据上传</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/6.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">工程量展示</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/7.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">设备监控</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/8.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">做法显示</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/9.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">工程量导出</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/10.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desct2">动画制作&导出</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/11.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">清单导出</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/12.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">效果展示</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/13.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">模型修改</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/14.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">碰撞检查</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="zhong3">
              <div class="twotitle">
                <img src="../../assets/img/alipay/juxing14.png"  width="100px" />
                <a>特别权益</a>
                <img
                  class="fanzhuan"
                  src="../../assets/img/alipay/juxing14.png"
                  width="100px"
                />
                <div class="jinggao">
                  <p>
                    1.模型优化 对乙方模型进行效果优化，0.5元/M2<br />2.购买20个账号包含一次为期半天的建模软件培训+软件学习资料，购买50个账号包含一次为期两天的建模软件培训+软件学习资料，购买100个账号包含一次为期一周的建模软件培训+软件学习资料。
                  </p>
                </div>
              </div>
            </div>
            <div class="foot">
              <div class="foot1">
                <a class="qina1">￥1699</a>
                <a class="qian2">/年</a><br />
                <a class="qian3">￥2199/年</a>
              </div>
              <div class="foot2">
                <button class="foot3" v-on:click="pay">立即购买</button>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="juxing2">
              <!--                        <img src="../../assets/img/alipay/chaoji.png">-->
              <div class="zhuanxiang">专享会员</div>
              <a class="xiangmu1">项目参与特权+VIP特权</a>
              <div class="qian">
                <a class="qina11">￥799</a>
                <a class="qian22">/年</a>
                <a class="qian3">￥999/年</a>
              </div>
            </div>
            <div class="tuoyuan2">
<!--              <img src="../../assets/img/alipay/1699.png" />-->
              <h1 style="color: #676a6d;padding-left: 50px">立即以799元开通</h1>
            </div>
            <div class="zhong">
              <div class="twotitle">
                <img src="../../assets/img/alipay/juxing142.png"  width="100px"/>
                <a>会员权益</a>
                <img
                  class="fanzhuan"
                  src="../../assets/img/alipay/juxing142.png"
                  width="100px"
                />
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/21.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">三维查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/23.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">图纸查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/24.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desct1">便携式VR眼镜</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/25.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">VR查看</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="zhong1">
              <div class="twotitle">
                <img src="../../assets/img/alipay/juxing142.png"  width="100px" />
                <a>特别权益</a>
                <img
                  class="fanzhuan"
                  src="../../assets/img/alipay/juxing142.png"
                  width="100px"
                />
                <div class="jinggao">
                  <p>
                    1.模型优化 对乙方模型进行效果优化，0.5元/M2<br />2.购买20个账号包含一次为期半天的建模软件培训+软件学习资料，购买50个账号包含一次为期两天的建模软件培训+软件学习资料，购买100个账号包含一次为期一周的建模软件培训+软件学习资料。
                  </p>
                </div>
              </div>
            </div>
            <div class="foot">
              <div class="foot1">
                <a class="qina11">￥799</a>
                <a class="qian22">/年</a><br />
                <a class="qian3">￥999/年</a>
              </div>
              <div class="foot2">
                <button class="foot32" v-on:click="pay">立即购买</button>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="juxing3">
              <img src="../../assets/img/alipay/tequan.png" />
              <div class="xiangmu3">项目数据传输特权+VIP特权</div>
              <div class="qian">
                <a class="qina13">￥1399</a>
                <a class="qian23">/年</a>
                <a class="qian3">￥1799/年</a>
              </div>
            </div>
            <div class="tuoyuan3">
<!--              <img src="../../assets/img/alipay/1399.png" />-->
              <h1 style="color: #676a6d;padding-left: 50px">立即以1399元开通</h1>
            </div>
            <div class="zhong">
              <div class="twotitle">
                <img src="../../assets/img/alipay/juxcing143.png"  width="100px" />
                <a>会员权益</a>
                <img
                  class="fanzhuan"
                  src="../../assets/img/alipay/juxcing143.png"
                  width="100px"
                />
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/31.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">三维查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/32.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">图纸查看</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/33.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desct1">便携式VR眼镜</div>
                  </div>
                </div>

                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/34.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">VR查看</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/35.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">数据上传</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/36.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">工程量展示</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/37.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">设备监控</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="img">
                    <a target="_blank" href="">
                      <img
                        src="../../assets/img/alipay/38.png"
                        alt="图片文本描述"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="desc">做法显示</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="zhong5">
              <div class="twotitle">
                <img src="../../assets/img/alipay/juxcing143.png"  width="100px"/>
                <a>特别权益</a>
                <img
                  class="fanzhuan"
                  src="../../assets/img/alipay/juxcing143.png"
                  width="100px"
                />
                <div class="jinggao">
                  <p>
                    1.模型优化 对乙方模型进行效果优化，0.5元/M2<br />2.购买20个账号包含一次为期半天的建模软件培训+软件学习资料，购买50个账号包含一次为期两天的建模软件培训+软件学习资料，购买100个账号包含一次为期一周的建模软件培训+软件学习资料。
                  </p>
                </div>
              </div>
            </div>

            <div class="foot">
              <div class="foot1">
                <a class="qina13">￥1399</a>
                <a class="qian23">/年</a><br />
                <a class="qian3">￥1799/年</a>
              </div>
              <div class="foot2">
                <button class="foot33" v-on:click="pay">立即购买</button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import global from "@/api/global";
export default {
  name: "test",
  data() {
    return {
      userId: "",
      type: "1",
      visible: false,
      placement: "bottom",
      username: "",
      url: "",
      projectList: [],
      companyId: "",
      version: global.version,
      checkVersion: "display:none",
      checkVersion_update: "display:none",
      versionc: "",
      updateHeight: "",
      updateWidth: "",
      payOrderId: ""
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods: {
    // this.$http.getTradeNo(lastParams).then(res=>{
    //     this.$http.doPayAlipay({
    //         oid: res.data, // 取到的交易订单号
    //         url: yourBackUrl // 成功后的回调地址
    //     }).then(resAlipay=>{
    //         // 避免时间间隙造成的用户误操作，尽管拿到数据了仍然显示loading...直到跳转到支付宝的提供的页面
    //         this.$toast.loading({
    //             mask: true,
    //             message: '加载中...'
    //         });
    //         // 取回来的是支付宝提供的一段自执行的form表单代码
    //         // 这里我把这段代码插入页面中，并手动触发
    //         const div = document.createElement('div');
    //         div.innerHTML = resAlipay.data.form;
    //         document.body.appendChild(div);
    //         document.forms[0].submit();
    //     })
    // })
    returnHome() {
      this.$router.push("/home");
    },

    pay() {
      this.$http
        .request(api.Pay)
        .then(function(response) {
            sessionStorage.setItem("id",response);
          const div = document.createElement("div");
          div.innerHTML = response; //此处form就是后台返回接收到的数据
          document.body.appendChild(div);
          document.forms[0].submit();
        })
        .catch(function(error) {
          console.log(error);
        });
    },


  }
};
</script>

<style scoped>
.responsive {
  /*margin: 0 30px;*/
}
div.img {
  margin: 0 43px;
  float: left;
  width: 100px;
}
#header_page_bg {
  background: linear-gradient(
    90deg,
    rgba(0, 181, 157, 1) 0%,
    rgba(79, 98, 245, 1) 100%
  );
  /*background-size: 100% 100%;*/
  /*height: 100%;*/
  width: 750px;
  align-content: center;
}
div.img:hover {
  border: 1px solid #777;
}

div.img img {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
.desct2{
  width: 140px;
  height: 28px;
  /*padding: 10px;*/
  text-align: center;
  font-size: 1px;
}
.desct1{
  width: 120px;
  height: 28px;
  /*padding: 10px;*/
  text-align: center;
  font-size: 1px;
}
.desc {
  width: 100px;
  height: 28px;
  /*padding: 10px;*/
  text-align: center;
  font-size: 1px;
}
.swiper-container {
}
.title {
  width: 200px;
  height: 34px;
  font-size: 36px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
.box {
  width: 750px;
  /*height: 1900px;*/
  /*background: linear-gradient(90deg, rgba(0, 181, 157, 1) 0%, rgba(79, 98, 245, 1) 100%);*/
  background: url("../../assets/img/alipay/juxing2.png") no-repeat;
  margin-top: 50px;
  text-align: left;
  margin: auto;
}
.juxing {
  width: 625px;
  height: 400px;
  margin: auto;
  background: no-repeat center url("../../assets/img/alipay/juxing12.png");
}
.juxing2 {
  width: 625px;
  height: 400px;
  margin: auto;
  background: no-repeat center url("../../assets/img/alipay/zu9.png");
}
.juxing3 {
  width: 625px;
  height: 400px;
  margin: auto;
  background: no-repeat center url("../../assets/img/alipay/zu931.png");
}
.zhuanxiang {
  /*width:233px;*/
  /*height:57px;*/
  font-size: 60px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(158, 101, 90, 1);
  opacity: 0.99;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  padding-left: 30px;
  padding-top: 8px;
}
.xiangmu1 {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(201, 140, 128, 1);
  padding-left: 30px;
  /*padding-top: 52px;*/
}
.juxing3 img {
  padding-top: 20px;
  padding-left: 30px;
}
.xiangmu3 {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(141, 143, 146, 1);
  padding-left: 30px;
}

.juxing img {
  padding-top: 5%;
  padding-left: 5%;
  display: block;
}
.xiangmu {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  padding-left: 0px;
  color: rgba(209, 159, 71, 1);
  text-align: left;
  padding-left: 5%;
}

.qian {
  padding-left: 5%;
  padding-top: 23%;
  /*padding-bottom: 5%;*/
}

.qina1 {
  width: 139px;
  height: 33px;
  font-size: 44px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(214, 145, 25, 1);
}
.qina11 {
  width: 139px;
  height: 33px;
  font-size: 44px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(158, 101, 90, 1);
}
.qina13 {
  width: 139px;
  height: 33px;
  font-size: 44px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(103, 106, 109, 1);
}

.qian2 {
  width: 26px;
  height: 17px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(214, 145, 25, 1);
}
.qian22 {
  width: 26px;
  height: 17px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(158, 101, 90, 1);
}
.qian23 {
  width: 26px;
  height: 17px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(103, 106, 109, 1);
}

.qian3 {
  width: 93px;
  height: 20px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  text-decoration: line-through;
}
.tuoyuan1 {
  margin: auto;
  height: 100px;
  width: 580px;
  /*background: url("../../assets/img/alipay/yuanjiao111.png") no-repeat;*/
  border-radius: 75px;
  /*background-size: cover;*/
  background: #e6d079;
}
.tuoyuan2 {
  margin: auto;
  height: 100px;
  width: 580px;
  /*background: url("../../assets/img/alipay/yuanjiao111.png") no-repeat;*/
  border-radius: 75px;
  /*background-size: cover;*/
  background: #f6d1c3;
}
.tuoyuan3 {
  margin: auto;
  height: 100px;
  width: 580px;
  /*background: url("../../assets/img/alipay/yuanjiao111.png") no-repeat;*/
  border-radius: 75px;
  /*background-size: cover;*/
  background: #dbe0e4;
}

.tuoyuan1 img,
.tuoyuan2 img,
.tuoyuan3 img {
  /*width: 100%;*/
  /*height: 100%;*/

  margin: 25px 150px;
}
.zhong {
  width: 750px;
  /*height: 400px;*/
  margin-top: 30px;
  background-color: #ffffff;
}
.twotitle {
  width: 750px;
  /*height: 92px;*/
  text-align: center;
}

.twotitle a {
  width: 142px;
  height: 34px;
  font-size: 36px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}
.fanzhuan {
  transform: rotate(180deg);
}

.anliu a:hover {
  background-color: #ebb563;
}

.anliu a {
  width: 79px;
  height: 20px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}
.zhong3 {
  width: 750px;
  /*height: 300px;*/
  margin-top: 560px;
  background-color: #ffffff;
}
.zhong5 {
  width: 750px;
  /*height: 300px;*/
  margin-top: 300px;
  background-color: #ffffff;
}
.zhong1 {
  width: 750px;
  /*height: 300px;*/
  margin-top: 150px;
  background-color: #ffffff;
}
.jinggao {
  width: 519px;
  margin: auto;
}
.jinggao p {
  width: 519px;
  /*height: 24px;*/
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  /*padding-left: 3%;*/
  display: block;
  word-warp: break-word;
  word-break: break-all;
  text-align: left;
  /*text-indent:50px;*/
}
.foot {
  width: 750px;
  /*height: 130px;*/
  background: rgba(250, 250, 250, 1);
  display: flex;
  /*display: flex;*/
  justify-content: space-between;
}

.foot1 {
  flex: 1;
  padding-top: 5%;
  padding-left: 5%;
}

.foot2 {
  flex: 1;
  padding-top: 5%;
  padding-right: 5%;
}

.foot3 {
  width: 271px;
  height: 80px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(214, 146, 28, 1);
  background: url("../../assets/img/alipay/yuanjiao1.png") no-repeat;
  background-size: cover;
  border-radius: 42px;
  border: none;
}
.foot32 {
  width: 271px;
  height: 80px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(162, 107, 97, 1);
  background: url("../../assets/img/alipay/yuanjiao112.png") no-repeat;
  background-size: cover;
  border-radius: 42px;
  border: none;
}
.foot33 {
  width: 271px;
  height: 80px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(103, 106, 109, 1);
  background: url("../../assets/img/alipay/yuanjiao113.png") no-repeat;
  background-size: cover;
  border-radius: 42px;
  border: none;
}
</style>
