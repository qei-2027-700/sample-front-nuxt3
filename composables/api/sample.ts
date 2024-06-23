import { sampleApiUrl2 } from '~/constants/sample/sampleApi'
import { useApi } from '../useApi'
import type { SampleData } from '~/types/api/sample'

export async function fetchSampleData(): Promise<SampleData | any> {
    const apiUrl = sampleApiUrl2
  const result: any = await useApi(apiUrl)
  if (!result) return

  const data = result.data.value.data

  return data
}
