import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getData } from '../../api';
import ProductList from './ProductMap';

const ProductContainer = () => {
    const [productos, setListaProductos] = useState([]);
    const { categoryID } = useParams();
    let data = [];

    useEffect(() => {
        getData()
            .then(res => {
                data = res;
                console.log(data);
                if (categoryID === undefined) {
                    setListaProductos(data)
                } else {
                    data.filter(item => item.idCategory === parseInt(categoryID))
                    console.log(data);
                    setListaProductos(data)
                }
            })
    }, [categoryID])
    return (
        <div>
            <div className="contenedor-productos">
                <ProductList productosLista={productos} />
            </div>
        </div>
    )
}

export default ProductContainer
