<script lang="ts" setup>
import { fetchCorporation } from '@/composables/api/sample'

const sampleData3 = await fetchCorporation()
// 1. 数値を降順でソート
const sortedNumbersData = sampleData3?.items.sort((a, b) => Number(b) - Number(a));
// 2. 上位n個の要素をスライス
const sampleData = sortedNumbersData?.slice(0, 3);
</script>

<template>
  <h2>
    会社の情報
  </h2>

  <ul v-for="(item, index) in sampleData" :key="index">
    <li>
      <div>
        {{ item.city_name }}
      </div>
      <div>
        {{ item.assignment_date }}
      </div>
      <div>
        {{ item.name }}
      </div>
    </li>
  </ul>
</template>