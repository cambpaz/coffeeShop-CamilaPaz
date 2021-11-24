import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getProduct, getData } from '../../api';
import CategoryBar from '../../utils/CategoryBar';
import ProductList from './ProductMap';

const ProductContainer = () => {
    const [productos, setListaProductos] = useState([]);
    const { categoryID } = useParams();
    
    useEffect(() => {
        if (categoryID) {
            getProduct(categoryID)
                .then(res => setListaProductos(res))
        } else {
            getData().then(res => setListaProductos(res))
        }
    }, [categoryID])
    return (
        <div>
            <CategoryBar />
            <div className="contenedor-productos">
                <ProductList productosLista={productos} />
            </div>
        </div>
    )
}

export default ProductContainer

