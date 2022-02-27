import Image from 'next/image'
import Link from 'next/link'
import styles from './nav.module.css'
import logo from '../../assets/img/logo.svg'

const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt="Gurshan Jhinger"/>
            </div>
            <hr className={styles.break} />
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href='/resume.pdf'>
                        <a target='_blank'>resume</a>
                    </Link>
                </li>
                <li className={styles.listItem}>contact</li>
            </ul>
        </div>
    )
}

export default Nav;