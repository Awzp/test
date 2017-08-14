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
      const that = this;
      this.drawCanvas();
      let ctx = this.ctx;
      let canvas = this.$refs.myCanvas;
      let raf,running = false;
      let ball = {
        x: 100,
        y: 100,
        vx:2,
        vy:5,
        radius: 25,
        color: 'blue',
        draw: function () {
          ctx.save();
          ctx.beginPath();
          ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.restore();
        }
      }
      function clear() {
        ctx.fillStyle = 'rgba(255,255,255,.4)';
        ctx.clearRect(0,0,canvas.width,canvas.height);
      }
      function draw() {
        // ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        ctx.save();
        ctx.fillStyle = 'rgba(255,255,255,.4)';
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.restore();
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;
        if(ball.x+ball.vx > canvas.width || ball.x+ball.vx < 0) {
          ball.vx = -ball.vx;
        }
        if(ball.y+ball.vy > canvas.height || ball.y+ball.vy < 0) {
          ball.vy = -ball.vy;
        }
        // ball.vy += .3;
        raf = window.requestAnimationFrame(draw);
      }
      canvas.addEventListener('mousemove',function (e) {
        if(!running) {
          clear();
          ball.x = e.clientX;
          ball.y = e.clientY;
          ball.draw();
        }
      });
      canvas.addEventListener('click',function () {
        if(!running) {
          raf = window.requestAnimationFrame(draw);
        }
        running = true;
      })
      canvas.addEventListener("mouseout",function(e){
        window.cancelAnimationFrame(raf);
        running = false;
      });

      ball.draw();
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
