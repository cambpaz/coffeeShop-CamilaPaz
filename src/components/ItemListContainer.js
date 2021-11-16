import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemListContainer = ({productosLista}) => {
    const [productos, setListaProductos] = useState([]);

    useEffect(() => {
        function traerProductos(timeout, data) {
            return new Promise ((res, rej) => {
                if (productosLista.length > 0) {
                    setTimeout(() => {
                        res(data);
                    }, timeout)
                } else {
                    rej("Error! No hay productos.");
                }
            })
        }
        traerProductos(2000, productosLista)
            .then(() => { setListaProductos(productosLista)})
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
        {
            productos.map((producto, index) => 
            <Item 
            key={index}
            product={producto.product}
            price={producto.price}
            image={producto.image}
            stock={producto.stock}
            />
            )
        }
        </>
    )
}
export default ItemListContainer;
