<template>
  <div class='foodContainer'>
    <!-- 导航 -->
    <div class="foodNav">
      <a href="javascript:;">北京美团</a>
      <span>></span> 
      <a href="javascript:;">北京美食</a>
    </div>
    <div class="left">
        <!-- 筛选条件 -->
      <div class="select">
        <div class="container">
          <!-- 可以采用模块 -->
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
            <div class="catagory">区域</div>
            <div class="all">
              <a href="javascript:;">全部</a>
            </div>
            <div class="catagoryList">
              <ul>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
              </ul>

            </div>
          </div>
          <div class="catagoryArea">
            <div class="catagory">人数</div>
            <div class="all">
              <a href="javascript:;">全部</a>
            </div>
            <div class="catagoryList">
              <ul>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
                <li>
                  <a href="javascript:;">内容11</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <!-- 商家 -->
      <div class="shop">
        <div class="container">
          <div class="recommend">
            <span >默认</span>
            <span >销量</span>
            <span>价格</span>
            <span >好评最多</span>
          </div>
          <router-link to="/fooddtaile/:id" class="shopInfo">
            <ShopList v-for="(info, index) in shopList" :key="info.poiId" :info='info' :index='index'/>
          </router-link>
          
        </div>
      </div>
      <!-- 分页 -->
      <nav style="text-align:center">
        <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        >
        </el-pagination>
      </nav>
        
      
      
    </div>
    <div class="right">
      <h2>猜你喜欢</h2>
      <div class="like">
        <img src="./image/00.jpg" alt="">
        <span>晓寿司（望京店）</span>
        <span>望京</span>
        <span>￥98.0</span>
      </div>
      <div class="like">
        <img src="./image/00.jpg" alt="">
        <span>晓寿司（望京店）</span>
        <span>望京</span>
        <span>￥98.0</span>
      </div>
      <div class="like">
        <img src="./image/00.jpg" alt="">
        <span>晓寿司（望京店）</span>
        <span>望京</span>
        <span>￥98.0</span>
      </div>
      <div class="like">
        <img src="./image/00.jpg" alt="">
        <span>晓寿司（望京店）</span>
        <span>望京</span>
        <span>￥98.0</span>
      </div>
      <div class="like">
        <img src="./image/00.jpg" alt="">
        <span>晓寿司（望京店）</span>
        <span>望京</span>
        <span>￥98.0</span>
      </div>
      <div class="like">
        <img src="./image/00.jpg" alt="">
        <span>晓寿司（望京店）</span>
        <span>望京</span>
        <span>￥98.0</span>
      </div>
    </div>
  </div>
</template>

<script>
import ShopList from '../ShopList'
import {getShopList,getShopLike} from '@/api'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'Food',
  components:{
    ShopList
  },
  data() {
    return {
      shopList:[], //商家信息
      catagoryList:['代金券','蛋糕甜点','火锅','自助餐','小吃快餐','日韩料理','西餐','聚餐宴请','烧烤烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤菜','...']
    }
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
    this.getShop()
  },
  methods:{
    ...mapActions({
      getShopListActions:'getShopListActions'
    }),
    //获取商店列表
    async getShop(){
      const result = await getShopList()
      console.log(result)
      this.shopList = result.poiInfos
    }
  },
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .foodContainer{
    width: 1200px;
    margin: 0 auto;
    .foodNav{
      width: 100%;
      height: 17px;
      line-height: 17px;
      padding: 20px 0;
      a{
      cursor: pointer;
      text-decoration: none;
      color: #222;
      }
    }   
  }
  .left{
    width: 950px;
    float: left;
      // 筛选
    .select{
      width: 950px;
      //height: 350px;
      border:1px solid #e5e5ee;
      border-radius: 5px;
      //background: palegoldenrod;
      .container{
        width:100%;
        //height: 100%;
        //margin-left: 20px;
        //background: palegreen;
        overflow: hidden;
        .catagoryArea{
          font-size:14px;
          .catagory{
            float: left;
            padding: 10px 0 0 10px;
          }
          .all{
            float: left;
            padding: 10px 20px;
            a{
              color: #fff;
              display: block;
              width: 53px;
              text-align: center;
              border-radius: 10px;
              background: peru;
              &:hover{
                text-decoration: none;
                color: #fff;
              }
            }
          }
          .catagoryList{
            padding: 10px 0 0 10px;
            ul{
              float: left;
              width: 788px;
              border-bottom: 1px solid #e5e5e5;
              color:#666;
              text-align: left;
              li{
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
    .shop{
      margin-top: 20px;
      width: 950px;
      //height: 500px;
      //background:green ;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      .container{
        //width: 100%;
        height: 100%;
        padding: 0 20px;
        //background: skyblue;
        overflow: hidden;
        .recommend{
          // border-bottom: 1px solid #e5e5e5 ;
          span{
            padding: 10px;
            width: 96px;
            height: 20px;
            line-height: 20px;
            display: inline-block;
            margin-left: 5px;
            font-size:14px;
          }
        }
        .shopInfo{
          h2{
            font-weight: bold;
          }
        }
        .shopInfo:hover{
          color:#333
        }
        // .shopList{
        //   width: 100%;
        //   height: 165px;
        //   overflow: hidden;
        //   //background: yellow;
        //   border-top: 1px solid #e5e5e5 ;
        //   .image{
        //     float: left;
        //     position: relative;
        //     img{
        //       width: 220px;
        //       height: 125px;
        //       margin: 20px;
        //     }
        //     span{
        //       position: absolute;
        //       top:23px;
        //       left: 17px;
        //       display: inline-block;
        //       width: 20px;
        //       text-align: center;
        //       background: orange;
        //     }
        //   }
        //   .detail{
        //     float: left;
        //     height: 125px;
        //     margin: 20px;
        //     div{
        //       margin-top: 10px;
        //     }
        //   }
        // }
        
      }
    }
    
  }
  .right{
    border:1px solid #e5e5ee;
    border-radius: 5px;
    float: left;
    margin-left: 10px;
    width: 230px;
    h2{
      margin: 20px;
    }
    .like{     
      margin: 0 20px 10px 20px;
      span{
        display: block;
      }
    }
  }
</style>
