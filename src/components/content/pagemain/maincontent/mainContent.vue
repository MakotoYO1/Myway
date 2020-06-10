<template>
  <article id="maincontent">
    <router-view></router-view>
  </article>
</template>

<script>
export default {
  name:"maincontent"
}
</script>

<style>
#maincontent{
  width: 85%;
  height: 100%;
  background-color:wheat;
}
p{
  height: 800px;
}
</style>