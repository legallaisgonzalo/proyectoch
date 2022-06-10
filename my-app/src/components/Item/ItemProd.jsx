import { Link } from "react-router-dom"




const Item = ({item}) =>{

    return(
        <div className="container">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt="foto" />
            <p>{item.desc}</p>
            <h4>Precioso ${item.precio}</h4>
                 <Link to={`/itemDetail/${item.id}`}>
                    <button className="btn btn-primary my-2">Ver más</button>
                </Link>
            <hr />
        </div>
    )

}  

 export default Item;