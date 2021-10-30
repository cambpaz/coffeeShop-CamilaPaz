import React from 'react';

export const ItemListContainer = ({image, producto}) => {
    return (
        <>
            <div className="producto">
                <img className="imagen-producto" src={image} alt={producto}/>
                <p className="producto-texto">{producto}</p>
            </div>
        </>
    )
}
