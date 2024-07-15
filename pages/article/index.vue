<script setup lang="ts">
import { fetchArticleList } from "~/composables/api/article"
import type { ArticleResponse } from "~/types/api/article"

const inputFilterText = ref<string>('')
const articles = ref<any[] | undefined>([])
const filteredArticles = ref<ArticleResponse[]>([])

// もっと見るボタンをクリックした際に表示するカードの数を管理する変数
const visibleCardCount = ref<number>(3)

const fetchAndFilterArticles = async () => {
  articles.value = await fetchArticleList()
  if (!articles.value) return

  // console.log(articles)
  // console.log(articles.value)

  filteredArticles.value = articles.value
  // filteredArticles.value = articles.value.slice(0, visibleCardCount.value)
}

/** 入力値が部分一致するカードを表示 */
const search = async () => {
  if (!inputFilterText.value) {
    const articles = await fetchArticleList()
    if (!articles) return
    filteredArticles.value = articles
    return
  }

  if (filteredArticles.value) {
    if (!articles.value) return

    const aaa = articles.value.filter(article =>
      Object.keys(article).filter(key => key !== 'created_at' && key !== 'updated_at').some(key =>
        typeof article[key] === 'string' && article[key].includes(inputFilterText.value)
      )
    )
    filteredArticles.value = aaa

  } else {
    if (!articles.value) return
    filteredArticles.value = articles.value
  }
}

/** もっと見るボタンをクリックしたとき */
const showMoreCards = () => {
  visibleCardCount.value += 3;
}

const goToDetailPage = (id: number) => {
  const router = useRouter()
  router.push(`/article/detail/${id}`)
}

onMounted(() => {
  fetchAndFilterArticles()
})
</script>

<template>
  <h2 class="heading__lv2">検索画面</h2>

  <v-container>
    <h2 class="heading__lv2 mb-6">記事一覧</h2>

    <v-form class="mb-6" @submit.prevent="search">
      <div class="d-flex align-center">
        <v-text-field v-model="inputFilterText" clearable style="max-width: 40%;" />
        <v-btn @click="search" class="ml-4">検索・絞り込み</v-btn>
      </div>
    </v-form>

    <v-row>
      <v-col cols="12" md="4" v-for="(article, index) in filteredArticles.slice(0, visibleCardCount)" :key="article.id">
        <!-- <v-col cols="12" md="4" v-for="article in filteredArticles" :key="article.id"> -->
        <v-card @click="goToDetailPage(article.id)" class="">
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <p>{{ article.data }}</p>

          <div class="mt-4">
            <span v-for="(tag, index) in article.tags" :key="index" class="tag">
              {{ tag.name }}
            </span>
          </div>
        </v-card>
      </v-col>

      <v-col v-if="filteredArticles.length === 0">
        検索結果なし
      </v-col>
    </v-row>

    <v-row>
      <v-col v-if="filteredArticles.length > 0 && articles && articles?.length > visibleCardCount">
        <v-btn @click="showMoreCards">もっと見る</v-btn>
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
