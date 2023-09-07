import { ReactNode } from 'react'

export type Modal = {
    children: ReactNode
    modal: boolean
    onClose: () => void
}