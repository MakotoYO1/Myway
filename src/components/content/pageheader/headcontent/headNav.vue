<template>
  <nav id="header_nav">
    <ul id="navs">
      <li @click="onHomeClick">主页</li>
      <li @click="onBlogClick">博客</li>
      <li @click="onGameClick" id="games">
        小游戏
        <nav-component>
          <template v-slot:otherlist>
            <ul>
              <li>贪吃蛇</li>
              <li>2048</li>
            </ul>
          </template>
        </nav-component>
      </li>
    </ul>
    <ul>
      <li>
        <head-author></head-author>
      </li>
    </ul>
  </nav>
</template>

<script>
import headAuthor from "./headAuthor";
import navComponent from "./navcomponents/navComponents";
export default {
  name: "headnav",
  components: {
    headAuthor,
    navComponent
  },
  methods: {
    onHomeClick() {
      this.$router.push({
        path: "/home"
      });
    },
    onBlogClick() {
      this.$router.push({
        path: "/blog"
      });
    },
    onGameClick() {
      this.$router.push({
        path: "/games"
      });
    }
  }
};
</script>

<style>
#header_nav {
  width: 100%;
  display: flex;
  margin-top: 60px;
}
#navs {
  font-weight: bold;
  font-size: 20px;
  margin-left: 30px;
  margin-right: auto;
}
#navs > li {
  margin-right: 40px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
}
#navs > li::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  z-index: -1;
  opacity: 0.5;
}
#navs > li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #45b787;
  z-index: -1;
  transform: scale(0);
  transition-duration: 0.4s;
}
#navs > li:hover {
  cursor: pointer;
  color: white;
}
#navs > li:hover::before {
  transform: scale(0);
}
#navs > li:hover::after {
  transform: scale(1);
}
#navs > li > div {
  display: none;
}
#navs > li:hover > div {
  display: block;
}
</style>