<script setup lang="ts">
import { fetchArticles } from "~/composables/api/article"

const inputFilterText = ref<string>('')
const articles = ref<any[]>([])
const filteredArticles = ref<any[]>([])

const fetchAndFilterArticles = async () => {
  articles.value = await fetchArticles()
  filteredArticles.value = articles.value
}

/** 入力値が部分一致するカードを表示 */
const search = () => {
  filteredArticles.value = inputFilterText.value
    ? articles.value.filter(article =>
      Object.values(article).some(value =>
        typeof value === 'string' && value.includes(inputFilterText.value)
      )
    )
    : articles.value
}

onMounted(fetchAndFilterArticles)
</script>

<template>
  <h2 class="heading__lv2">検索画面</h2>

  <v-container>
    <h2 class="heading__lv2 mb-6">記事一覧</h2>

    <v-form class="mb-6" @submit.prevent="search">
      <v-text-field v-model="inputFilterText" clearable style="max-width: 40%;" />
      <v-btn @click="search">検索・絞り込み</v-btn>
    </v-form>

    <v-row>
      <v-col cols="12" md="4" v-for="article in filteredArticles" :key="article.id">
        <v-card>
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <p>{{ article.date }}</p>
        </v-card>
      </v-col>

      <v-col v-if="filteredArticles.length === 0">
        検索結果なし
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col>
        <v-btn @click="currentPage--" :disabled="currentPage === 1">前へ</v-btn>
      </v-col>
      <v-col>
        <span>{{ currentPage }}</span>
      </v-col>
      <v-col>
        <v-btn @click="currentPage++" :disabled="currentPage * itemsPerPage >= filteredArticles.length">次へ</v-btn>
      </v-col>
    </v-row> -->

  </v-container>
</template>

<style lang="scss"></style>
