import { revalidate } from '@/constants'
import CoinListBody from './coinListBody'
import styles from '@/app/page.module.css'
import { homePageTitles } from '@/constants'

export async function getData({ perPage, page, browser }) {
  try {
    const baseUrl = process.env.API_URL
    if (!baseUrl) throw new Error('API_URL env is not defined')

    const res = await fetch(browser ? '/api/coins' : baseUrl + '/coins', {
      method: 'POST',
      body: perPage || page ? JSON.stringify({ perPage, page }) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate },
    })
    if (!res.ok) throw new Error('Fetch failed', res.statusText)

    return await res.json()
  } catch (e) {
    console.error(e.message ?? e)
  }
}

export default async function CoinList() {
  const serverData = await getData({ perPage: 5, page: 1 })

  return (
    <table className={styles.coinTable}>
      <thead>
        <tr>
          {homePageTitles.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <CoinListBody serverData={serverData} />
    </table>
  )
}
