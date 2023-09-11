'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import styles from './Header.module.scss'
import { PAGE_SLUGS } from '@constants/pages'

const links = [
    { title: 'Home', path: PAGE_SLUGS.home },
    { title: 'Login', path: PAGE_SLUGS.login },
    { title: 'Register', path: PAGE_SLUGS.register }
]

const Header = () => {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <Link href={PAGE_SLUGS.home} className={styles.header__logo}>
                <h1>Logo</h1>
            </Link>
            <nav className={styles.header__navigation}>
                {links.map((link: any) => (
                    <Link
                        key={link.title}
                        href={link.path}
                        className={`${
                            (pathname === link.path || link.path === '/market') &&
                            styles.header__navigationLinkActive
                        } ${styles.header__navigationLink}`}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
            <div className={styles.header__info}>
                <div className={styles.header__infoMenu}>
                    <div className={styles.header__infoMenuLine}></div>
                    <span className={styles.header__infoMenuLanguage}></span>
                </div>

                <div className={styles.header__infoAuth}>
                    <Link href={PAGE_SLUGS.login} className={styles.header__infoAuthLink}>
                        Log in
                    </Link>
                    <Link href={PAGE_SLUGS.register} className={styles.header__infoAuthLink}>
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header