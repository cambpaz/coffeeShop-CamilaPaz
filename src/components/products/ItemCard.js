import React from 'react'
import { Link } from 'react-router-dom'
import { producto } from './products.module.scss'

const Item = (props) => {
    return (
        <>
            <div className={producto}>
                <img src={props.image} alt={props.product}/>
                <p>{props.product}</p>
                <p> $ {props.price}</p>
                {/* BOTON QUE LLEVARA A LA VISTA INDIVIDUAL DE CADA PRODUCTO */}
                <Link to={`/item/${props.id}`}><button className="btnRosa">Ver detalles</button> </Link> 
            </div>
        </>
    )
}

export default Item;
