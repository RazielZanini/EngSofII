'use client'

import styles from '../styles/home.module.css'
import { MdOutlineCompareArrows } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [convertedValue, setConvertedValue] = useState('')
  const [value, setValue] = useState('')
  const [cambio, setCambio] = useState({})
  // const [msg, setMsg] = useState(null)
  const [coin, setCoin] = useState('BRL') // Valor inicial
  const [coinConvert, setCoinConvert] = useState('USD') // Valor inicial
  // const date = new Date().toLocaleString('pt-BR', { timeZoneName: 'short' })

  useEffect(() => {
    const loadCambio = async () => {
      if (value) {  // Verifica se ambas as moedas estão definidas
        try {
          const results = await axios({
            method: 'GET',
            url: `/conversion-service/1/${value}/${coin}/${coinConvert}`,
            responseType: 'json',
          });
          console.log(results.data)
          setCambio(results.data)
        } catch (error) {
          console.log(error)
        }
      }
    }

    loadCambio()
  }, [value, convertedValue, coin, coinConvert]) // Chama o useEffect sempre que coin ou coinConvert mudarem

  // Função para inverter as moedas
  function swapCoins() {
    const temp = coin;
    setCoin(coinConvert);
    setCoinConvert(temp);
  }

  return (
    <>

      <section className={styles.sectionHero}>

        <div className={styles.title}>
          <h1>Agora ficou fácil <br />converter sua moeda.</h1>
          <p>Selecione as moedas desejadas e adicione os valores nos campos abaixo</p>
        </div>

        <div className={styles.cardConversor}>

          <div className={styles.areaCampos}>
            <div className={styles.areaInput}>
              <label>Valor</label>
              <input type="number" placeholder="1.0000" onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.selectContainer}>
              <select value={coin} onChange={(e) => setCoin(e.target.value)}>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div>
              <MdOutlineCompareArrows size={24} className={styles.icon} cursor="pointer" onClick={swapCoins} />
            </div>
            <div className={styles.areaInput}>
              <label>Valor convertido</label>
              <input type="number" placeholder="1.0000" value={convertedValue} disabled={true} />
            </div>
            <div className={styles.selectContainer}>
              <select value={coinConvert} onChange={(e) => setCoinConvert(e.target.value)}>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

          </div>

          <div className={styles.areaInfo}>

            {/* {cambio[`${coin}${coinConvert}`] && (
              <div className={styles.info}>
                <h3>{`${coin} 1 = ${cambio[`${coin}${coinConvert}`].value} ${coinConvert}`}</h3>
                <p>Câmbio comercial às {date}</p>
              </div>
            )} */}

            <button className={styles.btn} onClick={() => setConvertedValue(cambio.value)}>CONVERTER</button>

          </div>

        </div>

      </section>

    </>
  )
}
