'use client'
import { FC, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

import styles from './ClassicModal.module.scss'

import { Modal } from './types'

import CloseSVG from '@assets/icons/close.svg'

const ClassicModal: FC<Modal> = ({ children, onClose, modal }) => {
    const bodyElement = useMemo(
        () => (typeof document !== 'undefined' ? document.querySelector('body') : null),
        []
    ) as HTMLBodyElement | null
    const element = useMemo(
        () => (typeof document !== 'undefined' ? document.createElement('div') : null),
        []
    )

    useEffect(() => {
        if (modal && bodyElement && element) {
            bodyElement.appendChild(element)
            bodyElement.classList.add('disabled')

            return () => {
                bodyElement && bodyElement.removeChild(element)
                bodyElement.classList.remove('disabled')
            }
        }
    }, [modal, bodyElement, element])

    if (modal && bodyElement) {
        return createPortal(
            <div onClick={onClose} className={styles.modal}
            >
                <CloseSVG onClick={onClose} />
                <div onClick={(e) => e.stopPropagation()} className={styles.modal__body}>
                    <main>{children}</main>
                </div>
            </div>,
            bodyElement
        )
    }

    return null
}

export default ClassicModal