<template>
  <div class="card news-card">
    <div
      class="wrapper"
      v-bind:style="{ 'background': 'url(' + card.imageURL + ')  center / cover no-repeat' }"
    >
      <div class="header">
        <div class="date">
          <span class="day">{{card.publishedAt | moment('DD') }}</span>
          <span class="month">{{card.publishedAt | moment('MMMM') }}</span>
          <span class="year">{{card.publishedAt | moment('YYYY') }}</span>
          <span class="read-more">
            <router-link :to="`/${card.uid}/details`">
              <i class="fa fa-arrow-right"></i>
            </router-link>
          </span>
        </div>
        <div class="data">
          <div class="content">
            <span class="symbol">{{card.fromSymbol}}</span>
            <h1 class="title">{{card.headline}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  }
};
</script>

<style scoped lang="scss">
@import "../styles/cards";
</style>