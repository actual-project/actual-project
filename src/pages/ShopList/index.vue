<template>
  <div @click="toShopDetaile">
    <div class="shopList">
      <div class="image">
        <img :src="info.frontImg" />
        <span>{{index+1}}</span>
      </div>
      <div class="detail">
        <h2>{{info.title}}</h2>
        <div class="address">{{info.address}}</div>
        <div class="price">人均￥{{info.avgPrice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  props: {
    info: Object,
    index: Number,
  },
  data() {
    return {
      shopList: [], //商家信息
    };
  },
  methods: {
    // 跳转到商家的详细情况地址
    toShopDetaile() {
      this.$router.push(`/fooddtaile/${this.info.poiId}`);
    },
  },
  computed: {},
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
.shopList {
  width: 100%;
  height: 165px;
  overflow: hidden;
  //background: yellow;
  border-top: 1px solid #e5e5e5;
  &:hover {
    cursor: pointer;
  }
  .image {
    float: left;
    position: relative;
    img {
      width: 220px;
      height: 125px;
      margin: 20px;
    }
    span {
      position: absolute;
      top: 23px;
      left: 17px;
      display: inline-block;
      width: 20px;
      text-align: center;
      background: orange;
    }
  }
  .detail {
    float: left;
    height: 125px;
    margin: 20px;

    div {
      margin-top: 10px;
    }
  }
}
</style>
