import Image from 'next/image'
import styles from './button.module.css'

// Need this function due to different file types.
function getMediaImage(type) {
    switch (type) {
        case 'github':
            return {
                "src": "/github.svg",
                "href": "https://github.com/Jhinger"
            }
        
        case 'linkedin':
            return {
                "src": "/linkedin.png",
                "href": "https://www.linkedin.com/in/gurshan-jhinger/"
            }

        case 'discord':
            return {
                "src": "/discord.png",
                "href": "https://discord.com/users/142886688321044480"
            }
    }
}

const Button = ({ type }) => {
    const res = getMediaImage(type);

    const handleRedirect = (res) => {
        window.open(res.href, '_blank');
    }

    return (
        <div className={styles.container}>
            <Image onClick={() => handleRedirect(res)} src={res.src} height='100%' width='100%' layout='responsive' alt={type} />
        </div>
    )
}

export default Button;