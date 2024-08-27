import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import styles from './styles.module.css'
import Link from "next/link";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.infoList}>
                <li><Link href="https://react-icons.github.io/react-icons/search/#q=gitlab" target="_blank"><FaGitlab /></Link></li>
                <li><FaGithub /></li>
                <li></li>
            </ul>
            <p className={styles.copyright}><span>Conversor &copy; 2024</span></p>
        </footer>
    )
}