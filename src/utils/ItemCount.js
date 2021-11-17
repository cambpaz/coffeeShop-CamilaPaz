import React, { useState } from 'react'

export const ItemCount = ({stock, producto}) => {
    const [cantidad, setCantidad] = useState(1)

    const agregarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        } else if (cantidad === stock) {
            alert(`Solo tenemos disponible ${stock} de ${producto}`)
        } else {
            alert("No hay stock de este producto")
        }
    }
    const eliminarCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad-1)
        }
    }
    const onAdd = () => {
        if (stock > 0) {
            alert(`Se agrego al carrito ${cantidad} de ${producto}`);
        } else {
            alert("¡Lo sentimos! No hay stock de este producto")
        }
    }
    return (
        <div className="contenedor-counter">
            <div className="counter">
                <button onClick={eliminarCantidad} className="btnCantidad">-</button>
                {
                    stock > 0 ? 
                    <span className="cantidad">{cantidad}</span> 
                    : 
                    <span className="cantidad">0</span>
                } 
                <button onClick={agregarCantidad} className="btnCantidad">+</button>
            </div>
            <button className="btnAgregar" onClick={onAdd}>Agregar al carrito</button>
            <p className="stock-disponible">Stock disponible:  {stock}</p>
        </div>
    )
}
