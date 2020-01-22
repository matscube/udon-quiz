<template>
  <div>
    <div class="main-visual">
      <button class="button" @click="testStart">テスト</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-top',
  components: {
  },
  methods: {
    testStart() {
      this.$router.push({ name: 'sheet' })
    },
  }
}
</script>

<style lang="scss" scoped>
.main-visual {
  height: 1000px;
  background-image: url(http://placehold.jp/24/cc9999/993333/1000x1000.png);
}
.button {
  margin-top: 100px;
}
</style>
