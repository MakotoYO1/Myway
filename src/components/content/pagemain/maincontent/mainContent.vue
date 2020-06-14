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
  height: 80vh;
  background-color:rgba(247, 229, 196, 0.8);
  /* z-index: -1; */
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>