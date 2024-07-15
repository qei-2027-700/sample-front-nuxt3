import { BASE_URL } from "~/constants/config"

export const useGetApi = async (url: string): Promise<any> => {
  try {
    const requestUrl = BASE_URL + url
    const { data, error }: any = await useFetch(requestUrl)
    // const { data, error }: any = await $fetch(requestUrl)

    console.log(data)

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

export const usePostApi = async (url: string, postData: any): Promise<any> => {
  try {
    // const { data, error }: any = await useFetch(url)

    const { data, error } = await useFetch(url, {
      method: 'POST',
      body: postData,
    })

    if (!data) {
      throw new Error('Network response was not ok')
    }

    return { data, error }

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

