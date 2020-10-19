<template>
    <div>
        <el-table
      :data="tableData"
      style="width: 100%">
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


</style>