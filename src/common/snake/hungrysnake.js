
// 地图构建
export function Map(atom, xnum, ynum) {
  this.atom = atom  //原子的大小，宽高一致
  this.xnum = xnum  //横轴原子数量
  this.ynum = ynum  //纵轴原子数量
  this.canvas = null
  this.showg = document.createElement('div') //判断是否显示网格
  this.create = function () {
    this.canvas = document.createElement('div')
    this.canvas.style.cssText = "border:solid 1px red;position:relative;background-color:white"
    this.canvas.style.width = this.atom * this.xnum + "px"
    this.canvas.style.height = this.atom * this.ynum + "px"
    document.getElementById("snake").appendChild(this.canvas)

    // 画布附加网格
    this.canvas.appendChild(this.showg)
    this.showg.style.display = "none"
    for (let y = 0; y < this.ynum; y++) {
      for (let x = 0; x < this.xnum; x++) {
        let s = document.createElement("div")
        s.style.cssText = "position:absolute;border:solid 1px silver;background-color:green"
        s.style.width = this.atom + "px"
        s.style.height = this.atom + "px"
        s.style.top = this.atom * y + "px"
        s.style.left = this.atom * x + "px"
        this.showg.appendChild(s)
      }
    }
  }
}

Map.prototype.showgrid = function (isshow) {
  if (isshow) {
    this.showg.style.display = "block"
  } else {
    this.showg.style.display = "none"
  }
}



//食物构建
export function Food(map) {
  this.x = Math.floor(Math.random() * map.xnum)
  this.y = Math.floor(Math.random() * map.ynum)
  this.display = function () {
    this.foods = document.createElement('div')
    this.foods.style.cssText = "position:absolute;background-color:red"
    this.foods.style.width = map.atom + "px"
    this.foods.style.height = map.atom + "px"
    this.foods.style.left = this.x * map.atom + "px"
    this.foods.style.top = this.y * map.atom + "px"
    map.canvas.appendChild(this.foods)
  }

}

//蛇创建
export function Snake(map) {
  this.width = map.atom
  this.height = map.atom
  this.redirect = "right"
  this.body = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }
  ]
  //显示蛇
  this.display = function () {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x != null) {  //当刚吃到食物的一瞬间不用添加
        let s = document.createElement('div')
        //储存当前蛇段
        this.body[i].store = s
        s.style.cssText = "position:absolute;background-color:blue"
        s.style.width = this.width + "px"
        s.style.height = this.height + "px"
        s.style.borderRadius="50%"
        s.style.left = this.body[i].x * this.width + "px"
        s.style.top = this.body[i].y * this.width + "px"

        map.canvas.appendChild(s)
      }
    }
  }
  //蛇运动
  this.run = function (food, timer) {
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    switch (this.redirect) {
      case 'right':
        this.body[0].x += 1
        break
      case 'left':
        this.body[0].x -= 1
        break
      case 'up':
        this.body[0].y -= 1
        break
      case 'down':
        this.body[0].y += 1
        break
    }


    if (food != null) {
      //假如蛇吃到食物，蛇加一节
      if (this.body[0].x == food.x && this.body[0].y == food.y) {
        this.body.push({ x: null, y: null, store: null })
        map.canvas.removeChild(food.foods)
        food = null
      }
    }

    //返回-1时表示出界情况
    //判断是否碰边
    if (this.body[0].x < 0 || this.body[0].x > map.xnum - 1 || this.body[0].y < 0 || this.body[0].y > map.ynum - 1) {
      clearInterval(timer)
      alert(`碰边啦，游戏结束`)
      return -1         
    }
    //判断是否碰到自己
    for (let i = 4; i < this.body.length; i++) {
      if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
        clearInterval(timer)
        alert(`吃自己啦，游戏结束`)
        return -1
      }
    }


    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].store != null) {  //吃到食物时，store为null，不能删除
        map.canvas.removeChild(this.body[i].store)
      }
    }

    this.display()

    return food      //判断是否吃到食物，以及是否出局
  }
}