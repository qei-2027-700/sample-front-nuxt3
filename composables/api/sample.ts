import { sampleApiUrl2, sampleApiUrl3 } from '@/constants/sample/sampleApiUrl'
import { useGetApi } from '@/composables/useApi'
import type { CorporationData, SampleData } from '@/types/api/sample'

export const fetchSampleData = async (): Promise<SampleData | undefined> => {
  const apiUrl = sampleApiUrl2
  const result: any = await useGetApi(apiUrl)
  if (!result) return

  const data = result.data.value.data as SampleData

  return data
}

export const fetchCorporation = async (): Promise<CorporationData | undefined> => {
  const apiUrl = sampleApiUrl3
  const result: any = await useGetApi(apiUrl)
  if (!result) return

  const data = result.data.value as CorporationData

  return data
}
