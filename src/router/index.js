import Vue from 'vue'
import VueRouter from 'vue-router'
const homeSearch = () => import('views/search/homeSearch')
const homeBlogs = () => import('views/blogs/homeBlogs')
const homeGames = () => import('views/games/homeGames')
const gameSnake = () => import('views/games/snack/gameSnake')
const game2048=()=>import('views/games/2048/game2048')


Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "homeSearch",
    meta: {
      title: "主页"
    },
    component: homeSearch
  },
  {
    path: "/blog",
    name: "homeBlogs",
    meta: {
      title: "博客"
    },
    component: homeBlogs
  },
  {
    path: "/games",
    name: "homeGames",
    meta: {
      title: "小游戏"
    },
    component: homeGames,
    children: [{
      path: "snake",
      name: "gameSnake",
      meta: {
        title: "贪吃蛇"
      },
      component: gameSnake
    },
    {
      path:"2048",
      name:"game2048",
      meta:{
        title:"2048"
      },
      component:game2048
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = "MakotoYo的" + to.meta.title
  next()
})
// 解决vue-router在3.0版本以上重复点菜单报错问题
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return originPush.call(this, to).catch(err => err)
}

const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return originReplace.call(this, to).catch(err => err)
}
export default router
