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
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.drawCanvas();
      this.roundedRect(this.ctx,30,30,600,600,40);
      this.roundedRect(this.ctx,50,50,550,550,50);
      this.roundedRect(this.ctx,140,150,150,100,30);
      this.roundedRect(this.ctx,360,150,150,100,30);
      this.roundedRect(this.ctx,140,360,150,100,30);
      this.roundedRect(this.ctx,360,360,150,100,30);
      /**
       * 画点点
       */
      for(var i=0;i<23;i++){
        this.ctx.fillRect(120+i*20,100,8,8);
      }
      for(var i=0;i<21;i++){
        this.ctx.fillRect(130+i*20,300,8,8);
      }
      for(var i=0;i<24;i++){
        this.ctx.fillRect(100+i*20,530,8,8);
      }
      for(var i=0;i<19;i++){
        this.ctx.fillRect(100,140+i*20,8,8);
      }
      for(var i=0;i<19;i++){
        this.ctx.fillRect(320,130+i*20,8,8);
      }
      for(var i=0;i<19;i++){
        this.ctx.fillRect(560,130+i*20,8,8);
      }
      let ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(100,100)
      ctx.arc(100,100,30,Math.PI*1.9,Math.PI*2.2,true)
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(200,336);
      ctx.lineTo(200,292);
      ctx.bezierCurveTo(200,282,210,262,226,262);
      ctx.bezierCurveTo(234,262,254,262,260,292);
      ctx.lineTo(260,336);
      ctx.lineTo(250,320);
      ctx.lineTo(240,336);
      ctx.lineTo(230,320);
      ctx.lineTo(220,336);
      ctx.lineTo(210,320);
      ctx.lineTo(200,336);
      ctx.fill();

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.arc(220,290,8,Math.PI*2,0,true);
      ctx.arc(240,290,8,Math.PI*2,0,true);
      ctx.fill();

      ctx.fillStyle = 'black';
      ctx.fillRect(214,290,4,4);
      ctx.fillRect(234,290,4,4);
    })
  },
  methods: {
    drawCanvas () {
      let canvas = this.$refs.myCanvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = this.ctx = canvas.getContext('2d');
    },
    roundedRect(ctx,x,y,width,height,radius){
      ctx.beginPath();
      ctx.moveTo(x,y+radius);
      ctx.lineTo(x,y+height-radius);
      ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
      ctx.lineTo(x+width-radius,y+height);
      ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
      ctx.lineTo(x+width,y+radius);
      ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
      ctx.lineTo(x+radius,y);
      ctx.quadraticCurveTo(x,y,x,y+radius);
      ctx.stroke();
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
