import React, { useState } from 'react'
import Modals from '../components/modal/Modals';

export const ItemCount = ({stock, producto, onAdd}) => {
    const [cantidad, setCantidad] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const agregarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        } else if (cantidad === stock) {
            alert(`Solo tenemos disponible ${stock} de ${producto}`)
        } else {
            setShow(true);
            // alert('no hay stock')
        }
    }
    const eliminarCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad-1)
        }
    }
    return (
        <div className="contenedor-counter">
            <div className="counter">
                <button onClick={eliminarCantidad} className="btnCantidad">-</button>
                {
                    stock > 0 
                    ? <span className="cantidad">{cantidad}</span> 
                    : <span className="cantidad">0</span>
                } 
                <button onClick={agregarCantidad} className="btnCantidad">+</button>
            </div>
            <button className="btnCarrito" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            <div>
                {
                    show === true
                    ? <Modals show={show} handleClose={handleClose}/>
                    : <div></div>
                }
            </div>
        </div>
    )
}
