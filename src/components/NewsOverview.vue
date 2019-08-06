<template>
  <div>
    <h1>Blockchain news</h1>
    <ScaleLoader v-if="isLoading"></ScaleLoader>
    <div v-else class="cards-container">
      <Card :card="card" v-for="card in cards" v-bind:key="card.uid" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/Card.vue";
import { ScaleLoader } from "@saeris/vue-spinners";
export default {
  name: "NewsOverview",
  components: { Card, ScaleLoader },
  data() {
    return {
      cards: [],
      isLoading: false
    };
  },
  beforeMount() {
    this.isLoading = true;
    axios({
      method: "GET",
      url: "https://blockmodo.com/api/currencies/news"
    })
      .then(result => {
        if (!result && !result.data) {
          this.result = "Something went wrong, try again please.";
        }
        const data = result.data.items;
        this.cards = data;
        return result;
      })
      .catch(error => {
        this.cards = [];
        return error;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.card {
  flex-basis: 33.33%;
  width: 100%;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 1333px) {
  .card {
    flex-basis: 33.33%;
  }
}
@media (max-width: 1073px) {
  .card {
    flex-basis: 50%;
  }
}
@media (max-width: 815px) {
  .card {
    flex-basis: 100%;
  }
}
</style>