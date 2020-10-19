<template>
  <div class="body">
    <div class="container">
      <div class="leftContainer">
        <div class="link-group">
          <router-link to="/mytuan"><p>我的美团</p></router-link>
          <router-link to="/mytuan/order"><p>我的订单</p></router-link>
          <ul class="link-ul">  
            <li><router-link to="/mytuan/order?status=0">全部订单<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=1">待付款<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=2">待使用<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=3">待评价<i class="icon-right">></i></router-link></li>
            <li><router-link to="/mytuan/order?status=4">退款/售后<i class="icon-right">></i></router-link></li>
          </ul>
        </div>
        <div class="link-group">
          <router-link to="/mytuan/Ticket"><p>抵用券</p></router-link>
          <ul class="link-ul">
            <li>可用券<i class="icon-right">></i></li>
            <li>失效券<i class="icon-right">></i></li>
          </ul> 
        </div>
        <div class="link-group">
          <router-link to="/mytuan/Enshrine"><p>我的收藏</p></router-link>
          <ul class="link-ul">
            <li>收藏的商家<i class="icon-right">></i></li>
            <li>收藏的团购<i class="icon-right">></i></li>
          </ul>
        </div>
        <div class="link-group">
          <router-link to="/mytuan/user"><p>个人信息</p></router-link>
          <ul class="link-ul">
            <li>账户设置<i class="icon-right">></i></li>
          </ul>
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
  name: "Like",
  data(){
    return {
      status: 0
    }
  },
  methods: {
    
  },
  watch:{
    '$route'(val){
      console.log(val); 
      console.log(val.query.status)
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
  height: 100%;
  // background-image: linear-gradient(#dedede, #f8f8f8);
  background: #ff6600;
}
.container {
  width: 1200px;
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
  }
  .rightContainer {
    width: 950px;
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
    border-radius: 5px;
    box-sizing: border-box;
  }
}
</style>
