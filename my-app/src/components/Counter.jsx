import React from 'react'
import { useState } from 'react'
import styles from '../components/ItemListContainer/Articulos.module.css'

export const Counter = () => {

    let [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador (contador + 1)
    }

    const decrementar = () => {
        setContador (contador - 1)
    }

  return (
    <div>
        <h1>Contador! </h1>
        <p className={styles.contador}>{contador}</p>
        <button className='btn btn-danger' onClick={decrementar}>Decrementar</button>
        <button className='btn btn-succes' onClick={incrementar}>Incrementar</button>


    </div>
  )
}
