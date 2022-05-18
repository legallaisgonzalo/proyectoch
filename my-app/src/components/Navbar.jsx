import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className={styles.titulo}>
        
      <div>
      <h1 className={styles.Titulo}>LOUIS VUITTON</h1>
        
            <Link className={styles.carrito} to= "../routes/Articulos">
              Carrito
            </Link>

        <ul className={styles.menuLogo}>

            <Link className={styles.li} to="#">NOVEDADES</Link>
            <Link className={styles.li} to="#">MUJERES</Link>
            <Link className={styles.li} to= "../routes/Articulos">HOMBRE</Link>
            <Link className={styles.li} to= "../routes/Articulos">ART DE VIVRE</Link>
            <Link className={styles.li} to= "../routes/Articulos">EL MUNDO DE LOUIS VUITTON</Link>


            

        </ul>
      </div>
    </div>
  );
}

