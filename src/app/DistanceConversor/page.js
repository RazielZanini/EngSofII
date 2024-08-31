import styles from './styles.module.css'
import { MdOutlineCompareArrows } from "react-icons/md";

export default function DistanceConversor() {

    return (
        <>

            <section className={styles.sectionHero}>

                <div className={styles.title}>
                    <h1>Conversor de Distâncias</h1>
                    <p>Informe uma distância e escolha uma unidade de medida para converter</p>
                </div>

                <div className={styles.cardConversor}>

                    <div className={styles.areaCampos}>
                        <div className={styles.areaInput}>
                            <label>Valor</label>
                            <input type="number" placeholder="1.0000" />
                        </div>

                        <div className={styles.selectContainer}>
                            <select>
                                <option value="Km">Metro</option>
                                <option value="Cm">Centímetro</option>
                                <option value="mm">Milimetro</option>
                            </select>
                        </div>

                        <div>
                            <MdOutlineCompareArrows size={24} className={styles.icon} cursor="pointer" />
                        </div>

                        <div className={styles.areaInput}>
                            <label>Valor convertido</label>
                            <input type="number" placeholder="1.0000" disabled={true} />
                        </div>

                        <div className={styles.selectContainer}>
                            <select>
                                <option value="Km">Metro</option>
                                <option value="Cm">Centímetro</option>
                                <option value="mm">Milimetro</option>
                            </select>
                        </div>

                    </div>

                    <div className={styles.areaInfo}>

                        <button className={styles.btn}>CONVERTER</button>

                    </div>

                </div>

            </section>

        </>
    )
}