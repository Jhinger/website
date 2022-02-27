import Image from 'next/image'
import styles from './button.module.css'

// Need this function due to different file types.
function getMediaImage(type) {
    switch (type) {
        case 'github':
            return '/github.svg'
        
        case 'linkedin':
            return '/linkedin.png'

        case 'discord':
            return '/discord.png'
    }
}

const Button = ({ type }) => {
    const res = getMediaImage(type);

    return (
        <div className={styles.container}>
            <Image src={res} height='100%' width='100%' layout='responsive' />
        </div>
    )
}

export default Button;