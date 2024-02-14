'use client'

import { pageCtx, pageSetCtx } from '@/providers/pageCtx'
import { perPageCtx, perPageSetCtx } from '@/providers/perPageCtx'
import { useContext } from 'react'
import styles from '@/app/page.module.css'
export default function PagingController() {
  const page = useContext(pageCtx)
  const setPage = useContext(pageSetCtx)
  const perPage = useContext(perPageCtx)
  const setPerPage = useContext(perPageSetCtx)
  return (
    <div className={styles.pagingController}>
      <div>
        <button disabled={page < 2} onClick={() => setPage(page - 1)}>
          {'<'}
        </button>
        <span className={styles.pagingControllerIndct}>{page}</span>
        <button onClick={() => setPage(page + 1)}>{'>'}</button>
      </div>
      <div>
        <span>Show rows</span>
        <select onChange={(e) => setPerPage(e.target.value)} value={perPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </div>
  )
}
