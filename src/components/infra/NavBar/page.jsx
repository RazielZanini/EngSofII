
import Link from "next/link";
import styles from './styles.module.css'


export default function Navbar() {

    return (

        <div className={styles.navbar}>
            <div className={styles.container}>
                <img src="/images/logo.png" className={styles.logo} />

                <nav className={styles.menu}>
                    <Link href="#">Conversor de Moedas</Link>
                    <Link href="#">Conversor de Distâncias</Link>
                </nav>
            </div>
        </div>

    )
}