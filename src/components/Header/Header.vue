<template>
  <div class="header">
    <!-- 外部容器 -->
    <div class="header-bar-wraper">
      <!-- 导航内容区 -->
      <div class="header-bar">
        <!-- 左侧 -->
        <div class="header-bar-left">
          <span class="iconfont icon-dizhi">北京市昌平区北七家镇</span>
          <span>
            <i v-if="isShow">
              <!-- <span class="login" @click="$router.replace('/login')">立即登录</span> -->
              <router-link class="login"
                           to="/login">立即登录</router-link>
              <!-- <span class="register">注册</span> -->
              <router-link class="register"
                           to="/register">注册</router-link>
            </i>
            <i v-else>
              <span>{{userInfo.username}}</span>
              <a href="javascript:;"
                 @click="loginOut"> 退出</a>
            </i>
          </span>
        </div>
        <!-- 右侧 -->
        <div class="header-bar-right">
          <ul class="right-item">
            <div class="meituan">
              <router-link to="/mytuan">我的美团</router-link>
              <div class="Myright-item">
                <dd>
                  <!-- <a href="">我的订单</a> -->
                  <i @click="toOrder">我的订单</i>
                </dd>
                <dd>
                  <!-- <a href="">我的收藏</a> -->
                  <router-link to="/mytuan/enshrine">我的收藏</router-link>
                </dd>
                <dd>
                  <!-- <a href="">抵用券</a> -->
                  <router-link to="/mytuan/ticket">抵用券</router-link>
                </dd>
                <dd>
                  <router-link to="/mytuan/user">账户设置</router-link>
                </dd>
              </div>
            </div>
            <!-- 下拉隐藏框 -->

          </ul>
          <ul class="right-item">手机App</ul>
          <ul class="right-item">商家中心</ul>
          <ul class="right-item">美团规则</ul>
          <ul class="right-item">网站导航</ul>
        </div>
      </div>
    </div>
    <!-- logo最外层包裹器 -->
    <div class="header-logo-warper">
      <!-- logo小包裹器 -->
      <div class="header-logo-warper-little">
        <div class="logo">
          <img src="../../static/images/logo.png"
               alt="">
        </div>
        <div class="search">
          <input type="text">
        </div>
        <!-- 放大镜 -->
        <div class="magnifier">
          <span class="iconfont icon-fangdajing"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {

    return {
      userInfo: {},
      isShow: true, // 标识未登录状态
      isLogin: false,  // 标识是登录 默认为false 如果登录就位true
    };

  },
  mounted () {
    // 获取用户名对象
    this.getUserInfo()
  },
  // 因为header组件一直存在 第二次界面不能更新 所以监视
  watch: {
    $route () {
      console.log(1111)
      this.getUserInfo()
    }
  },
  methods: {
    //
    getUserInfo () {
      let userInfo = localStorage.getItem('MTuserInfo')
      this.userInfo = JSON.parse(userInfo)
      // 判断userInfo是否有值  有的话就改变用户名展示退出
      // console.log(this.userInfo.username);
      if (this.userInfo) {
        this.isShow = false
        //  标识是否登录
        this.isLogin = true
      }
    },
    // 判断是否
    toOrder () {
      this.$router.push('/mytuan/order')
    },
    // 点击退出
    loginOut () {
      this.userInfo = {},
        this.isShow = true,
        localStorage.removeItem('MTuserInfo')
        this.$bus.$emit('ishow',this.isShow)
    }
  },

};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.header {
  .header-bar-wraper {
    min-width: 1200px;
    background-color: #f8f8f8;
    .header-bar {
      display: flex;
      justify-content: space-between;
      width: 1190px;
      background: #f8f8f8;
      margin: 0 auto;
      .header-bar-left {
        height: 40px;
        background-color: #f8f8f8;
        text-align: center;
        line-height: 40px;
        span {
          font-size: 12px;
          margin-right: 15px;
        }
        .login {
          color: #fe8c00;
          margin-right: 15px;
        }
        .register:hover {
          color: #fe8c00;
        }
      }

      .header-bar-right {
        height: 40px;
        .right-item {
          float: left;
          line-height: 40px;
          padding: 0 20px;
          color: #333;
          position: relative;
          z-index: 9;
          .Myright-item {
            position: absolute;
            display: none;
          }
        }
        .right-item:hover .Myright-item {
          display: block;
          background-color: #fff;

          // color: #fe8c00;
        }
        .right-item:hover {
          color: #fe8c00;
          background-color: #fff;
        }
        .right-item:nth-of-type(2):hover {
          background-color: #f8f8f8;
        }
        .Myright-item dd :hover {
          color: #fe8c00;
          background-color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .header-logo-warper {
    width: 100%;
    height: 122px;
    position: relative;
    .header-logo-warper-little {
      position: relative;
      height: 122px;
      width: 1190px;
      margin: 0 auto;
      .logo {
        position: relative;
        width: 280px;
        height: 122px;
        background-color: #fff;
        img {
          display: block;
          width: 126px;
          height: 46px;
          position: absolute;
          margin-top: 40px;
        }
      }
      .search {
        width: 550px;
        height: 40px;
        margin-top: -81px;
        position: absolute;
        right: 348px;
        top: 122px;
        outline: none;
        border: none;
        input {
          width: 470px;
          line-height: 40px;
          border: none;
          outline: none;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          box-sizing: border-box;
        }
      }
      .magnifier {
        width: 80px;
        height: 42px;
        background-color: #ffc300;
        // float: right;
        position: absolute;
        right: 429px;
        top: 122px;
        margin-top: -81px;
        // margin-right: 440px;
        border-radius: 0 4px 4px 0;
        span {
          display: block;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
          line-height: 40px;
          font-size: 25px;
        }
      }
    }
  }
}
</style>
