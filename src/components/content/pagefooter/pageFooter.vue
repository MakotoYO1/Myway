<template>
  <footer>
    <div id="footercontent">
      <ul>
        <li>
          <small>作者：MakotoYO</small>
        </li>
        <li>
          <small>邮箱：hehehonghong123@163.com</small>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name:"pagefooter"
}
</script>

<style>
#footercontent{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: .75;
  color: #bdbdbd;
  box-sizing: border-box;
  padding: 20px 10px;
}
#footercontent ul{
  display: flex;
  justify-content: center;
  align-items: center;
}
#footercontent ul>li{
  margin-right: 40px;
}
</style>