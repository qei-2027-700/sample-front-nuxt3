<script lang="ts" setup>
const route = useRoute()
const number = ref(route.params.number)

</script>

<template>
  <div>
    <p>aaaa</p>

    {{ number }}
  </div>
</template>

<style lang="scss" scoped></style>