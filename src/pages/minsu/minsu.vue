<template>
  <div>
    <div class="header">
      <div class="headerTop">
        <div class="headerIn">
          <div class="logo" @click="goHome">
              <img src="./img/minsulogo.png" alt="" />
          </div>
          <a href="#">下载App</a>
          <a href="#">成为房东</a>
          <router-link to="/login">登录 / 注册</router-link>
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
                      class="liCity2"
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
          <div class="themeTitle">
            <h2>主题精选</h2>
            <span>LIST</span>
          </div>
        </div>
        <div class="pic">
          <img src="./img/theme/1.png" alt="" />
          <div class="shadow1"></div>
          <div class="shadow2"></div>
          <span>网红Ins风</span>
        </div>
        <div class="pic">
          <img src="./img/theme/2.png" alt="" />
          <div class="shadow1"></div>
          <div class="shadow2"></div>
          <span>四合院</span>
        </div>
        <div class="pic">
          <img src="./img/theme/3.png" alt="" />
          <div class="shadow1"></div>
          <div class="shadow2"></div>
          <span>私人影院</span>
        </div>
        <div class="pic">
          <img src="./img/theme/4.png" alt="" />
          <div class="shadow1"></div>
          <div class="shadow2"></div>
          <span>美食烹饪</span>
        </div>
        <div class="pic">
          <img src="./img/theme/5.png" alt="" />
          <div class="shadow1"></div>
          <div class="shadow2"></div>
          <span>咖啡体验</span>
        </div>
      </div>
      <div class="pinpaiminsu">
        <div class="pinpaiminsuhead">
          <h2>品牌民宿</h2>
          <span>BRAND</span>
        </div>
        <div class="pinpaiminsubody">
          <minsuzujian :brand="brand" />
        </div>
      </div>
      <div class="enter">
        <div class="enterTitle">
          <h2>热门入住地</h2>
          <span> LDA </span>
        </div>
        <div class="hotPlace">
          <ul>
            <li class="current">
              <div class="name">北京大兴国际机场</div>
              <div class="score">13%选择</div>
            </li>
            <li>
              <div class="name">国贸CBD/四惠</div>
              <div class="score">11%选择</div>
            </li>
            <li>
              <div class="name">果园环岛/通州区</div>
              <div class="score">11%选择</div>
            </li>
            <li>
              <div class="name">劲松/潘家园/宋家庄</div>
              <div class="score">15%选择</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footerTop">
        <div class="more">查看更多民宿</div>
        <div class="insurance">
          <img src="./img/foot/1.png" alt="">
          </div>
        </div>
        <div class="footerMid">
          <ul>
            <li>
              热门城市
            </li>
            <li>
              北京的民宿
            </li>
            <li>
              上海的民宿
            </li>
            <li>
              上海的民宿
            </li>
            <li>
              上海的民宿
            </li>
            <li>
              上海的民宿
            </li>
            <li>
              上海的民宿
            </li>
            </ul>
        
          <ul>
            <li>
              热门房源
            </li>
            <li>
              有厨具的民宿
            </li>
            <li>
              有洗衣机的民宿
            </li>
            <li>
              有洗衣机的民宿
            </li>
            <li>
              有洗衣机的民宿
            </li>
            <li>
              有洗衣机的民宿
            </li>
            <li>
              有洗衣机的民宿
            </li>
            </ul>
      </div>
      <div class="footerBottom">
        <div class="bottom1">
          <h5>公司信息</h5>
          <ul>
            <li>关于我们</li>
            <li>工作机会</li>
            </ul>
        </div>
        <div class="bottom2">
          <h5>网站帮助</h5>
          <ul>
            <li>规则中心</li>
            <li>网站地图</li>
            <li>民宿推荐</li>
            </ul>
        </div>
        <div class="bottom3">
          <h5>人工客服</h5>
          <ul>
            <li>客服电话</li>
            <li>登录问题</li>
            </ul>
        </div>
        <div class="bottom4">
          <img src="./img/foot/2.png" alt="">
          <span>扫码下载美团民宿 APP</span>
        </div>
        
      </div>
      </div>
      
    </div>
  
