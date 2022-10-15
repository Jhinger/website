import Experience from './Experience'
import styles from './experiencesection.module.css'

const ExperienceSection = () => {
    return (
        <div>
            <div className={styles.experienceContainer}>
                <div className={styles.experienceSecondaryContainer}>
                    <h3 className={styles.experienceTitle}> EXPERIENCE </h3>
                    <div className={styles.experienceContent}>
                        <Experience type='pixlworks' className={styles.experience}/>
                        <Experience type='later' className={styles.experience}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection;
