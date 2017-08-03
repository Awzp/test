<template>
  <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
import store from './store/store.js'
import './common/scss/index.scss'

export default {
  store: store,
}
</script>

<style lang="scss">
@font-face {
  font-family: fontjian;
  src: url('./common/Noteworthy-Bold.ttf');
}
html {
  height: 100%;
  transition: height 0.5s;
  overflow: hidden;
  background: #eee;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #eee;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  /* font-family: Source Sans Pro, Helvetica, sans-serif; */
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
