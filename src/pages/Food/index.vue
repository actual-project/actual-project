<template>
  <div>
    <div class="foodContainer">
      <!-- 导航 -->
      <div class="foodNav">
        <a href="javascript:;">北京美团</a>
        <span>></span>
        <a href="javascript:;">北京美食</a>
      </div>
      <div class="left">
        <!-- 点击条件 -->
        <div class="select">
          <div class="container">
            <div class="hasSeleter" v-if="selected.length>2">已选条件</div>
            <div class="catagoryArea">
              <div class="catagory">分类</div>
              <div class="all">
                <a href="javascript:;">全部</a>
              </div>
              <div class="catagoryList" @click="handleSeleter()">
                <ul>
                  <li v-for="(item, index) in catagoryList" :key="index">
                    <a href="javascript:;">{{item}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="catagoryArea">
              <div class="catagory">分类</div>
              <div class="all">
                <a href="javascript:;">全部</a>
              </div>
              <div class="catagoryList">
                <ul>
                  <li v-for="(item, index) in catagoryList" :key="index">
                    <a href="javascript:;">{{item}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="catagoryArea">
              <div class="catagory">分类</div>
              <div class="all">
                <a href="javascript:;">全部</a>
              </div>
              <div class="catagoryList">
                <ul style="border-bottom:none">
                  <li v-for="(item, index) in catagoryList" :key="index">
                    <a href="javascript:;">{{item}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 商家列表 -->
        <div class="shop">
          <div class="container">
            <ul class="recommend">
              <li :class="{active:isAction('1')}" @click="setOrder('1')">
                <a href="javascript:;">默认</a>
              </li>
              <li :class="{active:isAction('2')}" @click="setOrder('2')">
                <a href="javascript:;">销量</a>
              </li>
              <li :class="{active:isAction('3')}" @click="setOrder('3')">
                <a href="javascript:;">价格{{getOrderIcon('3')}}</a>
              </li>
              <li :class="{active:isAction('4')}" @click="setOrder('4')">
                <a href="javascript:;">销量最多</a>
              </li>
            </ul>
            <!-- <router-link :to="{name:'FoodDtaile',params:info.poiId}" class="shopInfo"> -->
            <!-- 商家详细信息的组件 -->
            <ShopList
              v-for="(info, index) in shopList"
              :key="info.poiId"
              :info="info"
              :index="index"
            />
            <!-- </router-link> -->
          </div>
        </div>
        <!-- 分页器-->
        <nav>
          <Pagination
            :pageConfig="{total:shopList.length,showPageNo:5,pageNo:pageInfo.pageNo,pageSize:pageInfo.pageSize}"
            @changeCurrentPage="getShopListActions"
          />
        </nav>
      </div>
      <!-- 猜你喜欢列表 -->
      <div class="right">
        <h2>猜你喜欢</h2>
        <div
          class="like"
          v-for="item in rightLikeList"
          :key="item.id"
          @click="toShopDetail(item)"
        >
          <img :src="item.img" :alt="item.name" />
          <span>{{item.name}}</span>
          <span>{{item.address}}</span>
          <span>￥{{item.pirce}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopList from "../ShopList";
import { getShopList, getShopLike } from "@/api";
import { mapState, mapMutations, mapActions } from "vuex";
import Pagination from "../../components/Pagination";
//引入分页器
export default {
  name: "Food",
  components: {
    ShopList,
    Pagination,
  },
  data() {
    return {
      shopList: [], //商家信息
      catagoryList: [
        "代金券",
        "蛋糕甜点",
        "火锅",
        "自助餐",
        "小吃快餐",
        "日韩料理",
        "西餐",
        "聚餐宴请",
        "烧烤烤肉",
        "东北菜",
        "川湘菜",
        "江浙菜",
        "香锅烤鱼",
        "粤菜",
        "...",
      ],
      selected:[''],//已选的条件
      order: "1:desc", //1=默认，2=销量 3=价格 4=销售最多  desc=降序  asc=升序
      pageInfo: {
        pageNo: 1, // 当前显示第几页的数据,默认是第一页
        pageSize: 5, // 每页显示几条数据
      },
    };
  },
  //发送请求
  // async mounted() {
  //   const result = await getShopList()
  //   console.log(result)
  //   //修改商家属性
  //   this.shopList = result.poiInfos
  //   console.log(this.shopList)

  // },
  //简写：mouted中不发送请求，可以将其在computed中发送，在mouted中调用
  mounted() {
    this.getShop();
    this.getRightShopLikeListActions();
    this.getShopListActions();
  },
  methods: {
    ...mapActions({
      getShopListActions: "getShopListActions",
      getRightShopLikeListActions: "getRightShopLikeListActions",
      //跳转页面
    }),
    // 获取商品信息数据
    getShopListActions(pageNo = 1) {
      // 参数设置一个默认值
      // 更新当前的页码
      this.pageInfo.pageNo = pageNo;
      this.$store.dispatch("getShopListActions", this.pageInfo);
    },
    //获取商店列表
    async getShop() {
      const result = await getShopList();
      // console.log(result);
      this.shopList = result.poiInfos;
    },
    toShopDetail(item) {
      this.$router.push(`/fooddtaile/${item.id}`);
    },

    //显示高亮的部分
    isAction(flag) {
      return this.order.indexOf(flag) === 0;
    },
    //处理高亮显示和排序方式
    setOrder(flag) {
      let [orderFlag, orderType] = this.order.split(":");
      if (flag === orderFlag) {
        //若原本就是降序，再点击时即为升序
        orderType = orderType === "desc" ? "asc" : "desc";
      } else {
        orderFlag = flag;
        //默认排序方式为降序
        orderType = "desc";
      }
      this.order = orderFlag + ":" + orderType;
      //重新获取信息
      this.getShop();
    },
    // 设置当前排序选项的箭头标识
    getOrderIcon(flag) {
      const [orderFlag, orderType] = this.order.split(":");
      if (flag === orderFlag) {
        return orderType === "desc" ? "⬇" : "⬆";
      } else {
        return "";
      }
    },
  },
  computed: {
    ...mapState({
      rightLikeList: (state) => state.shopList.rightLikeList,
    }),
  },
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
.foodContainer {
  width: 1200px;
  margin: 0 auto;
  //background: red;
  overflow: hidden;
  .foodNav {
    width: 100%;
    height: 17px;
    line-height: 17px;
    padding: 20px 0;
    a {
      cursor: pointer;
      text-decoration: none;
      color: #222;
    }
  }
}
.left {
  width: 950px;
  float: left;
  // 筛选
  .select {
    width: 950px;
    //height: 350px;
    border: 1px solid #e5e5ee;
    border-radius: 5px;
    background: #fff;
    .container {
      width: 100%;
      //height: 100%;
      //margin-left: 20px;
      //background: palegreen;
      //padding: 10px 0 0 10px;
      overflow: hidden;
      .hasSeleter {
        padding: 10px 0 10px 20px;
        border-bottom: 1px solid #e5e5e5;
      }
      .catagoryArea {
        font-size: 14px;
        .catagory {
          float: left;
          padding: 10px 0 0 20px;
        }
        .all {
          float: left;
          padding: 10px 20px;
          a {
            color: #fff;
            display: block;
            width: 53px;
            text-align: center;
            border-radius: 10px;
            background: peru;
            &:hover {
              text-decoration: none;
              color: #fff;
            }
          }
        }
        .catagoryList {
          padding: 10px 0 0 10px;
          ul {
            float: left;
            width: 788px;
            border-bottom: 1px solid #e5e5e5;
            color: #666;
            text-align: left;
            margin-bottom: 10px;
            li {
              float: left;
              width: 125px;
              height: 30px;
            }
          }
        }
      }
    }
  }
  // 店铺信息
  .shop {
    margin-top: 20px;
    width: 950px;
    //height: 500px;
    //background:green ;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background: #fff;
    .container {
      //width: 100%;
      height: 100%;
      padding: 0 20px;
      //background: skyblue;
      overflow: hidden;
      .recommend {
        position: relative;
        left: 0;
        display: block;
        float: left;
        margin: 0 10px 0 0;

        li {
          font-size: 16px;
          float: left;
          line-height: 18px;
          // width: 96px;
          // height: 20px;
          //line-height: 20px;
          a {
            width: 96px;
            height: 20px;
            display: block;
            cursor: pointer;
            padding: 11px 15px;
            color: #777;
            text-decoration: none;
          }

          &.active {
            a {
              color: #009f7f;
            }
          }
        }
      }
      .shopInfo {
        h2 {
          font-weight: bold;
        }
      }
      .shopInfo:hover {
        color: #333;
      }
    }
  }
}
.right {
  cursor: pointer;
  border: 1px solid #e5e5ee;
  border-radius: 5px;
  float: left;
  margin-left: 10px;
  width: 230px;
  background: #fff;
  h2 {
    margin: 20px;
  }
  .like {
    margin: 0 20px 10px 20px;
    span {
      display: block;
      margin-top: 5px;
      &:first-of-type {
        margin-top: 10px;
      }
      &.action {
        background: skyblue;
        color: #fff;
      }
    }
  }
}
nav {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
