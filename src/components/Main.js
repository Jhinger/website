import styles from '../styles/main.module.css'
import Card from './Card'

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardsContainer}>
                <h1 className={styles.projectHeading}>projects</h1>
                <div className={styles.flexCards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Main;