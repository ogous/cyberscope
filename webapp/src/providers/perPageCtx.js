import { createContext, useContext, useEffect, useState } from 'react'
import { pageSetCtx } from './pageCtx'

export const perPageCtx = createContext()
export const perPageSetCtx = createContext()

export default function PerPageContext({ children }) {
  const setPage = useContext(pageSetCtx)
  const [perPage, setPerPage] = useState(5)

  useEffect(() => {
    return () => {
      setPage(1)
    }
  }, [perPage, setPage])

  return (
    <perPageCtx.Provider value={perPage}>
      <perPageSetCtx.Provider value={setPerPage}>
        {children}
      </perPageSetCtx.Provider>
    </perPageCtx.Provider>
  )
}
