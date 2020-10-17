<template>
  <div>
    我的美团页面
  </div>
</template>

<script>
import {getLikeList} from '@/api/index'
export default {
  name: 'Mytuan',
  mounted() {
      this.showLikeList()
  },
  methods: {
      async showLikeList(){
          let result = await getLikeList()
          console.log(result)
      }
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
