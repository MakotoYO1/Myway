<template>
  <nav id="header_nav">
    <ul id="navs">
      <li>主页</li>
      <li>博客</li>
      <li>小游戏</li>
    </ul>
    <ul>
      <li><head-author></head-author></li>
    </ul>
  </nav>
</template>

<script>
import headAuthor from "./headAuthor"
export default {
  name:"headnav",
  components:{
    headAuthor
  }
}
</script>

<style>
#header_nav{
  width: 100%;
  display: flex;
  margin-top: 60px;
}
ul{
  display: flex;
  list-style: none;
}
#navs{
  font-size: 20px;
  margin-left: 30px;
  margin-right: auto;
}
#navs li{
  border: solid 1px silver;
  margin-right: 60px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
#navs li::after{
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: springgreen;
  z-index: -1;
  transform: scale(0);
  transition-duration: .5s;
}
#navs li:hover{
  cursor:pointer;
}
#navs li:hover::after{
  transform:scale(1) skewX(45deg);
}
</style>