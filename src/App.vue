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
  color: $text-color;
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

a {
  text-decoration: none;
  cursor: pointer;
  padding: 0 3px;
  color: $regal-blue;
}

a:hover {
  color: $text-color-alt;
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

blockquote {
  display: block;
  background: $white;
  padding: 15px 20px 15px 45px;
  margin: 0 0 20px;
  position: relative;

  font-size: 16px;
  line-height: 1.2;
  color: $text-color-alt;
  text-align: justify;

  border-left: 15px solid $regal-blue;
  border-right: 2px solid $regal-blue;

  -moz-box-shadow: 2px 2px 15px $box-shadow;
  -webkit-box-shadow: 2px 2px 15px $box-shadow;
  box-shadow: 2px 2px 15px $box-shadow;
}

blockquote::before {
  content: “\201c”;

  font-family: Georgia, serif;
  font-size: 60px;
  font-weight: bold;
  color: #999;

  position: absolute;
  left: 1px;
  top: 5px;
}

blockquote::after {
  content: “”;
}

blockquote a {
  background: #eee;
}

blockquote em {
  font-style: italic;
}
</style>
