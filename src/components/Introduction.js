import Nav from './Nav';
import Title from './Title';
import styles from '../styles/introduction.module.css'

const Introduction = () => {
    return (
        <div className={styles.intro}>
            <Nav />
            <Title />
            <div className={styles.container}>
                <div className={styles.mountBack}></div>
                <div className={styles.mountGlow}></div>
                <div className={styles.mountFront}></div>
            </div>
        </div>
    )
}

export default Introduction;