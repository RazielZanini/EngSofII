import Footer from "../Footer/page";
import Navbar from "../NavBar/page";

import styles from './styles.module.css'

export default function MainContainer({children}) {

    return(
        <>
        <Navbar />
        <div className={styles.container}>{children}</div>
        <Footer/>
        </>
    )
}