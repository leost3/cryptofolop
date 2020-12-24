export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: string
}

export type ITimestampable = {
  /** Timestamp of date */
  date: Scalars['ISO8601DateTime']
}

export type Coin = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: 1
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: ITimestampable['date']
  atl: number
  atl_change_percentage: number
  atl_date: ITimestampable['date']
  roi?: number
  last_updated: ITimestampable['date']
}
