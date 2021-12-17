import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../../utils/ItemCount'
import { CartContext } from '../cart/CartContext'
import { contenedorDetalles } from './products.module.scss'

const ItemDetail = ({ data }) => {
    const [count, setCount] = useState(0)
    const [isShowingAlert, setShowingAlert] = useState(false);
    const [alertStock, setAlertStock] = useState(false);


    const context = useContext(CartContext)

    const onAdd = (cantidad) => {
        if (data.stock > 0) {
            setCount(cantidad);
            context.addToCart(data, cantidad);
            setShowingAlert(true);
        } else {
            setAlertStock(true)
        }
    }
    return (
        <>
            <div className={contenedorDetalles}>
                <img src={data.image} alt={`imagen ${data.product}`} />
                <div>
                    <h2>{data.product}</h2>
                    <p>{data.description}</p>
                    <p>${data.price}</p>
                    <p>Stock: {data.stock}</p>
                    {
                        count === 0
                            ? <ItemCount onAdd={onAdd} producto={data.product} stock={data.stock} />
                            : <div><Link to="/cart"><button className="checkout">CHECKOUT</button></Link> <Link to="/shop"><button className="checkout">CONTINUE SHOPPING</button></Link>
                            </div>
                    }
                    <div
                        className={`alert ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}
                        onTransitionEnd={() => setShowingAlert(false)}
                    >
                        Agregado al carrito
                    </div>
                    <div
                        className={`alert ${alertStock ? 'alert-shown' : 'alert-hidden'}`}
                        onTransitionEnd={() => setAlertStock(false)}
                    >
                        ¡No hay más stock de este producto!
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetail;