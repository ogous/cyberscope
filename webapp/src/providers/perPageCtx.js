import { createContext, useState } from 'react'

export const perPageCtx = createContext()
export const perPageSetCtx = createContext()

export default function PerPageContext({ children }) {
  const [perPage, setPerPage] = useState(5)
  return (
    <perPageCtx.Provider value={perPage}>
      <perPageSetCtx.Provider value={setPerPage}>
        {children}
      </perPageSetCtx.Provider>
    </perPageCtx.Provider>
  )
}
