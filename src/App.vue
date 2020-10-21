<template>
<div>
  <Header />
  <TypeNav />
  <Banner />
  <Life />
  <hr>
  <Footer />
</div>

</template>

<script>
import Banner from './compoment/Banner/Banner.vue'
import Header from './compoment/Header/Header.vue'
import TypeNav from './compoment/TypeNav/TypeNav.vue'
import Life from './compoment/Life/Life'
import Footer from './compoment/Footer/Footer'
export default {
  name: 'APP',
  components: {
    TypeNav,
    Header,
    Banner,
    Life,
    Footer
  },
  mounted () {

  },
  methods: {

  }


}
</script>

<style lang='less' rel='stylesheet/less' scoped>

</style>
