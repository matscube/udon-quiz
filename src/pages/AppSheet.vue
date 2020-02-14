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
          :options="problem.options"
          @change="changeRecognition"
        />
      </template>
    </b-container>
    <button @click="submit">採点する</button>
  </div>
</template>

<script>
import ProblemTitle from 'molecules/ProblemTitle'
import ProblemUdonRecognition from 'molecules/ProblemUdonRecognition'

export default {
  name: 'app-sheet',
  components: {
    ProblemTitle,
    ProblemUdonRecognition,
  },
  data() {
    return {
      recognitionProblems: [
        {
          title: '第1問: 以下の画像のうどんを答えなさい',
          image: '',
          options: [
            { text: 'かけうどん' },
            { text: 'ぶっかけうどん' },
            { text: 'かまたまうどん' },
            { text: 'ざるうどん' },
            { text: '冷やしうどん' },
          ]
        },
        {
          title: '第2問: 以下の画像のうどんを答えなさい',
          image: '',
          options: [
            { text: 'かけうどん' },
            { text: 'ぶっかけうどん' },
            { text: 'かまたまうどん' },
            { text: 'ざるうどん' },
            { text: '冷やしうどん' },
          ]
        }
      ]
    }
  },
  methods: {
    submit() {
      this.$router.push({ name: 'result' })
    },
    changeRecognition(payload) {
      console.info(payload)
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
