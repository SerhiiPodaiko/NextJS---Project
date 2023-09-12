import { FC } from 'react'

import styles from './Button.module.scss'
import { BtnProps } from '@ui/form/types'

const Button: FC<BtnProps> = ({ children, disabled, onClick, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles.btn}
        >
            {children}
        </button>
    )
}

export default Button