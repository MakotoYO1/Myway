<template>
  <main>
    <left-content></left-content>
    <main-content></main-content>
    <right-content></right-content>
  </main>
</template>

<script>
import leftContent from "./leftcontent/leftContent"
import mainContent from "./maincontent/mainContent"
import rightContent from "./rightcontent/rightContent"
export default {
  name:"pagemain",
  components:{
    leftContent,mainContent,rightContent
  }
}
</script>

<style>
main{
  display: flex;
}
</style>