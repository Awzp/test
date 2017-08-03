<template>
  <div class="catalog">
    <div class="title">
      SHOW-Test
    </div>
    <div class="category">
      <ul>
        <li class="show-block" @click="inItem(item,index)" v-for="(item,index) in list">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data:function () {
    return {
      list:[],
    }
  },
  mounted: function () {
    this.list = this.$router.options.routes.filter(function (item,index) {
      return item.type == 'category';
    })
    if(this.list.length < 20) {
      let mix = 20 - this.list.length;
      for(let i = 0; i<mix;i++) {
        this.list.push({name:'待加入'});
      }
    }
  },
  methods: {
    inItem (item,index) {
      if(item.path) {
        this.$router.push(item.path);
      }
    }
  }

}
</script>
<style lang="scss">
.show-block {
  &:nth-child(5n+3) {
    animation:fadeInDown 1s .2s ease both;
  }
  &:nth-child(5n+1),&:nth-child(5n+2){
    animation:fadeInLeft 1s .2s ease both;
  }
  &:nth-child(5n+4),&:nth-child(5n+5) {
    animation:fadeInRight 1s .2s ease both;
  }
  &:hover {
    animation:tada 1s ease both;
  }
}
</style>
<style lang="scss" scoped>
.catalog {
  width: 100%;
  height: 100%;
  background-image: url("./catalog.jpg");
  background-size: 100% 100%;
  font-family: fontjian!important;
}
.title {
  width: 80%;
  height: 100px;
  margin: 30px auto 40px;
  font-size: 48px;
  text-align: center;
  letter-spacing: 10px;
  line-height: 100px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.6) 80%, rgba(255, 255, 255, 0.4) 90%, rgba(255, 255, 255, 0) 100%);
}
.category {
  width: 90%;
  height: 75%;
  margin: 0 auto;
  background-color: rgba(133,126,118,.4);
  user-select: none;
  ul {
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: -20px;
    justify-content: space-between;
    overflow-y: scroll;
  }
}
.show-block {
  flex: 18%;
  height: 20%;
  flex-grow: 0;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
  border-radius: 10px;
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
    background: -webkit-linear-gradient(left, #4f185d , #fe5d4b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
