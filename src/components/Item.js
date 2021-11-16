import React from 'react'
import { ItemCount } from './ItemCount'

const Item = (props) => {
    return (
        <>
            <div className="producto">
                <img className="imagen-producto" src={props.image} alt={props.product}/>
                <p className="producto-texto">{props.product}</p>
                <p className="producto-texto"> $ {props.price}</p>
                {/* BOTON QUE LLEVARA A LA VISTA INDIVIDUAL DE CADA PRODUCTO */}
                <button className="btnAgregar" >Ver detalles</button> 
                <ItemCount producto={props.product} stock={props.stock}/>
            </div>
        </>
    )
}

export default Item;
