'use client'
import PageContext from './pageCtx'
import PerPageContext from './perPageCtx'
import QueryClientProvider from './reactQuery'

export default function Providers({ children }) {
  return (
    <QueryClientProvider>
      <PageContext>
        <PerPageContext> {children}</PerPageContext>
      </PageContext>
    </QueryClientProvider>
  )
}
