import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type BtnProps = {
    children: ReactNode
    className: string
    onClick: () => void
    disabled?: boolean
}

const Button: FC<BtnProps> = ({ children, disabled, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.btn} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button