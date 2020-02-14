<template>
<b-button class="button px-5 py-3" size="lg" @click="clicked">
  <slot></slot>
</b-button>
</template>

<script>
export default {
  methods: {
    clicked() {
      this.$emit('clicked')
    },
  }
}
</script>

<style lang="scss" scoped>
.button {
  min-width: 400px;
  color: white;
  background-color: $sub-color-first;
  font-weight: bold;
}
</style>
