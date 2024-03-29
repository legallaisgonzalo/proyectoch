import { Link } from "react-router-dom"




const Item = ({items}) =>{

    return(
        <div className="container">
            <h2>{items.nombre}</h2>
            <img src={items.img} alt="foto" />
            <p>{items.desc}</p>
            <h4>Precio ${items.precio}</h4>
                 <Link to={`/itemDetail/${items.id}`}>
                    <button className="btn btn-primary my-2">Ver más</button>
                </Link>
            <hr />
        </div>
    )

}  

 export default Item;