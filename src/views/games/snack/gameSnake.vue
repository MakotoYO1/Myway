<template>
  <div id="snake">
    <div class="buttons">
      <input class="btn" id="begin" type="button" :value="continuegame" @click="Begin" />
      <input class="btn" id="pause" type="button" value="暂停游戏" @click="Pause" />
      <input class="btn" id="showgrid" type="button" value="显示网格" @click="ShowGrid" />
    </div>
    <div class="count">
      <div id="level">
        <span>关卡：</span>
        <span>{{level}}</span>
      </div>
      <div id="score">
        <span>得分：</span>
        <span>{{score}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Map, Food, Snake } from "common/snake/hungrysnake";
export default {
  name: "gamesnack",
  data() {
    return {
      score: 0, //得分
      level: 1, //当前关卡
      timer: 0, //定时器
      continuegame: "开始游戏",
      girdshow: false, //显示网格
      map: new Map(20, 25, 15),
      foo: 0 //接收新生成的食物
    };
  },
  computed: {
    snk: function() {
      return new Snake(this.map);
    },
    foodcube: {
      set: function(value) {
        this.foo = value;
      },
      get: function() {
        return this.foo == 0 ? new Food(this.map) : this.foo;
      }
    }
  },
  mounted() {
    this.map.create();
    this.map.showgrid(this.girdshow);
    this.foodcube.display();
    this.snk.display();
  },
  methods: {
    Begin() {
      clearInterval(this.timer);
      this.continuegame = "继续游戏";
      // 继续游戏按钮触发后，使暂停按钮获得焦点
      this.$nextTick(function() {
        document.getElementById("pause").focus();
      });
      window.onkeyup = function(event) {
        // 监听键盘事件
        switch (event.keyCode) {
          case 37:
            if (this.snk.redirect != "right") {
              this.snk.redirect = "left";
            }
            break;
          case 38:
            if (this.snk.redirect != "down") {
              this.snk.redirect = "up";
            }
            break;
          case 39:
            if (this.snk.redirect != "left") {
              this.snk.redirect = "right";
            }
            break;
          case 40:
            if (this.snk.redirect != "up") {
              this.snk.redirect = "down";
            }
            break;
        }
      }.bind(this); //注意这里要绑定this，不然取不到snk
      this.timer = setInterval(() => {
        let judge = this.snk.run(this.foodcube, this.timer); //判断是否吃到食物
        if (judge == -1) {
          window.location.reload(); //游戏失败，刷新网页重新开局
        }
        if (!judge) {
          //假如吃到了食物，重新生成新的食物
          this.foodcube = new Food(this.map);
          this.foodcube.display();
          this.score++;
          if (this.score % 5 == 0) {
            this.level = Math.floor(this.score / 5) + 1;
            this.Begin();
          }
        }
      }, 320 - this.level * 20);
    },
    Pause() {
      clearInterval(this.timer);
      // 暂停按钮触发后使 继续游戏按钮获得焦点
      this.$nextTick(function() {
        document.getElementById("begin").focus();
      });
    },
    ShowGrid() {
      this.girdshow = !this.girdshow;
      this.map.showgrid(this.girdshow);
    }
  }
};
</script>

<style>
#snake {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 开关信息 */
#snake .buttons {
  display: flex;
  justify-content: center;
}
#snake .buttons .btn {
  background: none;
  border: none;
  margin-right: 10px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  /* border: solid 1px red; */
  border-radius: 20px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.5);
}
#snake .buttons .btn:hover {
  box-shadow: 0 0 5px #6d6caa;
}
#snake .buttons .btn:focus {
  box-shadow: 0 0 5px #6d6caa;
}
/* 统计信息 */
#snake .count {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
}
#snake .count > div {
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
}
#snake .count > div span:nth-last-of-type(1) {
  color: red;
  font-size: 45px;
}
</style>