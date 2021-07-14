import styles from '../styles/nav.module.css'
import Logo from '../static/GJLogo.png'

const Nav = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt="GJ" />
            </div>
            <div>
                <ul>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                    <li>RESUME</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;