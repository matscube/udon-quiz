<template>
<b-row>
  <b-col>
    <h3 class="title py-3">
      {{ title }}
    </h3>
  </b-col>
</b-row>
</template>

<script>
export default {
  name: 'problem-title',
  props: {
    title: String,
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding-left: 5rem;
}
@media screen and (max-width:$sp-max-width) {
  // .title {
  //   padding-left: 5rem;
  // }
}
</style>
