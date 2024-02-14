import CoinList from '@/components/coinList'
import PageController from '@/components/pagingControler'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <section style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <CoinList />
      </Suspense>
      <PageController />
    </section>
  )
}
