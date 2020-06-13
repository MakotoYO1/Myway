<template>
  <section id="homegame">
    <div class="gamesimgs">
      <div
        v-for="(img,index) in gameimgs"
        :key="gameimgs[index]"
        :id="alts[index]"
        @click="gameClick(index)"
      >
        <img :src="gameimgsurl[index]" :alt="alts[index]" />
        <span>{{gamenames[index]}}</span>
      </div>
    </div>
    <div class="gamescontent">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name:"homegames",
  data(){
    return {
      paths:["/games/snake","/games/2048"],
      gamenames:["贪吃蛇","2048施工中"],
      alts:["gamesnake","game2048"],
      gameimgs:["snakeimg","2048img"],
      gameimgsurl:[
        require('assets/imgs/backgrounds/snake.jpg'),
        require('assets/imgs/backgrounds/fault.jpg')
      ]
    }
  },
  methods:{
    gameClick(index){
        this.$router.push({
          path:this.paths[index]
        })
      }
    }
}
</script>

<style>
#homegame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#homegame .gamesimgs {
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
}
#homegame .gamesimgs > div {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 100px;
}
#homegame .gamesimgs > div > img {
  width: 100px;
  height: 100px;
}
#homegame .gamesimgs > div:hover>img{
  box-shadow: 0 0 5px red;
}
#homegame .gamesimgs > div > span {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
}
#homegame .gamesimgs > div:hover>span{
    color: #ee4866;
    text-decoration: underline  #ec9bad;
}
/* gamescntent */
#homegame .gamescontent {
  /* border: solid 1px red; */
  width: 505px;
  height: 805px;
  align-self: center;
  position: relative;
  z-index: 1;
}
#homegame .gamescontent::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("~assets/imgs/backgrounds/gamebg2.png");
  opacity: 0.1;
}
</style>