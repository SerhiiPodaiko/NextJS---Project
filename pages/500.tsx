import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom500 = () => {
    const router = useRouter()

    useEffect(() => {
        const redirect = setTimeout(() => router.push('/'), 3000)

        return () => clearTimeout(redirect)
    })

    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>500 - Server-side error occurred</h1>
        </section>
    )
}

export default Custom500