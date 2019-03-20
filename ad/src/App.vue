<template>
  <div id="app">
    <div class="title">
      <img src="./assets/logo.png" alt="">
      <div style="float:right">
        <img src="./assets/img1.png" alt="">
        <span style="line-height:64px;color:#A1A7B1;margin-right:20px">admin</span>
      </div>
    </div>
    <router-view/>
    <div style="font-size:12px;color:#A1A7B1">鄂ICP备17013099号-2 快媒数字 版权所有</div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html body  {
  background: #f0f2f4;
  height: 100%!important;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f0f2f4;
  height: 100vh;
  /* margin-top: 60px; */
}
.title {
  height: 64px;
  background: #001529;
  /* margin-bottom: 20px */
}
.title img {
  float: left;
  margin: 20px
}
section {
  margin: 20px;
}
</style>
