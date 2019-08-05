
<template>
  <div>
    <router-link to="/">Terug</router-link>
    <ScaleLoader v-if="isLoading"></ScaleLoader>
    <div v-else>{{actors}}</div>
  </div>
</template>

<script>
import components from "../components/components.js";
import axios from "axios";

export default {
  name: "Actors",
  ...components,
  data() {
    return {
      actors: [],
      isLoading: false
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getNewsFlashById(id);
  },
  watch: {
    $route(to, from) {
      const id = this.$route.params.id;
      this.getNewsFlashById(id);
    }
  },
  methods: {
    getNewsFlashById(id) {
      this.isLoading = true;
      axios({
        method: "GET",
        url: `https://blockmodo.com/api/currencies/news/${id}`
      })
        .then(result => {
          if (!result && !result.data) {
            this.result = "Something went wrong, try again please.";
          }
          const data = result.data;
          this.actors = data;
          return result;
        })
        .catch(() => {
          console.error(error);
          this.actors = [];
          return error;
        })
        .finally(() => {
          console.log("final");
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>