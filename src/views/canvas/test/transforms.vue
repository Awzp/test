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
      function draw() {

        var sin = Math.sin(Math.PI/6);
        var cos = Math.cos(Math.PI/6);
        console.log(Math.PI/6);
        console.log(sin)
        console.log(cos)
        ctx.translate(100, 100);
        var c = 0;
        for (var i=0; i <= 12; i++) {
          c = Math.floor(255 / 12 * i);
          ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
          ctx.fillRect(0, 0, 100, 10);
          ctx.transform(cos, sin, -sin, cos, 0, 0);
        }

        ctx.setTransform(-1, 0, 0, 1, 100, 100);
        ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
        ctx.fillRect(0, 50, 100, 100);
      }
      draw();
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
