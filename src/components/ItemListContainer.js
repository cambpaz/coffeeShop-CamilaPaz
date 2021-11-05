import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({image, producto, stock}) => {
    return (
        <>
            <div className="producto">
                <img className="imagen-producto" src={image} alt={producto}/>
                <p className="producto-texto">{producto}</p>
                <ItemCount producto={producto} stock={stock}/>
            </div>
        </>
    )
}
