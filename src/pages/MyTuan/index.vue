<template>
  <div class="body">
    <div class="container">
      <div class="leftContainer">
        <div class="link-group">
          <router-link to="/mytuan/tuan"><p>我的美团</p></router-link>
          <router-link to="/mytuan/order?status=0"><p>我的订单</p></router-link>
          <ul class="link-ul">  
            <li><router-link to="/mytuan/order?status=0">全部订单<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=1">待付款<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=2">待使用<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=3">待评价<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=4">退款/售后<i class="icon-right">></i></router-link></li>
          </ul>
        </div>
        <div class="link-group">
          <router-link to="/mytuan/ticket?status=0"><p>抵用券</p></router-link>
          <ul class="link-ul">
            <li><router-link to="/mytuan/ticket?status=0">可用券<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/ticket?status=1">失效券<i class="icon-right">></i></router-link></li>
          </ul> 
        </div>
        <div class="link-group">
          <router-link to="/mytuan/enshrine?status=0"><p>我的收藏</p></router-link>
          <ul class="link-ul">
            <li><router-link to="/mytuan/enshrine?status=0">收藏的商家<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/enshrine?status=1">收藏的团购<i class="icon-right">></i></router-link></li>
          </ul>
        </div>
        <div class="link-group">
          <router-link to="/mytuan/user"><p>个人信息</p></router-link>
          <ul class="link-ul">
            <li><router-link to="/mytuan/user">账户设置<i class="icon-right">></i></router-link></li>
          </ul>
        </div>
        <div class="ma">
          <img src="./images/erweima.png" alt="">
          <p>美团APP手机版</p>
          <p><i>1元起</i>吃喝玩乐</p>
        </div>
      </div>
      <div class="rightContainer">
        <router-view :status="status"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mytuan",
  data(){
    return {
      status: 0
    }
  },
  mounted() {
    this.$router.replace('/mytuan/tuan')
  },
  methods: {
    
  },
  watch:{
    '$route'(val){
      this.status = val.query.status*1
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
a {
  text-decoration: none !important;
}
.body {
  width: 100%;
  height: 1350px;
  // background-image: linear-gradient(#dedede, #f8f8f8);
}
.container {
  width: 1200px;
  // min-width: 1200px;
  margin: 0px auto;
  padding-top: 20px;
  font-size: 14px;
  .leftContainer {
    width: 230px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    background: white;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 5px;
    .link-group {
      margin: 30px 20px 0 30px;
      p {
        margin: 12px 0;
        color: #222222;
        a {
          color: black;
          text-decoration: none;
          &:hover {
            color: chocolate;
          }
        }
      }
      .link-ul li {
        margin: 15px 0;
        color: #7f667f;
        font-size: 14px;
        .icon-right {
          float: right;
        }
      }
    }
    .ma{
      width: 230px;
      height: 167px;
      text-align: center;
      margin-top: 30px;
      img{
        width: 95px;
        height: 95px;
        margin: 10px auto;
      }
      p:last-child{
        font-size: 12px;
        margin-top: 3px;
        i{
          color: #ff6600;
          margin-right: 3px;
        }
      }
    }
  }
  .rightContainer {
    width: 950px;
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;

  }
}
</style>
