'use client'
import Image from 'next/image'
import { getData } from '@/app/coin/[id]/page'
import { useQuery } from '@tanstack/react-query'
import { detailTitles, detailTitleMapToValue } from '@/constants'
export default function CoinDetail({ serverData }) {
  const { data } = useQuery({
    queryKey: ['coin', serverData.id],
    queryFn: () => getData({ id: serverData.id, browser: true }),
    enabled: true,
    initialData: serverData,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: 1000 * 5 * 60,
  })
  function isValueIncreasing(val) {
    return val >= 0 ? 'green' : 'red'
  }
  return (
    <>
      <div>
        <Image width={64} height={64} alt={data.name} src={data.image} />
        <h1>{data.name}</h1>
        <h2>
          <strong>{data.currentPrice}</strong>
        </h2>

        <ul>
          <li>
            <span>Highest Price in 24h:</span>
            <strong>{data.highestPrice}</strong>
          </li>
          <li>
            <span>Lowest Price in 24h:</span>
            <strong>{data.lowestPrice}</strong>
          </li>
          <li>
            <span>Market Cap:</span>
            <strong>{data.marketCap}</strong>
          </li>
        </ul>
      </div>
      <div>
        <p>{data.description}</p>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              {detailTitles.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {detailTitles.map((title) => (
                <td
                  style={{
                    color: isValueIncreasing(
                      data[detailTitleMapToValue[title]]
                    ),
                  }}
                  key={'val_' + title}
                >
                  {data[detailTitleMapToValue[title]]}%
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
