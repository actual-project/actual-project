<template>
    
      <div class="container">
        <form class="fromContainer" action="">
          <table>
            <tbody>
              <tr class="first">
                  <th class="project">项目</th>
                  <th class="singPrice">单价</th>
                  <th class="number">数量</th>
                  <th class="totalPrice">总价</th>
              </tr>
              <tr class="second">
                <td class="one">
                  <a href="">{{foodInfo.name}}</a>
                </td>
                <td>¥{{foodInfo.price}}</td>
                <td>
                  <div class="input-number">
                    <button class="min-bus" @click="numPlus">
                       +
                    </button >
                    <!-- <input type="text" class="input" value="1"> -->
                    <button class="input">{{num}}</button>
                    <button class="plus-btn" @click="numDec">
                      -
                    </button>
                  </div>
                </td>
                <td>¥{{totalPrice}}</td>
              </tr>
            </tbody>
          </table>
          <div class="center"></div>
          <div class="blank">
            <span>应付金额:
              <span>
              <i>￥</i>
              {{totalPrice}}
            </span>
            </span>
          </div>
          <div class="bottom">
            将发送美团券密码至手机号：131****5368 
            <a href="">绑定新的手机号</a>
          </div>
          <div class="formSummit">
            <input type="button" class="btn" value="提交订单" @click="summitOrder">
          </div>
        </form>
      </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    name:'Cart',
    data() {
      return {
      num:1,
      foodInfo:{},
      }
    },
    props:['foodId']
    ,
    mounted() {
      this.foodInfo = this.getFoodInfo();
     // console.log(result+'^^^');
    },
    computed: {
      //获取商品信息对象
      ...mapState({
            shopInfo:state =>state.shopList.shopInfo
     }),
     totalPrice(){
				return this.foodInfo.price*this.num*1
			}

    },
    methods:{
      //提交订单的时候跳转到提交订单的页面
      summitOrder(){
        // this.$router.push(`/cart?foodId=${good.id}`)
        this.$router.push(`/submitorder?foodName=${this.foodInfo.name}&totalPrice=${this.totalPrice}`)
      },
      //获取foodid的对象
      getFoodInfo(){
         if(this.shopInfo.consume[0].id == this.foodId){
            return this.shopInfo.consume[0]
        }else{
         return this.shopInfo.combo.find((item)=>{
             if(item.id == this.foodId){
                return item
             }     
           })         
        }
      },
      //点击加的时候加
      numPlus(event){
        event.preventDefault()
        this.num++;
       // this.total = num *foodInfo.price;
      },
      //点击减的时候减
      numDec(){
        event.preventDefault()
          if(this.num>1){
            this.num--;
          }
        }
      },
    }
</script>

<style lang='less' rel='stylesheet/less' >
// 注意还没有做适配
  .container{
    width: 100%;
    height: 325.6px;
   // background: rgb(248, 245, 245);
   background: #fff;
    margin: 0 auto;
   // border: 1px solid black;
    &::before{
      content: '';
      display: block;
      overflow: hidden;
    }
    .fromContainer{
      width: 980px;
      height: 250.6px;
     // background: #ddd;
      margin: 0 auto;
      display: block;
      margin-top:30px;
      //border:1px solid green
      table{
       // margin-top: 20px;
        width:100%;
        border:none;
        border-collapse: collapse;
        border-spacing: 0;
        //background: #ddd;
        .first{
          //margin-top:20px;
          width: 100%;
          height: 30.4px;
          background: rgb(236, 234, 234);
          .project{
            width: 500px;
            text-align: left;
          }
            th{
              padding: 6px 16px;
              font-size: 14px;
              font-weight: 700;
              background-color: #F7F7F7;
            }
        }
        .second{
          width: 100%;
          font-size: 20px;
          .one{
            text-align: left;
            //font-size:20px;
            
          }
          td{
            height: 36px;
            padding: 12px 16px;
            color: #666;
           display: table-cell;
            vertical-align: inherit;
            text-align: center;
            &:last-of-type{
              color: red;
            }
            &:nth-of-type(2){
              
            }
            &:nth-of-type(3){
              //display: inline-block;
             
             // text-align: center;
              button{
                outline: 0;
                background-color: #fff;
                padding: 0;
                width: 34px;
                height: 34px;
                border: 1px solid #ddd;
                color: black;
              }
              input{
                display: inline-block;
                width: 32px;
                height: 32px;
                text-align: center;
                color: black;
                border: 1px solid #ddd;
              }
            }
          }

        
        }

      }
      .center{
        width: 100%;
        height: 25px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        //background-color: aqua;
      }
      .blank{
        width: 100%px;
        padding: 12px;
        height: 32.8px;
        //background: red;
        text-align: right;
        border-bottom:1px solid #ddd;
        span{
          font-size: 12px;
          font-weight: bolder;
          color: #666;
          line-height: 30px;
          
          span{
            color: #f76120;
            font-size: 20px;
          }
        }
      }
      .bottom{
          width: 100%;
          height: 41px;
         // background: red;
         // text-align: center;
         line-height: 41px;
        // padding-left: 5px;
         a{
          color: #2bb8aa;
          text-decoration: none;
         }
      }
      .formSummit{
        width: 100%;
        //height: 36.4px;
        text-align: right;
        //background: green;
        .btn{
         width: 128px;
         padding: 5px 20px 4px;
         display: inline-block;
         height: 36.4px;
         background: #2db3a6;
         background-image: linear-gradient(to bottom,#2ec3b4,#2db3a6);
         border-radius: 2px;
         //user-select: none;
         color: white;
         //outline: none;
         font-size:20px;
         border: 0;
         border-bottom:1px solid black
        }
      }
    }
  }

</style>