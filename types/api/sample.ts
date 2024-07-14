
export type SampleData = {
  name: string
  note: string
  age: number
  registerDate: string
}

export type Corporation = {
  corporate_number: number
  process: string
  correct: number
  update_date: string
  change_date: string
  name: string
  image_id: any,
  kind: string
  prefecture_name: string
  city_name: string
  street_number: any
  address_image_id: null,
  prefecture_code: string
  city_code: string
  post_code: string
  address_outside: any,
  address_outside_image_id: null,
  close_date: null,
  close_cause: null,
  assignment_date: string
  latest: string,
  en_name: string
  en_prefecture_name: string
  en_city_name: string
  en_address_outside: null,
  furigana: string,
  hihyouji: number,
  created_at: string
  updated_at: string
  url: string
}

export type CorporationData = {
  items: Corporation[]
  pagination: {
    current_page: number,
    prev_page: null,
    next_page: number,
    limit_value: number,
    total_pages: number,
    total_count: number
  }
}