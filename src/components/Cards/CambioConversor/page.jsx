import CoinSelector from '@/components/Inputs/page';
import styles from './styles.module.css'
import { GoArrowSwitch } from "react-icons/go";

export default function ConversorCard({ valueType, convertValueType }) {

  return (
    <div className={styles.card}>
      <div></div>
      <div className={styles.card_content}>
        <label>Valor</label>
        <input type="number" /><span>{valueType}</span>
        <GoArrowSwitch cursor="pointer" /><br />
        <label>Converter para</label>
        <input type="number" /><span><CoinSelector /></span>
        <button>Converter</button>
      </div>
    </div>
  )
}