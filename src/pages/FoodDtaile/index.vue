<template>
  <div class="detail-warp ">
    <!-- 导航 -->
    <div class="breadcrumbs">
      <a href="javascript:;">北京美团 > </a>
      <a href="javascript:;">北京美食 > </a>
      <a href="javascript:;">北京火锅</a>
    </div> 
    <!-- 店铺介绍 -->
    <div class="dalhead">
      <h2>福口居（北太平庄店）</h2>
      <p class="shop-detail"><el-rate v-model="value1"></el-rate>{{value1}}分人均￥999</p>
      <p class="shop-address">地址：海淀区北太平庄北三环中路40号（近国美）</p>
      <p class="shop-address">电话：010-62382412</p>
      <p class="shop-address last">营业时间：周一至周日 11:00-14:30 16:00-22:30</p>
      <div class="service-wrap">
        <div>
          <i class="iconfont">图标</i>
          <span>提供wifi</span>
        </div>
        <div>
          <i class="iconfont">图标</i>
          <span>停车位</span>
        </div>
      </div>
    </div>
      <!-- 猜你喜欢右侧 -->
    <div class="food-wrap clearfix">
      <div class="islike">
        <p class="like-tit">猜你喜欢</p>
        <div v-for="item in rightLikeList" :key="item.id">
            <img :src="item.img" alt="">
            <p class="like-name">{{item.name}}</p>
            <p class="like-dingwei">{{item.adress}}</p>
            <p class="like-price">￥{{item.price}}</p>
        </div>
      </div>
      
      <p class="shop-tit">商家团购及优惠</p>
      <!-- 未登录 -->
        <div  class="login" v-if="!userInfo">
          <img src="../../static/images/shopDetail/toLogin.png" alt="">
          <p>请登录后查看详细团购优惠</p>
          <el-button round>立即登录</el-button>
        </div>
        <!-- 菜品介绍 -->
      <el-card class="foodList" v-else>
        <div class="foodList">
                <p class="tit">5款堂食套餐</p>
        <div class="footItem">
          <img src="" alt="">
          <div>
            <p class="foot-name">XXXXX</p>
            <p class="slod">已售xx</p>
            <p class="price">￥<span>1028</span><i>门店价￥1335</i></p>
          </div>
        </div>

        </div>
      </el-card>
      </div>
    <!-- 推荐菜 -->
    <p class="shop-tit">推荐菜</p>
    <div class="recommend">
      <ul class="img">
        <li class="img-item">
          <img src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c" alt="极品羊肉">
          <p>极品羊肉￥32</p>
        </li>
        <li class="img-item">
          <img src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c" alt="极品羊肉">
          <p>极品羊肉￥32</p>
        </li>
        <li class="img-item">
          <img src="https://qcloud.dpfile.com/pc/en3u7B4yLwPgM8zHWpHXrXa04lTlbaycSTVhy9_bd55SVYM2_sJPKT7vzoJzDGX75g_3Oo7Z9EXqcoVvW9arsw.jpg" alt="极品羊肉">
          <p>极品羊肉￥32</p>
        </li>
        <li class="img-item">
          <img src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c" alt="极品羊肉">
          <p>极品羊肉￥32</p>
        </li>
        <li class="img-item">
          <img src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c" alt="极品羊肉">
          <p>极品羊肉￥32</p>
        </li>
        <li class="img-item">
          <img src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c" alt="极品羊肉">
          <p>极品羊肉￥32</p>
        </li>
      </ul>
      <div class="font">
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
        <span>火kakak锅</span>
      </div>
    </div>
    <!-- 评论 -->
    <p class="shop-tit two">{{commentInfo.total}}条网友点评</p>
    <div class="review-wrap">
      <ul class="review-top">
        <li class="rt-item" v-for="tag in commentInfo.tags" :key="tag.tag">
          <span>{{tag.tag}}({{tag.count}})</span>
        </li>
      </ul>
      <p class="only">
        <span class="yes"></span>
        只看有图片的评论
      </p>
      <div class="review-item" v-for="item in commentInfo.comments" :key="item.userId">
        <div class="avatat">
          <img :src="item.userUrl?item.userUrl:'/images/01.jpg'" alt="" >
        </div>
        <div class="review-detail">
          <div class="review-border">
                      <div class="name">{{item.userName}}</div>
          <div class="date-time">2020年04月22日</div>
          <el-rate :value="item.star/10" ></el-rate>
          <p class="content">{{item.comment}}</p>
          <p class="reply">{{item.merchantComment}}</p>
          <div class="showImg">
            <div class="img-item" v-for="pic in item.picUrls" :key="pic.id">
              <img :src="pic.url" alt="">
            </div>
          </div>

          </div>
          <p class="zan" @click="gaveLike">
            <i class="iconfont icon-dianzan-copy"></i> 赞
          </p>
        </div>
      </div>
    </div>
    <!-- 分页组件 -->
    <!-- <el-pagination
      class="pagetion"
      background
      layout="prev, pager, next"
      :total="9860">
    </el-pagination> -->
    <!-- 附近商家 -->
    <p class="shop-tit">附近商家</p>
    <el-card>
      <div  class="footer-shop">
        <div class="footer-item" v-for="item in shopLikeList" :key="item.id">
          <img :src="item.headIcon" alt="">
          <p class="footer-name">{{item.name}}</p>
          <p class="footer-score">{{item.score}}分&nbsp;&nbsp;&nbsp;{{item.sold}}人消费</p>
          <p class="footer-hot">{{item.park}}</p>
          <p class="footer-price">￥<span>{{item.avgPrice}}</span>起</p>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
