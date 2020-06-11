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
  background-color:rgba(247, 229, 196, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
p{
  height: 800px;
}
</style>