import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../image-hero-coffeepress.jpg'
import { ItemCount } from '../../utils/ItemCount'

const ItemDetail = ({data}) => {
    const [count, setCount] = useState(0)
    console.log(data);
    const onAdd = (cantidad) => {
        // if (stock > 0) {
        //     alert(`Se agrego al carrito ${cantidad} de ${producto}`);
        // } else {
        //     alert("¡Lo sentimos! No hay stock de este producto")
        // }
        setCount(cantidad)
    }
    return (
        <div className="contenedor-detalles">
            <img src={data.img} alt="imagen producto"/>
            <div className="contenedor-info">
                <h2 className="producto-name">{data.product}</h2>
                <p className="descripcion">{data.description}</p>
                <p>{data.price}</p>
                <p>Stock: {data.stock}</p>
                {
                    count === 0
                    ? <ItemCount onAdd={onAdd} />
                    : <Link to="/cart"><button className="checkout">CHECKOUT</button></Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;
