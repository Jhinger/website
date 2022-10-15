import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import styles from './experience.module.css'
import { getExperienceImage } from '../../../util/getExperienceImage'

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
                    priority={true}
                />
                
                <div className={styles.expCardHover}>
                    { res.name }
                    <p className={styles.positionTitle}> { res.positionTitle } </p>
                    <p className={styles.positionLength}> {res.positionDuration } </p>
                </div>
            </Tilt>
        </div>
    )
}

export default Experience;
