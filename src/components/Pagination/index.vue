<template>
<<<<<<< HEAD
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
=======
  <!--分页组件-->
  <div class="pagination" v-if="pageConfig.total>0" >
    <!--上一页-->
    <button  :disabled="currentPage===1" @click="changeCurrenPage(currentPage-1)">上一页</button>
    <!--第一页-->
    <button v-if="startOrEnd.start>1" @click="changeCurrenPage(1)">1</button>
    <!--第一个省略号-->
    <button disabled v-if="startOrEnd.start>2">...</button>
    <!--连续页码,动态的产生-->
    <button
      :class="{active:currentPage===num}"
      v-for="(num) in startOrEnd.end"
      :key="num"
      v-if="num>=startOrEnd.start"
      @click="changeCurrenPage(num)"
    >{{num}}</button>
    <!--第二个省略号-->
    <button disabled v-if="startOrEnd.end<totalPages-1">...</button>
    <!--最后一页-->
    <button v-if="startOrEnd.end<totalPages" @click="changeCurrenPage(totalPages)">{{totalPages}}</button>
    <!--下一页-->
    <button :disabled="currentPage===totalPages" @click="changeCurrenPage(currentPage+1)">下一页</button>
    <!--总条数的显示-->
    <button disabled style="margin-left:30px">共{{pageConfig.total}}条</button>
>>>>>>> 6ead5d8298a4eb1063a74871683cf3595bf012cf
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
<<<<<<< HEAD
    info:{
      type:Object,
      //设置默认值
      default:{
        total:0
      }
    }
=======
    // 用来接收外部组件传入进来的动态数据的,由于要传入的数据比较多,所以,定义成对象的方式
    pageConfig: {
      type: Object, // 传入的数据必然是对象类型
      // 设置传入进来的数据有个默认值(如果没传进来,起码有默认值)
      default: {
        total: 0, // 所有商品的总条数
        pageNo: 1, // 默认显示的是第一页的数据
        pageSize: 3, // 默认每页显示3条数据
        showPageNo: 5, // 连续的页码数
      },
    },
>>>>>>> 6ead5d8298a4eb1063a74871683cf3595bf012cf
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
<<<<<<< HEAD
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
=======
    // 计算总页码数(一共有多少页)
    totalPages() {
      // 获取总的数据条数,每页显示数据的条数
      const { total, pageSize } = this.pageConfig
      // 总的数据条数和每页显示的数据条数  他们的数据都要有意义才能进行计算(数据的值大于0)
      if (total <= 0 || pageSize < 0) return
      // 51条数据 ,每页10条数据---->总页:
      return Math.ceil(total / pageSize)
    },
    // 连续页码是需要进行计算的(要计算出来),是根据当前的页码进行计算,还需要知道连续的页码数
    // 要计算出连续页码的开始页码和结束页码
    startOrEnd() {
      // 获取总页码数,当前页码数,连续页码数
      // 解构的方式
      const {
        totalPages,
        currentPage,
        pageConfig: { showPageNo },
      } = this
      // 计算开始页码
      let start = 0
      start = currentPage - Math.floor(showPageNo / 2)
      // 当前页码 2 ,计算出来的开始页码就是0 ,根本就没有0这一页
      // 限定开始页码
      if (start < 1) {
        start = 1
      }
      // 计算结束页码
      let end = 0
      end = start + showPageNo - 1
      // 限定结束页码
      if (end > totalPages) {
        end = totalPages
        // 重新校验一下开始的页码
        start = end - showPageNo + 1
        // 再次限定一下开始页码 ,如果页码一共有4 个  1  2  3   4
        if (start < 1) {
          start = 1
        }
      }
      return { start, end }
    },
  },
  // 父级组件中重新获取数据的时候,确实是pageNo的页码数改变了,父级组件的页码数改变了,但是子级组件的页码数没有及时的改变过来
  watch: {
    // 如果你要监视的数据是对象中的某个属性值,那么请用成对的单引号可以括起来
    'pageConfig.pageNo'(val){
      // 立刻的更新当前的选中的页码数
      this.currentPage = val
>>>>>>> 6ead5d8298a4eb1063a74871683cf3595bf012cf
    }
  },

  methods: {
<<<<<<< HEAD
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
=======
    changeCurrenPage(pageNo) {
      // 修改当前的页码
      this.currentPage = pageNo
      // 通知父级组件,当前的页码改变了
      this.$emit('changeCurrentPage', pageNo)
    },
>>>>>>> 6ead5d8298a4eb1063a74871683cf3595bf012cf
  },
}
</script>

<<<<<<< HEAD
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
=======

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color:#fff;
    color: #606266;
    outline: none;
>>>>>>> 6ead5d8298a4eb1063a74871683cf3595bf012cf
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
