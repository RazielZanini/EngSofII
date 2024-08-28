import styles from './styles.module.css'

export default function About() {

    return(
        <div>
            <h1 className={styles.title}>Sobre o nosso sistema:</h1>
            <h2 className={styles.title}>Nosso sistema tem como objetivo:</h2>
            <ul className={styles.list}>
                <li>Demonstrar o uso de microsserviços</li>
                <li>Mostrar o funcionamento por meio de um conversor de câmbio e distâncias</li>
                <li>Demonstrar o uso de microsserviços</li>
                <li>Demonstrar o uso de microsserviços</li>
            </ul>
        </div>
    )
}