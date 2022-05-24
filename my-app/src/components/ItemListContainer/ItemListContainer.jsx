import styles from "../ItemListContainer/Articulos.module.css"

export const ItemListContainer = ({prenda1,prenda2,prenda3,prenda4}) => {
  return (
    <div className={styles.titulo}>
      <div className="container">
        <div className="row articulos">
          <div className="col-sm-6 col-md-3 col-12">
            <div className={styles.art}>Articulo 1 {prenda1}</div>
          </div>
          <div className="col-sm-6 col-md-3 col-12">
            <div className={styles.art}>Articulo 2 {prenda2} </div>
          </div>
          <div className="col-sm-6 col-md-3 col-12">
            <div className={styles.art}>Articulo 3 {prenda3} </div>
          </div>
          <div className="col-sm-6 col-md-3 col-12">
            <div className={styles.art}>Articulo 4 {prenda4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};