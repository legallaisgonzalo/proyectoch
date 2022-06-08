import { Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { pedirDatos } from "../../mock/pedirDatos";

export const ItemDetail = ({ item }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    
        pedirDatos()
          .then((resp) => {
            setItems(resp);
          })
          .catch((error) => {
            console.log("ERROR", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    

  return (
    <div className="container my-5">
      <h1>Detalle del producto</h1>
      <section className="container my-5">
      
      <hr />
      { loading ? 
        <Spinner animation="border" role="status">
          <span className="visually"></span>
        </Spinner>
       : 
       <ItemList items={items}/>
      }
    </section>
        
        <hr />

    </div>
  );
};
