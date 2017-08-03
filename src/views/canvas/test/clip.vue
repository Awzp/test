<template>
<div class="chi">
  <canvas ref="myCanvas"></canvas>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      ctx: null,
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      const that = this;
      this.drawCanvas();
      let ctx = this.ctx;

      function draw() {
        ctx.fillRect(0, 0, 150, 150);
        ctx.translate(75, 75);

        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
        ctx.clip();

        // draw background
        var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
        lingrad.addColorStop(0, '#232256');
        lingrad.addColorStop(1, '#143778');

        ctx.fillStyle = lingrad;
        ctx.fillRect(-75, -75, 150, 150);

        // draw stars
        for (var j = 1; j < 50; j++) {
          ctx.save();
          ctx.fillStyle = '#fff';
          ctx.translate(75 - Math.floor(Math.random() * 150),
            75 - Math.floor(Math.random() * 150));
          drawStar(ctx, Math.floor(Math.random() * 4) + 2);
          ctx.restore();
        }

      }

      function drawStar(ctx, r) {
        ctx.save();
        ctx.beginPath()
        ctx.moveTo(r, 0);
        for (var i = 0; i < 9; i++) {
          ctx.rotate(Math.PI / 5);
          if (i % 2 == 0) {
            ctx.lineTo((r / 0.525731) * 0.200811, 0);
          } else {
            ctx.lineTo(r, 0);
          }
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      draw();
    })
  },
  methods: {
    drawCanvas() {
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
