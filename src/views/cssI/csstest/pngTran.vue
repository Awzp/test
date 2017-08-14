<template>
  <div class="container">
    <div class='box1'></div>
    <div class='box2'></div>
    <div class="box2">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
}
.box1 {
  width: 100px;
  height: 100px;
  margin: 30px;
  border: 10px dashed #beceeb;
  box-shadow: 5px 5px 10px black;
}
.box2 {
  width: 65px;
  height: 52px;
  margin: 30px;
  margin-left: 200px;
  overflow: hidden;
  display: inline-block;
  /* border: 10px dashed #beceeb; */
  div {
    width: 65px;
    height: 52px;
    position: relative;
    left: -63px;
    background: url(trumpet.png) no-repeat left;
    border-right: 65px solid transparent;
    filter: drop-shadow(60px 0 0 #beceeb);
  }
}
</style>
