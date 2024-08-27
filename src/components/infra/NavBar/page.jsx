
import Link from "next/link";
import styles from './styles.module.css'

export default function Navbar(){

    return (

        <ul className={styles.navbar}>
            <li>
                <Link href="../">Home</Link>
            </li>
            <li>
                <Link href="../">TBDC</Link>
            </li>
            <li>
                <Link href="../">TDBC</Link>
            </li>
        </ul>
    )
}