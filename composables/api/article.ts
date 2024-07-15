import type { ArticleResponse } from '~/types/api/article'

/**
 * 記事一覧取得
 */
export const fetchArticleList = async (): Promise<ArticleResponse[] | undefined> => {
  const apiUrl = `/api/article/list`
  const result: any = await useGetApi(apiUrl)
  if (!result) return

  const data = result.data.value as ArticleResponse[]

  return data
}

/**
 * 記事詳細取得
 */
export const fetchArticleDetail = async (articleId: number): Promise<ArticleResponse | undefined> => {
  const apiUrl = `/api/article/${articleId}`
  const result: any = await useGetApi(apiUrl)
  if (!result) return

  const data = result.data.value as ArticleResponse

  return data
}
