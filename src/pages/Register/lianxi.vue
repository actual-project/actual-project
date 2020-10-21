<template>
    <div class="wraper">
        <input type="text" v-model="password">
        <div class="item">
            <span :style="{backgoundColor:a}"></span> &nbsp;
            <span :style="{backgoundColor:b}"></span> &nbsp;
            <span :style="{backgoundColor:c}"></span>
        </div>
    </div>
</template>
<script>
export default {
  name:'App',
  data(){
      return {
          a:'',
          b:'',
          c:''
      }
  },
  watch:{
      password(value){
          if(value =1){
              this.a = "red"
          }
      }
  }
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>