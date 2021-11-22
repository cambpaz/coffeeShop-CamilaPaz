import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getData } from '../../api';
import ItemDetail from "./ItemDetailPage"

// CONTENEDOR VISTA ESPECIFICA DE CADA PRODUCTO, este es el que llama por query params a la vista espeficica del producto clickeado


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { itemID } = useParams();
    let data = []

    useEffect(() => {
        getData()
        .then(res => {
            data = res;
            data.find(item => 
                item.id === itemID)
                console.log(data);
            setDetail(data)
        })
    }, [])

    return (
        <ItemDetail data={detail}/>
    )
}

export default ItemDetailContainer;
