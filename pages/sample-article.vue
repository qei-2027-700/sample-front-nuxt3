<script lang="ts" setup>
// import { SAMPLE_ARTICLES } from "@/constants/sample/samplearticle"
import { fetchArticles } from "~/composables/api/article"

const articles: any = ref(null)
// const currentPage = ref(1)

const data = await fetchArticles()
articles.value = data

// const fetchArticles = async (page: number = 1): Promise<any> => {
//   // const response = await fetch(`/api/articles?page=${page}`)
//   // const { data } = await useFetch(`${BASE_URL}/api/articles`)
//   const { data } = await fetchArticles()
//   console.log(data)
//   articles.value = data.value

//   // articles.value = SAMPLE_ARTICLES
//   currentPage.value = page
// }

onMounted(() => {
  fetchArticles()
})
</script>

<template>
  <v-container>
    <h2 class="heading__lv2 mb-6">記事一覧</h2>
    <v-row>
      <v-col cols="12" md="4" v-for="article in articles" :key="article.id">
        <v-card>
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <p>{{ article.data }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-btn @click="fetchArticles()">
        ボタン
      </v-btn>
    </v-row>

    <!-- <div class="d-flex justify-center mt-6">
      <v-btn @click="fetchArticles(currentPage - 1)" :disabled="currentPage <= 1">Previous</v-btn>
      <v-btn @click="fetchArticles(currentPage + 1)" :disabled="currentPage >= articles?.last_page">Next</v-btn>
    </div> -->
  </v-container>
</template>

<style lang="scss" scoped></style>