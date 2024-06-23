// composables/useApi.ts

export async function useApi(url: string): Promise<any> {
  try {
    const { data, error }: any = await useFetch(url)

    if (!data) {
      throw new Error('Network response was not ok')
    }
    
    return { data, error }
    // return await data

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
