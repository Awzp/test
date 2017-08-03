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
      let ctx = this.ctx;
      ctx.translate(400,200);
      // ctx.globalAlpha = .4;

      for(let i = 0 ; i < 6;i++) {
        for(let k = 0 ; k < 6;k++) {
          ctx.fillStyle = "rgb(" + Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*k) + ",0)";
          ctx.fillRect(i*100,k*100,100,100);
        }
      }
      ctx.globalAlpha = 1;
      ctx.translate(-350,-150);
      for(let i = 0 ; i < 6;i++) {
        for(let k = 0 ; k < 6;k++) {
          ctx.strokeStyle = "rgb(0," + Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*k)+")";
          ctx.beginPath();
          ctx.arc(i*50,k*50,20,Math.PI*2,0,true);
          ctx.stroke();
        }
      }

      // ctx.globalAlpha = .6;//设置透明度方法

      ctx.fillStyle="rgb(255,221,0)";
      ctx.fillRect(300,800,200,50);
      ctx.fillStyle="rgb(102,204,0)";
      ctx.fillRect(300,850,200,50);
      ctx.fillStyle="rgb(0,153,255)";
      ctx.fillRect(300,900,200,50);
      ctx.fillStyle="rgb(255,51,0)";
      ctx.fillRect(300,950,200,50);

      for(let i = 0 ; i < 10; i++) {
        ctx.fillStyle = "rgba(255,255,255,"+ (i+1)/10 +")";
        for(let k = 0 ; k < 4; k++) {
          ctx.fillRect(310+i*18,810+k*50,18,30);
        }
      }
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
