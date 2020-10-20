<template>
  <div>
      <!-- 分页 -->
      <ul class="page">
        <li @click="isPre('pre')">
          &lt;
        </li>
        <li :class="{active:isActive == index}" v-for="(page,index) in pages" :key="page" @click="isActive=index">{{page}}</li>
        <li>...</li>
        <li :class="{active:isActive == -1}" @click="isActive=-1">9</li>
        <li @click="isPre('next')">
          &gt;
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      isActive:0,
      pages:[1,2,3,4]
    }
  },
  methods: {
    isPre(type){
      type==='pre'?this.isActive-1<=0?this.isActive=0:this.isActive-=1:this.isActive+1
      >this.pages.length-1?this.isActive = this.pages.length-1:this.isActive+=1
    }
  },
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.page{
  display: flex;
  width: 500px;
  margin: 10px auto 0;
  li{
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #eee;
    text-align: center;
    font-size: 16px;
    margin: 0 10px;
    &.active{
      background: #13D1BE;
      color: #fff;
    }
  }
}
</style>
