<template>
  <div>
      <h2>订单已超时{{miao}}秒后跳转至首页</h2>
  </div>
</template>

<script>
export default {
  name: 'Overtime',
  data() {
      return {
          miao:5
      }
  },
  watch: {
    miao(){
        if(this.miao===0){
            this.$router.replace('/')
        }
    }  
  },
  mounted() {
  this.timer = setInterval(()=>{
      this.miao-=1
    },1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
h2{
    background: red;
    font-size: 40px;
    text-align: center;
    margin-top: 40px;
}
</style>
