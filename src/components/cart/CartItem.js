import React, { useState } from 'react'
import Modals from '../modal/Modals';

const CartItem = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        props.deleteProduct(props.id)
    }
    const handleCancel = () => {
        setShow(false);
    }
    const confirmaDelete = () => {
        setShow(true);
    }

    return (
        <>
            <div className="contenedor-item-cart">
                <img src={props.img} alt={props.product} />
                <h3>{props.product}</h3>
                <p>{props.qty} item (s) / ${props.price} c/u</p>
                <p>Total: ${props.totalPerProduct(props.id)}</p>
                <button className="btnEliminar" onClick={confirmaDelete}>ELIMINAR</button>
            </div>
            <div>
                {
                    show === true
                        ? <Modals show={show} handleClose={handleClose} handleCancel={handleCancel} botonText={'Sí, estoy seguro'} modalText={'¿Esta seguro que quiere eliminar este producto de su carrito?'}/>
                        : <div></div>
                }
            </div>
        </>
    )
}

export default CartItem