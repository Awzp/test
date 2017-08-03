<template>
  <div class="container">
    <canvas id="myCanvas" ref="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$nextTick(function () {
      this.draw()
    })
  },
  methods: {
    draw:function () {
      let canvas = this.$refs.myCanvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext('2d');
      /**
       * @type 绘制矩形方法
       */
      // ctx.fillRect(50,50,100,100);
      /**
       * @type 设置填充颜色
       */
      // ctx.fillStyle = 'red';
      /**
       *
       * @type 设置线条宽度
       */
      // ctx.lineWidth = 5;
      // ctx.fillRect(200,50,100,100);
      /**
       * @type 清除区域矩形
       */
      // ctx.clearRect(220,70,20,20);
      /**
       * @type 绘制矩形
       */
      // ctx.strokeRect(200,50,100,100);
      // ctx.lineWidth = 2;

      /**
       * @type 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
         @ps: 在每次重新绘制线的时候要beginPath不然颜色会被覆盖
       */
      // ctx.beginPath();
      // ctx.moveTo(300,300);
      // ctx.lineTo(400,400);
      // ctx.lineTo(500,100);
      /**
       * @type 闭合绘制
       */
      // ctx.closePath();
      //绘制
      // ctx.stroke();
      //画笔颜色
      // ctx.fillStyle = 'blue';
      //填充绘制区域
      // ctx.fill();
      // ctx.beginPath();
      // ctx.strokeStyle = 'yellow';
      // ctx.moveTo(100,400);
      // ctx.lineTo(100,200);
      // ctx.stroke();

      /**
       * @type 对应参数 {x,y,半径,开始角度,结束角度,时针方向}}
       */
       // ctx.beginPath();
      // ctx.arc(100,600,30,Math.PI * .3,Math.PI,true);
      // // ctx.fillStyle = 'orange';
      // // ctx.fill();
      // ctx.strokeStyle = 'orange';
      // ctx.closePath();
      // ctx.stroke()


      // ctx.beginPath();
      // ctx.moveTo(500,700);
      // ctx.quadraticCurveTo(650,500,800,700);
      // ctx.stroke();

      // 二次贝尔赛曲线
      // ctx.beginPath();
      // ctx.moveTo(75,25);
      // ctx.quadraticCurveTo(25,25,25,62.5);
      // ctx.quadraticCurveTo(25,100,50,100);
      // ctx.quadraticCurveTo(50,120,30,125);
      // ctx.quadraticCurveTo(60,120,65,100);
      // ctx.quadraticCurveTo(125,100,125,62.5);
      // ctx.quadraticCurveTo(125,25,75,25);
      // ctx.stroke();

      //三次贝塞尔曲线
      // ctx.beginPath();
      // ctx.moveTo(100,120);
      // ctx.bezierCurveTo(75,37,70,25,150,125);
      // ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
      // ctx.bezierCurveTo(20,80,40,102,75,120);
      // ctx.bezierCurveTo(110,102,130,80,130,62.5);
      // ctx.bezierCurveTo(130,62.5,130,25,100,25);
      // ctx.bezierCurveTo(85,25,75,37,75,40);
      // ctx.fill();

      /**
       * @type 在这里存在一个问题  当使用rect绘制时  会默认从0 ,0绘制到当前点
       */
      ctx.beginPath();
      ctx.moveTo(100,200);
      ctx.lineTo(100,100);
      ctx.lineTo(0,0);
      ctx.closePath();
      ctx.rect(200,300,100,100);
      ctx.lineTo(0,0);
      ctx.stroke();
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
