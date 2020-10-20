<template>
  <div>
      <!-- 分页 -->
      <ul class="page">
        <li @click="changeCurrenPage(currentPage-1)">
          &lt;
        </li>
        <li v-if="startOrEnd.start>1" @click="changeCurrenPage(1)" >1</li>
        <li :class="{active:currentPage===num}"
        v-for="(num) in startOrEnd.end"
        :key="num"
        @click="changeCurrenPage(num)">{{num}}</li>
        <button disabled v-if="startOrEnd.start>2">...</button>
        <li v-if="startOrEnd.end < totalPages" @click="changeCurrenPage(totalPages)">{{totalPages}}</li>
        <li @click="changeCurrenPage(currentPage+1)">
          &gt;
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 用来接收外部组件传入进来的动态数据的,由于要传入的数据比较多,所以,定义成对象的方式
    pageConfig: {
      // type: Object, // 传入的数据必然是对象类型
      // 设置传入进来的数据有个默认值(如果没传进来,起码有默认值)
      default: {
        total: 0, // 所有商品的总条数
        pageNo: 1, // 默认显示的是第一页的数据
        pageSize: 10, // 默认每页显示3条数据
        showPageNo: 4, // 连续的页码数
      },
    },
  },
  data() {
    return {
      // 当前的页码数(因为按钮的点击操作,修改显示不同数据的页码数)
      currentPage: this.pageConfig.pageNo, // 可以直接从接收的外部组件传入进来的数据中获取当前的页码数
    }
  },
  // 根据传入进来的总的数据条数和每页显示的数据条数,计算总的页码数(计算一共有多少页)
  computed: {
  },
  // 父级组件中重新获取数据的时候,确实是pageNo的页码数改变了,父级组件的页码数改变了,但是子级组件的页码数没有及时的改变过来

  methods: {

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
