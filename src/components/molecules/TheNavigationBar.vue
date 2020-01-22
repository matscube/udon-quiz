<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
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
.navigation-link {

}
</style>
