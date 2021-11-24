import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getDetail, getData } from '../../api';
import ItemDetail from "./ItemDetailPage"

// CONTENEDOR VISTA ESPECIFICA DE CADA PRODUCTO, este es el que llama por query params a la vista espeficica del producto clickeado


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { itemID } = useParams();

    useEffect(() => {
        if (itemID) {
            getDetail(itemID)
                .then(res => setDetail(res))
        } else {
            getData().then(res => setDetail(res))
        }
    }, [itemID])

    return (
        <ItemDetail data={detail}/>
    )
}

export default ItemDetailContainer;