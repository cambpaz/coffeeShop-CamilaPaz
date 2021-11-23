import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getData } from '../../api';
import ItemDetail from "./ItemDetailPage"

// CONTENEDOR VISTA ESPECIFICA DE CADA PRODUCTO, este es el que llama por query params a la vista espeficica del producto clickeado


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { itemID } = useParams();

    useEffect(() => {
        getData()
        .then(res => {
            let data = res.find(item => item.id === parseInt(itemID))
            setDetail(data)
        })
    }, [])

    return (
        <ItemDetail data={detail}/>
    )
}

export default ItemDetailContainer;