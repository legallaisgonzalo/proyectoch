const Item = ({item}) =>{
    return(
        <div className="container">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt="foto" />
            <p>{item.desc}</p>
            <h4>Precio: {item.precio}</h4>
            
            <hr />
        </div>
    )

}  
export default Item
