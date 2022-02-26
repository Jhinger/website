import Nav from '../Nav';
import Footer from '../Footer';
import styles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Layout;