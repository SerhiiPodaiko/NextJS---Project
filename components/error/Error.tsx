const CustomError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}

export default CustomError