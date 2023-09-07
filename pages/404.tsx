'use client'

import { useEffect, useMemo } from 'react'
import {useRouter} from 'next/navigation'

const NotFoundPage = () => {
    const router = useRouter()

    const bodyElement = useMemo(
        () => (typeof document !== 'undefined' ? document.querySelector('body') : null),
        []
    ) as HTMLBodyElement | null

    useEffect(() => {
        const redirect = setTimeout(() => router.push('/'), 3000)

        return () => clearTimeout(redirect)
    }, [])

    return <h1>Opps, Not found</h1>
}

export default NotFoundPage