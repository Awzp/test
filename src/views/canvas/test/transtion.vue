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
/*      // ctx.save();
      ctx.fillStyle = 'blue';
      ctx.translate(300,300);
      // ctx.save();
      ctx.fillRect(0,0,100,100);
      // ctx.restore();
      ctx.restore();
      ctx.fillRect(600,600,100,100);*/
/*        function draw() {
          ctx.fillRect(0,0,300,300);
          for (var i=0;i<3;i++) {
            for (var j=0;j<3;j++) {
              ctx.save();
              ctx.strokeStyle = "#9CFF00";
              ctx.translate(50+j*100,50+i*100);
              drawSpirograph(ctx,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
              ctx.restore();
            }
          }
        }
        function drawSpirograph(ctx,R,r,O){
          var x1 = R-O;
          var y1 = 0;
          var i  = 1;
          ctx.beginPath();
          ctx.moveTo(x1,y1);
          do {
            if (i>20000) break;
            var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
            var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
            ctx.lineTo(x2,y2);
            x1 = x2;
            y1 = y2;
            i++;
          } while (x2 != R-O && y2 != 0 );
          ctx.stroke();
        }
        draw();*/
        function draw() {
          ctx.translate(75,75);
          for (let i=1;i<6;i++){ // Loop through rings (from inside to out)
            ctx.save();
            ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';

            for (let j=0;j<i*6;j++){ // draw individual dots
              ctx.rotate(Math.PI*2/(i*6));
              ctx.beginPath();
              ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
              ctx.fill();
            }

            ctx.restore();
          }
        }
        function draw2() {
          for(let i = 1;i<6;i++) {
            ctx.save();
            ctx.translate(300,300);
            ctx.fillStyle = 'rgb(255,'+ (40*i) + ',' + (255-40*i)+')';
            for(let j = 0; j< i*6;j++) {
              ctx.rotate(Math.PI*2/(i*6));
              ctx.beginPath();
              ctx.arc(0,i*22.2,10,Math.PI*2,0,true);
              ctx.fill();
            }
            ctx.restore();
          }
        }
        draw();
        draw2();
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
