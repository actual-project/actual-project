<template>
  <div>
    <TypeNav />
    <Banner v-show="$route.meta.hidFooter" />
    <Life />
  </div>
</template>
<script>
import Banner from '@/components/Banner/Banner.vue'
import TypeNav from '@/components/TypeNav/TypeNav.vue'
import Life from '@/components/Life/Life'
export default {
  name: 'Home',
  data () {
    return {

    };
  },
  components:{
    Banner,
    TypeNav,
    Life
  }
};
</script>
<style scoped>
</style>
