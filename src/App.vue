<template>
<div class="header">
  <div class="header-bar">
    <div class="header-content">11</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'APP',
  methods:{
    alert(){
      this.$message.success('这是一条消息提示');
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
*{
  margin: 0;
  padding: 0;
}
.header{
    background-color: #bfa;
    box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
}
.header-bar{
  width: 100%;
  height: 40px;
  font-size: 12px;
}
.header-content{
  background-color: black;
  width: 1190px;
}
</style>
