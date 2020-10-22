<template>
  <div class="detail-warp " v-if="shopInfo">
    <!-- 导航 -->
    <div class="breadcrumbs">
      <router-link to="/">北京美团 ></router-link>
      <router-link to="/food">北京美食 ></router-link>
      <a href="javascript:;">北京火锅</a>
    </div>  
    <!-- 店铺介绍 -->
    <div class="dalhead" v-if="shopInfo">
      <h2>{{shopInfo.name}}</h2>
      <p class="shop-detail"><el-rate :value="shopInfo.score"></el-rate>{{shopInfo.score}}分人均￥{{shopInfo.meanprice}}</p>
      <p class="shop-address">地址：{{shopInfo.address}}</p>
      <p class="shop-address">电话：{{shopInfo.phone}}</p>
      <p class="shop-address last">营业时间：{{shopInfo.time}}</p>
      <div class="service-wrap">
        <div>
          <i class="iconfont icon-wuxianwangWi-Fixianxing"></i>
          <span>提供wifi</span>
        </div>
        <div>
          <i class="iconfont icon-tingche"></i>
          <span>停车位</span>
        </div>
      </div>
      <div class="shop-logo">
        <img :src="shopInfo.url" alt="" class="first">
        <ul class="shop-phone">
          <li v-for="img in shopInfo.pwall" :key="img">
            <img :src="img" alt="">
          </li>
        </ul>
      </div>
    </div>
      <!-- 猜你喜欢右侧 -->
    <div class="food-wrap clearfix">
      <div class="islike">
        <p class="like-tit">猜你喜欢</p>
        <div v-for="item in rightLikeList" :key="item.id" class="item-like">
            <img :src="item.img" alt="">
            <p class="like-name">{{item.name}}</p>
            <p class="like-dingwei">{{item.adress}}</p>
            <p class="like-price">￥{{item.pirce}}</p>
        </div>
      </div>
      
      <p class="shop-tit">商家团购及优惠</p>
      <!-- 未登录 -->
      <div  class="login" v-if="!userInfo">
        <img src="../../static/images/shopDetail/toLogin.png" alt="">
        <p>请登录后查看详细团购优惠</p>
        <el-button round>立即登录</el-button>
      </div>
      <div  v-else>
              <!-- 菜品介绍 -->
        <div class="foodList" v-if="shopInfo.combo">
          <p class="tit">{{shopInfo.combo.length}}款堂食套餐</p>
          <div class="footItem" v-for="item in shopInfo.combo" :key="item.id">
            <img :src="item.url" alt="">
            <div>
              <p class="foot-name">{{item.name}}</p>
              <p class="slod">已售{{item.sold}}</p>
              <p class="price">￥<span>{{item.price}}</span><i>门店价￥{{item.shopprice}}</i></p>
            </div>
            <el-button class="buy" round @click="toOrder(item)">立即抢购</el-button>
            <i>团</i>
          </div>
        </div>
        <!-- 代金卷 -->
        <div class="foodList" v-if="shopInfo.consume">
          <p class="tit">{{shopInfo.consume.length}}款代金卷</p>
          <div class="footItem" v-for="item in shopInfo.consume" :key="item.id">
            <div class="bac">
              <span>￥<i>{{item.price}}</i></span>
              <p>门店价￥{{item.shopprice}}</p>
            </div>
            <div>
              <p class="foot-name">{{item.name}}</p>
              <p class="slod">已售{{item.sold}}</p>
              <!-- <p class="price">￥<span>{{item.price}}</span><i>门店价￥{{item.shopprice}}</i></p> -->
            </div>
            <el-button class="buy" round @click="toOrder(item)">立即抢购</el-button>
          </div>
        </div>

      </div>
      </div>
    <!-- 推荐菜 -->
    <p class="shop-tit">推荐菜</p>
    <div class="recommend" v-if="shopInfo.recommendList">
      <ul class="img">
        <li class="img-item" v-for="item in shopInfo.recommendList" :key="item.id">
          <img :src="item.url" alt="极品羊肉">
          <p>{{item.name}}￥{{item.price}}</p>
        </li>
      </ul>
      <div class="font">
        <span v-for="item in shopInfo.recommend2" :key="item">{{item}}</span>
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
        <i class="iconfont icon-uncheck" :class="{onlyImg:onlyImg}" @click="onlyImgComment"></i>只看有图片的评论
      </p>
      <div class="review-item" v-for="item in commentInfo.comments" :key="item.userId">
        <div class="avatat">
          <img :src="item.userUrl?item.userUrl:'/images/01.jpg'" alt="" >
        </div>
        <div class="review-detail">
          <div class="review-border">
          <div class="name">{{item.userName}}</div>
          <div class="date-time">{{$moment(item.commentTime*1).format('YYYY年MM月DD日')}}</div>
          <el-rate :value="item.star/10" ></el-rate>
          <p class="content">{{item.comment}}</p>
          <p class="reply">{{item.merchantComment?'商家回复：'+item.merchantComment:''}}</p>
          <div class="showImg">
            <div class="img-item" v-for="pic in item.picUrls" :key="pic.id">
              <img :src="pic.url" alt="">
            </div>
          </div>

          </div>
          <p class="zan" @click="gaveLike(item)">
            <i class="iconfont icon-dianzan-copy"  :class="{agreen:item.zanCnt}"></i> 赞
          </p>
        </div>
      </div>
      <!-- 分页 -->
      <PaginationQi :info="commentInfo"/>
  </div>
    <!-- 分页组件 -->
    <!-- <el-pagination
      class="page"
      @current-change="handleCurrentChange"
      :page-size="100"
      layout="prev, pager, next"
      :total="400">
    </el-pagination> -->
    <!-- 附近商家 -->
   
    <p class="shop-tit footer-sh">附近商家</p>
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
import {getFoodDetail,getDiscuss} from '@/api'
import {mapState,mapActions,mapMutations} from 'vuex'
import PaginationQi from '@/components/PaginationQi'

