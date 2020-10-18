<template>
  <div class="app">
   <!--路由视图,就可以显示对应的路由组件内容-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
  mounted() {
  },
  methods:{
    
  }
  
  
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.app{
  background: #F8F8F8;
}
</style>
