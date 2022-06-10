import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../mock/pedirDatos"
import { useParams } from "react-router-dom"
import ItemProd   from  "../Item/Item"




export const ItemDetail = ({item}) => {

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
        <div className="container my-5">

            <h2>Detalle del producto</h2>
            <section className="container my-5">
      
      <hr />
      { loading ? 
        <Spinner animation="border" role="status">
          <span className="visually"></span>
        </Spinner>
       : 
       <ItemProd items={items}/>


      }
    </section>

        </div>
    )
}



