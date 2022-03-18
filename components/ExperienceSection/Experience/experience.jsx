import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import styles from './experience.module.css'

function getExperienceImage(type) {
    switch(type) {
        case "pixlworks":
            return {
                "src" : `/${type}.png`,
                "href": "https://pixlworks.com/",
                "name": "PixlWorks Productions"
            }
    }
}

const Experience = ({ type }) => {
    const res = getExperienceImage(type);

    const handleRedirect = (res) => {
        window.open(res.href, '_blank');
    }

    return (
        <div className={styles.expContainer} onClick={() => handleRedirect(res)}>
            <Tilt>   
                <Image 
                    className={styles.expImage} 
                    src={res.src} 
                    width='80%' 
                    height='60%' 
                    layout='responsive' 
                    alt={type} 
                    quality={100} 
                />
                
                <div className={styles.expCardHover}>
                    <h3> { res.name } </h3> 
                    <div>
                        <ul className={styles.experienceList}>
                            <li className={styles.listItem}>HTML</li>
                            <li className={styles.listItem}>CSS</li>
                            <li className={styles.listItem}>JavaScript</li>
                            <li className={styles.listItem}>NodeJS</li>
                            <li className={styles.listItem}>Express</li>
                            <li className={styles.listItem}>GraphQL</li>
                            <li className={styles.listItem}>Heroku</li>
                        </ul>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default Experience;
