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
      // this.drawSun();
      this.drawSun2();
    })
  },
  methods: {
    drawCanvas () {
      let canvas = this.$refs.myCanvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = this.ctx = canvas.getContext('2d');
    },
    drawSun2() {
      let ctx = this.ctx;
      var sun = new Image();
      var moon = new Image();
      var earth = new Image();
      function init(){
        sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
        moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
        earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
        window.requestAnimationFrame(draw);
      }
      function draw() {
        ctx.globalCompositeOperation = 'destination-over'

        ctx.clearRect(0,0,300,300);
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.save();
        ctx.translate(150,150);

        var time = new Date();
        ctx.rotate(((Math.PI*2)/60) * time.getSeconds() + ((Math.PI*2)/60000)*time.getMilliseconds());
        ctx.translate(105,0);
        ctx.fillRect(0,-12,12,30);
        ctx.drawImage(earth,-12,-12);
        console.log(earth.width);
        console.log(earth.height);
        ctx.save();
        ctx.rotate(((Math.PI*2)/6) * time.getSeconds() + ((Math.PI*2)/6000)*time.getMilliseconds());
        ctx.translate(0,28.5);
        ctx.drawImage(moon,-3.5,-3.5);

        ctx.restore();
        ctx.restore();
        ctx.beginPath();
        ctx.arc(150,150,105,Math.PI*2,0,true)
        ctx.stroke();
        ctx.drawImage(sun,0,0,300,300);
        window.requestAnimationFrame(draw);

      }
      init();
    },
    drawSun() {
      let ctx = this.ctx;
      var sun = new Image();
      var moon = new Image();
      var earth = new Image();
      function init(){
        sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
        moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
        earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
        window.requestAnimationFrame(draw);
      }

      function draw() {
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0,0,300,300); // clear canvas

        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)';
        ctx.save();
        ctx.translate(150,150);

        // Earth
        var time = new Date();
        ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
        ctx.translate(105,0);
        ctx.fillRect(0,-12,50,24); // Shadow
        ctx.drawImage(earth,-12,-12);

        // Moon
        ctx.save();
        ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
        ctx.translate(0,28.5);
        ctx.drawImage(moon,-3.5,-3.5);
        ctx.restore();

        ctx.restore();

        ctx.beginPath();
        ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
        ctx.stroke();

        ctx.drawImage(sun,0,0,300,300);

        window.requestAnimationFrame(draw);
      }

      init();
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
