import React from 'react'
import { ItemCount } from '../../utils/ItemCount'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <>
            <div className="producto">
                <img className="imagen-producto" src={props.image} alt={props.product}/>
                <p className="producto-texto">{props.product}</p>
                <p className="producto-texto"> $ {props.price}</p>
                {/* BOTON QUE LLEVARA A LA VISTA INDIVIDUAL DE CADA PRODUCTO */}
                <Link to={`/item/${props.id}`}><button className="btnAgregar" >Ver detalles</button> </Link> 
                <ItemCount producto={props.product} stock={props.stock}/>
            </div>
        </>
    )
}

export default Item;
