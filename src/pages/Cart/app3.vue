<template>
    
      <div class="container">
        <form class="fromContainer" action="">
           <div>
        <el-table
      :data="tableData"
      style="width: 980px" 
      >
      <el-table-column
        prop="date"
        label="项目"
        width="500">
      </el-table-column>
      <el-table-column
        prop="name"
        label="单价"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="总价"
        width="180">
      </el-table-column>
    </el-table> 

    </div>
          <div class="center">aaaaaa</div>
        </form>
       
      </div>
</template>
<script>
export default {
  name:'Cart',
    data() {
        return {
          tableData: [{
            date: '福口居: 福口居10人餐',
            name: '¥1028',
            address: 'AAA',
            price:'$1028'
          },]
        }
      }
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 注意还没有做适配
  .container{
    width: 100%;
    height: 325.6px;
    background: #eee;
    margin: 0;
    .fromContainer{
      width: 980px;
      height: 250px;
     // background: #ddd;
      margin: 0 auto;
      display: block;
      el-table{
        margin: 20px;
      }

      
      center{
        width: 100%;
        height: 100px;
        border: 3px solid red;
        background-color: aqua;
      }

    }
  }

</style>