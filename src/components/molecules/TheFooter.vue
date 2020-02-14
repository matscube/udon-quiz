<template>
<section class="footer">
  <div class="contents">
    <b-container>
      <b-row>
        <b-col class="sns-icon">
          <b-img blank blank-color="#ccc" width="50" alt="placeholder"></b-img>
          Twitter
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div class="copyright p-1 text-center d-flex align-items-center justify-content-center">
    ©︎2020 Copyright: udon-test.com
  </div>
</section>
</template>

<script>

export default {
  name: 'the-footer',
  components: {
  }
}
</script>

<style lang="scss" scoped>
$copyright-height: 40px;

.footer {
  // min-height: 200px;
  // background-color: rgb(63, 60, 60);
  background-color: $base-color-second;
  .contents {
    height: $footer-height - $copyright-height;
    .sns-icon {
      color: white;
    }
  }
  .copyright {
    height: $copyright-height;
    background-color: $base-color-third;
    color: white;
  }
}
</style>
