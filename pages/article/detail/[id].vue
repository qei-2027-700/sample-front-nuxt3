<script setup lang="ts">
import { fetchArticleDetail } from '~/composables/api/article'

const route = useRoute()
const router = useRouter()
const articleId = ref<any>()
const articleDetail = ref()

articleId.value = Number(router.currentRoute.value.params.id)

const fetchDetail = async () => {
  if (articleId.value !== null) {
    try {
      articleDetail.value = await fetchArticleDetail(articleId.value)
      console.log(articleDetail.value)

    } catch (error) {
      console.error('Failed to fetch article detail:', error)
    }
  }
}

const goBackToList = () => {
  router.push('/article/')
}

onMounted(() => {
  const id = Number(route.params.id)
  if (!isNaN(id)) {
    articleId.value = id
    fetchDetail()

  } else {
    console.error('Invalid article id:', route.params.id)
  }
})
</script>

<template>
  <h2 class="heading__lv2">記事詳細</h2>

  <v-container>
    <v-row>
      <v-col>
        <div v-for="(item, index) in articleDetail" :key="index">
          {{ item }}
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-btn @click="goBackToList" class="mt-4" style="max-width: 200px;">一覧に戻る</v-btn>
</template>

<style lang="scss"></style>