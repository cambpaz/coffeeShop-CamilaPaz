import React from 'react'

const CartItem = (props) => {
    return (
        <>
            <div className="contenedor-item-cart">
                <img src={props.img} alt={props.product}/>
                <h3>{props.product}</h3>
                <p>{props.qty} item(s) / ${props.price} c/u</p>
                <p>Total: ${props.totalPerProduct(props.id)}</p>
                <button className="btnEliminar" onClick={() => props.deleteProduct(props.id)}>ELIMINAR</button>
            </div>
        </>
    )
}

export default CartItem
