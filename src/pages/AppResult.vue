<template>
  <div class="app-result">
    result
    <button @click="tweet">ツイートする</button>

    <b-container>
      <AppHeadline>
        採点結果
      </AppHeadline>
      <AppParagraph class="result-summary">
        <span class="strong-number">5 </span>問 / 
        <span class="strong-number">10 </span>問中 
        正解しました
      </AppParagraph>

      <AppHeadline>
        問題解説
      </AppHeadline>
      <AppParagraph class="result-detail">
        <b-container>
          <b-row class="header">
            <b-col class="app-col" cols="1" rows="2">No.</b-col>
            <b-col class="app-col" cols="2">採点結果</b-col>
            <b-col class="app-col" cols="5">問題</b-col>
            <b-col class="app-col" cols="2">あなたの回答</b-col>
            <b-col class="app-col" cols="2">正答</b-col>
          </b-row>
          <b-row class="body">
            <b-col class="app-col" cols="1">1</b-col>
            <b-col class="app-col" cols="2">○</b-col>
            <b-col class="app-col" cols="5">問題文</b-col>
            <b-col class="app-col" cols="2">かけうどん</b-col>
            <b-col class="app-col" cols="2">かけうどん</b-col>
          </b-row>
        </b-container>
      </AppParagraph>
      <!-- <template v-for="(problem, index) in recognitionProblems">
        <ProblemTitle
          class="mt-5"
          :key="'title-'+index"
          :title="problem.title"
        />
        <ProblemUdonRecognition
          :key="'options-'+index"
          :radioKey="'radio-'+index"
          :id="index"
          :image="problem.image"
          :options="problem.options"
          :answer="problem.answer"
          @change="changeRecognition"
        />
      </template> -->

      <!-- <b-row class="my-5 d-flex justify-content-center align-items-center">
        <AppButtonSubmit @clicked="submit">
          採点する
        </AppButtonSubmit>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
import AppHeadline from 'atoms/AppHeadline'
import AppParagraph from 'atoms/AppParagraph'

export default {
  components: {
    AppHeadline,
    AppParagraph,
  },
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
$border-width: 4px;

.result-summary {
  font-weight: bold;
}
.strong-number {
  font-size: 3rem;
  color: $base-color-text-strong;
  font-weight: bold;
}

.result-detail {
  * {
    font-size: 0.8rem;
  }
  .header {
    font-weight: bold;
  }
  .body {
    font-weight: normal;
  }
  .container {
    border-left: solid $border-width $base-color-border;
    border-top: solid $border-width $base-color-border;
  }
  .app-col {
    border-right: solid $border-width $base-color-border;
    border-bottom: solid $border-width $base-color-border;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

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
