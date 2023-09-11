import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auth - Login | Register',
    description: 'Authentication',
}

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
