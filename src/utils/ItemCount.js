import React, { useState } from 'react'

export const ItemCount = ({ stock, producto, onAdd }) => {
    const [cantidad, setCantidad] = useState(1)
    const [isShowingAlert, setShowingAlert] = useState(false);


    const agregarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        } else {
            setShowingAlert(true)
        }
    }
    const eliminarCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
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
            <div
                className={`alert ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}
                onTransitionEnd={() => setShowingAlert(false)}
            >
                ¡No hay más stock de este producto!
            </div>
        </div>
    )
}
