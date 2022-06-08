import { Link } from "react-router-dom"
//import { ItemDetail } from "../ItemDetail/ItemDetail"

const Item = ({item}) =>{

    return(
        <div className="container">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt="foto" />
            <p>{item.desc}</p>
            <h4>Precio: {item.precio}</h4>
            <Link to="/ItemDetail">Ver más</Link>
            <hr />
        </div>
    )

}  
export default Item
