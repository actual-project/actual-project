<template>
<div>
<<<<<<< HEAD
  <Header />
  <TypeNav />
  <Banner />
  <Life />
  <hr>
  <Footer />
=======
  <Header v-show="$route.meta.hidHeader" />
  <!-- v-show="$route.meta.hidHeader"  -->
  <router-view></router-view>
  <Footer v-show="$route.meta.hidFooter" />
>>>>>>> master
</div>

</template>

<script>

import Header from './components/Header/Header.vue'

import Footer from './components/Footer/Footer'
export default {
  name: 'APP',
  components: {
    Header,
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
