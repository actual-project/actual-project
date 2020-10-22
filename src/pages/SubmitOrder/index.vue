<template>
   <!-- 外部容器 -->
   <div class="container">
       <!--二维码的盒子  -->
       <div class="modal-box">
           <div class="modal-left">
               <p><span>请使用 
                 </span>
                 <span class="orange">微信 
                </span>
                <i class="icon icon-qrcode">
                </i>
                <span class="orange"> 扫一扫
                </span>
                <br>扫描二维码支付
                </p>
                <div class="modal-qr">
                <img class="modal-qrcode" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAADLAQAAAADogFqeAAACFElEQVR42uWYPY6DUAyEjVJQ5gjcJFwsEkhcjNzkHYHyFRHemXmQ/ZG2nUi7FCTko7Ds8dgvkb9dJf4smiPimlnxEX3mPMSNX0czWjL36zNyBY8OkfU737SjErfrHHXcYkCES8GbfHwHWlqJarddst7ehiASXbd4G1K9BmjniUQhQr6ZdiT1LgVxvW7fhG1C57XHPRRmjD/b3INQpbuEm/1juxOhp9xoHvKB/qkdvlWai5qo5dCIMvu1KQa9jJeCKcOjGT2DPwzwM8YKFfWPM1FOlGxedJKCg8vKV0odzQiW0m1NuO3W0/GVKCvKXGOS2cNX4lL6NWI4p54RQTFsnW1CevLZtHNE6EPQyY4IcYs2/oEup8H6EKbtg1pV0To5DCvnRtxCYuIWglkXrWhTi9CK6KhoYxoJTI2xMuo0owWr4VWdxA6m0b0sxYlmemsrVZGzwVLOuWxESMqKHGHyo2gcvrK3w218KI/07HAT+YoCTj/imgqdwFcQHNVL7YxmxHm/TdyIJoTJU4TWRT9iB5PL4rGmBla06kbMERo6zy2kqTfTjVJbiHylnqPv3Od9SNdMxchcJOY5PhdpE9LZAShZOe5Gx/nOjHSSwnbGcaOFtcr27eg43qKNQwL6Uko3kp8FWgePOMy81gMz0iqCyU+zp4CKH7V68YDdNlT6SvlaSgtq/0cVOVvysN8m8GhG/+5fxw+JbsBp1g4vUwAAAABJRU5ErkJggg==" alt="您的浏览器版本太低, 请升级您的浏览器">
                <div class="modal-info">
                    <img class="icon-clock" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAMAAAAmopZHAAAAxlBMVEUAAAD/iAD/iQD/iwD/iAD/iAD/iQD/igD/hwD/iAD/hwD/iQD/iAD/igD/jAD/iQD/iwD/iAD/iQD/iAD/iwD/hwD/jgD/iAD/iAD/jgD/hwD/gwD/iAD/iwD/iwD/iAD/igD/iQD/igD/igD/igD/iwD/kQD/hwD/nQD/kAD/iQD/kgD/hwD/iQD/lwD/hwD/gwD/hAD/iQD/jQD/ogD/mwD/rAD/dQD/rQD/iAD/nAD/igD/hgD/iAD/gwD/fgD/gQD/jQCSx2meAAAAPHRSTlMA8d9VGdiZN9TDhXhxb2xaIRwF6LyrqXxgQzAqJBML+evlz8ikoH52aWdkXEo/MvbXzLCqg3h0ZmRNKwwyACdhAAABIklEQVQoz12R53aCQBSEB2liQ1BjN1FjiUbT+1zQ93+p7D1A5OT7sTN3Ge42KOseLlzVClcjNyhoJVLLA2S3bdSZRGaMupRbo6MF6QF2zxIRq2cDnkgQYZmwCb9qJjtuR0jXx0a4wLEa4o5cDhxtFQaUJgYdG4ZtyhZyNNPATN33+XSv2v6aqAyFRyiP6TuUfr7B7amickiMKA3pZ8al/r/iLiubUs9MyBczziX6Nz+lBfzINYo+g9xZMoUjN3lV53OcuYq0MfvLO1d8sIt89jHHFnZ9E6C28EqHna3YB3bUC/WTOS6MYtOBB7VP6SvKvCVVKJNzEuKCzXScuf0pWaOgzvSz8HthpTGOEY9bLvlRWi2gvqIIGfgoM/T0KV1vmNe/YLwjroRqPFIAAAAASUVORK5CYII=">
                    <span>二维码有效时长为2小时, 请尽快支付
                    </span>
                    </div>
                    </div>
                    </div>
                    <div class="modal-right"><i>
                        </i>
                        <!-- <img src="./img/weixin-qrcode.1xf1oN.jpg" alt="微信扫码"> --> -->
                    </div>
        </div>
       <!--  -->
       <div class="top">
           <div class="first-container">
               <i class="iconfont icon-daojishi" ></i>
               <span class="bd">
                   请在
                   <span class="cd">{{h}}:{{m}}:{{s}}</span>
                   内完成支付，超时订单会自动取消
               </span>
           </div>
           <div class="second-container">
               <div class="project"> 
                        <div class="one">
                            项目：{{this.foodName}}
                        </div> 
                        <div class="two">
                            应付金额：￥
                           <span>{{this.totalPrice}}</span>
                        </div>       
               </div>
               <div class="payment">
                   <div class="paycon">
                      <div class="paymenttype">
                          <div class="f1">
                            <el-tabs type="border-card" class="paymentmunu">
                            <el-tab-pane>
                             <span slot="label"></i> 支付宝/微信</span>
                               <div class="ip">
                                     <div class="f2">
                                     <ul>
                                     <li>
                                        <input type="radio" name="thirdpart_pay" id="thirdpart_pay_wxqrpay"  checked="">
                                        <label class="payment-icon" for="thirdpart_pay_wxqrpay"><img src="https://p1.meituan.net/pay/pc_wxqrpay.png" disabled="" alt="微信"></label>
                                     </li>
                                     <li>
                                         <input type="radio" name="thirdpart_pay" id="thirdpart_pay_alipay" >
                                        <label class="payment-icon" for="thirdpart_pay_wxqrpay">  <img src="https://p0.meituan.net/pay/alipaypcnew.png" disabled="" alt="支付宝"></label>
                                    
                                     </li>
                                    </ul>
                                    </div> 
                                     <!-- 支付金额 -->
                                    <div class="money clearFix">
                                            <div class="m1 ">
                                            <span>支付￥
                                                <i>{{this.totalPrice}}</i>
                                            </span>
                                             </div>  
                                      
                                            <div class="m2">
                                                <span>返回修改订单</span>
                                                <button @click="toPayment">去付款</button>
                                        </div>
                                    </div>
                               </div>
                            </el-tab-pane>
                            <el-tab-pane label="个人网银支付">
                                <div class="ipi">
                                    <div class="cendiv">
                                        <div class="payment-bank-tip">支持储蓄卡和信用卡，需要开通网银</div>
                                        <ul>
                                            <li>
                                                <input type="radio" name="b2cebank" id="b2cebank_189" data-type="qdbpay" data-banktypeid="189" data-bankcode="b2c">
                                                <label class="payment-icon" for="b2cebank_189"><img src="https://p1.meituan.net/pay/icbc.png" disabled="" alt="中国工商银行"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="b2cebank" id="b2cebank_190" data-type="qdbpay" data-banktypeid="190" data-bankcode="b2c">
                                                <label class="payment-icon" for="b2cebank_190"><img src="https://p1.meituan.net/pay/cmb.png" disabled="" alt="招商银行"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="b2cebank" id="b2cebank_191" data-type="qdbpay" data-banktypeid="191" data-bankcode="b2c">
                                                <label class="payment-icon" for="b2cebank_191"><img src="https://p1.meituan.net/pay/ccb.png" disabled="" alt="中国建设银行"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="b2cebank" id="b2cebank_192" data-type="qdbpay" data-banktypeid="192" data-bankcode="b2c">
                                                <label class="payment-icon" for="b2cebank_192"><img src="https://p1.meituan.net/pay/abc.png" disabled="" alt="中国农业银行"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="b2cebank" id="b2cebank_193" data-type="qdbpay" data-banktypeid="193" data-bankcode="b2c">
                                                <label class="payment-icon" for="b2cebank_193"><img src="https://p0.meituan.net/pay/boc.png" disabled="" alt="交通银行"></label>
                                            </li>
                                            <li><input type="radio" name="b2cebank" id="b2cebank_194" data-type="qdbpay" data-banktypeid="194" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_194"><img src="https://p1.meituan.net/pay/bofc.png" disabled="" alt="中国银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                            <li><input type="radio" name="b2cebank" id="b2cebank_195" data-type="qdbpay" data-banktypeid="195" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_195"><img src="https://p0.meituan.net/pay/spdb.png" disabled="" alt="浦发银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                            <li><input type="radio" name="b2cebank" id="b2cebank_196" data-type="qdbpay" data-banktypeid="196" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_196"><img src="https://p1.meituan.net/pay/pspc.png" disabled="" alt="中国邮政储蓄银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                            <li><input type="radio" name="b2cebank" id="b2cebank_197" data-type="qdbpay" data-banktypeid="197" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_197"><img src="https://p1.meituan.net/pay/other.png" disabled="" alt="其他银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                            <li><input type="radio" name="b2cebank" id="b2cebank_352" data-type="qdbpay" data-banktypeid="352" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_352"><img src="http://p0.meituan.net/pay/ee150864df5119f003009fa1ae154f902918.png" disabled="" alt="中国民生银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                            <li><input type="radio" name="b2cebank" id="b2cebank_400" data-type="qdbpay" data-banktypeid="400" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_400"><img src="https://p1.meituan.net/pay/gfyh.png" disabled="" alt="广发银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                           <li><input type="radio" name="b2cebank" id="b2cebank_506" data-type="qdbpay" data-banktypeid="506" data-bankcode="b2c"><label class="payment-icon" for="b2cebank_506"><img src="http://p0.meituan.net/pay/d727f7b4c245a263b73b31871fa301fe2643.png" disabled="" alt="北京银行"></label><span class="payment-weak-tip" style="visibility:hidden;"></span></li>
                                        </ul>
                                           <!-- 支付金额 -->{
                                        <div class="money clearFix">
                                            <div class="m1 ">
                                            <span>支付￥
                                                <i>{{this.totalPrice}}</i>
                                            </span>
                                             </div>  
                                      
                                            <div class="m2">
                                                <span>返回修改订单</span>
                                                <button @click="toPayment">去付款</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </el-tab-pane>    
                            </el-tabs>
                              <ul class="paymenttips">
                                 <li>支付帮助</li>
                                 <li>
                                     <a href="">意见反馈</a>
                                </li>
                            </ul> 
                          </div>
                          
                      </div>
                   </div>
               </div>       
           </div>
           
       </div>
   </div>
</template>
<script>
//import QRCode from 'qrcode'
export default {
  name:'SubmitOrder',
  props:['foodName','totalPrice'],
  data(){
      return{
         h:'',
         m:'',
         s:'',
      }
  },
  mounted(){
      this.countTime()
  },
  methods:{
      //倒计时的函数
      countTime(){
            //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var endDate = new Date("2020-10-22 12:23:23");
               // var leftTime2 = new Date('24:00:00').getTime()
                var end = endDate.getTime();
                //时间差
                var leftTime = end - now
                //定义变量 d,h,m,s保存倒计时的时间
                if (leftTime >= 0) {
                    this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                    this.m = Math.floor(leftTime / 1000 / 60 % 60);
                    this.s = Math.floor(leftTime / 1000 % 60);
                }
               // console.log(this.s);
                //递归每秒调用countTime方法，显示动态时间效果
                setTimeout(this.countTime, 1000);
      }
      },
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
    .container{
        //width: 100%;
        background: #eee;
        height: 662px;
        //border:1px solid red;
        //    &::before{
        //     content: '';
        //     display: block;
        //     clear: both;
        // }
        padding: 20px 0 40px;
        //二维码盒子的样式
        .modal-box {
        width: 716px;
        height: 438px;
        margin: -219px 0 0 -358px;
        top: 50%;
        left: 50%;
        z-index: 101;
        overflow: hidden;
        position: absolute;
        border: 6px solid #bbb;
        background-color: #fff;
       -webkit-animation: scale-in both cubic-bezier(.4,0,0,1.5) .3s;
       animation: scale-in both cubic-bezier(.4,0,0,1.5) .3s;
       }
        .top{
            margin: 0 auto;
            width: 1180px;
            height:494.4px ;
            //background: #fff;
            //border:1px solid green;
            //background-origin: content-box;
            .first-container{
                height: 40px;
                line-height: 40px;
                margin-bottom: 20px;
                background-color: #fff;
                box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
                border-radius: 4px;
                text-align: center;
                font-size: 14px;
                color: #666;
                .iconfont{
                   color:#f60;
                }
                .cd{
                    color: #f60;
                }
            }
            .second-container{
                height: 434.4px;
                //background:red;
                .project{
                    padding: 20;
                    height: 28.8px;
                    background: #fff;
                    border-radius: 4px;
                    border: 1px solid #ddd ;
                    padding: 20px;
                    .one{
                           font-size: 20px;
                            color: #222;
                            width: 600px;
                            float: left;
                    }
                    .two{
                        float: right;
                        color: #f60;
                        height: 22px;
                        line-height: 22px;
                        span{
                            font-size: 30px;
                            height: 30px;
                            line-height: 30px;
                        }
                    }
                }
                .payment{
                    margin-top:20px;
                    width: 1138px;
                    height: 500px;
                    padding: 0 20px 50px;
                    //border: 1px solid black;
                    background: #fff;
                    .paycon{
                        width: 100%;
                        height: 271.6px;
                        margin-top:5px;
                        padding-top:10px;
                       // background: red;
                        .paymenttype{
                            height: 112px;
                            background: yellow;
                            .f1{
                                margin-top: 20px;
                                position: relative;
                                height: 40px;
                               // height: 80px;
                                .paymentmunu{
                                    float: left;
                                    // li{
                                    //     float: left;
                                    //     height: 20px;
                                    //     padding: 9px 15px;
                                    //     background: green;
                                    //     font-size: 14px;
                                    // }
                                    .ip{
                                        width: 1108px;
                                        height: 236pxpx;
                                        border: 0;
                                         .f2{
                                        width: 1108px;
                                         height: 52px;
                                         padding-top: 13px;
                                         //line-height: 52px;
                                        // margin-top:30px;
                                        // background: pink;
                                          ul{
                                             position: relative;
                                             li{
                                                float: left;
                                                height: 100%;
                                               label{
                                                height: 100%;
                                                margin: 5px;

                                               }
                                               input{
                                                   height: 38px;
                                                   line-height: 38px;
                                               }
                                             }

                                         }    
                                    }
                                        .money{
                                             width: 100%;
                                             height: 99.6px;
                                            // background: red;
                                             margin-top:50px;
                                             margin-bottom: 30px;
                                            overflow: hidden;
                                            position: relative;
                                             .m1{
                                                color:coral;
                                                height: 44.8px;
                                               // background: pink;
                                                float: right;
                                                margin-right: 20px;
                                                line-height: 44.8px;
                                                //overflow: hidden;
                                                span{
                                                   // color: tomato;
                                                }
                                                i{
                                                    font-size:24px;

                                                }
                                             }
                                             .m2{
                                               position: absolute;
                                                //margin-top:24px;
                                                right: 21px;
                                                bottom: 0;
                                                // width: 192px;
                                                 height: 44.8px;
                                                 //background: yellow;
                                                 line-height: 44.8px;
                                                 //margin-bottom: 30px;
                                                 span{
                                                     width: 72px;
                                                     height: 44.8px;
                                                     font-size: 12px;
                                                     display: inline-block;
                                                     //background: blue;
                                                 }
                                                 button{
                                                     width: 100px;
                                                     height: 40.8px;
                                                     background: orange;
                                                     border-radius: 20px;
                                                     margin-left: 20px;
                                                     border:0;
                                                     color:#fff;
                                                     
                                                 }
                                             }
                                         }
                                    
                                    
                                    }
                                    .ipi{
                                        width: 1108px;
                                        height: 370.2px; 
                                        border: 0;
                                        .cendiv{
                                         height: 183.6px;
                                       //  background: red;
                                         margin-top: 8px;
                                        padding: 8px;
                                            .payment-bank-tip{
                                                width: ;
                                                height: 17.6px;
                                               // background: yellow;
                                                padding-bottom:10px;
                                            }
                                            ul{
                                                width: 100%;
                                                height: 156px;
                                               // background: green;
                                               // float: left;
                                                li{
                                                    float: left;
                                                    width: 214px;
                                                    height: 42px;
                                                    margin-bottom: 10px;
                                                    input{
                                                        height:30px ;
                                                        line-height: 30px;
                                                    }
                                                }
                                            }
                                            .money{
                                             width: 100%;
                                             height: 99.6px;
                                            // background: red;
                                             margin-top:50px;
                                            overflow: hidden;
                                            position: relative;
                                             .m1{
                                                color:coral;
                                                height: 44.8px;
                                               // background: pink;
                                                float: right;
                                                margin-right: 20px;
                                                line-height: 44.8px;
                                                //overflow: hidden;
                                                span{
                                                   // color: tomato;
                                                }
                                                i{
                                                    font-size:24px;

                                                }
                                             }
                                             .m2{
                                               position: absolute;
                                                //margin-top:24px;
                                                right: 21px;
                                                bottom: 0;
                                                // width: 192px;
                                                 height: 44.8px;
                                                 //background: yellow;
                                                 line-height: 44.8px;
                                                 span{
                                                     width: 72px;
                                                     height: 44.8px;
                                                     font-size: 12px;
                                                     display: inline-block;
                                                     //background: blue;
                                                 }
                                                 button{
                                                     width: 100px;
                                                     height: 40.8px;
                                                     background: orange;
                                                     border-radius: 20px;
                                                     margin-left: 20px;
                                                     border:0;
                                                     color:#fff
                                                 }
                                             }
                                         }
                                        }
                                    }

                                }
                                .paymenttips{
                                    position: absolute;
                                    right: 0;
                                    //float: right;
                                    z-index: 9;
                                    li{
                                       float: left;
                                        height: 20px;
                                        line-height: 40px;
                                        font-size:12px;
                                        padding:9px 15px
                                       
                                    }

                                }
                            }
                           
                        }
                    }

                }
            }
        }   
    }
</style>