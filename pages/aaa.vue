<script lang="ts" setup>
import { sampleApiUrl } from '@/constants/sample/sampleApi'
import { fetchSampleData } from '@/composables/api/sample'
import type { SampleData } from '@/types/api/sample'

// NOTE: useFetchはtry-catchを利用せずにエラーハンドリングができるらしい
const sampleData2: SampleData = await fetchSampleData()
const { message, showMessage } = useSample()

</script>

<template>
  <p>aaa</p>
  <!-- <div v-if="data">
    <div v-for="(item, index) in result" :key="index">
      {{ item }}
      <br>
      <br>
    </div>
  </div>
  <div v-else>
    {{ error }}
  </div> -->

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