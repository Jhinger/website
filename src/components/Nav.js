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
                    <li className={styles.link}>ABOUT&#127917;</li>
                    <li className={styles.link}>PROJECTS&#128218;</li>
                    <li className={styles.link}>RESUME&#128220;</li>
                    <li className={styles.link}>CONTACT&#128222;</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;