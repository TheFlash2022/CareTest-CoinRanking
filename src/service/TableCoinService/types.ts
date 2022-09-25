export type DataTypes = {
    status?: string
    data?: TableCoinDataTypes
  }
  
  export type TableCoinDataTypes = {
    stats?: StatsDataTypes
    coins?: Coin[]
  }
  
  export type StatsDataTypes = {
    total?: number
    totalCoins?: number
    totalMarkets?: number
    totalExchanges?: number
    totalMarketCap?: string
    total24hVolume?: string
  }
  
  export type Coin = {
    uuid?: string
    symbol?: string
    name?: string
    color?: string
    iconUrl?: string
    marketCap?: number
    price?: number
    listedAt?: number
    tier?: number
    change?: number
    rank?: number
    sparkline?: string[]
    lowVolume?: boolean
    coinrankingUrl?: string
    "24hVolume"?: string
    btcPrice?: string
  }
  