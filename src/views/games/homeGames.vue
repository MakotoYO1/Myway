<template>
  <section id="homegame">
    <div class="gamesimgs">
      <div id="snackimg">贪吃蛇</div>
      <div id="2048img">2048</div>
    </div>
    <div class="gamescontent">
     <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name:"homegames",
}
</script>

<style>
#homegame{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#homegame .gamesimgs{
  margin-top: 60px;
  width: 60%;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-bottom: 60px;
}
#homegame .gamesimgs>div{
  flex: 1;
  width: 60%;
  height: 100px;
  display: flex;
  justify-content: center;
}

/* gamescntent */
#homegame .gamescontent{
  border: solid 1px red;
  width: 60%;
  align-self: center;
  height: 800px;
}
</style>