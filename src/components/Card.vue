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
        </div>
        <div class="data">
          <div class="content">
            <span class="symbol">{{card.fromSymbol}}</span>
            <h1 class="title">{{card.headline}}</h1>
            <!-- <p
              class="text"
            >The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>-->
            <label for="show-menu" class="menu-button">
              <span></span>
            </label>
          </div>
          <input type="checkbox" id="show-menu" />
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li>
              <a>
                <i class="fas fa-heart"></i>
              </a>
              <!-- <a href="#" class="fa fa-heart-o">
                <span>47</span>
              </a>-->
            </li>
            <li>
              <a href="#" class="fa fa-comment-o">
                <span>8</span>
              </a>
            </li>
          </ul>
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