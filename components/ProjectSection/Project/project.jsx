import Image from 'next/image';
import styles from './project.module.css'
import Tilt from 'react-parallax-tilt'

function getProjectImage(type) {
    switch (type) {
        case 'thesaurus':
            return {
                "src" : `/${type}.png`,
                "href": "https://github.com/Jhinger/SimpleThesaurus"
            }
        
        case 'website':
            return {
                "src" : `/${type}.png`,
                "href": "https://github.com/Jhinger/website"
            }

        case 'canvas':
            return {
                "src" : `/${type}.png`,
                "href": "https://github.com/Jhinger/CanvasUI"
            }

        default:
            return {
                "src" : `/${type}.png`,
                "href": "https://github.com/Jhinger"
            }
    }
}

const Project = ({ type }) => {
    const res = getProjectImage(type);

    return (
        <div className={styles.container}>
            <Tilt>
                <Image className={styles.image} src={res.src} width='80%' height='60%' layout='responsive' alt={type} quality={100}>
                
                </Image>
            </Tilt>
        </div>
    )
}

export default Project;
