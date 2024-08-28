import ConversorCard from '@/components/Cards/CambioConversor/page';
import styles from '../styles/home.module.css'
import { MdOutlineCompareArrows } from "react-icons/md";

export default function home() {

  return (
    <>
      
      <section className={styles.sectionHero}>
      
        <div className={styles.title}>
          <h1>Agora ficou fácil <br/>converter sua moeda.</h1>
          <p>Selecione as moedas desejadas e adicione os valores nos vampos abaixo</p>    
        </div>

        <div className={styles.cardConversor}>

          <div className={styles.areaCampos}>
            <div className={styles.areaInput}>
              <label>Quantia</label>
              <input type="number" placeholder="1.0000" />
            </div>
            <div>
              <MdOutlineCompareArrows size={24} className={styles.icon} />
            </div>
            <div className={styles.areaInput}>
              <label>Quantia</label>
              <input type="number" placeholder="1.0000" />
            </div>
          </div>

            <div className={styles.areaInfo}>

              <div className={styles.info}>
                <h3>R$1,000 BRL = €0,1620 EUR</h3>
                <p>Câmbio comercial às 16:47 UTC</p>
              </div>

              <button className={styles.btn}>CONVERTER</button>

            </div>
          

        </div>

      </section>

    </>
  )
}