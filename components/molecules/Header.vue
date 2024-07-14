<template>
  <header id="header">
    これはヘッダー
    <ul>
      <li>
        <!-- <NuxtLink to="/">index</NuxtLink> -->
        <nuxt-link to="/">index</nuxt-link>
      </li>
      <li>
        <!-- <NuxtLink to="/sample">sample</NuxtLink> -->
        <nuxt-link to="/sample">sample</nuxt-link>
      </li>
      <li>
        <!-- <NuxtLink to="/corporation">corporation</NuxtLink> -->
        <nuxt-link to="/corporation">corporation</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sample-article">article</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/search">search</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

#header {
  // background-color: #000;
  background-color: $color-dark;
  min-height: 10vh;
  color: #fff;
  padding: 2rem;

  a {
    color: #fff;
  }
}
</style>