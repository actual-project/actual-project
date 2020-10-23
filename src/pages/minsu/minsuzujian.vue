<template>
  <div>
    <!-- <img src="https://p1.meituan.net/iphoenix/afb237f10e4ec01f09065791bcf2bf413056184.jpg" alt=""> -->
    <div class="minsujingxuan" v-for="(a, i) in brand" :key="i">
      <div class="minsujingxuanpic"><img :src="a.url" alt="" /></div>
      <div class="minsujingxuanbiaoti">{{ a.title }}</div>
      <div class="minsujingxuanjieshao">
        <div class="price">
          {{ a.price }}
        </div>
      </div>
      <div class="minsujingxuandizhi">
        <span class="iconfont icon-dizhi"></span>
        {{ a.address }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "minsuzujian",
  props: ["brand"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.minsujingxuan {
  height: 388px;
  width: 363px;
  padding: 10px 8px;
  // background: chartreuse;
  box-sizing: border-box;
  float: left;
  .minsujingxuanpic {
    height: 201px;
    width: 357px;
    overflow: hidden;
    border-radius: 8px;
    img {
      width: 100%;
    }
  }
  .minsujingxuanbiaoti {
    font-size: 16px;
    line-height: 20px;
    width: 357px;
    height: 40px;
    overflow: hidden;
    color: #252626;
    margin-top: 10px;
  }
  .minsujingxuanjieshao {
    margin-top: 13px;
    .price {
      font-size: 24px;
      color: #ff4d6a;
      font-style: italic;
    }
  }
  .minsujingxuandizhi {
    height: 31px;
    font-size: 14px;
    line-height: 31px;
    span {
      display: inline-block;
      height: 14px;
      width: 14px;
      font-size: 14px;
      color: rgb(62, 136, 255);
    }
  }
}
</style>