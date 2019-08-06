<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./styles/colors";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $bg-color;
}
body {
  font-family: "Ubuntu", sans-serif;
  * {
    box-sizing: border-box;
  }
  margin: 0;
  background: $bg-color;
}

.back-button {
  background-color: $san-juan;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>
