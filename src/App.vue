<template>
  <div id="app">
    <HelloWorld msg="Movies"/>
    <div class="cards-container">
      <Card v-for="card in cards" :card="card" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld,
    Card
  },
  data() {
    return {
      cards: [{ name: "testy" }]
    };
  },
  methods: {
    loadData() {}
  },
  created() {
    console.log("hey");
    axios({
      method: "GET",
      url: "http://localhost:3000/movies"
    }).then(
      result => {
        if (!result && !result.data) {
          this.loading = false;
          this.result = "Something went wrong, try again please.";
        }
        console.log(result);
        const data = result.data;
        this.cards = data;
      },
      error => {
        console.error("error");
      }
    );
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  font-family: "Ubuntu", sans-serif;
  * {
    box-sizing: border-box;
  }
}
.cards-container {
  display: grid;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.card-container {
  flex-basis: 25%;
  -ms-flex: auto;
  width: 100%;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
}

@media(max-width: 1333px) {
  .card-container {
    flex-basis: 33.33%;
  }
}
@media(max-width: 1073px) {
   .card-container {
    flex-basis: 33.33%;
  }
}
@media(max-width: 815px) {
  .card-container {
    flex-basis: 50%;
  }
}
@media(max-width: 555px) {
  .card-container {
    flex-basis: 100%;
  }
}
</style>
