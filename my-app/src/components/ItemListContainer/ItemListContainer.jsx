import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"





export const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)


  // const params = useParams()
  const { itemId } = useParams()
  useEffect(() => {
    setLoading(true)

    pedirDatos()
        .then((resp) => {
            if (!itemId) {
                setItems( resp )
            } else {
                setItems( resp.filter((item) => item.categoria === itemId) )
            }
        })
        .catch((error) => {
            console.log('ERROR', error)
        })
        .finally(() => {
            setLoading(false)
        })
}, [itemId])

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