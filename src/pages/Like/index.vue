<template>
  <div class="body">
    <div class="container">
      <div class="leftContainer">
        <div class="link-group">
          <p><a href="">我的美团</a></p>
          <p><a href="">我的订单</a></p>
          <ul class="link-ul">
            <li>全部订单<i class="icon-right">></i></li>
            <li>待付款<i class="icon-right">></i></li>
            <li>待使用<i class="icon-right">></i></li>
            <li>待评价<i class="icon-right">></i></li>
            <li>退款/售后<i class="icon-right">></i></li>
          </ul>
        </div>
        <div class="link-group">
          <p><a href="">抵用券</a></p>
          <ul class="link-ul">
            <li>可用券<i class="icon-right">></i></li>
            <li>失效券<i class="icon-right">></i></li>
          </ul>
        </div>
        <div class="link-group">
          <p><a href="">我的收藏</a></p>
          <ul class="link-ul">
            <li>收藏的商家<i class="icon-right">></i></li>
            <li>收藏的团购<i class="icon-right">></i></li>
          </ul>
        </div>
        <div class="link-group">
          <p><a href="">个人信息</a></p>
          <ul class="link-ul">
            <li>账户设置<i class="icon-right">></i></li>
          </ul>
        </div>
      </div>
      <div class="rightContainer">
        <div class="userInfo">
          <div class="userInfo-top"></div>
          <div class="userInfo-order"></div>
        </div>
        <div class="like">
          <p class="title">猜你喜欢 <b>为您甄选最合适的</b></p>
          <div class="likeList">
            <div class="likeItem"  v-for="(item,index) in likeList" :key="item.itemId">
              <img :src="item.imgUrl" alt="">
              <p>{{item.title}}</p>
              <div></div>
              <div>{{item.areaName}}</div>
              <div>{{item.lowPrice}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLikeList } from "@/api/index";
export default {
  name: "Like",
  data() {
    return {
      likeList:[]
    }
  },
  mounted() {
    this.showLikeList();
  },
  methods: {
    async showLikeList() {
      let result = await getLikeList();
      this.likeList = result
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.body
{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#dedede, #f8f8f8);
}
.container {
  width: 1190px;
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
    height: 500px;
    display: inline-block;
    vertical-align: top;
    float: right;
    .userInfo {
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      overflow: hidden;
      .userInfo-top {
        height: 200px;
        background-image: linear-gradient(to right, #ffcd00, #ffbf00);
      }
      .userInfo-order {
        height: 110px;
        background: white;
      }
    }
    .like{
      border: 1px solid red;
      background: white;
      margin-top: 20px;
      padding: 20px 10px;
      .title{
        font-size: 18px;
        b{
          font-size: 14px;
          color: #666666;
          vertical-align: middle;
        }
      }
      .likeList{
        display: flex;
        flex-wrap: wrap;
        .likeItem{
          width: 25%;
          img{
            width: 212px;
            height: 118px;
          }
        }
      }
    }
  }
}
</style>
