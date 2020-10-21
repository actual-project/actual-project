<template>
 <div class="app">
  <div class="container">
     <div class="top1" data-reactid="5">
       <div class="result-box" data-reactid="6">
         <h3 data-reactid="7">
           <i class="icon" data-reactid="8"></i>
          您已成功购买“
           {{this.foodName}}”美团劵
           </h3>
           <p class="result__orders" data-reactid="12">
           您可以随时进入“
             <a href="/mytuan/order" target="_blank" data-reactid="14">我的订单</a>
            ”查看美团劵密码，到店出示美团券密码即可消费。
             </p><p class="result__growth" data-reactid="16">
             本次购买获得1点
               <a href="/account/growth" class="result__growth--growth" data-reactid="20">成长值</a>。
               </p><div class="result__btn" id="yui_3_16_0_1_1526265340853_371" data-reactid="22">
                 <a class="btn-normal result__btn-orders" href="/mytuan" target="_blank" id="yui_3_16_0_1_1526265340853_370" data-mod-mtt="1.order/return.0.0.jh5mz646" data-reactid="23">
                 查看已购买团购
                 </a>
                 </div>
                 </div>
                 </div>
  </div>
   <div class="footer">
     <div class="tip">
        <ul>
         <li>
           <div class="top">
             <div class="detail__title" data-reactid="26">美团券<span class="detail__title-tip" data-reactid="28">记下或拍下美团券密码向商家出示即可消费，无需等待短信</span></div>
           </div>
            <div class="bot">
              <div class="detail__content" data-reactid="29"><i class="qrcode-orderreturn" data-reactid="30">
                </i><i class="qrcode-orderreturn-explain" data-reactid="31"></i>
                <ul class="coupon-box" data-reactid="32"><li class="coupon__item" data-reactid="33">
                  <span class="coupon__label" data-reactid="34">美团券</span><span class="coupon__sublabel" data-reactid="35">密码：</span><span class="coupon__code" data-reactid="36">3109 3412 6904</span><span class="coupon__status" data-reactid="37"><!-- react-text: 38 -->[<!-- /react-text --><!-- react-text: 39 -->未消费<!-- /react-text --><!-- react-text: 40 -->]<!-- /react-text --></span></li></ul><!-- react-text: 41 --> <!-- /react-text --></div>
            </div>
         </li>
         <li>
            <div class="top">
              <div class="detail__title" data-reactid="43">温馨提示</div>
            </div>
            <div class="bot">
              <ul class="prompt-box" data-reactid="45">
                <li class="prompt__item" data-reactid="46">
                  <span class="prompt__label" data-reactid="47">
                  有效期：
                    </span><span class="prompt__value" data-reactid="50">2020.8.6 至 2021.6.5 23:59（周末、法定节假日通用）
                    </span>
                    </li><li class="prompt__item" data-reactid="52">
                      <span class="prompt__label" data-reactid="53">
                       使用时间：
                        </span><span class="prompt__value" data-reactid="56">
                          10:00-23:00
                          </span></li><li class="prompt__item" data-reactid="58">
                            <span class="prompt__label" data-reactid="59">
                              预约提醒：
                              </span>
                              <span class="prompt__value" data-reactid="62">
                                每人最多使用2张美团券
                                </span>
                                </li>
                                </ul>
            </div>
         </li>
         <li>
            <div class="top">
              <div class="detail__title" data-reactid="66">商家信息</div>
            </div>
            <div class="bot">
              <div class="biz-wrapper J-biz-wrapper biz-wrapper-nobottom inited" id="yui_3_16_0_1_1526278880782_24" data-reactid="73">
                <div id="J-bizinfo-list" 
                data-poi="[{&quot;shopid&quot;:6871211,&quot;name&quot;:&quot;\u4f18\u6ea2\u6e90\u51bb\u9178\u5976\uff08BHG\u534e\u8054\u767e\u8d27\u5e97\uff09&quot;,&quot;address&quot;:&quot;\u6d77\u6dc0\u533a\u6210\u5e9c\u8def28\u53f7\u4e94\u9053\u53e3\u5546\u4e1a\u4e2d\u5fc3BHG\u534e\u8054\u767e\u8d27B1\u697c&quot;,&quot;range&quot;:&quot;\u4e94\u9053\u53e3&quot;,&quot;rangeid&quot;:689,&quot;disid&quot;:17,&quot;disname&quot;:&quot;\u6d77\u6dc0\u533a&quot;,&quot;dpshopid&quot;:0,&quot;mapurl&quot;:&quot;&quot;,&quot;trafficinfo&quot;:&quot;&quot;,&quot;phone&quot;:&quot;13488688874&quot;,&quot;latlng&quot;:&quot;[39.992199,116.33917]&quot;,&quot;city&quot;:1,&quot;url&quot;:&quot;&quot;,&quot;poiid&quot;:91868721,&quot;poilevel&quot;:{&quot;avgscore&quot;:3.9,&quot;fbcount&quot;:45},&quot;cityname&quot;:&quot;\u5317\u4eac&quot;,&quot;status&quot;:0,&quot;subwayname&quot;:&quot;\u4e94\u9053\u53e3&quot;,&quot;subwaydis&quot;:166,&quot;subwayslug&quot;:&quot;&quot;,&quot;appointmentDay&quot;:0,&quot;cityfirstalpha&quot;:&quot;bj&quot;}]" 
                data-reservationphonenumber="" class="all-biz cf" data-uix="collapse" data-params="{lazyload:true, triggerEvent:'hover', group:'.biz-info', trigger:'.biz-info__title', openClass:'biz-info--open'}" data-reactid="74"><div class="biz-info biz-info--first biz-info--open" data-reactid="75"><h5 class="biz-info__title" data-reactid="76"><a class="poi-link" title="优溢源冻酸奶（BHG华联百货店）" href="/meishi/361588.html" target="_blank" data-reactid="77">{{shopInfo.name}}</a><i class="F-glob F-glob-caret-down-thin down-arrow" data-reactid="78"></i></h5><div class="biz-info__content" 
                data-reactid="79"><div class="biz-item field-group" title="优溢源冻酸奶（BHG华联百货店）" 
                data-reactid="80">
                <label class="title-label" data-reactid="81">地址：</label>{{shopInfo.address}}</div>
                <div class="biz-item" data-uix="tooltip" data-params="{showEvent: 'click'}" id="yui_3_16_0_1_1526278880782_62" data-reactid="83">
                  </div><div class="biz-item" data-reactid="84"><span class="title-label" data-reactid="85">
                    电话：</span>{{shopInfo.phone}}</div></div></div><div class="biz-info" data-reactid="87">
                      <h5 class="biz-info__title" data-reactid="88">
                        <a class="poi-link" title="优溢源冻酸奶（BHG华联百货店）" href="/meishi/281638.html" target="_blank" data-reactid="89">
                        花腰餐吧（二外店）</a><i class="F-glob F-glob-caret-down-thin down-arrow" data-reactid="90">
                          </i></h5><div class="biz-info__content" data-reactid="91">
                            <div class="biz-item field-group" title="海淀区成府路28号五道口商业中心BHG华联百货B1楼" data-reactid="92">
                              <label class="title-label" data-reactid="93">地址：</label>朝阳区朝阳路定福庄第二外国语学院北门北100米路东（五建东门对面）
                              </div><div class="biz-item" data-uix="tooltip" data-params="{showEvent: 'click'}" id="yui_3_16_0_1_1526278880782_62" data-reactid="95">
                                </div><div class="biz-item" data-reactid="96"><span class="title-label" data-reactid="97">电话：</span>010-65791269
                                </div></div></div></div></div>
            </div>
         </li>
       </ul>
     </div>
     
  </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'PaySuccess',
  props:['foodName','totalPrice'],
  data(){
    return {

    }
  },
  mounted() {

  },
  methods:{
    
  },
  computed:{
     //获取商品信息对象
      ...mapState({
            shopInfo:state =>state.shopList.shopInfo
     }),
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
   .app{
     //width: 1190px;
     height: 915px;
      .container{
      // margin-top:20px;
      width: 928px;
      // height:214.8px ;
      padding: 25px;
      border: 1px solid #ddd;
      margin: 0 auto;
     
      .top1{
        width:557.375px ;
        height: 154.8px;
        //background: blue;
        margin:0 atuo;
        .result-box{
          h3{
            margin-bottom: 8px;
            padding-left: 40px;
            font-size: 22px;
            line-height: 34px;
            position: relative;
            color: #333;
            font-family: 'Hiragino Sans GB',' Microsoft YaHei','WenQuanYi Micro Hei',arial,sans-serif;
            -webkit-font-smoothing: antialiased;
            font-weight: 700;
          }
          .result__orders {
          color: #666;
          margin:7px 35px;
          font-size: 12px;
          zoom: 1;
          }
          .result__growth{
            margin: 16px 35px;
          }
          a{
            color: #2bb8aa;
          }
          .btn-normal{
            font-size: 14px;
            margin: 0 35px;
            margin-top:10px;
            padding: 6px 20px;
            background: #ddd;
            font-size: 14px;
             background-color: #dedede;
            border: 1px solid #e3e3e3;
            border-bottom: 1px solid #aaa;
            filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFF7F7F7', endColorstr='#FFDEDEDE');
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPâ€¦dpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==);
            background-size: 100%;
            background-image: linear-gradient(to bottom,#f7f7f7,#dedede);
          }
        }
      }
     
    }
    .footer{
     .tip{
       width: 980px;
       border: 1px solid #ddd;
       margin: 0 auto;
      ul{
         // border: 1px solid #ddd;
        li{
           .top{
            // padding: 20px;
              margin: 20px auto 0;
              background: #eee;
              width: 978px;
              height: 36px;
               .detail__title{
                width: 978px;
                height: 36px;
               // padding: 0 20px;
               // background: red;
                line-height: 36px;
                padding-left: 10px;
                box-sizing: border-box;
                color: black;
               span{
                 padding-left: 20px;
                 color: #999;
               }   
              }
            }
          &:nth-of-type(1){          
            .bot{
              width: 978px;
              height: 75px;
              padding:20px 0px;
           //   background: yellow;
              margin: 0 auto;
              span{
                padding-left: 20px;
              }
             
            }
          }
          &:nth-of-type(2){
              .top{
                margin-top:0;
              }
              .bot{
              width: 978px;
              height: 53.2px;
              padding:20px 0px;
              //background: yellow;
              margin: 0 20px;
              .detail__content {
                 ul{
               // width:250px;
                padding-left: 20px;
                 }
                
                .qrcode-orderreturn {
                float: right;
                width: 75px;
                 height: 75px;
                background-position: 0 -2730px;
                background-image: url(/bs/file/?f=meis/meishi.web:assets/1f03fe3989ee1884.png@53635fc);
               background-repeat: no-repeat;
              }
              }
              }
          }
           &:nth-of-type(3){
              .top{
                margin-top:0;
              }
              .bot{
              width: 978px;
              height: 295px;
              padding:20px 0px;
              //background: yellow;
              margin: 0 auto;
               .biz-wrapper{
                     padding-bottom: 0;
                    float: right;
                    position: relative;
                    width: 320px;
                    min-height: 295px;
                     height: 295px;
                    // background: #ddd;
                     .poi-link{
                           font-size: 14px;
                          font-weight: 700;
                          color: #2bb8aa;
                          text-decoration: none;
                          cursor: pointer;
                     }
                     .biz-info__content {
                      display: block;
                      min-height: 160px;
                      .field-group {
                      width: 251px;
                       padding: 0 10px 0 3em;
                      position: relative;
                      margin: 0 auto;
                     zoom: 1;
                    }
                    .biz-item {
                    line-height: 24px;
                     //color: #666;
                     span{
                       padding-left: 46px;
                     }
                    }
                    }

               }
              }
          }
        }
      }
     }
     // height: 800px;
    
    }
 
   }
   

</style>
