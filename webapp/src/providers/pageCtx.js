import { createContext, useState } from 'react'

export const pageCtx = createContext()
export const pageSetCtx = createContext()

export default function PageContext({ children }) {
  const [page, setPage] = useState(1)
  return (
    <pageCtx.Provider value={page}>
      <pageSetCtx.Provider value={setPage}>{children}</pageSetCtx.Provider>
    </pageCtx.Provider>
  )
}
