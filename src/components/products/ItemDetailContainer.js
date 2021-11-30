import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getDetail } from '../../api';
import ItemDetail from "./ItemDetailPage"

// CONTENEDOR VISTA ESPECIFICA DE CADA PRODUCTO, este es el que llama por query params a la vista espeficica del producto clickeado


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { itemID } = useParams();

    console.log(typeof(itemID));

    useEffect(() => {
        getDetail(itemID)
        .then(res => setDetail(res))
        .catch(err => console.log(err))
    }, [itemID])

    return (
        <ItemDetail data={detail}/>
    )
}

export default ItemDetailContainer;