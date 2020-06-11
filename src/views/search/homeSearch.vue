<template>
  <section id="homesearch">
    <div id="searchtitle">
      <span>S</span><span>ear</span><span>ch</span>
    </div>
    <search-form></search-form>
  </section>
</template>

<script>
import searchForm from "./searchform/searchForm"
export default {
  name:"homesearch",
  components:{
    searchForm
  }
}
</script>

<style>
#homesearch{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100px;
  width: 100%;
}
#searchtitle{
  font-size: 50px;
  margin-bottom: 40px;
}
#searchtitle span{
  display: inline-block;
}

#homesearch span:nth-of-type(1){
  font-size: 75px;
  letter-spacing: 10px;
  transform: rotateZ(15deg)
}
#homesearch span:nth-of-type(2){
  letter-spacing: 8px;
  border-bottom: solid 6px red;
  border-radius: 30%;
}
#homesearch span:nth-of-type(3){
  letter-spacing: -2px;
  font-size: 65px;
}
</style>