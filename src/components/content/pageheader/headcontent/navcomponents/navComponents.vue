<template>
  <div id="navcomponent">
    <slot name="otherlist"></slot>
  </div>
</template>

<script>
export default {
  name:"navcomponent"
}
</script>

<style>
#navcomponent ul{
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  left: 0;
  top: 40px;
}
#navcomponent ul>li{
  flex-basis: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 1px gray; */
  border-radius: 10px;
  margin-bottom: 5px;
  position: relative;
}
#navcomponent ul>li::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: palevioletred;
  z-index: -1;
  transform-origin: left;
  transform: scale(0);
  transition-duration: .5s;
}
#navcomponent ul>li:hover{
  color: white;
}
#navcomponent ul>li:hover:after{
  transform:scaleX(1);
}
</style>