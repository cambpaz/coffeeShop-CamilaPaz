import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetailPage"
// CONTENEDOR VISTA ESPECIFICA DE CADA PRODUCTO


const ItemDetailContainer = ({detail}) => {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('../data.json')
            .then((res) => setDetail(res))
    }, [])

    return (
        <ItemDetail data={detail}/>
    )
}

export default ItemDetailContainer
