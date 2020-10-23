<template>
  <div class="LoginContainer">
    <!-- 头部Logo -->
    <div class="header">
      <a class="site-logo" href="http://www.meituan.com">美团网</a>
    </div>
    <!-- 中间登陆 -->
    <div class="mainWraper">
      <div class="mainContent clearFix">
        <div class="promotion-banner">
          <img src="./image/lnn.jpg" alt="" />
        </div>
        <!-- 登陆项 -->
        <div class="login-section">
          <form action="">
            <label for="" class="logo-type" >账号登录</label>
            <div class="phcode">手机动态码登陆</div>
            <div class="phNumber">
              <span>+</span>
              <span>86</span>
              <i> > </i>
              <input type="text" placeholder="手机号" class="phInput"  v-model="username" value="17600000000"/>
            </div>
            <!-- 密码 -->
            <div class="pwCode">
              <!-- <i class="icon icon-password"></i> -->
              <img src="./image/1.jpg" alt="" />
              <input
                type="password"
                name="password"
                id="login-password"
                placeholder="密码"
                v-model="password"
                value="00000000"
              />
            </div>
            <!-- 忘记密码 -->
            <div class="auto-login">
              <a
                tabindex="-1"
                href="javasctipt:;"
                target="_top"
                class="forget-password"
                >忘记密码？</a
              >
            </div>
            <!-- 登陆按钮 -->
            <input type="submit" value="登录" class="btn"  @click="login"/>
            <p class="signup-guide">
              还没有账号？
              <!-- <a href=""></a> -->
              <router-link to="/register" class="freeRegister"
                >免费注册</router-link
              >
            </p>
          </form>
          <div class="consociation">
            <h3 id="title-wraper">
              <span class="title">用合作网站账号登陆</span>
            </h3>
            <div class="oauth">
              <span class="link-qq iconfont icon-tb-weibo"></span>
              <span class="link-weibo iconfont icon-tb-weibo"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <div class="footer-wrap">
        <div class="site-info-nav clearFix">
          <ul>
            <li class="first">
              <a href="javascript:;">关于美团</a>
            </li>
            <li>
             <a href="javascript:;">加入我们</a> 
              </li>
            <li>
              <a href="javascript:;">商家入驻</a>
            </li>
            <li>
              <a href="javascript:;">帮助中心</a>
            </li>
            <li class="last">
              <a href="javascript:;">美团手机版</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>
            ©<span>2020</span>&nbsp;
            <a href="https://www.meituan.com">美团网团购</a>
            meituan.com
            <a href="http://www.miibeian.gov.cn/" target="_blank"
              >京ICP证070791号</a
            >
            京公网安备11010502025545号
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return{
      username:'', //用户手机号
      password:'' //用户密码
    }
  },

  methods:{
    //登录
    async login(event){
      //
        event.preventDefault();
        const {username,password}  = this
        // console.log(username,password);
        //前端验证
        let usernameReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        let passwordReg = /^\d{4,6}/;
        //手机号码/密码不能为空
        if(!username || !password){
          alert('手机号码/密码不能为空')
          return
        }
        if(!usernameReg.test(username)){
          alert('手机号码格式错误')
          return
        }
        //判断密码格式
         if (!passwordReg.test(password)) {
        alert("密码格式错误");
        return;
       }
    
        try {
          
            //分发action，实现登录
          await this.$store.dispatch("login", { username, password });
          //跳转到主页
          //  this.$router.replace('/food')
          console.log(JSON.parse(localStorage.getItem("MTuserInfo")).username);

          let result = JSON.parse(localStorage.getItem("MTuserInfo"))

          if(result.username == this.username){
              this.$router.replace('/')
          }


        } catch (error) {
          
        }
    }


  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.LoginContainer {
  width: 100%;
  background: #ffffff;
  .header {
    // .cf();
    width: 980px;
    height: auto;
    margin: 40px auto 20px;
    .site-logo {
      display: inline-block;
      background: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png)
        no-repeat;
      height: 47px;
      width: 130px;
      background-size: contain !important;
      text-decoration: none;
      text-indent: -9999px;
    }
  }
  .mainWraper {
    margin-top: -10px;
    .mainContent {
      width: 980px;
      height: auto;
      margin: 40px auto 30px;
      // background: olive;
      .promotion-banner {
        float: left;
        margin-right: 115px;
        img {
          width: 480px;
          height: 370px;
        }
      }
      .login-section {
        float: left;
        padding-top: 0;
        margin: 0 auto;
        width: 270px;
        background: #fff;
        margin-top: 50px;
        form {
          display: block;
          .logo-type {
            font-size: 14px;
            font-weight: 400;
            color: #666;
          }
          .phcode {
            float: right;
            font-weight: 400;
            color: #666;
            padding-left: 26px;
            font-size: 12px;
          }
          .phNumber {
            height: 34px;
            outline: none;
            box-sizing: border-box;
            width: 100%;
            padding: 0;
            border: 1px solid #aaa;
            background-color: #fff;
            margin: 8px 0;
            overflow: hidden;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            span {
              font-size: 15px;
              color: #646464;
            }
            i {
              font-size: 15px;
              color: #646464;
              padding: 0 3px;
            }
            .phInput {
              border: none;
              font-size: 15px;
              color: #646464;
              outline: none;
            }
          }
          .pwCode {
            margin-top: 18px;
            position: relative;
            padding: 5px 0;
            border: 0.1px solid #666;
            img {
              // float: left;
              width: 22px;
              height: 22px;
              margin-left: 4px;
            }
            #login-password {
              position: absolute;
              top: 3px;
              left: 27px;
              float: left;
              height: 24px;
              width: 240px;
              outline: none;
              border: none;
              font-size: 15px;
            }
          }
          .auto-login {
            margin-top: 10px;
            margin-bottom: 18px;
            font-size: 12px;
            color: #fe8c00;
            margin-left: 210px;
            a {
              color: #fe8c00 !important;
              border: none;
              &:hover {
                text-decoration: none;
              }
            }
          }
          .btn {
            width: 270px;
            height: 33px;
            padding-bottom: 8px;
            color: #222;
            background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
            border-width: 0;
            box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
            background-size: 100%;
            font-weight: 700;
            line-height: 33px;
            font-size: 14px;
            padding-bottom: 5px;
          }
          .signup-guide {
            margin-top: 8px;
            color: #666;
            font-size: 14px;
            .freeRegister {
              color: #fe8c00;
              &:hover {
                text-decoration: none;
              }
            }
          }
        }
        .consociation {
          margin-top: 20px;
          display: block;
          h3#title-wraper {
            position: relative;
            margin-bottom: 30px;
            border-bottom: 1px solid #ccc;
            width: 100%;
            height: 0;
            overflow: visible;

            .title {
              position: absolute;
              color: #666;
              font-weight: 10;
              top: -8px;
              left: 60px;
              font-weight: 400;
              background: #fff;
              width: 150px;
              text-align: center;
            }
          }
          .oauth {
            padding-left: 108px;
            height: 18px;
            width: 182px;
            span {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }

  .footer {
    margin-top: 70px;
    width: 100%;
    .footer-wrap {
      width: 980px;
      margin: 0 auto 30px;
      // background: chartreuse;
      .site-info-nav {
        margin-bottom: 20px;
        padding: 12px 0 ;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        ul {
          font-size: 12px;
          color: #999999;
          li {
            float: left;
            border-right: 1px solid #eee;
            margin-right: 10px;
            padding: 0 16px;
            a{
              color: #999999;
              text-decoration: none;
              &:hover{
                color: #999 !important;
              }
            }
          }
          .first{
            padding-left: 0;
          }
          .last{
            border-right: none;
          }
        }
      }
      .copyright {
        color: #999999;
        p{
          a{
            color: #999999;
            text-decoration: none;
            &:hover{
              color: #999999 !important;
            }
          }
        }
      }
    }
  }
}
</style>