export default {
  name: 'FoodDtaile',
  data() {
      return {
        shopInfo:{},//当前商家
        value1:4,//评价评分
        // isLogin:true,//是否登录
        userInfo:{},//当前登录用户
        // id:1816984255 //当前商户id
        currentPage:1,
        pageNo: 1, // 默认显示的是第一页的数据
        pageSize: 10, // 默认每页显示3条数据
        showPageNo: 4, // 连续的页码数
        onlyImg:false //只看图片
      }
  },
  components:{
    PaginationQi
  },
  props:["id"],
  mounted() {
    this.getFoodShop()
    //从浏览器缓存获取用户信息
    this.userInfo = JSON.parse(localStorage.getItem('MTuserInfo'))
    // 获取商家列表 以及推荐商店
    this.getShop()
    this.getShopLike()
    this.getRightShop()
    this.getComment(1)
    //事件总线订阅 获取对应页面评论
    this.$bus.$on('getCommont',async (currentPage=1)=>{
      let result = await getDiscuss(currentPage)
      this.$store.commit('getCommentMutations',result)
    })
   
  },
  computed: {
    ...mapState({
      shopLikeList:state=>state.shopList.shopLikeList,
      rightLikeList:state =>state.shopList.rightLikeList,
      commentInfo:state =>state.shopList.commentInfo,
      shopList:state =>state.shopList.shopList
    }),
        // 计算总页码数(一共有多少页)
    // 计算总页码数(一共有多少页)
    totalPages() {
      // 获取总的数据条数,每页显示数据的条数
      const { pageSize } = this
      const {total} = this.commentInfo
      // 总的数据条数和每页显示的数据条数  他们的数据都要有意义才能进行计算(数据的值大于0)
      if (total <= 0 || pageSize < 0) return
      // 51条数据 ,每页10条数据---->总页:
      return Math.ceil(total / pageSize)
    },
    // 连续页码是需要进行计算的(要计算出来),是根据当前的页码进行计算,还需要知道连续的页码数
    // 要计算出连续页码的开始页码和结束页码
    startOrEnd() {
      // 获取总页码数,当前页码数,连续页码数
      // 解构的方式
      const {
        totalPages,
        currentPage,
        showPageNo ,
      } = this
      // // 计算开始页码
      let start = 0
      start = currentPage - Math.floor(showPageNo / 2)
      // // 当前页码 2 ,计算出来的开始页码就是0 ,根本就没有0这一页
      // // 限定开始页码
      if (start < 1) {
        start = 1
      }
      // // 计算结束页码
      let end = 0
      end = start + showPageNo - 1
      // 限定结束页码
      if (end > totalPages) {
        end = totalPages
        // 重新校验一下开始的页码
        start = end - showPageNo + 1
        // 再次限定一下开始页码 ,如果页码一共有4 个  1  2  3   4
        if (start < 1) {
          start = 1
        }
      }
      return { start, end }
    },
  },
  watch: {
    // 如果你要监视的数据是对象中的某个属性值,那么请用成对的单引号可以括起来
    pageNo(val){
      // 立刻的更新当前的选中的页码数
      this.currentPage = val
    }
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
        this.getShopInfoMutations(this.shopInfo)
    },
    //点赞
    gaveLike(item){
      if(!this.userInfo.username){
        alert('请先登录')
      }
      item.zanCnt =!item.zanCnt

    },
    //获取对应action
    ...mapActions({
      getShop:'getShopLikeListActions',
      getShopLike:'getShopListActions',
      getRightShop:'getRightShopLikeListActions',
      getComment:'getCommentListActions'
     }),
    //去下单
    toOrder(good){
      this.$router.push(`/cart?foodId=${good.id}`)
    },
    //commitMutation
    ...mapMutations({
      getShopInfoMutations:'getShopInfoMutations'
    }),
    //修改当前页面
        changeCurrenPage(pageNo) {
      // 修改当前的页码
      this.currentPage = pageNo
      // 通知父级组件,当前的页码改变了
      this.$emit('changeCurrentPage', pageNo)
    },
    //只看图片评论
    onlyImgComment(){
      this.onlyImg =!this.onlyImg
      this.commentInfo.comments = this.commentInfo.comments.filter((item)=>{
        if(item.picUrls.length>0){
          return item
        }
      })
    }
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
    background-color: #fff;
    margin: 20px 20px 20px 0;
  }
  // 商家介绍
  .dalhead{
    //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
    position: relative;
    // width: 100%;
    height: 300px;
    padding: 15px;
    background-color: #fff;
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
      width: 65%;
      border-bottom: 1px solid #ddd;
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
      width: 65%;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
      //vertical-align: top;
      margin-top: 15px;
      &.last{
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
      }
    }

    .service-wrap{
      display: flex;
      div{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-right: 20px;
        padding-top: 20px;
        i{
          font-size: 30px;
        }
      }
    }
    //商家照片墙
    .shop-logo{
      position: absolute;
      right: 0;
      top: 0;
      width: 32%;
      margin: 20px 20px 0 0;
      .first{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .shop-phone{
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        li{
          padding: 4px;
          width: 22%;
          height: 50px;
          img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }
        }
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
    &.footer-sh{
      margin: 10px 0;
    }
  }
  //未登录
    .login{
    width: 80%;
    // float: left;
    height: 210px;
    padding: 30px 0;
    background: #fff;
    text-align: center;
    //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
    margin: 20px 0;
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
    position: relative;
    //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
    margin: 20px 0;
    width: 77%;
    // float: left;
    // height: 210px;
    padding: 20px 20px 30px 20px;
    background: #fff;
    .tit{
      font-size: 16px;
      line-height: 26px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .footItem{
      height: 124px;
      display: flex;
      border-bottom: 1px solid #ddd;
      &:last-of-type{
        border-bottom: none;
      }
      img{
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin-right: 20px;
      }
      .bac{
        width: 150px;
        height: 100px;
        border-radius: 5px;
        margin-right: 20px;
        background-color: #EEEFF4;
        span{
          display: block;
          border-bottom: 1px dashed #ccc;
          line-height: 36px;
          margin-bottom: 9px;
          padding: 9px 0;
          text-align: center;
          color: #f60;
          i{
            font-size: 30px;
          }
        }
        p{
          text-align: center;
        }
      }
      .foot-name{
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
      }
      .slod{
        font-size: 12px;
        color: #666;
        line-height: 17px;
        margin: 1px 0 22px;
        cursor: pointer;
      }
      .price{
        color: #f60;
        cursor: pointer;
        font-size: 12px;
        span{
          font-size: 30px;
        }
        i{
          color: #999;
          margin-left: 10px;
        }
      }

    }
    .buy{
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #FF9900;
      border-color: #FF9900;
      color: #fff;
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
    top: 451px;
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
    //每一家店
    .item-like{
      margin-bottom: 20px;
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

  }
  //推荐菜
  .recommend{
        //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
    margin-top: 20px;
    height: 400px;
    background: #fff;
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
        position: relative;
        img{
          border-radius: 5px;
          width: 100%;
        }
        p{
          font-size: 14px;
          position: absolute;
          width: 100%;
          color: #fff;
          left: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          text-align: center;
            span{
            vertical-align: bottom;
            max-width: 60%;
            display: inline-block;    
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          }
      }
    }
    .font{
      display: flex;
      justify-content: flex-start;
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
    background: #fff;
    width: 80%;
    padding: 0 20px 40px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 5px;
    //加阴影
    box-shadow: 0 0 4px 2px #ddd;
    border-radius: 5px;
  .onlyImg{
    color: red;
    background: red;
  }
    .review-top{
      display: flex;
      flex-wrap: wrap;
      .rt-item{
        width: 84px;
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
      background:#fff;
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
            flex-wrap: wrap;
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
            &.agreen{
              color: red;
            }
          }
        }
      }
    }

  }
  .page-wrap{
    .page{
      display: flex;
      width: 500px;
      margin: 10px auto 0;
      li{
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        border: 1px solid #eee;
        text-align: center;
        font-size: 16px;
        margin: 0 10px;
        &.active{
          background: #13D1BE;
          color: #fff;
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
