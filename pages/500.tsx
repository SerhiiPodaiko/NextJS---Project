import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PAGE_SLUGS } from '@constants/pages'

const Custom500 = () => {
    const router = useRouter()

    useEffect(() => {
        const redirect = setTimeout(() => router.push(PAGE_SLUGS.home), 3000)

        return () => clearTimeout(redirect)
    })

    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>500 - Server-side error occurred</h1>
        </section>
    )
}

export default Custom500