<template>
  <div id="searchform">
    <div id="searchicons">
      <div v-for="(icon,index) in iconsrc" :key="icon" :class="{isSelect:index==currentindex}" @click="selectIcon(index)">
        <img :src="iconsrc[index]" :alt="alts[index]" />
      </div>
    </div>
    <div id="searchframe">
      <form :action="objectWeb" role="search" method="get" target="blank" id="sform">
        <input type="search" :name="webkey" id="searchinput" autocomplete="off" v-model="inputvalue" autofocus/>
        <div id="searchbutton">
          <button></button>
        </div>
      </form>
    </div>
    <div id="searchpreview">
      <div class="previewtitle">Preview：</div>
      <div class="previewshow">
        <textarea v-model="inputvalue" placeholder="..."></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchform",
  data() {
    return {
      webs:["https://www.baidu.com/s","https://www.google.com/search","https://cn.bing.com/search"],
      webkeys:["wd","q","q"],
      objectWeb:"https://www.baidu.com/s",
      webkey: "wd",
      currentindex:0,
      iconsrc: [
        require("assets/imgs/icons/baiduicon.png"),
        require("assets/imgs/icons/googleicon.png"),
        require("assets/imgs/icons/biyingicon.png")
      ],
      alts: ["baidu", "google", "biying"],
      inputvalue:""
    };
  },
  methods:{
    selectIcon(index){
      this.currentindex=index
      this.objectWeb=this.webs[index]
      this.webkey=this.webkeys[index]
    },
  }
};
</script>

<style>
#searchform {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  /* border: solid 1px red; */
  border-radius: 20px;
  background-color: rgba(255, 255, 255,.5);
}
/* searchicons */
#searchicons {
  align-self: center;
  /* border: solid 1px red; */
  /* margin-left: 15%; */
  display: flex;
}
#searchicons > div {
  width: 50px;
  height: 50px;
  position: relative;
  /* border: solid 1px red; */
}
#searchicons > div > img {
  width: 100%;
  height: 100%;
}
#searchicons > div::after{
  content: "";
  position: absolute;
  width: 80%;
  height: 4px;
  border-radius: 20px;
  background-image:linear-gradient(to right, #ff9569 5%, #e92758 100%);
  left: 5px;
  bottom: 3px;
  transform: scaleX(0);
  transform-origin: left;
  transition-duration: .5s;
}
#searchicons >.isSelect::after {
  content: "";
  transform: scaleX(1);
}
#searchicons > div:hover {
  cursor: pointer;
}

/* searchforms */
#sform{
  display: flex;
}
#searchinput{
  display: inline-block;
  border: solid 1px rgba(65, 80, 55, 0.5);
  background: none;
  outline: none;
  font-size: 25px;
  height: 40px;
  width: 300px;
  border-right: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-color: gray;
  text-indent: 15px;
}
#searchinput::-webkit-search-cancel-button {
  display: none;
}
#searchbutton{
  height: 40px;
  width: 60px;
  position: relative;
}
#searchbutton>button{
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: none;
  border: none;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
#searchbutton>button::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 70% 70%;
  background-repeat: no-repeat;
  background-image: url("~assets/imgs/svgs/searchblack.svg");
  top: 5px;
  left: 10px;
}
#searchbutton:hover{
  box-shadow: 0 0 5px #2b73af;
}
#searchinput:focus{
  border-color:#5698c3;
  border-width: 2px;
}

/* searchpreview */
#searchpreview{
  display: flex;
  align-items: center;
  margin-top: 25px;
  position: relative;
}
#searchpreview .previewtitle{
  font-family: 'Trocchi', serif;
  font-weight: bold;
  font-size: 25px;
}
#searchpreview textarea{
  text-indent: 20px;
  resize: none;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 20px;
  opacity: .8;
  width: 250px;
  height: 250px;
}
#searchpreview textarea::-webkit-input-placeholder{
  font-weight: bolder;
}
#searchpreview .previewshow::after{
  border-radius: 20px;
  content: "";
  position: absolute;
  width:250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("~assets/imgs/backgrounds/coco2.jpg");
  right: 0;
  top: 0;
  z-index: -1;
}
</style>