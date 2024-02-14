import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/page.module.css'
export default function CoinListItem({ data, idx, offset }) {
  const {
    id,
    name,
    symbol,
    currentPrice,
    image,
    highestPrice,
    lowestPrice,
    priceChange,
  } = data
  const isPriceIncreased = +priceChange > 0
  return (
    <tr className={styles.coinTableRow}>
      <td className="ids">{idx + 1 + offset}</td>
      <td>
        <Link href={`/coin/${id}`}>
          <div className={styles.coinRowWrapper}>
            <Image width={32} height={32} src={image} alt={name} />
            <span>
              <strong>{name}</strong>
            </span>
            <span>{symbol}</span>
          </div>
        </Link>
      </td>
      <td>{currentPrice}</td>
      <td>{highestPrice}</td>
      <td>{lowestPrice}</td>
      <td
        style={{
          color: isPriceIncreased ? 'green' : 'red',
        }}
      >
        {priceChange}%
      </td>
    </tr>
  )
}
