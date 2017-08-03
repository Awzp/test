<template>
  <div class="chi">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ctx:null,
      offset: 0,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const that = this;
      this.drawCanvas();
      let ctx = this.ctx;
      let wLength = window.innerWidth / 50;
      let hLength = window.innerHeight /50;
      /** for(let i = 0 ; i < wLength;i++) {
        ctx.beginPath();
        ctx.moveTo(i*50,0);
        ctx.lineTo(i*50,window.innerHeight);
        ctx.stroke();
      }
      for(let i = 0 ; i < hLength;i++) {
        ctx.beginPath();
        ctx.moveTo(0,i*50);
        ctx.lineTo(window.innerWidth,i*50);
        ctx.stroke();
      }**/
      // ctx.lineWidth = 10;
      // //lineCap   butt(默认)  round   square
      // // ctx.lineCap = 'round';
      // // ctx.lineCap = 'square';
      // ctx.beginPath();
      // //它可以是这三种之一：round, bevel 和 miter。默认是 miter。
      // // ctx.lineJoin = 'round';
      // ctx.miterLimit = 2;
      // // ctx.lineJoin = 'bevel';
      // ctx.moveTo(100,100);
      // ctx.lineTo(200,200);
      // ctx.lineTo(200,100);
      //
      // ctx.closePath();
      // ctx.stroke();
      ctx.beginPath();

      /**
        画虚线
        var dashLen = dashLength === undefined ? 5 : dashLength,
        xpos = x2 - x1, //得到横向的宽度;
        ypos = y2 - y1, //得到纵向的高度;
        numDashes = Math.floor(Math.sqrt(xpos * xpos + ypos * ypos) / dashLen);
        //利用正切获取斜边的长度除以虚线长度，得到要分为多少段;
        for(var i=0; i<numDashes; i++){
           if(i % 2 === 0){
               ctx.moveTo(x1 + (xpos/numDashes) * i, y1 + (ypos/numDashes) * i);
               //有了横向宽度和多少段，得出每一段是多长，起点 + 每段长度 * i = 要绘制的起点；
            }else{
                ctx.lineTo(x1 + (xpos/numDashes) * i, y1 + (ypos/numDashes) * i);
            }
         }
        ctx.stroke();
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#0000ff";
      drawDashLine(ctx, 0, 0, 400, 400, 8)**/


      //ctx.setLineDash([4, 2])   //设置虚线，参数为数组，第一个值为实现宽度，第二个值为空白的宽度
      //ctx.lineDashOffset = 0;   //虚线起始偏移量


      function math() {
        that.offset++;
        if(that.offset > 16) {
          that.offset = 0;
        }
        that.drawAnL();
        var timer = setInterval(math,20);
      }
      math();
    })
  },
  methods: {
    drawCanvas () {
      let canvas = this.$refs.myCanvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = this.ctx = canvas.getContext('2d');
    },
    drawAnL () {
      let ctx = this.ctx;
      ctx.clearRect(190,190,300,300);
      ctx.setLineDash([10.2]);
      ctx.lineDashOffset = -this.offset;
      ctx.strokeRect(200,200,200,200);
    }
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
