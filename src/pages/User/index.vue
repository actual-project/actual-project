<template>
  <div class="userInfo">
    <p>个人信息</p>
    <p style="font-size:14px">账户设置</p>
    <div class="user">
      <ul>
        <li><div class="userLeft">头像</div><div class="userRight"></div></li>
        <li><div class="userLeft">昵称</div><div class="userRight">{{userInfo.nickName}}</div></li>
        <li><div class="userLeft">生日</div><div class="userRight"></div></li>
        <li><div class="userLeft">换绑手机</div><div class="userRight">{{userInfo.mobile}}</div></li>
        <li><div class="userLeft">登录密码</div><div class="userRight">安全强度：中</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getUserInfo} from '@/api/index'
export default {
  name: "User",
  data() {
    return {
      userInfo:{}
    }
  },
  mounted() {
    this.showUserInfo()
  },
  methods: {
    async showUserInfo(){
      let result = await getUserInfo()
      this.userInfo = result
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.userInfo {
  p{
    font-size: 22px;
    color: #222222;
    margin: 30px;
    &:last-child{
      font-size: 15px !important;
    }
  }
  .user {
    ul {
      &>li:last-child{
        border-bottom:none;
      }
      li {
        padding: 30px 0;
        margin: 30px;
        border-bottom: 1px solid #ededed;
        display: flex;
        
        div {
          width: 100px;
          font-size: 18px;
          text-align: right;
          color: #222222;
          padding-right: 40px;
          line-height: 30px;
        }
        .userLeft{
          border-right: 1px solid #cfcece;
        }
        .userRight{
          margin-left: 30px;
          font-size: 14px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
