<template>
  <div class="card-container">
    <div class="card">
      <a href="hottub">
        <div class="card--display">
          <img v-bind:src="card.img"/>
          <h2>{{card.title}}</h2>
        </div>
        <div class="card--hover">
          <h2>{{card.title}}</h2>
					<p>{{card.year}}</p>
          <p>{{card.description}}</p>
          <p class="link">Click to see the actors</p>
        </div>
      </a>
      <div class="card--border"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card:Object
  }
};
</script>

<style scoped lang="scss">
@import "../styles/cards";
</style>