</template>

<script>
import Swiper from "swiper";
import minsuzujian from "./minsuzujian";
export default {
  name: "minsu",
  components: {
    minsuzujian,
  },
  data() {
    return {
      add: false,
      showArea: false,
      change :0,
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
      brand: [
        {
          url:
            "https://p1.meituan.net/iphoenix/afb237f10e4ec01f09065791bcf2bf413056184.jpg",
          title: "【壹捌】极简北欧风现代艺术大3居/1层/三里屯太古里@CactusSpace",
          price: 850,
          address: "北京·朝阳区",
        },
        {
          url:
            "https://p0.meituan.net/phoenix/08d0010014002f0e4b91a3d2a40f791e1658172.jpg",
          title:
            "含早晚餐「森岚·逸云」5# 舒适家庭房 | <隐市乡居>Hazy Forest Hill Room5",
          price: 485,
          address: "北京·怀柔区",
        },
        {
          url:
            "https://p0.meituan.net/iphoenix/a9c03a7be2d87aac0ea0ffa33503cc121489725.jpg",
          title:
            "延庆大隐于世《冬奥小镇三号院》野鸭湖·玉渡山·龙庆峡拍照拍摄小院",
          price: 2999,
          address: "北京·延庆区",
        },
        {
          url:
            "https://p0.meituan.net/iphoenix/69bd0e345c634356880d124a8901912a8830064.jpg",
          title:
            "藏幽山水境 | 茶道别院 | 青瓦【怀柔民宿】怀柔雁栖湖风景区 怀柔虹鳟鱼一条沟/神堂峪 怀柔慕田峪/红螺寺 怀柔风景区",
          price: 2620,
          address: "北京·怀柔区",
        },
        {
          url:
            "https://p1.meituan.net/iphoenix/78c3cb44b8dc1ba57ec565f6020c9dac5236149.jpg",
          title:
            "NUTS「私院」泡池客厅餐厅厨房茶室III【怀柔民宿】怀柔青龙峡 怀柔雁栖湖风景区 怀北漂流 雁栖湖 红螺寺 怀柔风景区",
          price: 2980,
          address: "北京·怀柔区",
        },
        {
          url:
            "https://p1.meituan.net/iphoenix/234589825d6f0b4b8980815a89862d4a1667333.jpg",
          title: "「肆舍」玉渡山 龙庆峡 原生态独立小院",
          price: 798,
          address: "北京·延庆区",
        },
      ],
    };
  },
  methods: {
    // 地址显示/隐藏
    address() {
      this.add = !this.add;
      this.showArea = !this.showArea;
    },
    //创建轮播
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
    //去首页
    goHome(){
      this.$router.replace('/')
    }
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
body {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
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
              ul {
                display: flex;
                flex-wrap: wrap;
              }
              .liCity {
                line-height: 36px;
                margin: 0px 3px 10px 0px;
                padding: 0px 13px;
                border: 1px solid #333;
                border-radius: 4px;
                font-size: 14px;
              }
              .liCity2{
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
        background: white;
      }
      .searchRight {
        width: 133px;
        height: 57px;
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
    width: 1150px;
    height: 362px;
    margin: 0 auto;
    // display: flex;
    .themeHead {
      width: 1150px;
      height: 24px;
      margin: 0 auto;
      // display: flex;
      // flex-wrap: wrap ;
      // flex-direction: row;
      // align-items: flex-start;
      .themeTitle {
        position: relative;
        h2 {
          font-size: 24px;
          line-height: 24px;
          // float: left;
          display: inline-block;
        }
        span {
          // float: left;
          position: absolute;
          font-size: 10px;
          margin-left: 4px;
          color: #cbcccd;
          font-style: oblique;
          display: inline-block;
          left: 96px;
          top: 0px;
        }
      }
    }
    .pic {
      width: 223px;
      height: 223px;
      border-radius: 8px;
      // overflow: hidden;
      float: left;
      margin-right: 7px;
      margin-top: 15px;
      position: relative;
      z-index: 5;
      span {
        font-size: 18px;
        color: #fff;
        display: inline-block;
        position: absolute;
        top: 180px;
        left: 15px;
        z-index: 8;
      }
      img {
        position: relative;
        width: 100%;
        z-index: 6;
        border-radius: 8px;
        overflow: hidden;
      }
      .shadow1 {
        width: 200px;
        height: 200px;
        border-radius: 8px;
        background: #e1e3ea;
        position: absolute;
        top: 35px;
        left: 12px;
        z-index: 4;
        overflow: visible;
      }
      .shadow2 {
        width: 180px;
        height: 180px;
        border-radius: 8px;
        background: #eceef4;
        position: absolute;
        top: 65px;
        left: 18px;
        z-index: 3;
        overflow: visible;
      }
    }
  }
  .pinpaiminsu {
    .pinpaiminsuhead {
      width: 1150px;
      margin: 0 auto;
      position: relative;
      h2 {
        font-size: 24px;
        line-height: 24px;
        color: #252626;
      }
      span {
        background: #e5b46a;
        font-size: 10px;
        color: #fff;
        font-style: italic;
        position: absolute;
        top: 0;
        left: 98px;
      }
    }
    .pinpaiminsubody {
      width: 1180px;
      height: 759px;
      margin: 0 auto;
    }
  }
  .enter {
    height: 120px;
    width: 1180px;
    margin: 0 auto;
    .enterTitle {
      width: 1150px;
      height: 24px;
      margin: 0 auto;
      position: relative;
      h2 {
        font-size: 24px;
        line-height: 24px;
        display: inline-block;
      }
      span {
        position: absolute;
        font-size: 10px;
        margin-left: 4px;
        color: #cbcccd;
        font-style: oblique;
        display: inline-block;
        left: 120px;
        top: 20px;
      }
    }
    .hotPlace {
      ul {
        height: 48px;
        width: 1165px;
        li {
          height: 36px;
          padding: 0 15px 12px 15px;
          float: left;
          margin-top: 30px;
          .name {
            font-size: 16px;
            color: #7d7e80;
          }
          .score {
            font-size: 12px;
            color: #cbcccd;
            margin-top: 6px;
          }
        }
      }
    }
  }
}
.footer {
  width: 100%;
  background-color: rgb(255, 255, 255);
  .footerTop {
    width: 1180px;
    margin: 0 auto;
    .more {
      box-sizing: border-box;
      width: 1150px;
      height: 49px;
      margin: 0 auto;
      padding: 16px 0;
      font-weight: 700;
      font-size: 16px;
      display: block;
      background: #fff;
      text-align: center;
      border-radius: 8px;
      padding: 16px 0;
    }
  }
  .footerMid {
    width: 1170px;
    height: 80px;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    ul {
      background-color: rgb(255, 255, 255);
      min-width: 1170px;
      height: 40px;
      padding: 0 0 20px;
      margin: 10px auto;
      box-sizing: border-box;
      li {
        color: #666;
        font-size: 14px;
        float: left;
        margin-right: 20px;
      }
    }
  }

  .footerBottom {
    width: 1170px;
    height: 211px;
    background-color: rgb(255, 255, 255);
    margin: 20px auto 100px;
    position: relative;
    h5 {
      color: #333;
      font-size: 18px;
    }
    li {
      font-size: 14px;
      margin: 15px 15px 15px 0;
      color: #7d7e80;
    }
    .bottom1 {
      width: 90px;
      height: 93px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .bottom2 {
      width: 90px;
      height: 130px;
      position: absolute;
      left: 300px;
    }
    .bottom3 {
      width: 185px;
      height: 118px;
      position: absolute;
      left: 600px;
    }
    .bottom4 {
      width: 200px;
      height: 200px;
      position: absolute;
      left: 900px;
    }
  }
}
</style>
