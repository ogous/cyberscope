'use client'
import CoinListItem from './coinListItem'
import { getData } from './coinList'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { pageCtx } from '@/providers/pageCtx'
import { perPageCtx } from '@/providers/perPageCtx'

export default function CoinListBody({ serverData }) {
  const page = useContext(pageCtx)
  const perPage = useContext(perPageCtx)

  const { data } = useQuery({
    queryKey: ['coins', perPage, page],
    queryFn: () => getData({ perPage, page, browser: true }),
    enabled: true,
    initialData: serverData,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: 1000 * 5 * 60,
  })
  return (
    <tbody>
      {data?.map((item, idx) => (
        <CoinListItem
          key={item.id}
          data={item}
          idx={idx}
          offset={(page - 1) * perPage}
        />
      ))}
    </tbody>
  )
}
