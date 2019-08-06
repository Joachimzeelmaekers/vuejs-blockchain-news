
<template>
  <div>
    <router-link class="back-button" to="/">
      <i class="fa fa-arrow-left"></i>
      <p>Terug</p>
    </router-link>
    <ScaleLoader v-if="isLoading"></ScaleLoader>
    <div v-else>
      <div class="card news-card">
        <div class="wrapper">
          <div class="image-container">
            <img :src="`${details.imageURL}`" />
          </div>
          <div class="title-container">
            <span class="symbol">{{details.fromSymbol}}</span>
            <h1 class="title">{{details.headline}}</h1>
            <!-- <span class="day">{{details.publishedAt | moment('DD') }}</span>
              <span class="month">{{details.publishedAt | moment('MMMM') }}</span>
            <span class="year">{{details.publishedAt | moment('YYYY') }}</span>-->
          </div>
          <div class="data">
            <p class="story" v-html="details.story"></p>
          </div>
        </div>
      </div>
      <!-- <a target="_blank" :href="`${details.url}`">Open article</a> -->
    </div>
  </div>
</template>

<script>
import components from "../components/components.js";
import axios from "axios";

export default {
  name: "NewsLetterDetail",
  ...components,
  data() {
    return {
      details: {},
      isLoading: false
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getNewsFlashById(id);
  },
  watch: {
    $route() {
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
          this.details = data;
          return result;
        })
        .catch(error => {
          this.details = {};
          return error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/detail";
</style>