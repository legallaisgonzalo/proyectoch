import Item from "../Item/Item";
import styles from "../ItemListContainer/Articulos.module.css";

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <div className={styles.item}>
        {items.map((item) => (
          <Item key={item.id} item={item}/>
          
          ))}
      </div>
    </div>
  );
};

export default ItemList;