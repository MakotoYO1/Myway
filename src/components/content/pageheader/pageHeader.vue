<template>
    <header>
      <head-nav></head-nav>
    </header>
</template>

<script>
import headNav from "./headcontent/headNav"

export default {
  name:"pagehead",
  components:{
    headNav
  }
}
</script>

<style>
header::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
         background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
}
</style>