<template>
  <div id="app">
    <page-header></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from "components/content/pageheader/pageHeader"
import pageFooter from "components/content/pagefooter/pageFooter"
import pageMain from "components/content/pagemain/pageMain"
export default {
  name:"app",
  components:{
    pageHeader,pageFooter,pageMain
  }
}
</script>

<style>
@import url('assets/css/base.css');
</style>