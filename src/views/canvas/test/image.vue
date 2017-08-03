<template>
  <div class="chi">
    <!-- <img src="./ddd.png" ref="image1"> -->
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<script>
var ddd  = require('./ddd.png');
var ccc  = require('./bg.jpeg');
export default {
  data: function () {
    return {
      ctx:null,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const that = this;
      this.drawCanvas();
      let ctx = this.ctx;

      // ctx.drawImage(img,0,0,200,200);//参数img对象  ,x,y,w,h

      // let imageObj = new Image();
      // imageObj.onload = function () {
      //   ctx.drawImage(imageObj,0,0);
      // }
      // imageObj.src = ddd;
      let img = this.$refs.image1 || new Image();
      img.onload = function () {
        /**
         * 八个参数 前四个为切图的地方  后四个为显示的x y w h
         * @type {[type]}
         */
        ctx.drawImage(img,0,0,400,400,100,100,200,200);
      }
      img.src = ddd;
      let img2 = this.$refs.image1 || new Image();
      img2.onload = function () {
        /**
         * 八个参数 前四个为切图的地方  后四个为显示的x y w h
         * @type {[type]}
         */
        ctx.drawImage(img2,0,1400,1400,1800,400,400,600,1000);
      }
      img2.src = ccc;
    })
  },
  methods: {
    drawCanvas () {
      let canvas = this.$refs.myCanvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = this.ctx = canvas.getContext('2d');
    },
  }
}
</script>

<style lang="scss" scoped>
.chi {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
