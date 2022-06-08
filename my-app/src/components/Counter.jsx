import React from 'react'
import { useState } from 'react'
import styles from '../components/ItemListContainer/Articulos.module.css'

export const Counter = () => {

    let [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador (contador + 1)
    }



  return (
    <div className="container my-5">
        <h1>Contador! </h1>
        <p className={styles.contador}>{contador}</p>
        
        <button className='btn btn-succes' onClick={incrementar}>Incrementar</button>


    </div>
  )
}
