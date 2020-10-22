<template>
  <div class="bacc">

    <!-- 电影 -->
    <ul class="movies"
        clearFix>
      <li>
        <h1>猫眼电影</h1>
      </li>
      <li class="switch">正在热映</li>
      <li>即将上映</li>
      <span><a href="javascript:;">
          更多
        </a></span>
      <div class="moveis-item">
        <div class="swiper-container"
             ref="swiper">
          <div class="swiper-wrapper">
            <!-- 遍历商品列表 -->
            <div class="swiper-slide"
                 v-for="item in cartMovies"
                 :key="item.id">
              <img :src="item.img"
                   alt="">
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

        </div>
      </div>
    </ul>

    <!-- 民宿 -->
    <div class="house-waper">
      <!-- 推荐民宿 -->
      <div class="Recommended-waper ">
        <dd>
          <h1>推荐民宿</h1>
        </dd>
        <dd>北京</dd>
        <dd>北京</dd>
        <dd>北京</dd>
        <dd>北京</dd>
        <dd>北京</dd>
        <dd>北京</dd>
        <dd>北京</dd>
        <dd>北京</dd>
      </div>
      <div class="Recommended-waper-List">
        <div class="Recommended">
          <!--商品列表 -->
          <ul class="Recommended-waper-List-item"
              v-if="houseList">
            <li class="Responsive"
                v-for="item in houseList "
                :key="item.poiId"><img :src="item.coverImage"
                   alt="">
              <div class="written-words">
                <span class="title">{{item.title}}</span>
                <span class="locationArea">{{item.locationArea}}</span>
                <span class="price">￥{{item.price}}</span>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <!-- 美食 -->
    <div class="delicious-food-waper">
      <!-- 推荐没事-->
      <div class="Food">
        <ul class="Food-recommendation">
          <li class="Guess-like">
            <h1>猜你喜欢</h1>
          </li>
          <span class="foryou">为您推荐</span>
        </ul>
        <div class="Food-list">
          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner3.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$98</em>
            </div>
          </div>
          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

          <div class="Food-item">
            <div class="Food-item-list">
              <img src="../../static/images/banners/banner2.jpg"
                   alt="">
            </div>
            <div class="describe">
              <em class="shop">晓寿司</em>
              <em class="evaluate">*****评价</em>
              <em class="money">$107</em>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
import Swiper from 'swiper';
export default {
  name: 'Life',
  data () {
    return {
      //cartMovies:[], // 电影列表
    };
  },
  computed: {
    ...mapState({
      // state后边应该去store里边去找自己定义的vuex的文件
      // 猫眼电影
      cartMovies: state => state.Home.cartMovies,
      // 民宿
      houseList: state => state.House.houseList
    }),

  },
  watch: {

  },
  mounted () {
    // console.log(this.cartMovies)
    this.Movies(),
      this.$store.dispatch('getCatMoviesActions')
    // console.log(this.cartMovies);
    this.$store.dispatch('getHouseActions')
  },
  methods: {
    Movies () {
      var swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        observer: true,
        observerParents: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    },


    // 获取电影列表
    async getMovies () {
      const result = await getCatMovies()
      console.log(result);
      this.cartMovies = result.poiInfos
    },

    // 获取民宿列表

    async getHouseList () {
      const result = await getHouse()
      this.houseList = result.dpPoiId
    }
  },
  //注册组建
  components: {

  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.bacc {
  width: 100%;
  background-color: #f8f8f8;
  // 电影
  .movies {
    width: 1190px;
    // height: 49px;
    // background-color: pink;
    margin: -29px auto;
    .moveis-item {
      margin: 0 auto;
      width: 1190px;
      // background-color: #f8f8f8;
      // height: 500px;
      clear: both;
      overflow: hidden;
      .swiper-container {
        top: 3px;
        width: 100%;
        height: 298px;
        img {
          // width: 267px;
          // height: 371px;
          display: block;
          padding: 5px;
          width: 220px;
          height: 298px;
        }
      }
    }
    li {
      float: left;
      font-size: 14px;
      padding: 0 15px;
      text-align: center;
      line-height: 49px;
      cursor: pointer;
    }
    span {
      float: right;
      text-align: center;
      font-size: 14px;
      line-height: 49px;
      font-weight: 30px;
    }
  }

  // 民宿
  .house-waper {
    width: 100%;
    // height: 900px;
    // z-index: 1;
    overflow: hidden;
    background-color: #f8f8f8;
    // height: 1000px;
    .Recommended-waper {
      overflow: hidden;
      width: 1190px;
      // background-color: chartreuse;
      margin: 50px auto;
      // z-index: 1;
      // text-align: center;
      dd {
        
        // text-align: center;
        float: left;
        margin: 15px;
        line-height: 20px;
        font-size: 16px;
      }
    }
    .Recommended-waper-List {
      display: box;
      display: -moz-box;
      display: -webkit-box;
      text-align: left;
      .Recommended {
        width: 1190px;
        // border: 4px solid black;
        margin: 0 auto;
        margin-top: -80px;
        margin-bottom: 50px;
        // height: 684px;
        .Recommended-waper-List-item {
          width: 1190px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          li {
            position: relative;
            width: 370px;
            height: 208px;
            margin: 50px 0;
            img {
              width: 100%;
              height: 100%;
            }
            .written-words {
              width: 370px;
              height: 104px;
              display: flex;
              flex: 1;
              flex-direction: column;
              flex-wrap: wrap-reverse;
              .title {
                width: 370px;
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                color: #333333;
                overflow: hidden;
                white-space: nowrap;
                font-weight: 400;
                text-overflow: ellipsis;
                // margin: 20px 0;
              }
              .locationArea {
                width: 370px;
                line-height: 16px;
                height: 16px;
                font-size: 10px;
              }
              .price {
                width: 370px;
                height: 35px;
                line-height: 35px;
                font-size: 20px;
                color: #ff6600;
              }
            }
          }
        }
        @media screen and (max-width: 1200px) {
          .Recommended-waper-List-item {
            display: flex;
            width: 950px;
            justify-content: space-around;

            li & .written-words {
              // flex: 1;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              flex-wrap: wrap;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

  // 美食
  .delicious-food-waper {
    width: 100%;
    // height: 1000px;
    background-color: #f8f8f8;
    overflow: hidden;
    .Food {
      overflow: hidden;
      width: 1190px;
      line-height: 50px;
      margin: auto;
      // background-color: brown;
      overflow: hidden;
      .Food-recommendation {
        display: flex;
        overflow: hidden;
        .Guess-like {
          float: left;
        }
        .foryou {
          // overflow: hidden;
          float: left;
          font-size: 16px;
          padding: 0 15px;
        }
      }
      .Food-list {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        background-color: aquamarine;

        .Food-item {
          width: 240px;
          height: 260px;
          background-color: #f8f8f8;
          // border: 4px solid black;
          display: flex;
          flex: 0 0 calc(20% - 10px);
          // margin-right: 10px 10px;
          flex-wrap: wrap;
          // flex: 1;
          // margin: 10px;
          // margin: 3px;
          padding: 5px 5px;
          .Food-item-list {
            float: left;
            img {
              width: 100%;
              height: 100%;
              padding: 5px 0;
            }
          }
          .describe {
            // width: 213px;
            // height: 96px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            .shop {
              font-size: 16px;
              font-weight: 400px;
              color: #222222;
            }
            .money {
              color: #ff6600;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
