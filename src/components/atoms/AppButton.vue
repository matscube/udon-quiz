<template>
<b-button class="button px-5 py-3" size="lg" @click="clicked">
  <slot></slot>
</b-button>
</template>

<script>
export default {
  name: 'app-button',
  components: {
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    },
  }
}
</script>

<style lang="scss" scoped>
.button {
  color: white;
  background-color: $contents-color-first;
  font-weight: bold;
}
</style>
