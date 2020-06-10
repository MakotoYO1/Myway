import Vue from 'vue'
import VueRouter from 'vue-router'
const homeSearch=()=>import('views/search/homeSearch')
const homeBlogs=()=>import('views/blogs/homeBlogs')
const homeGames=()=>import('views/games/homeGames')




Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    meta:{
      title:"主页"
    },
    component:homeSearch
  },
  {
    path:"/blog",
    meta:{
      title:"博客"
    },
    component:homeBlogs
  },
  {
    path:"/games",
    meta:{
      title:"小游戏"
    },
    component:homeGames
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  document.title="MakotoYo的"+to.meta.title
  next()
})

export default router
