<template>
<b-row class="p-4">
  <b-col>
    <b-img blank blank-color="#ccc" width="100" alt="placeholder"></b-img>
  </b-col>
  <b-col cols="10">
    <h2>{{ title }}</h2>
    <p v-html="text">
    </p>
  </b-col>
</b-row>
</template>

<script>

export default {
  name: 'row-media-description',
  components: {
  },
  props: {
    title: String,
    text: String,
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
