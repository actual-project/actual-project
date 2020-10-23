<template>
  <div>
      <!-- 分页 -->
      <ul class="page">
        <li @click="cutPage(currentPage-1)">
          &lt;
        </li>
        <!-- 起始页大于第一页则显示第一页 -->
        <li v-if="startOrEnd.start>2" @click="cutPage(1)" :class="{active:currentPage===1}" >1</li>
        <li v-if="startOrEnd.start<3" @click="cutPage(1)" :class="{active:currentPage===1}" >1</li>
        <li v-if="startOrEnd.start<3" @click="cutPage(2)" :class="{active:currentPage===2}" >2</li>
        <li v-if="startOrEnd.start<3" @click="cutPage(3)" :class="{active:currentPage===3}" >3</li>
        <li v-if="startOrEnd.start<3" @click="cutPage(4)" :class="{active:currentPage===4}" >4</li>
        <!-- 起始页大于第一页则显示它 -->
        <li v-if="startOrEnd.start>2" >...</li>
        <!-- 遍历的动态页码 根据当前显示的最后页面遍历 并且只显示大于起始页的页面-->
        <li :class="{active:currentPage===n}" 
        v-for="n in startOrEnd.end" 
        :key="n" 
        v-if="startOrEnd.start>=3 && n >=startOrEnd.start"
        @click="cutPage(n)"
        >{{n}}</li>
        <!-- 最后一页小于总页码-1则显示 -->
        <li v-if="startOrEnd.end<pageCount-1" >...</li>
        <!-- 只要最后一页不是总页码数 就显示 -->
        <li  v-if="startOrEnd.end<pageCount" @click="cutPage(pageCount)" >{{pageCount}}</li>
        <li @click="cutPage(currentPage+1)">
          &gt;
        </li>
      </ul>
      <!-- Page的组件{{info.total}} -->
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    info:{
      type:Object,
      //设置默认值
      default:{
        total:0
      }
    }
  },
  // mounted() {
  //   console.log('mounted',this)
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate',this.info)
  // },
  // watch: {
  //   "this.info":{
  //     handler:()=>{
  //       console.log('watch',info)
  //     },
  //     // immediate:true
  //   }
  // },
  data() {
    return {
      // 当前的页码数(因为按钮的点击操作,修改显示不同数据的页码数)
      currentPage: 1, // 可以直接从接收的外部组件传入进来的数据中获取当前的页码数
      pageGroup:2,//默认显示4个分页,但是因为当前页从1开始
    }
  },
  // 根据传入进来的总的数据条数和每页显示的数据条数,计算总的页码数(计算一共有多少页)
  computed: {
    /*思路：
      1.因为数据一次性传入，所以需要做前端分页，每次显示10条，所以根据总条数据计算出一共有多少页
      2.每次页面只显示4页，将遍历的页面小于最大显示个数
      3.每次只显示当前页的左侧是当前页 - 显示页数/2 ;右侧当前页 + 显示页数/2
    */
    //计算一共有多少页
    pageCount(){
      const {total} = this.info
      //计算初多少页
      let num = Math.ceil(total/10)
      return num
    },
    //计算左侧页面/右侧页码
    startOrEnd(){
      //获取总页码、当前页、每次显示页数
      const {currentPage,pageCount,pageGroup} = this
      //设置开始页---结束页
      let start = 0
      let end =0
      //开始页
      start = currentPage - Math.floor(pageGroup/2)
      //判断开始页是不是小于1
      if(start<1){
        start =1
      }
      //结束页
      end = currentPage + Math.ceil(pageGroup/2)
      if(end>pageCount){
        end = pageCount
        //重新校验开始页
        start = end - pageGroup
        //再次判断开始页是不是小于1
        if(start<1){
        start =1
        }
      }
      return {start,end}
    }
  },

  methods: {
    //点击切换上一页/下一页
    cutPage(page){
      //判断上一页/下一页是不是临界值
      if(page<1){
        this.currentPage = 1
      }else if(page>9){
        this.currentPage = 1
      }else{
        this.currentPage = page
      }
    }
  },
  watch: {
    //当当前页发生变化，需要分发事件
    currentPage(){
      this.$bus.$emit('getCommont',this.currentPage)
    }
  },
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.page{
  display: flex;
  width: 700px;
  margin: 10px auto 0;
  justify-content: center;
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
