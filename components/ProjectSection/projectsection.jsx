import Project from './Project'
import styles from './projectsection.module.css'

const ProjectSection = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}> PROJECTS </h3>
            <div className={styles.content}>
                <Project type='canvas' className={styles.project}/>
                <Project type='thesaurus' className={styles.project}/>
                <Project type='website' className={styles.project} />
                <Project type='more' className={styles.project} />
            </div>
        </div>
    )
}

export default ProjectSection;