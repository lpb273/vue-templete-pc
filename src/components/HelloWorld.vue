<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <h2>{{storeData}}</h2>
    <div class="box"></div>
  </div>
</template>

<script>
import store from "../store/store";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "A Vue Templete"
    };
  },
  methods: {},
  mounted() {},
  computed: {
    storeData() {
      return this.$store.state.a;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style lang="scss" scoped>
  // 链接scss文件
  @import url("../assets/style.scss");
</style>

<style lang="scss" scoped>
  // 直接写scss
  .box{
    width:50px;
    height: 50px;
    background:green;
  }
  
</style>

