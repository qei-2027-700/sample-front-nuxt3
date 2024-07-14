export const fetchArticles = async (): Promise<any | undefined> => {
  const apiUrl = `/api/articles`
  const result: any = await useGetApi(apiUrl)
  if (!result) return

  const data = result.data.value

  return data
}