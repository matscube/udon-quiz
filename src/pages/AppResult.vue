<template>
  <div class="app-result">
    result
    <button @click="tweet">ツイートする</button>
  </div>
</template>

<script>

export default {
  computed: {
    userAnswer() {
      return this.$store.state.quiz.userAnswer
    },
  },
  methods: {
    tweet() {
      console.info('tweet')
      console.info(this.userAnswer)
    },
  }
}
</script>

<style lang="scss" scoped>
.app-result {
  width: 900px;
  margin: $navigation-height auto;
}

@media screen and (max-width:$sp-max-width) {
  .app-result {
    margin: $navigation-height-sp auto;
  }
}
</style>
