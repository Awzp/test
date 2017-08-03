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
      date:null,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const that = this;
      this.drawCanvas();
      let ctx = this.ctx;

      window.requestAnimationFrame(this.drawClock)
    })
  },
  methods: {
    drawClock() {
      this.date = new Date();
      this.ctx.save();
      this.ctx.clearRect(0,0,600,600);
      this.ctx.translate(300,300);
      this.ctx.fillStyle = 'white';
      this.ctx.scale(0.8,0.8);
      this.ctx.lineWidth = 8;
      this.ctx.strokeStyle = 'black';
      this.ctx.rotate(-Math.PI/2);
      this.ctx.lineCap ='round';
      this.drawBlue();
      this.drawHour();
      this.drawMinutes();
      this.drawHL();
      this.drawML();
      this.drawSL();
      this.drawCL();
      this.restore();
      window.requestAnimationFrame(this.drawClock);
    },
    drawBlue() {
      this.ctx.save();
      this.ctx.lineWidth = 10;
      this.ctx.strokeStyle = 'skyblue';
      this.ctx.beginPath();
      this.ctx.arc(0,0,150,0,Math.PI*2,true);
      this.ctx.stroke();
      this.ctx.restore();
    },
    drawHour(){
      this.ctx.save();
      for(let i = 0 ; i < 12; i++) {
        this.ctx.beginPath();
        this.ctx.rotate(Math.PI/6);
        this.ctx.moveTo(120,0);
        this.ctx.lineTo(140,0);
        this.ctx.stroke();
      }
      this.ctx.restore();
    },
    drawMinutes () {
      this.ctx.save();
      this.ctx.lineWidth = 2;
      for(let i = 0 ; i < 60; i++) {
        this.ctx.beginPath();
        this.ctx.rotate(Math.PI/30);
        this.ctx.moveTo(130,0);
        this.ctx.lineTo(140,0);
        this.ctx.stroke();
      }
      this.ctx.restore();
    },
    drawHL() {
      var ctx = this.ctx;
      ctx.save();
      ctx.lineWidth = 8;
      let h = this.date.getHours();
      h = h > 12 ? h-12: h;
      ctx.rotate((Math.PI/6)*h+(Math.PI/360)*this.date.getMinutes()+(Math.PI/21600)*this.date.getSeconds());
      ctx.beginPath();
      ctx.moveTo(-20,0);
      ctx.lineTo(64,0);
      ctx.stroke();
      ctx.restore();
    },
    drawML() {
      var ctx = this.ctx;
      ctx.save();
      ctx.rotate((Math.PI/30)*this.date.getMinutes()+(Math.PI/21600)*this.date.getSeconds());
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-36,0);
      ctx.lineTo(78,0);
      ctx.stroke();
      ctx.restore();

    },
    drawSL() {
      var ctx = this.ctx;
      ctx.save();
      ctx.rotate((Math.PI/30)*this.date.getSeconds());
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(-42,0);
      ctx.lineTo(88,0);
      ctx.stroke();
      ctx.restore();

    },
    drawCL() {
      var ctx = this.ctx;
      ctx.save();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#D40000";
      ctx.fillStyle = "#D40000";
      ctx.beginPath();
      ctx.arc(0,0,6,0,Math.PI*2,true);
      ctx.fill();
      ctx.restore();
    },
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
