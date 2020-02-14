<template>
  <div class="app-sheet">
    <b-container>
      <template v-for="(problem, index) in recognitionProblems">
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
      </template>

      <b-row class="my-5 d-flex justify-content-center align-items-center">
        <AppButtonSubmit @clicked="submit">
          採点する
        </AppButtonSubmit>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppButtonSubmit from 'atoms/AppButtonSubmit'
import ProblemTitle from 'molecules/ProblemTitle'
import ProblemUdonRecognition from 'molecules/ProblemUdonRecognition'

import problems from '@/assets/json/problems.json'
// import problems from '../assets/json/problems.json'

export default {
  components: {
    AppButtonSubmit,
    ProblemTitle,
    ProblemUdonRecognition,
  },
  data() {
    return {
      // recognitionProblems: [
      //   {
      //     title: '第1問: 以下の画像のうどんを答えなさい',
      //     image: 'udon/udon-kake.jpg',
      //     options: [
      //       { text: 'かけうどん' },
      //       { text: 'ぶっかけうどん' },
      //       { text: 'かまたまうどん' },
      //       { text: 'ざるうどん' },
      //       { text: '冷やしうどん' },
      //     ],
      //     answer: 0,
      //   },
      //   {
      //     title: '第2問: 以下の画像のうどんを答えなさい',
      //     image: 'udon/udon-bukkake.jpg',
      //     options: [
      //       { text: 'かけうどん' },
      //       { text: 'ぶっかけうどん' },
      //       { text: 'かまたまうどん' },
      //       { text: 'ざるうどん' },
      //       { text: '冷やしうどん' },
      //     ],
      //     answer: 1,
      //   }
      // ],

      answer: {}
    }
  },
  // Lifecycle
  mounted() {
    console.info('sheet mounted')
    console.info(problems)
    this.$store.commit('quiz/resetAnswer')
  },
  // not called
  // beforeUpdate() {
  //   console.info('sheet beforeUpdate')
  // },
  // not called
  // updated() {
  //   console.info('sheet updated')
  // },
  computed: {
    recognitionProblems() {
      // console.info(problems)
      return problems.list
    },
  },
  methods: {
    submit() {
      this.$router.push({ name: 'result' })
    },
    changeRecognition(payload) {
      // console.info(payload)
      // this.answer[payload.id] = payload.value
      this.$store.commit('quiz/setAnswer', payload)
      console.info(this.$store.state.quiz.userAnswer)
    },
  }
}
</script>

<style lang="scss" scoped>
.app-sheet {
  width: 900px;
  margin: $navigation-height auto;
}

@media screen and (max-width:$sp-max-width) {
  .app-sheet {
    margin: $navigation-height-sp auto;
  }
}
</style>
