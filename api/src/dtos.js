export class CoinListItemDto {
  constructor({
    id,
    name,
    image,
    symbol,
    current_price,
    high_24h,
    low_24h,
    price_change_percentage_24h,
  }) {
    this.id = id
    this.name = name
    this.symbol = symbol
    this.image = image
    this.currentPrice = '$' + current_price
    this.highestPrice = '$' + high_24h
    this.lowestPrice = '$' + low_24h
    this.priceChange = +price_change_percentage_24h.toFixed(2)
  }
}

export class CoinDetailItemDto {
  constructor({
    id,
    name,
    image: { large },
    description: { en },
    symbol,
    market_data: {
      current_price: { usd: currentPriceUsd },
      price_change_percentage_24h,
      price_change_percentage_7d,
      price_change_percentage_14d,
      price_change_percentage_30d,
      price_change_percentage_200d,
      price_change_percentage_1y,
      high_24h: { usd: highUsd },
      low_24h: { usd: lowUsd },
      market_cap: { usd: marketCapUsd },
    },
  }) {
    this.id = id
    this.name = name
    this.symbol = symbol
    this.description = en
    this.image = large
    this.currentPrice = '$' + currentPriceUsd
    this.highestPrice = '$' + highUsd
    this.lowestPrice = '$' + lowUsd
    this.marketCap = '$' + marketCapUsd
    this.priceChange24h = +price_change_percentage_24h.toFixed(2)
    this.priceChange7d = +price_change_percentage_7d.toFixed(2)
    this.priceChange14d = +price_change_percentage_14d.toFixed(2)
    this.priceChange30d = +price_change_percentage_30d.toFixed(2)
    this.priceChange200d = +price_change_percentage_200d.toFixed(2)
    this.priceChange1y = +price_change_percentage_1y.toFixed(2)
  }
}
