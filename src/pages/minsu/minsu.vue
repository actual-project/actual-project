<template>
  <div>
    <div class="header">
      <div class="headerTop">
        <div class="headerIn">
          <div class="logo">
            <img src="./img/minsulogo.png" alt="" />
          </div>
          <a href="#">下载App</a>
          <a href="#">成为房东</a>
          <a href="#">登录 / 注册</a>
        </div>
      </div>
      <div class="headerBottom">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="smallSwiper">
                <img src="./img/swiper/1.jpg" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="smallSwiper">
                <img src="./img/swiper/2.jpg" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="smallSwiper">
                <img src="./img/swiper/3.png" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="smallSwiper">
                <img src="./img/swiper/4.jpg" alt="" />
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
        <div class="search">
          <div class="searchLeft">
            <div :class="{ searchLeftIn: add }" @click="address">
              北京<span class="iconfont icon-queding"></span>
            </div>
            <div class="area" v-show="showArea">
              <div class="areaSearch">
                <span class="iconfont icon-fangdajing"></span>
                <input type="text" placeholder="城市名称或拼音" />
              </div>
              <div class="city">
                <div class="usefulCity">
                  <ul>
                    <li
                      class="liCity"
                      v-for="(item, index) in items"
                      :key="index"
                    >
                      {{ item.city }}
                    </li>
                  </ul>
                </div>
                <div class="normalCity"></div>
              </div>
            </div>
          </div>
          <div class="searchMiddle"></div>
          <div class="searchRight">
            <div class="searchRightIn">查找民宿</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="theme">
        <div class="themeHead">
          <h2>主题精选</h2>
          <span>LIST</span>
        </div>
        <!-- <div class="pic">
          <img src="./img/1.png" alt="">
        </div>
        <div class="pic">
          <img src="./img/2.png" alt="">
        </div>
        <div class="pic">
          <img src="./img/3.png" alt="">
        </div>
        <div class="pic">
          <img src="./img/4.png" alt="">
        </div>
        <div class="pic">
          <img src="./img/5.png" alt="">
        </div> -->
      </div>
      <div class="pinpaiminsu"></div>
      <div class="remenruzhudi"></div>
    </div>
    <div class="footer">
      <div class="footerTop"></div>
      <div class="footerMid"></div>
      <div class="footerBottom"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "minsu",
  data() {
    return {
      add: false,
      showArea: false,
      items: [
        { city: "北京" },
        { city: "石家庄" },
        { city: "呼和浩特" },
        { city: "阿萨姆奶茶" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
        { city: "北京" },
      ],
    };
  },
  methods: {
    address() {
      this.add = !this.add;
      this.showArea = !this.showArea;
    },
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        /* ... */
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
        // 如果需要滚动条
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
  created() {
    // this.initSwiper();
  },
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
@import "../../../node_modules/swiper/css/swiper.css";
@import "../../../public/css/iconfont.css";
.header {
  background-color: rgb(255, 255, 255);

  .headerTop {
    height: 70px;
    min-width: 1180px;
    background-color: rgb(255, 255, 255);
    .headerIn {
      max-width: 1180px;
      margin: 0px auto;
      img {
        display: block;
        float: left;
      }
      a {
        display: block;
        float: right;
        font-size: 14px;
        line-height: 70px;
        text-decoration: none;
        &:hover {
          color: rgb(0, 170, 255) !important;
        }
      }
      a:nth-child(2) {
        margin-left: 16px;
      }
      a:nth-child(3) {
        margin-left: 16px;
      }
    }
  }
  .headerBottom {
    .swiper-container {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .search {
      position: relative;
      bottom: 90px;
      display: flex;
      justify-content: center;
      z-index: 10;

      .searchLeft {
        width: 200px;
        height: 57px;

        border-radius: 10px 0 0 10px;
        background: white;
        font-size: 16px;
        line-height: 57px;
        text-align: center;
        .searchLeftIn {
          width: 200px;
          height: 57px;

          border-radius: 10px 0 0 10px;
          background: white;
          font-size: 16px;
          line-height: 57px;
          text-align: center;
          color: rgb(0, 170, 255);
        }
        .area {
          height: 630px;
          width: 758px;
          background: rgb(255, 255, 255);
          padding: 12px;
          box-sizing: border-box;
          margin-top: 5px;

          .areaSearch {
            width: 700px;
            height: 40px;
            background: rgb(238, 238, 238);
            font-size: 16px;
            color: rgb(216, 216, 216);
            line-height: 40px;
            display: block;
            padding-left: 10px;
            margin-bottom: 10px;
            input {
              font-size: 14px;
              height: 40px;
              width: 653px;
              background: rgb(238, 238, 238);
            }
            span {
              display: block;
              float: left;
            }
          }
          .city {
            width: 705px;
            // height: 92px;
            display: flex;
            .usefulCity {
              display: flex;
              height: 94px;
              flex-wrap: wrap;
              flex-direction: row;
              display: flex;
              justify-content: center;
              ul{
                display: flex;
                flex-wrap:wrap
              }
              .liCity {
                line-height: 36px;
                margin: 0px 3px 10px 0px;
                padding: 0px 13px;
                border: 1px solid #159cff;
                border-radius: 4px;
                color: rgb(0, 170, 255);
                font-size: 14px;
                
              }
            }
          }
        }
      }

      .searchMiddle {
        width: 426px;

        height: 57px;
        // border: 1px solid red;
        background: white;
      }
      .searchRight {
        width: 133px;
        height: 57px;
        // border: 1px solid red;
        border-radius: 0 10px 10px 0;
        background: white;
        .searchRightIn {
          width: 121px;
          height: 44px;
          background-color: #ffdb25;
          border-radius: 10px;
          font-size: 18px;
          text-align: center;
          line-height: 44px;
          margin: 6px auto;
        }
      }
    }
  }
}
.main {
  background-color: rgb(255, 255, 255);
  .theme {
    .themeHead {
      max-width: 1150px;
      margin: 0 auto;
      h2 {
        font-size: 24px;
        line-height: 24px;
        float: left;
      }
      span {
        float: left;
        font-size: 10px;
        margin-left: 4px;
        color: #cbcccd;
        font-style: oblique;
      }
    }
  }
}
footer {
  background-color: rgb(255, 255, 255);
}
</style>
