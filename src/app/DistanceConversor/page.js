'use client'

import styles from './styles.module.css'
import { MdOutlineCompareArrows } from "react-icons/md";
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function DistanceConversor() {

    const [distance, setDistance] = useState({})
    const [value, setValue] = useState('')
    const [convertedValue, setConvertedValue] = useState('')
    const [from, setFrom] = useState('M')
    const [to, setTo] = useState('CM')

    useEffect(() => {

        const loadConversor = async () => {
            if (value) {
                try {
                    const results = await axios({
                        method: 'GET',
                        url: `/conversion-service/2/${value}/${from}/${to}`,
                        responseType: 'json',
                    })

                    console.log(results.data)
                    setDistance(results.data)
                } catch (error) {
                    console.log(error)
                }
            }
        }

        loadConversor()

    }, [value, convertedValue, from, to])

    function swapSelect() {
        let temp = from
        setFrom(to)
        setTo(temp)
    }

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
                            <input type="number" placeholder="1.0000" onChange={(e) => setValue(e.target.value)} />
                        </div>

                        <div className={styles.selectContainer}>
                            <select value={from} onChange={(e) => setFrom(e.target.value)}>
                                <option value="M">Metro</option>
                                <option value="CM">Centímetro</option>
                            </select>
                        </div>

                        <div>
                            <MdOutlineCompareArrows size={24} className={styles.icon} cursor="pointer" onClick={() => swapSelect()}/>
                        </div>

                        <div className={styles.areaInput}>
                            <label>Valor convertido</label>
                            <input type="number" placeholder="1.0000" disabled={true} value={convertedValue} onChange={(e) => setConvertedValue(e.target.value)} />
                        </div>

                        <div className={styles.selectContainer}>
                            <select value={to} onChange={(e) => setTo(e.target.value)}>
                                <option value="M">Metro</option>
                                <option value="CM">Centímetro</option>
                                <option value="MM">Milimetro</option>
                            </select>
                        </div>

                    </div>

                    <div className={styles.areaInfo}>

                        <button className={styles.btn} onClick={() => setConvertedValue(distance.value)}>CONVERTER</button>

                    </div>

                </div>

            </section>

        </>
    )
}