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
                    { res.name }
                    <p className={styles.positionTitle}>Software Developer Intern</p>
                    <p className={styles.positionLength}>January 2022 - April 2022</p>
                </div>
            </Tilt>
        </div>
    )
}

export default Experience;
