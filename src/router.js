import VueRouter from 'vue-router';

const routes = [
  { path: '/',
    type:'root',
    redirect: '/main' },
  {
    path: '/main',
    type:'main',
    component: resolve => require(['./views/catalog/index'], resolve)
  },
  {
    path: '/canvas/main',
    type:'category',
    name:'canvas系统学习',
    children:[
      {
        name:'main',
        path:'/canvas/main',
        component: resolve => require(['./views/canvas/test/main'], resolve)
      },
      {
        name:'baseK',
        path:'/canvas/baseK',
        component: resolve => require(['./views/canvas/test/baseK.vue'], resolve),
      },
      {
        name:'仿吃点点',
        path:'/canvas/chi',
        component: resolve => require(['./views/canvas/test/chi'], resolve)
      },
      {
        name:'颜色',
        path:'/canvas/color',
        component: resolve => require(['./views/canvas/test/color'], resolve)
      },
      {
        name:'线性',
        path:'/canvas/line',
        component: resolve => require(['./views/canvas/test/line'], resolve)
      },
      {
        name:'渐变',
        path:'/canvas/gradinets',
        component: resolve => require(['./views/canvas/test/gradinets'], resolve)
      },
      {
        name:'文字',
        path:'/canvas/text',
        component: resolve => require(['./views/canvas/test/text'], resolve)
      },
      {
        name:'图片',
        path:'/canvas/image',
        component: resolve => require(['./views/canvas/test/image'], resolve)
      },
      {
        name:'transtion',
        path:'/canvas/transtion',
        component: resolve => require(['./views/canvas/test/transtion'], resolve)
      },
      {
        name:'transforms',
        path:'/canvas/transforms',
        component: resolve => require(['./views/canvas/test/transforms'], resolve)
      },
      {
        name:'clip',
        path:'/canvas/clip',
        component: resolve => require(['./views/canvas/test/clip'], resolve)
      },
      {
        name:'animation',
        path:'/canvas/animation',
        component: resolve => require(['./views/canvas/test/animation.vue'], resolve)
      },
      {
        name:'clock',
        path:'/canvas/clock',
        component: resolve => require(['./views/canvas/test/clock.vue'], resolve)
      },
      {
        name:'ball',
        path:'/canvas/ball',
        component: resolve => require(['./views/canvas/test/ball.vue'], resolve)
      },
      {
        name:'imageData',
        path:'/canvas/imageData',
        component: resolve => require(['./views/canvas/test/imageData.vue'], resolve)
      },
      {
        name:'upload',
        path:'/canvas/upload',
        component: resolve => require(['./views/canvas/test/upload.vue'], resolve)
      },
      {
        name:'仿知乎粒子',
        path:'/canvas/zhihu',
        component: resolve => require(['./views/canvas/test/zhihu.vue'], resolve)
      },
      // {
      //   name:'path2d',
      //   path:'/canvas/path2d',
      //   component: resolve => require(['./views/canvas/test/path2d'], resolve)
      // },
    ],
    component: resolve => require(['./views/canvas/index.vue'], resolve),
  },
  {
    path: '/grad',
    type:'category',
    name:'线性渐变',
    component: resolve => require(['./views/gradients/index'], resolve)
  },
  {
    path:'/uploader/formdate',
    type:'category',
    name:'上传',
    component: resolve => require(['./views/uploader/formdate'], resolve)
  },
]

export default new VueRouter({
  routes
});
