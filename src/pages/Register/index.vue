<template>
  <div class="registerContainer">
    <!-- 头部 -->
    <div class="header clearFix">
      <div class="header-wraper clearFix">
        <!-- Logo -->
        <a class="site-logo" href="http://www.meituan.com">美团</a>
        <div class="login-block">
          <span class="tip">已有美团账号?</span>
          <!-- <a
            class="login"
            href="/account/unitivelogin?service=www&amp;continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken"
            >登 录</a
          > -->
          <router-link to="/login" class="login">登陆</router-link>
        </div>
      </div>
    </div>
    <!-- 注册输入部分 -->
    <div class="content">
      <div class="signup-form">
        <div class="sheet">
          <form action="" method="">
            <!-- 手机号输入 -->
            <div class="form-field form-field--mobile">
              <label class="font-left label-item" >手机号</label>
              <input
                type="text"
                name="mobile"
                class="f-text J-mobile"
                v-model="username"
              />
              <span class="J-unitive-tip unitive-tip"
                >注册成功后，全美团通用</span
              >
            </div>
            <!-- 获取短信动态码 -->
            <div class="form-field form-field--vbtn">
              <input
                type="button"
                class="verify-code"
                value="免费获取短信动态码"
              />
            </div>
            <!-- 短信动态码 -->
            <div class="form-field form-field--sms">
              <label for="" class="label-item">短信动态码</label>
              <input type="text" class="f-text" />
            </div>
            <!-- 创建密码 -->
            <div class="form-field form-field--pwd">
              <label for="" class="label-item">创建密码</label>
              <input type="text" class="f-text" v-model="password" />
              <div class="pw-strength">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
              </div>
            </div>
            <!-- 确认密码 -->
            <div class="form-field form-field--pwd2">
              <label for="" class="label-item">确认密码</label>
              <input type="text" class="f-text" v-model="password2" />
            </div>
            <!-- 注册 -->
            <div class="form-field regiter-btn">
              <input
                class="btn"
                type="submit"
                name="commit"
                value="同意以下协议并注册"
                @click="register"
              />
              <!-- <a target="_blank"></a> -->
            </div>
          </form>
        </div>
      </div>
      <div class="term">
        <a
          class="f1"
          href="https://rules-center.meituan.com/rules-detail/4"
          target="_blank"
          >《美团点评用户服务协议》</a
        >
        <a
          class="f1"
          href="https://rules-center.meituan.com/rules-detail/2"
          target="_blank"
          >《美团点评隐私政策》</a
        >
      </div>
    </div>
    <div class="footer">
      <p class="footer-item">
        ©
        <a class="f1" href="https://www.meituan.com">meituan.com</a> &nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/"
          >京ICP证070791号</a
        >&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapAtcions } from "../../api";
