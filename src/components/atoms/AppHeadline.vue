<template>
<div class="app-headline">
  ー <slot></slot> ー
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.app-headline {
  color: $base-color-text;
  font-size: 2rem;
  // font-weight: bold;
}
</style>
