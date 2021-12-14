import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../../utils/ItemCount'
import { CartContext } from '../cart/CartContext'
// import Modals from '../modal/Modals'
import { contenedorDetalles } from './products.module.scss'

const ItemDetail = ({data}) => {
    const [count, setCount] = useState(0)
    const context = useContext(CartContext)

    const onAdd = (cantidad) => {
        if (data.stock > 0) {
            setCount(cantidad);
            context.addToCart(data, cantidad);
        } else {
            alert("¡Lo sentimos! No hay stock de este producto")
        }
    }
    return (
        <div className={contenedorDetalles}>
            <img src={data.image} alt={`imagen ${data.product}`}/>
            <div>
                <h2>{data.product}</h2>
                <p>{data.description}</p>
                <p>${data.price}</p>
                <p>Stock: {data.stock}</p>
                {
                    count === 0
                    ? <ItemCount onAdd={onAdd} producto={data.product} stock={data.stock}/>
                    : <div><Link to="/cart"><button className="checkout">CHECKOUT</button></Link> <Link to="/shop"><button className="checkout">CONTINUE SHOPPING</button></Link>
                    </div>
                }
            </div>
        </div>
    )
    
}

export default ItemDetail;