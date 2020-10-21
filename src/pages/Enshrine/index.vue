<template>
  <div>
    <div class="content">
      <div class="content-top">
        <ul @click="selected()">
          <li class="active">
            <router-link to="/mytuan/enshrine?status=0">收藏的商家</router-link>
          </li>
          <li><router-link to="/mytuan/enshrine?status=1">收藏的店铺</router-link></li>
        </ul>
      </div>
      <div class="content-list">
        <div v-if="orderList.length > 0">
          <div
            class="contentItem"
            v-for="(item, index) in orderList"
            :key="item.id"
          >
            <div class="img"><img :src="item.dealmodel.imgurl" alt="bottomUrl" /></div>
            <div class="orderDetail">
              <p class="title">{{ item.dealmodel.brandname }}</p>
              <p>{{ item.dealmodel.title }}</p>
              <p>￥{{ item.dealmodel.price }}</p>
            </div>
            
          </div>
        </div>
        <div class="noOrder" v-else>
          <p>没有相关的店铺哦</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEnshrineList } from "@/api/index";
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
    this.enshrineList();
    this.selected();
  },
  methods: {
    async enshrineList() {
      if (this.status == 0) {
        let result = await getEnshrineList();
        this.orderList = result.list;
      } else {
        this.orderList = [];
      }
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
      this.enshrineList();
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
        font-size: 16px;
        color: #222222;

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
