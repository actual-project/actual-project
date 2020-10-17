<template>
  <div class="detail-warp ">
    <!-- 导航 -->
    <div class="breadcrumbs">
      <a href="javascript:;">北京美团</a>
      <a href="javascript:;">北京美食</a>
      <a href="javascript:;">北京火锅</a>
    </div> 
    <!-- 店铺介绍 -->
    <div class="dalhead">

    </div>
    <div class="food-wrap clearfix">
          <!-- 菜品介绍 -->
    <p class="shop-tit">商家团购及优惠</p>
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
    <!-- 猜你喜欢 -->
    <div class="islike">
      <p class="like-tit">猜你喜欢</p>
      <img src="" alt="">
      <p>XXXXXXXXXX</p>
      <p>望京</p>
      <p>￥98.0</p>
    </div>
    </div>
    <!-- 推荐菜 -->
    <div class="recommend">
      <div class="img">
        <img src="" alt="">
        <p></p>
      </div>
      <div class="font">
        <span>火锅</span>
      </div>
    </div>
    <!-- 评论 -->
    <p class="review-tit">XXXX条网友点评</p>
    <div class="review-wrap">
      <div class="rew-tit">
        <span>回头看</span>
      </div>
      <p>
        <span class="yes"></span>
        只看有图片的评论
      </p>
      <div class="review-item">
        <img src="" alt="" class="avatat">
        <div class="review-detail">
          <div class="name">HHHH</div>
          <el-rate v-model="value1"></el-rate>
          <p class="content">评论内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFoodDetail,getShopList} from '@/api'
import {mapState} from 'vuex'
export default {
  name: 'FoodDtaile',
  data() {
      return {
        shopInfo:{},//当前商家
        value1:'4.0'//评价评分
      }
  },
  mounted() {
    this.getFoodShop()
  },
  computed: {
    ...mapState({
      shopLikeList:state=>state.shopList.shopLikeList
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
    }
  },
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.detail-warp{
  width: 1200px;
  margin: 0 auto;
//   &.clearfix::after {
//     display: block;
//     height: 0;
//     content: "";
//     clear: both;
//     visibility: hidden;
// }
  .breadcrumbs{
    width: 100%;
    background-color: antiquewhite;
    margin: 0 20px;
  }
  .dalhead{
    width: 100%;
    height: 300px;
    background-color: greenyellow;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .shop-tit{
    font-size: 30px;
    font-weight: bold;
  }
  .foodList{
    float: left;
    width: 80%;
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
  .islike{
    float: left;
    background: red;

  }
  .recommend{
    height: 400px;
    background: yellow;
    width: 80%;
  }
  // 评论区
  .review-wrap{
    background: red;
    width: 80%;
    .review-item{
      background: purple;
    }
  }
}

</style>
