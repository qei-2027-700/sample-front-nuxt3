<script lang="ts" setup>
import { fetchSampleData } from '@/composables/api/sample'

// NOTE: useFetchはtry-catchを利用せずにエラーハンドリングができるらしい
const sampleData2 = await fetchSampleData()

const { message, showMessage } = useSample()

</script>

<template>
  <p>aaa</p>

  <AtomsSample />

  <div>
    composablesのtest
    <br>
    {{ message }}
  </div>

  <div>
    {{ sampleData2 }}
  </div>

  <!-- <div v-for="(item, index) in sampleData2" :key="index">
    {{ item }}
    <br>
  </div> -->
</template>

<style scoped>
/* * {
  background-color: black;
} */
</style>