<template>
  <div>
    <div class="userInfo">
      <div class="userInfo-top">
        <!-- 图片 -->
        <div class="user-img">
          <div class="user-user">
            <img src="./images/user.png" alt="tuan" />
          </div>
          <div class="user-message">
            <div class="user-level">
              {{ userInfo.nickName }}
            </div>
            <div class="balance">我的余额：￥0 · 充值卡充值</div>
          </div>
        </div>

        <div class="user-right"><router-link to="/mytuan/user">个人信息设置 ></router-link></div>
      </div>
      <div class="userInfo-order">
        <ul>
          <li><router-link to="/mytuan/order?status=0"><i class="iconfont icon-daishiyong"></i><span>全部订单</span></router-link></li>
          <li><router-link to="/mytuan/order?status=1"><i class="iconfont icon-daifukuan"></i><span>待付款</span></router-link></li>
          <li><router-link to="/mytuan/order?status=2"><i class="iconfont icon-daishiyong1"></i><span>待使用</span></router-link></li>
          <li><router-link to="/mytuan/order?status=3"><i class="iconfont icon-pinglun"></i><span>待评论</span></router-link></li>
          <li><router-link to="/mytuan/order?status=4"><i class="iconfont icon-tuikuan"></i><span>退货/售后</span></router-link></li>
        </ul>
      </div>
    </div>
    <div class="like">
      <p class="title">猜你喜欢 <b>为您甄选最合适的</b></p>
      <div class="likeList">
        <a href="" v-for="(item, index) in likeList" :key="item.itemId">
          <div class="likeItem">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.title }}</p>
            <div></div>
            <div class="area">{{ item.areaName }}</div>
            <div class="price">
              ￥<span>{{ item.lowPrice }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getlikeList } from "@/api/index";
import { getUserInfo } from "@/api/index";
export default {
  name: "Tuan",
  data() {
    return {
      likeList: [],
      userInfo: {},
    };
  },
  mounted() {
    this.showLikeList();
    this.showUserInfo();
  },
  methods: {
    async showLikeList() {
      let result = await getlikeList();
      this.likeList = result;
      // console.log(this.likeList);
    },
    async showUserInfo() {
      let result = await getUserInfo();
      this.userInfo = result;
    },
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
a {
  text-decoration: none !important;
}

.userInfo {
  border-bottom: 1px solid #e5e5e5;
  border-radius: 5px;
  overflow: hidden;
  .userInfo-top {
    height: 200px;
    width: 948px;
    background-image: linear-gradient(to right, #ffcd00, #ffbf00);
    .user-img {
      .user-user {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: 10px solid rgba(248, 248, 248, 0.5);
        position: relative;
        float: left;
        top: 38px;
        left: 30px;
        img {
          width: 100%;
        }
      }
      .user-message {
        float: left;
        color: #222222;
        position: relative;
        left: 51px;
        top: 70px;
        font-weight: 500;
        .user-level {
          font-size: 26px;
          color: #222222;
        }
        .balance {
          margin-top: 10px;
        }
      }
    }
    .user-right {
      float: right;
      font-size: 14px;
      position: relative;
      left: -30px;
      top: -35px;
    }
  }
  .userInfo-order {
    height: 110px;
    background: white;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      line-height: 110px;
      font-size: 14px;
      vertical-align: top;
      li {
        i {
          margin-right: 8px;
          font-size: 40px;
          vertical-align: top;
          color: #fe9645;
        }
        span {
          position: relative;
          top: -120px;
          left: 55px;
        }
      }
    }
  }
}
.like {
  background: white;
  margin-top: 20px;
  padding: 20px 10px;
  .title {
    font-size: 18px;
    margin-bottom: 15px;
    color: #222222;
    margin-left: 10px;
    b {
      font-size: 14px;
      color: #666666;
      vertical-align: middle;
      margin-left: 8px;
    }
  }
  .likeList {
    a {
      display: inline-block;
      width: 25%;
      box-sizing: border-box;
      padding: 10px;
      &:hover {
        background: #f1f0f0;
      }
      .likeItem {
        p {
          color: #222222;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        img {
          width: 212px;
          height: 118px;
          border-radius: 5px;
        }
        .area {
          font-size: 12px;
          color: darkgrey;
          margin-top: 5px;
        }
        .price {
          margin-top: 5px;
          color: #ff6600;
          span {
            font-size: 18px;
            font-weight: 700;
            font-family: "numbers" !important;
            letter-spacing: -0.5px;
          }
        }
      }
    }
  }
}
&:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
</style>
