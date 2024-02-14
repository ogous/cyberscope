import CoinDetail from '@/components/coinDetail'
import { revalidate } from '@/constants'
import { detailContainer } from '@/app/page.module.css'

export async function getData({ id, browser }) {
  try {
    const baseUrl = process.env.API_URL
    if (!baseUrl) throw new Error('API_URL env is not defined')
    const res = await fetch(
      browser ? `/api/coin/${id}` : `${baseUrl}/coin/${id}`,
      {
        next: { revalidate },
      }
    )
    if (!res.ok) throw new Error('Fetch failed', res.statusText)

    return await res.json()
  } catch (e) {
    console.error(e.message ?? e)
  }
}
export default async function DetailPage({ params: { id } }) {
  const serverData = await getData({ id })

  return (
    <div className={detailContainer}>
      <CoinDetail serverData={serverData} />
    </div>
  )
}
