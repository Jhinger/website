import styles from '../styles/nav.module.css'
import Logo from '../static/GJLogo.png'

const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={Logo} alt="GJ" />
            </div>
            <div>
                <ul className={styles.list}>
                    <li className={styles.link}>ABOUT</li>
                    <li className={styles.link}>PROJECTS</li>
                    <li className={styles.link}>RESUME</li>
                    <li className={styles.link}>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;