<template>
  <div>
    <div class="content">
      <ul>
        <li class="show-block" @click="inItem(item)" v-for="item in list">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  ul {
    width: 80%;
    height: 80%;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: -20px;
    justify-content: space-between;
    overflow-y: scroll;
    .show-block {
      flex: 18%;
      height: 20%;
      flex-grow: 0;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
      border-radius: 10px;
      background-color: rgba(255,255,255,.3);
      cursor: pointer;
      margin: 20px 0;
      p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: 1.4rem;
        color: red;
        text-align: center;
        background: -webkit-linear-gradient(left, yellow , red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
<script>
  export default {
    data: function () {
      return {
        list:[],
        ctx:null,
      }
    },
    mounted: function () {
      let data;
      data = this.$router.options.routes.filter(function (item,index) {
        return item.name == 'css图片处理';
      })[0];
      data = data.children.filter(function (item,index) {
        return item.name != 'main';
      });
      this.list = this.list.concat(data);
      if(data.length < 20) {
        let mix = 20 - data.length;
        for(let i = 0; i<mix;i++) {
          this.list.push({name:'待加入'});
        }
      }
      this.$nextTick(function () {
        const that = this;
        let canvas = this.$refs.myCanvas;
        var ctx = this.ctx = canvas.getContext('2d');
        let mArea = {
              x: 0,
              y: 0
            };
        let Particle = function (canvas) {
          this.canvas = canvas;
          this.ctx = canvas.getContext('2d');
        }
        Particle.prototype = {

          initCanvas: function () {
            var winW = window.innerWidth,
              winH = window.innerHeight;

            var ratio = this.getPixelRatio(this.ctx);

            if(ratio.devicePixelRatio !== ratio.backingStoreRatio) {
              this.canvas.width = winW * ratio.ratio;
              this.canvas.height = winH * ratio.ratio;
            } else {
              this.canvas.width = winW;
              this.canvas.height = winH;
            }

            //粒子个数
            this.nums = 350 * this.canvas.width / 4000;
            //粒子连线的最大间距
            this.distance = 200 * this.canvas.width / 4000;

            if(this.distance < 80) {
              this.distance = 80;
            }

            this.ratio = ratio.ratio;
          },

          initPoints: function () {
            var maxW = this.canvas.width,
             maxH = this.canvas.height,
             points = [],
             that = this;

            for(var i = 0; i < this.nums; i++ ) {
              var point = {
                x: Math.random() * maxW,
                y: Math.random() * maxH,
                xa: Math.random() * 2 - 1,
                ya: Math.random() * 2 - 1,
                color: that.getColor()
              }

              points.push(point);
            }

            this.points = points;
          },

          drawPoints: function () {
            var points = this.points,
              ctx = this.ctx,
              that = this;

            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // console.log(this.ratio)
            points.forEach( function(point, index) {
              point = that.movePoint(point);
              var color = point.color;

              ctx.beginPath();
              ctx.arc(point.x, point.y, 2, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.fillStyle= `rgb(${color.r},${color.g},${color.b})`;
              ctx.fill();
              that.drawLine(point);
            });

            requestAnimationFrame(this.drawPoints.bind(this));
          },

          movePoint: function (point) {
            //偏移
            point.x += point.xa;
            point.y += point.ya;

            //当位移超出边界时，改变方向
            if(point.x >= this.canvas.width || point.x <= 0) {
              point.xa = -point.xa;
            }

            //当位移超出边界时，改变方向
            if(point.y >= this.canvas.width || point.y <= 0) {
              point.ya = -point.ya;
            }

            return point;
          },

          //粒子间连线
          drawLine: function (point) {
            var points = this.points.concat([mArea]),
              maxDis = this.distance,
              ctx = this.ctx,
              that = this;
              var color = point.color;

            for(var i = 0; i < points.length; i++) {
              var aPoint = points[i];

              if (point === aPoint || aPoint.x === null || aPoint.y === null) continue;

              var dis = that.getDistance(point, aPoint);
              var sub = Math.abs(dis - maxDis);

              //如果是鼠标点，则让改点像鼠标偏移
              if(aPoint === mArea && dis < maxDis) {
                point.x -= (point.x - aPoint.x) * 0.01;
                point.y -= (point.y - aPoint.y) * 0.01;
              }

              //如果距离小于max 则画线
              if(dis < maxDis) {
                var ratio = sub / maxDis;
                ctx.beginPath();
                ctx.lineWidth = ratio / 2 * this.ratio;
                ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b}, 1)`;
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(aPoint.x, aPoint.y);
                ctx.stroke();
              }
            }
          },

          getDistance: function (a, b) {
            var x = Math.abs(a.x - b.x),
              y = Math.abs(a.y - b.y);

            return Math.sqrt(x * x + y * y);
          },

          getColor: function (alpha) {
            alpha = alpha || 1;

            function getrgb() {
              return parseInt(Math.random() * 255);
            }

            return {
              r: getrgb(),
              g: getrgb(),
              b: getrgb()
            }
          },

          init: function () {
            this.initCanvas();
            this.bindEvent();
            this.initPoints();
            this.drawPoints();
          },

          bindEvent: function () {
            var that = this;
            //监听鼠标位置
            this.canvas.addEventListener('mousemove', function (e) {
              e = e || window.event;
              mArea.x = (e.clientX) * that.ratio;
              mArea.y = e.clientY * that.ratio;
            }, false)
          },

          getPixelRatio(context) {
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = context.webkitBackingStorePixelRatio ||
                    context.mozBackingStorePixelRatio ||
                    context.msBackingStorePixelRatio ||
                    context.oBackingStorePixelRatio ||
                    context.backingStorePixelRatio || 1;
            var ratio = devicePixelRatio / backingStoreRatio;

            return {
              'devicePixelRatio': devicePixelRatio,
              'backingStoreRatio' : backingStoreRatio,
              'ratio' : ratio
            }
          }
        };

        var particle = new Particle(canvas);

        setTimeout(function () {
          particle.init();
        }, 1000)
      })
    },
    methods:{
      inItem (item,index) {
        if(item.path) {
          this.$router.push(item.path);
        }
      },
    }
  }
</script>
