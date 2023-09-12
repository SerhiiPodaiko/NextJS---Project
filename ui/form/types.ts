import { ReactNode } from 'react'

export type BtnProps = {
    children: ReactNode
    className: string
    onClick: () => void
    disabled?: boolean
    type?: 'submit' | 'button'
}