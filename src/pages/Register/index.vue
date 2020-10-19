<template>
  <div class="registerContainer">
    <!-- 头部 -->
    <div class="header">
      <div class="header-wraper clearFix">
        <!-- Logo -->
        <a class="site-logo" href="http://www.meituan.com">美团</a>
        <div class="login-block">
          <span class="tip">已有美团账号?</span>
          <a
            class="login"
            href="/account/unitivelogin?service=www&amp;continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken"
            >登 录</a
          >
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
              <label>手机号</label>
              <input type="text" name="mobile" class="f-text J-mobile" />
              <span class="J-unitive-tip unitive-tip"
                >注册成功后，全美团通用</span
              >
            </div>
            <!-- 获取短信动态码 -->
            <div class="form-field form-field--vbtn">
              <div class="verify-code">免费获取短信动态码</div>
            </div>
            <!-- 短信动态码 -->
            <div class="form-field form-field--sms">
              <label for="">短信动态码</label>
              <input type="text" />
            </div>
            <!-- 创建密码 -->
            <div class="form-field form-field--pwd">
              <label for="">创建密码</label>
              <input type="text" />
              <div class="pw-strength">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
              </div>
            </div>
            <!-- 确认密码 -->
            <div class="form-field form-field--pwd2">
              <label for="">确认密码</label>
              <input type="text" />
            </div>
            <!-- 注册 -->
            <div class="form-field">
              <input type="submit" name="commit" value="同意以下协议并注册" />
              <a target="_blank"></a>
            </div>
          </form>
        </div>
      </div>
      <div class="term"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  name: "Register",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.clearFix() {
  *zoom: 1;
  &:after {
    //空字符
    content: "";
    height: 0;
    display: block;
    clear: both;
  }
}
.form-field() {
  position: relative;
  padding: 8px 0 8px 110px;
  zoom: 1;
}
.registerContainer {
  background: #fff;
  .header {
    height: 59px;
    .clearFix();
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
    background: #bfa;
    font: 400 14px/1.5 "Hiragino Sans GB", "WenQuanYi Micro Hei", tahoma,
      sans-serif;
    .signup-form {
      .sheet {
        display: block;
        .form-field();
        .form-field--mobile{
          width: 870px;
          height: 36px;
          padding: 8rpx 0 8px 110px ;
          label{
            position: absolute;
            left: 0;
            width: 100px;
            padding-top: 6px;
            font-size: 14px;
            text-align: right;
            color: #333;
          }
          .f-text{
            width: 248px;
            height: 24px;
            margin: -1px auto;
            padding: 5px;
            border: 1px solid #aaa;
            line-height: 24px;
            vertical-align: top;
          }
          .unitive-tip{
            display: inline-block;
            margin-left: 4px;
            padding: 6px 0;
            line-height: 24px;
            font-size: 12px;
            color: #999;
            vertical-align: top;
            zoom: 1;
          }
        }
      }
    }
  }
}
</style>