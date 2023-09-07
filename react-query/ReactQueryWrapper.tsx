'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
    const ReactQueryWrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient}>
        {children}
        <ReactQueryDevtools />
    </QueryClientProvider>
)

export default ReactQueryWrapper