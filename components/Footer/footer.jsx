import styles from './footer.module.css'

const Footer = () => {
    const currentYear = new Date();

    return (
        <div className={styles.container}>
            Copyright &copy; 2022 - {currentYear.getFullYear()} Gurshan Jhinger
        </div>
    )
}

export default Footer;
