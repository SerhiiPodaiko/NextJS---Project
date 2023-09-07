export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <body>
            <section className='auth'>
                {children}
            </section>
        </body>
        </html>
    )
}
