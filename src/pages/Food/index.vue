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
        <!-- 选择的区域 -->
        <div class="select">
          <div class="container clearFix">
            <!-- 已选条件 -->
            <div class="hasSeleter" v-if="this.selected.length>0">
              <div class="check" >已选条件</div>
              <ul>
                <li v-for="(item, index) in selected" :key="index" @click="remove(index)">
                  {{item}}
                  <i>×</i>
                </li>
              </ul>
            </div>
            <!-- 分类 -->
            <div class="catagoryArea ">
              <div class="catagory">分类</div>
              <div class="all">
                <a href="javascript:;">全部</a>
              </div>
              <div class="catagoryList  " >
                <ul>
                  <li v-for="(item, index) in catagoryList" :key="item.cid">
                    <a
                      href="javascript:;"
                      @click="handleSeleted(item.name,item.cid)"
                      :class="{bacc:item.cid===cid}"
                    >{{item.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 区域 -->
            <div class="catagoryArea mid">
              <div class="catagory">区域</div>
              <div class="all">
                <a href="javascript:;">全部</a>
              </div>
              <div class="catagoryList">
                <ul>
                  <li v-for="area in areaList" :key="area.aId">
                    <a
                      href="javascript:;"
                      @click="handleSeleted(area.name,area.aId)"
                      :class="{bacc:area.aId===cid}"
                    >
                      {{area.name}}
                      <!-- 鼠标移入，地区详情显示 -->
                      <div class="extend">
                        <h3>{{area.name}}</h3>
                        <div v-for="(local, index) in area.detail" :key="local.dId" class="detail">
                          <span
                            @click="handleSeleted(local.title,local.dId)"
                            :class="{bacc:local.dId===cid}"
                          >{{local.title}}</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 用餐人数 -->
            <div class="catagoryArea">
              <div class="catagory">人数</div>
              <div class="all">
                <a href="javascript:;">全部</a>
              </div>
              <div class="catagoryList">
                <ul style="border-bottom:none">
                  <li v-for="(item, index) in num" :key="item.nId">
                    <a
                      href="javascript:;"
                      @click="handleSeleted(item.name,item.nId)"
                      :class="{bacc:item.nId===cid}"
                    >{{item.name}}</a>
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
<<<<<<< HEAD
        <div
          class="like"
          v-for="(item, index) in rightLikeList"
          :key="item.id"
          @click="toShopDetail(item)"
        >
=======
        <div class="like" v-for="item in rightLikeList" :key="item.id" @click="toShopDetail(item)">
>>>>>>> food
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
      radio1: "上海",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海",
      a: "",
      shopList: [], //商家信息
      selected: [], //已选的条件
      order: "1:desc", //1=默认，2=销量 3=价格 4=销售最多  desc=降序  asc=升序
      pageInfo: {
        pageNo: 1, // 当前显示第几页的数据,默认是第一页
        pageSize: 5, // 每页显示几条数据
      },
      cid: "",
      areaList: [
        {
          aId: "1",
          name: "朝阳区",
          detail: [
            { title: "全部", dId: 10 },
            { title: "大望路", dId: 11 },
            { title: "双井", dId: 12 },
            { title: "北苑家园", dId: 13 },
            { title: "酒仙桥", dId: 14 },
            { title: "望京", dId: 15 },
            { title: "世贸", dId: 16 },
            { title: "朝阳公园", dId: 17 },
            { title: "三元桥", dId: 18 },
          ],
        },
        {
          aId: "2",
          name: "海淀区",
        },
        {
          aId: "3",
          name: "房山区",
        },
        {
          aId: "4",
          name: "丰台区",
        },
        {
          aId: "5",
          name: "顺义区",
        },
        {
          aId: "6",
          name: "大兴区",
        },
        {
          aId: "7",
          name: "昌平区",
        },
        {
          aId: "8",
          name: "东城区",
        },
        {
          aId: "9",
          name: "西城区",
        },
        {
          aId: "10",
          name: "房山区",
        },
        {
          aId: "11",
          name: "丰台区",
        },
      ], //区域详情
      num: [
        {
          nId: "110",
          name: "单人餐",
        },
        {
          nId: "120",
          name: "双人餐",
        },
        {
          nId: "130",
          name: "3-4人",
        },
        {
          nId: "140",
          name: "5-6人",
        },
        {
          nId: "150",
          name: "7-8人",
        },
        {
          nId: "160",
          name: "10人以上",
        },
        {
          nId: "170",
          name: "其他",
        },
      ], //用餐人数详情
    };
  },
  mounted() {
    this.getShop();
    this.getRightShopLikeListActions();
    this.getShopListActions();
    this.getCatagoryAction();
  },
  methods: {
    ...mapActions({
      getShopListActions: "getShopListActions",
      getRightShopLikeListActions: "getRightShopLikeListActions",
      getCatagoryAction: "getCatagoryAction",
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
    //获取点击的事件
    handleSeleted(item, id) {
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.selected.push(item);
      this.cid = id;
      // if (this.selected.length > 1) {
      //   this.selected.splice(0, 1);
      // }
    },
    //删除已选条件
    remove(index) {
      console.log(index);
      this.selected.splice(index, 1);
      this.cid = "";
    },
  },
  computed: {
    ...mapState({
      rightLikeList: (state) => state.shopList.rightLikeList,
      catagoryList: (state) => state.food.catagoryList,
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
    border: 1px solid #e5e5ee;
    border-radius: 5px;
    background: #fff;
    .hasSeleter {
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      .check {
        border-top: none;
        padding: 10px 15px;
        height: 27px;
        line-height: 27px;
      }
      ul {
        //padding: 10px 5px 10px 20px;
        margin-left: 10px;
        display: flex;
        li {
          align-self: center;
          padding: 5px 10px;
          margin-left: 10px;
          color: #009f7f;
          border-radius: 40px;
          border: 1px solid #009f7f;
        }
      }
    }
    .container {
      width: 100%;
      // overflow: hidden;
      .catagoryArea {
        font-size: 14px;
        color: #333;
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
              a {
                position: relative;
                .extend {
                  position: absolute;
                  top: 20px;
                  left: -10px;
                  display: none;
                  z-index: 999;
                  width: 400px;
                  border: 1px solid #ccc;
                  //overflow: hidden;
                  padding: 15px;
                  h3 {
                    color: #ccc;
                    padding-bottom: 10px;
                  }
                  .detail {
                    width: 100px;
                    float: left;
                    color: #666;
                    margin-top: 8px;
                  }
                }
              }
              .bacc {
                background: red;
                padding: 0 10px;
                margin-left: -10px;
                border-radius: 10px;
              }
              a:hover {
                color: #333;
              }
              a:hover .extend {
                display: block;
                background: #fff;
              }
            }
          }
        }
      }
    }
  }
  .left .select:last-of-type {
    border: none;
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
