<template>
<div class="the-navigation-bar">
  <b-navbar class="navigation-bg" toggleable="lg" type="dark" fixed="top">
    <b-navbar-brand
      class="navigation-link"
      :to="{ name: 'top' }"
    >タイトルロゴ</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          class="navigation-link"
          :to="{ name: 'sheet' }"
        >うどん検定</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'the-navigation-bar',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.the-navigation-bar {
  height: $navigation-height;
}
.navigation-bg {
  background-color: $base-color-first;
}
.navigation-link {

}

@media screen and (max-width:$sp-max-width) {
  .the-navigation-bar {
    height: $navigation-height-sp;
  }
  .navigation-link {
    font-size: 3rem;    
  }
}

</style>
