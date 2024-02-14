import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import clsx from 'clsx'
import styles from './page.module.css'
import Providers from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cyberscope Coin Browser',
  description: 'Browse Coins of Coingecko',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx([inter.className, styles.container])}>
        <Header />
        <main>
          <Providers>{children} </Providers>
        </main>
        <Footer />
      </body>
    </html>
  )
}
