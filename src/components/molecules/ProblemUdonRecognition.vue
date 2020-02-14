<template>
<b-row align-h="center">
  <b-col cols="12" md="6" class="d-flex justify-content-center">
    <!-- <b-img blank blank-color="#ccc" width="300" alt="placeholder"></b-img> -->
    <!-- <b-img :src="imageSrc" width="300" alt="placeholder"></b-img> -->
    <!-- <b-img :src="require('@/assets/udon/udon-kake.jpg')" width="300" alt="placeholder"></b-img> -->
    <b-img :src="imageSrc" width="300" alt="placeholder"></b-img>
    <!-- <img src="@/assets/udon/udon-kake.jpg" width="300" alt="placeholder"> -->
  </b-col>
  <b-col cols="12" md="6" class="text-content">
    <b-form-group label="選択肢">
      <template v-for="(option, key) in options">
        <b-form-radio
          class="radio"
          :name="radioKey"
          :key="key"
          :value="key"
          v-model="selected"
          @change="change">
          {{ option.text }}
        </b-form-radio>
      </template>
    </b-form-group>
    <div class="answer mt-5">回答: <strong>{{ selectedOption }}</strong></div>
  </b-col>
</b-row>
</template>

<script>
const NOT_SELECTED = -1

export default {
  name: 'problem-udon-recognition',
  components: {
  },
  props: {
    radioKey: String,
    id: Number,
    image: String,
    answer: Number,
    options: Array,
  },
  data() {
    return {
      selected: NOT_SELECTED,
    }
  },
  computed: {
    selectedOption() {
      if (this.selected === NOT_SELECTED) {
        return '' 
      } else {
        return this.options[this.selected].text
      }
    },
    imageSrc() {
      // return 'require(@/assets/' + this.image + ')'
      // return require('@/assets/udon/udon-bukkake.jpg')
      return require('@/assets/' + this.image)
    },
  },
  methods: {
    change(value) {
      this.$emit('change', {
        id: this.id,
        value: value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  font-size: 1.5rem;
  // &:hover {
  //   cursor: pointer;
  // }
  // .custom-control-label {
  //   &:hover {
  //     cursor: pointer;
  //   }
  // }
}
.text-content {
  margin-left: rem;
}
.answer {
  font-size: 1.5rem;
}
@media screen and (max-width:$sp-max-width) {
  .radio {
    font-size: 3rem;
  }
.answer {
  font-size: 3rem;
}
}
</style>
