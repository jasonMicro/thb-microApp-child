<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="less">
@import './theme/public';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

html {
  font-size: 18px;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}

.flex-5 {
  flex: 5;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.fontquan {
  font-family: Fontquan;
  font-weight: 400;
  letter-spacing: 2px;
}

.objControl {
  width: 153px;
  height: 44px;
  background: #00000085;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  right: 23px !important;
  left: auto !important;
  top: 10px !important;

  .c_color {
    width: 12px;
    height: 12px;
    background: #f0505a;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
}

div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
body {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'hzgb';
  src: url('./assets/font/hzgb.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Fontquan';
  src: url('./assets/font/Fontquan.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>
