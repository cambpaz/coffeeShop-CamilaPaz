import React from 'react'
import img from '../../image-hero-coffeepress.jpg'

const ItemDetail = ({data}) => {
    return (
        <div className="contenedor-detalles">
            <img src={img} alt="imagen producto"/>
            <div className="contenedor-info">
                <h2 className="producto-name">Piccollo</h2>
                <p className="descripcion">Cafe en granos de alta calidad</p>
                <p>$200</p>
                <p>Stock: 100</p>
            </div>
        </div>
    )
}

export default ItemDetail;
