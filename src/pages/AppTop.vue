<template>
  <div class="main-visual">
    <div class="shadow"></div>
    <b-container class="contents" fluid>
      <b-row class="d-flex justify-content-center">
        <h1>うどん検定</h1>
      </b-row>
      <b-row class="d-flex justify-content-center">
        <p>
          あなたの<span class="strong-word">うどん県民性</span>を測定します
        </p>
      </b-row>
      <b-row class="d-flex justify-content-center">
        <app-button
          @clicked="clicked"
        >うどん検定に挑戦する
        </app-button>
      </b-row>
    </b-container>
  </div>
    <!-- <div class="description mt-4">
      <b-container>
        <row-media-description
          :title="`このサイトについて`"
          :text="`香川県の県民度をチェックします。<br>香川県に長く住んでいれば自然と答えられるクイズを出題しています。`"
        ></row-media-description>
        <row-media-description
          :title="`このサイトについて`"
          :text="`香川県の県民度をチェックします。<br>香川県に長く住んでいれば自然と答えられるクイズを出題しています。`"
        ></row-media-description>
        <row-media-description
          :title="`このサイトについて`"
          :text="`香川県の県民度をチェックします。<br>香川県に長く住んでいれば自然と答えられるクイズを出題しています。`"
        ></row-media-description>
      </b-container>
    </div> -->
</template>

<script>
import AppButton from 'atoms/AppButton'
// import RowMediaDescription from 'molecules/RowMediaDescription'

export default {
  name: 'app-top',
  components: {
    AppButton,
    // RowMediaDescription,
  },
  methods: {
    clicked() {
      this.$router.push({ name: 'sheet' })
    },
  }
}
</script>

<style lang="scss" scoped>
.main-visual {
  // height: 100vh;
  height: calc(100vh - #{$header-height} - #{$footer-height});
  // height: 600px;
  // background-image: url(http://placehold.jp/24/cc9999/993333/1000x1000.png);
  background-image: url(~@/assets/top-bg.jpg);
  background-size: cover;
  // position: relative;
  .shadow {
    opacity: 0.5;
    background-color: black;
    // height: 600px;
    height: 100%;
    // position: fixed;
  }
  .contents {
    // margin-top: 100px;
    // width: 100%;
    // margin: 0 auto;
    // height: 100%;
    color: white;
    top: calc(50% - 100px);
    position: absolute;
    text-align: center;
    .strong-word {
      font-weight: bold;
    }
  }
}
</style>
