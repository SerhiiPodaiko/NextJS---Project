'use client'

import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { PAGE_SLUGS } from '@constants/pages'

const NotFoundPage = () => {
    const router = useRouter()

    useEffect(() => {
        const redirect = setTimeout(() => router.push(PAGE_SLUGS.home), 3000)

        return () => clearTimeout(redirect)
    }, [])

    return <h1>Opps, Not found</h1>
}

export default NotFoundPage