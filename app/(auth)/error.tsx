'use client'
import { useEffect } from 'react'

import { CustomError } from '@components/error'

export default function AuthError({ error, reset }: { error: Error, reset: () => void }) {

    useEffect(() => {
        console.error('AuthError', error)
    }, [error])

    return (
        <CustomError error={error} reset={reset} />
    )
}