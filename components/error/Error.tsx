import styles from './Error.module.scss'

const CustomError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return (
        <section className={styles.errorContainer}>
            <h2 className={styles.errorTitle}>Something went wrong!</h2>
            <button className={styles.errorBtn} onClick={() => reset()}>
                Try again
            </button>
        </section>
    )
}

export default CustomError