import {getFoodDetail,getShopList} from '@/api'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'FoodDtaile',
  data() {
      return {
        shopInfo:{},//当前商家
        value1:4,//评价评分
        // isLogin:true,//是否登录
        userInfo:{},//当前登录用户
      }
  },
  mounted() {
    this.getFoodShop()
    //从浏览器缓存获取用户信息
    this.userInfo = JSON.parse(localStorage.getItem('MTuserInfo'))
    // 获取商家列表 以及推荐商店
    // this.$store.dispatch('getShopLikeListActions')
    // this.$store.dispatch('getShopListActions')
    this.getShop()
    this.getShopLike()
    this.getRightShop()
    this.getComment()
  },
  computed: {
    ...mapState({
      shopLikeList:state=>state.shopList.shopLikeList,
      rightLikeList:state =>state.shopList.rightLikeList,
      commentInfo:state =>state.shopList.commentInfo
    })
  },
  methods: {
    //根据id 获取对应店家美食详情
  async  getFoodShop(){
        let id = this.$route.params.id*1
        const result = await getFoodDetail()
        this.shopInfo = result.find(item=>{
          if(item.id === id){
            return item
          }
        })
    },
    //点赞
    gaveLike(){
      if(!this.userInfo.username){
        alert('请先登录')
      }
    },
    //获取对应action
     ...mapActions({
      getShop:'getShopLikeListActions',
      getShopLike:'getShopListActions',
      getRightShop:'getRightShopLikeListActions',
      getComment:'getCommentListActions'
     })
  },
 
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.detail-warp{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  &::before{
    content: '';
    display: block;
    overflow: hidden;
  }
  // 路径导航
  .breadcrumbs{
    width: 100%;
    background-color: antiquewhite;
    margin: 20px 20px 20px 0;
  }
  // 商家介绍
  .dalhead{
        //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;

    // width: 100%;
    height: 300px;
    padding: 15px;
    background-color: greenyellow;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 20px;
    h2{
      font-size: 26px;
      color: #666;
      height: 37px;
      line-height: 37px;
      font-weight: normal;
    }
    .shop-detail{
      border-bottom: 1px solid #F8F8F8;
      height: 30px;
      line-height: 24px;
      display: flex;
      position: relative;
      .el-rate{
        position: relative;
        top: 3px;
      }
    }
    .shop-address{
      font-size: 14px;
      height: 20px;
      line-height: 20px;
      //vertical-align: top;
      margin-top: 10px;
      &.last{
        padding-bottom: 10px;
        border-bottom: 1px solid #F8F8F8;
      }
    }
    .service-wrap{
      display: flex;
      div{
        display: flex;
        flex-direction: column;
      }
    }
  }
  // 商家团购及优惠
  .shop-tit{
    font-size: 20px;
    font-weight: bold;
    color: #333;
    &.two{
      font-weight: normal;
      margin-bottom: 10px;
    }
  }
  //未登录
    .login{
    width: 80%;
    // float: left;
    height: 210px;
    padding: 30px 0;
    background: skyblue;
    text-align: center;
    //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
    img{
      display: block;
      margin: 0 auto;
      width: 160px;
      height: 120px;
    }
    p{
      font-size: 16px;
      margin: 10px 0 14px 0;
    }
    .el-button{
      background-color: #13D1BE;
      border: 1px solid #13D1BE;
      color: #fff;
    }
  }
  //
  .foodList{
    float: left;
    width: 80%;
    box-sizing: border-box;
    padding: 10px;
    background-color: hotpink;
    .tit{
      font-size: 28px;
      font-weight: bold;
    }
    .footItem{
      height: 200px;
    }
  }
  //猜你喜欢列表
  .islike{
    // float: right;
        //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 432px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    width:18%;
    padding: 10px 20px;
    box-sizing: border-box;
    // height: 1000px;
    .like-tit{
      font-size: 16px;
      line-height: 22px;
      margin: 0 0 12px;
      color: #333;
    }
    img{
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .like-name{
      font-size: 14px;
    line-height: 20px;
    color: #222;
    margin: 10px 0 4px;
    }
    .like-dingwei{
      font-size: 12px;
    line-height: 17px;
    color: #999;
    }
    .like-price{
      font-size: 22px;
    color: #f60;
    line-height: 27px;
    }

  }
  //推荐菜
  .recommend{
        //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;

    height: 400px;
    background: yellow;
    width: 80%;
    box-sizing: border-box;
    padding: 30px 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 40px;
    .img{
      display: flex;
      justify-content: space-around;
      .img-item{
        width: 14%;
        img{
          border-radius: 5px;
          width: 100%;
        }
      }
    }
    .font{
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      padding: 25px 0 0 16px;
      span{
        display: inline-block;
        font-size: 16px;
        margin: 0 20px 19px 0;
      }
    }
  }
  // 评论区
  .review-wrap{
    background: red;
    width: 80%;
    padding: 0 20px 40px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 5px;
        //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;

    .review-top{
      display: flex;
      flex-wrap: wrap;
      .rt-item{
        width: 76px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        padding: 0 10px;
        border: 1px solid #eee;
        border-radius: 2px;
        margin: 14px 10px 0 0;
        font-size: 14px;
      }
    }
    //只看评论
    .only{
      margin-top: 30px;
      font-size: 14px;
    }
    .review-item{
      background: purple;
      display: flex;
      padding-right: 10px;
      margin-top: 30px;
      .avatat{
        width: 10%;
        img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .review-detail{
        position: relative;
        width: 100%;
        .review-border{
          border-bottom: 1px solid #eee;
          .name{
            font-size: 16px;
          }
          .date-time{
            float: right;
            font-size: 12px;
          }
          .el-rate{
            margin: 5px 0 15px 0;
          }
          .content{
            font-size: 14px;
            color: #333;
          }
          .reply{
            font-size: 14px;
            color: #31bbac;
            padding-top: 12px;
          }
          .showImg{
            padding-top: 10px;
            cursor: pointer;
            display: flex;
            margin-bottom: 40px;
            .img-item{
              width: 16%;
              margin: 10px 20px 10px 5px;
              img{
                width: 120px;
                height: 100px;
              }
            }
        }

        }
        .zan{
          position: absolute;
          right: 4px;
          bottom: 15px;
          font-size: 14px;
          .icon-dianzan-copy{
            color: #eee;
          }
        }
      }
    }

  }
  //底部附近商家
  .footer-shop{
    width: 1200px;
    display: flex;
    // justify-content: space-evenly;
    flex-wrap: wrap;
    .footer-item{
      width: 18%;
      height: 241px;
      margin: 0 10px 22px 10px;
      img{
        display: block;
        width: 100%;
        margin: 0 auto;
        border-radius: 4px;
      }
      .footer-name{
        font-size: 16px;
        line-height: 22px;
        color: #222;
        margin: 10px 0 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;}
      .footer-score{
        margin-top: 8px;
        background: #fff;
        border-radius: 4px;
        color: #999;
      }
      .footer-hot{
        margin: 1px 0 3px;
        min-height: 33px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      .footer-price{
        font-size: 14px;
        line-height: 27px;
        color: #f60;
        span{
          font-size: 22px;
        }
      }

    }
  }

}

</style>