export default {
  name: "Register",
  data() {
    return {
      username: "", //手机号
      password: "", //密码
      password2: "", //确认密码
    };
  },
  methods: {
    //注册
    async register(event) {
      event.preventDefault();
      //收集表单项数据
      const { username, password, password2 } = this;
      //前端验证
      let usernameReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      let passwordReg = /^\d{4,6}/;

      //手机号与密码不能为空
      if (!username || !password) {
        alert("手机号/密码部能为空");
        return;
      }

      //判断手机号码是否符合要求
      if (!usernameReg.test(username)) {
        alert("手机号码格式错误");
        return;
      }
      //判断密码格式
      if (!passwordReg.test(password)) {
        alert("密码格式错误");
        return;
      }
      //判断两次输入密码
      if (password !== password2) {
        alert("两次输入的密码不一致");
        return;
      }

      //  //分发action，实现注册
      // await this.$store.dispatch('register',{username,password})
      //  //成功则跳转到登陆界面
      //  this.$router.replace('./login')
      try {
        await this.$store.dispatch("register", { username, password });
        // 成功则跳转到登录界面

        this.$router.replace("/login");
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 公共样式
.form-field() {
  position: relative;
  padding: 8px 0 8px 110px;
  zoom: 1;
}
//
.label-item() {
  display: block;
  position: absolute;
  left: 0;
  width: 100px;
  padding-top: 6px;
  font-size: 14px;
  text-align: right;
  color: #333;
}

//
.font-left() {
  display: block;
  position: absolute;
  left: 0;
  width: 100px;
  padding-top: 6px;
  font-size: 14px;
  text-align: right;
  color: #333;
}

//
.registerContainer {
  background: #fff;
  .header {
    height: 59px;
    border-bottom: 2px solid #d8d8d8;
    min-width: 980px;
    color: #666;
    .header-wraper {
      width: 980px;
      margin: 0 auto;
      padding: 10px 0;
      a {
        float: left;
      }
      .site-logo {
        width: 128px;
        height: 36px;
        background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png)
          no-repeat;
        background-size: contain;
        text-indent: -1000px;
        text-align: center;
        line-height: 36px;
      }
      .login-block {
        float: right;
        line-height: 36px;
        margin-top: 2px;
        .tip {
          float: left;
          margin-right: 20px;
          vertical-align: sub;
          font-size: 14px;
          color: #666;
        }
        a.login {
          display: inline-block;
          text-decoration: none;
          margin-top: 7px;

          height: 17px;
          line-height: 1.5;
          text-align: center;
          padding: 3px 11px;
          font-size: 12px;
          border-color: rgba(191, 105, 0, 0.15);
          color: #222;
          border-width: 0;
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
          vertical-align: middle;
          background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
          // background: #FFBD00;
        }
      }
    }
  }
  .content {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    // background: #bfa;
    font: 400 14px/1.5 "Hiragino Sans GB", "WenQuanYi Micro Hei", tahoma,
      sans-serif;
    .signup-form {
      .sheet {
        display: block;

        .form-field--mobile {
          width: 870px;
          height: 36px;
          margin-bottom: 8px;
          label {
            display: block;
            position: absolute;
            left: 0;
            width: 100px;
            padding-top: 6px;
            font-size: 14px;
            text-align: right;
            color: #333;
          }
          .f-text {
            width: 248px;
            height: 24px;
            margin: -1px auto;
            padding: 5px;
            border: 1px solid #aaa;
            line-height: 24px;
            vertical-align: top;
          }
          .unitive-tip {
            display: inline-block;
            margin-left: 7px;
            padding: 6px 0;
            line-height: 24px;
            font-size: 12px;
            color: #999;
            vertical-align: top;
            zoom: 1;
          }
        }
        .form-field();
        .form-field--vbtn {
          .verify-code {
            width: 128px;
            height: 21px;
            padding: 1px 5px 0;
            font-size: 12px;
            color: #333;
            background-color: #dedede;
            border: 1px solid #aaa;
            font-weight: 400;
            letter-spacing: 0.1em;
            &:hover {
              background: rgb(244, 244, 244);
            }
          }
        }

        .form-field--sms {
          padding: 8px 0;
          label {
            display: block;
            position: absolute;
            left: 0;
            width: 100px;
            padding-top: 6px;
            font-size: 14px;
            text-align: right;
            color: #333;
          }
          .f-text {
            width: 248px;
            height: 24px;
            margin: -1px auto;
            padding: 5px;
            border: 1px solid #aaa;
            line-height: 24px;
            vertical-align: top;
          }
        }
        .form-field--pwd {
          padding: 8px 0;
          margin-bottom: 5px;
          label {
            display: block;
            position: absolute;
            left: 0;
            width: 100px;
            padding-top: 6px;
            font-size: 14px;
            text-align: right;
            color: #333;
          }
          .f-text {
            width: 248px;
            height: 24px;
            margin: -1px auto;
            padding: 5px;
            border: 1px solid #aaa;
            line-height: 24px;
            vertical-align: top;
          }
          .pw-strength {
            margin-top: 7px;
            span {
              display: block;
              float: left;
              width: 85px;
              height: 20px;
              font-size: 12px;
              text-align: center;
              line-height: 20px;
              background: rgb(238, 238, 238);
              color: #fff;
              border-right: 2px solid #fff;
            }
          }
        }
        .form-field--pwd2 {
          padding: 8px 0;
          margin-top: 10px;
          label {
            display: block;
            position: absolute;
            left: 0;
            width: 100px;
            padding-top: 6px;
            font-size: 14px;
            text-align: right;
            color: #333;
          }
          .f-text {
            width: 248px;
            height: 24px;
            margin: px auto;
            padding: 5px;
            border: 1px solid #aaa;
            line-height: 24px;
            vertical-align: top;
          }
        }
        .form-field();
        .regiter-btn {
          input {
            display: block;
            height: 100%;

            border: none;
          }
          .btn {
            padding: 7px 20px 6px;
            color: #222;
            background-color: rgb(255, 192, 1);
            box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            border-radius: 2px;
            cursor: pointer;
            margin-top: 10px;
          }
        }
      }
    }
    .term {
      position: relative;
      padding: 3px 10px 3px 110px;
      margin: 0 auto 8px;
      zoom: 1;
      cursor: pointer;
      font-size: 13px;
      & > a {
        color: #fe8c00;
        text-decoration: none;
        &:hover {
          color: #ffbd00 !important;
        }
      }
    }
  }
  .footer {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;
    font-size: 13px;
    .footer-item {
      font-size: 12px;
      font-family: initial;
      a {
        font-size: 13px;
        color: #999;
        text-decoration: none;
        &:hover {
          color: #999 !important;
        }
      }
      span {
        color: #999;
      }
    }
  }
}
</style>