export const revalidate = 1000 * 60 * 60
export const homePageTitles = [
  '#',
  'Coin',
  'Current Price',
  'Highest Price',
  'Lowest Price',
  'Price Change',
]
export const detailTitles = ['24h', '7d', '14d', '30d', '200d', '1y']
export const detailTitleMapToValue = {
  [detailTitles[0]]: 'priceChange24h',
  [detailTitles[1]]: 'priceChange7d',
  [detailTitles[2]]: 'priceChange14d',
  [detailTitles[3]]: 'priceChange30d',
  [detailTitles[4]]: 'priceChange200d',
  [detailTitles[5]]: 'priceChange1y',
}
