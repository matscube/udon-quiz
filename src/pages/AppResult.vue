<template>
  <div>
    result
    <button @click="tweet">ツイートする</button>
  </div>
</template>

<script>

export default {
  name: 'app-result',
  components: {
  },
  methods: {
    tweet() {
      console.info('tweet')
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
