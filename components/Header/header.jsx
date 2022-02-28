import Button from '../Button';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.introduction}>hello, my name is</div>
                <h1 className={styles.name}> GURSHAN <span className={styles.lastName}>JHINGER</span> </h1>
                <p className={styles.description}>
                    I'm currently a fourth year <span className={styles.important}>Computer Science</span> student at <span className={styles.important}> Simon Fraser
                    University</span> in Burnaby, British Columbia. I'm an aspiring Software Engineer who
                    loves to design and develop tools for the web, you can check out some of my work
                    below.
                </p>
                <div className={styles.buttonContainer}>
                    <Button type='github'/>
                    <Button type='linkedin' />
                    <Button type='discord' /> 
                </div>
            </div>
        </div>
    )
}

export default Header;