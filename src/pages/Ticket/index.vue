<template>
  <div>
    <div class="content">
      <div class="content-top">
        <ul @click="selected()">
          <li class="active">
            <router-link to="/mytuan/ticket?status=0">抵用券</router-link>
          </li>
          <li><router-link to="/mytuan/ticket?status=1">失效券</router-link></li>
        </ul>
      </div>
      <div class="content-list">
        <div v-if="orderList.length > 0">
          <div
            class="contentItem"
            v-for="(item, index) in orderList"
            :key="item.orderid"
          >
            <div class="img"><img :src="item.bottomUrl" alt="bottomUrl" /></div>
            <div class="orderDetail">
              <p class="title">{{ item.title }}</p>
              <p>{{ item.orderinfo[0] }}</p>
              <p>{{ item.orderinfo[1] }}</p>
            </div>
            <div class="orderPrice">
              <p>{{ item.orderinfo[2] }}</p>
            </div>
            <div class="orderStatus">
              <p>{{ item.showstatus }}</p>
            </div>
          </div>
        </div>
        <div class="noOrder" v-else>
          <p>没有相关的券哦</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderList } from "@/api/index";
import { status } from "nprogress";
export default {
  name: "Order",
  data() {
    return {
      orderList: [],
      // status: 0,
    };
  },
  props: {
    status: Number,
    required: true,
  },
  mounted() {
    this.showorderList();
    this.selected();
  },
  methods: {
    async showorderList() {
      // console.log('showorderList',this.status)
      // if (this.status == 0) {
      //   let result = await getOrderList();
      //   this.orderList = result.orders;
      //   // console.log(this.orderList)
      // } else {
      //   let result = await getOrderList();
      //   let res = result.orders.filter((item) => {
      //     return item.status === this.status;
      //   });
      //   this.orderList = res;
      // }
      this.orderList = []
    },
    selected() {
      //点击时选中的样式
      let li2 = document.querySelectorAll(".content-top ul li");
      li2.forEach((item) => {
        item.classList.remove("active");
      });
      let li = document.querySelectorAll(".content-top ul li");
      li[this.status].classList.add("active");

      
    },
  },

  watch: {
    $route(val) {
      this.status = val.query.status * 1;
      this.showorderList();
      this.selected();
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.active {
  border-bottom: 2px solid #ffc300;
}
a {
  text-decoration: none !important;
}
.content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  .content-top {
    ul {
      display: flex;
      font-size: 20px;
      padding-top: 10px;
      margin-left: 10px;
      border-bottom: 1px solid #eeeeee;
      li {
        margin-right: 25px;
        color: #222222 !important;
        padding: 10px 5px;
        // .active {
        //   border-bottom: 2px solid #ffc300;
        // }
      }
    }
  }
  .content-list {
    .contentItem {
      height: 130px;
      padding: 10px;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      .img {
        width: 90px;
        height: 90px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .noOrder{
      p{
        margin: 30px;
        text-align: center;
      }
    }
    .orderDetail {
      width: 325px;
      margin-left: 20px;
      .title {
        font-size: 16;
      }
      p {
        margin-top: 5px;
      }
    }
    .orderPrice {
      width: 200px;
      text-align: center;
    }
    .orderStatus {
      width: 100px;
      text-align: center;
      margin-left: 20px;
    }
  }
}
</style>
