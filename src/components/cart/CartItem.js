import React from 'react'

const CartItem = (props) => {
    return (
        <>
            <div className="contenedor-item-cart">
                <img src={props.img} alt={props.product}/>
                <h3>{props.product}</h3>
                <p>${props.price}</p>
                <p>{props.qty} item/s</p>
                <button className="btnEliminar" onClick={() => props.deleteProduct(props.id)}>ELIMINAR</button>
            </div>
        </>
    )
}

export default CartItem
