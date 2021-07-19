import ShortButton from './ShortButton'
import styles from '../styles/title.module.css'

const Title = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.greet}>
                    hi, my name is
                </div>
                <div className={styles.name}>
                    GURSHAN <span className={styles.lastName}>JHINGER</span>
                </div>
                <div className={styles.description}>
                    I'm a third year <span className={styles.bold}>Computer Science</span> student at <a href="https://www.sfu.ca/" target="_blank">Simon Fraser University</a> in 
                    British Columbia, Canada &#127748; I love <span className={styles.underline}>developing</span> and <span className={styles.underline}>designing</span> tools for the web, you can 
                    check out some of my work below.
                </div>
            </div>
        </div>
    )
}

export default Title;