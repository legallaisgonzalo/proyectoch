import styles from './Articulos.module.css'
export function Articulos(){

    return(
        <div className={styles.titulo}>
          <ul>
              <li>
                  Zapatillas A
              </li>
              <li>
                  Zapatillas B
              </li>
              <li>
                  Zapatillas C
              </li>
              <li>
                  Zapatillas D
              </li>
          </ul>
        </div>
    )
}