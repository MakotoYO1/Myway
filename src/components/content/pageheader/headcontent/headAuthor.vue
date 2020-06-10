<template>
    <div id="header_author">
      <span>M</span>akoto<span>YO</span>
    </div>
</template>

<script>
export default {
  name:"headauthor"
}
</script>

<style>
#header_author{
  font-size: 30px;
  /* color: aliceblue; */
  margin-right: 20px;
}
#header_author span{
  text-align: center;
  display: inline-block;
  background-color: yellow;
  border-radius: 50%;
  transition-duration: 1s;
}
#header_author span:nth-of-type(1){
  width: 40px;
}
#header_author:hover{
  cursor: pointer;
}
#header_author:hover span{
  transform: rotate(360deg);
}
</style>