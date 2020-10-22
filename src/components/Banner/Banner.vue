<template>
  <div class="banner-background">
    <div class="banner-wraper">

      <div class="banner-container">

        <div class="swiper-container"
             ref="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../static/images/banners/banner1.png"
                   alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/images/banners/banner3.jpg"
                   alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- 轮播图右侧麦克风和注册 -->
        <div class="Microphone-lock">
          <div class="Microphone">
            <img src="../../static/images/banners/banner-right1.jpg"
                 alt="">
          </div>
          <div class="Login-block">

            <img src="../../static/images/banners/avatar.jpg"
                 alt="">
            <button>
              <router-link to="/login">注册</router-link>
            </button>

            <button>
              <router-link to="/register">立即登录</router-link>
            </button>

          </div>
        </div>
      </div>
      <div class="banner-bottom">
        <div class="banner-bottom-one">
          <img src="../../static/images/banners/banner-bottom1.png"
               alt="">
        </div>
        <div class="banner-bottom-two">
          <img src="../../static/images/banners/banner-bottom2-2.jpg"
               alt="">
        </div>
        <!-- 合作和二维码 -->
        <div class="cooperation-code">
          <div class="banner-bottom-three">
            <img src="../../static/images/banners/banner-right2.jpg"
                 alt="">
          </div>
          <div class="banner-bottom-four">
            <!-- <img src="../../static/images/banners/banner-right2.jpg" alt=""> -->
            <img src="../../static/images/banners/qcod.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  name: 'Banner',
  data () {
    return {

    };
  },
  mounted () {
    this.bannerContainer()
  },
  methods: {
    bannerContainer () {
      let mySwiper = new Swiper(this.$refs.banner, {
        loop: true, // 循环模式选项
        observer: true,
        observerParents: true,

        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      })
    },
  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// @media screen and (min-width: 990px) {
.banner-background {
  width: 100%;
  background-color: #f8f8f8;
  margin: 0 auto;
  .banner-wraper {
    position: relative;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin: 0 auto;
    width: 1190px;
    overflow: hidden;
    // background-color: violet;
    &::before {
      content: "";
      display: block;
      overflow: hidden;
    }
    .banner-container {
      width: 950px;
      .swiper-container {
        width: 100%;
        .swiper-wrapper {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .banner-bottom {
      width: 950px;
      height: 177px;
      // background-color: burlywood;
      margin-top: 10px;
      .banner-bottom-one {
        width: 270px;
        height: 175px;
        // background-color: #bfa;
        position: absolute;
        margin-left: 201.5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .banner-bottom-two {
        width: 270px;
        height: 175px;
        // background-color: blue;
        position: absolute;
        margin-left: 481px;
        img {
          width: 100%;
          height: 175px;
        }
      }
      .cooperation-code {
        position: relative;
        // right: -768px;
        // top: 0;
        left: 385px;

        .banner-bottom-three {
          position: relative;
          float: left;
          display: none;
          height: 165 px;
          // width: 175px;
          img {
            position: absolute;
            width: 175px;
            height: 175px;
            margin-left: -35px;
          }
        }
        @media (min-width: 1100px) {
          .banner-bottom-three {
            display: block;
          }
        }
        .banner-bottom-four {
          width: 230px;
          height: 175px;
          // background-color: black;
          float: left;
          margin-left: 154px;
          img{
            width: 100%;
            height: 100%;
          }

        }
      }
    }
    .banner-container {
      width: 947px;
      height: 240px;
      margin-top: 10px;
      margin-left: 3px;
      background-color: #e8e8e8;
      .swiper-container {
        width: 550px;
        height: 240px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .Microphone-lock {
        position: relative;
        right: -768px;
        top: -240px;
        .Login-block {
          // position: absolute;
          width: 230px;
          height: 240px;
          background-color: #ffffff;
          right: 0;
          top: 10px;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 0 auto;
          }
          button {
            display: block;
            width: 120px;
            height: 40px;
            border-radius: 30px 30px 30px 30px;
            // text-align: center;
            margin: 0 auto;
          }
          button:hover {
            background-color: gray;
          }
        }
        .Microphone {
          // position: relative;
          // float: right;
          // position: absolute;
          float: left;
          // left: 770px;
          top: -241px;
          width: 178px;
          height: 240px;
          display: none;
          z-index: 5;
          img {
            // position: absolute;
            margin-left: -10px;
            // float: left;
            top: -240px;
            width: 100%;
            height: 100%;
          }
        }
        @media (min-width: 1100px) {
          .Microphone {
            display: block;
          }
        }
      }
    }
  }
}
// }
</style>
