<template>
<div class="app-paragraph">
  <slot></slot>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.app-paragraph {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  color: $base-color-text;
  font-size: 1.5rem;
  // font-weight: bold;
}
</style>
