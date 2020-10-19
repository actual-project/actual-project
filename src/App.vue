<template>
<div class="header">
  <div class="header-bar">
    <div class="header-content">
      <div class="header-bar-left">11</div>
      <div class="header-bar-right">22</div>
      <div class="header-Logo" clear-fix></div>
    </div>
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
    background-color: purple;
    box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
    width: 100%;
    
}
.header-bar{
  width: 100%;
  height: 40px;
  font-size: 12px;
}
.header-content{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #0f0;
  width: 1190px;
  margin: 0 auto;
  height: 40px; 
  text-align: center;
}
.header-bar-left{
  background-color: #fff;
  width:394px;

}
.header-bar-right{
  width: 394px;
  background-color: skyblue;
}
.header-Logo{
  position: absolute;
  margin-top:;
  background-color:skyblue ;
  height:122px;
  width: 280px;
}
</style>
