import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { pedirDatos } from "../../mock/pedirDatos";
import ItemList from "../ItemList/ItemList"




export const ItemListContainer = ({ prenda1, prenda2, prenda3, prenda4 }) => {
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
  );
};
