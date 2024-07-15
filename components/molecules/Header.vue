<script setup lang="ts">
import { NAVIGATION_DATA } from '~/constants/config'

</script>

<template>
  <header id="header">
    これはヘッダー

    <ul>
      <li v-for="(item, index) in NAVIGATION_DATA" :key="index">
        <nuxt-link :to="`${item.link}`">{{ item.text }}</nuxt-link>
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