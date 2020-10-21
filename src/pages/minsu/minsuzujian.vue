<template>
  <div>
    
    <!-- <img src="https://p1.meituan.net/iphoenix/afb237f10e4ec01f09065791bcf2bf413056184.jpg" alt=""> -->
    <div class="minsujingxuan" v-for="(a,i) in brand" :key="i">
      <div class="minsujingxuanpic"><img :src="a.url" alt=""></div>
      <div class="minsujingxuanbiaoti">{{a.title}}</div>
      <div class="minsujingxuanjieshao">{{a.price}}</div>
      <div class="minsujingxuandizhi">{{a.address}}</div>

    </div>
  </div>
</template>
<script>
export default {
  name: "minsuzujian",
  props:['brand'],
  data() {
    return {

    };
  },
  methods: {
      
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.minsujingxuan {
  height: 388px;
  width: 363px;
  padding: 10px 8px;
  background: chartreuse;
  box-sizing: border-box;
  float: left;
  .minsujingxuanpic{
    height: 201px;
    widows: 357px;
  }
  .minsujingxuanbiaoti{
    font-size: 16px;
    line-height: 20px;
    width: 357px;
    height: 40px;
    overflow: hidden;
    color: #252626;
  }
}
</style>