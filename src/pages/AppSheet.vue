<template>
  <div>
    sheet
    <button @click="submit">採点する</button>
  </div>
</template>

<script>

export default {
  name: 'app-sheet',
  components: {
  },
  methods: {
    submit() {
      this.$router.push({ name: 'result' })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
