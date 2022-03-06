import Image from 'next/image';
import styles from './project.module.css'

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
    }
}

const Project = ({ type }) => {
    const res = getProjectImage(type);

    return (
        <div className={styles.container}>
            <Image className={styles.image} src={res.src} width='100%' height='100%' layout='' alt={type}>
                
            </Image>
        </div>
    )
}

export default Project;