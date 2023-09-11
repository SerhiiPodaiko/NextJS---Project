import { Header, Footer } from '@components/layout'


const HomePage = () => (
    <>
        <Header />
        <main style={{ flex: 1, width: '100%' }}>
            <h1 style={{ color: 'black' }}>Main Page (Content)</h1>
        </main>
        <Footer />
    </>
)

export default HomePage