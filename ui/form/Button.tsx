import { FC } from 'react'

import styles from './styles.module.scss'
import { BtnProps } from '@ui/form/types'

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