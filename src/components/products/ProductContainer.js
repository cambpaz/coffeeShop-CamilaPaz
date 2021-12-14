import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getData } from '../../api';
import CategoryBar from '../categoryBar/CategoryBar';
import ProductList from './ProductMap';
import { containerProducts } from './products.module.scss'


const ProductContainer = () => {
    const [productos, setListaProductos] = useState([]);
    const { categoryID } = useParams();

    useEffect(() => {
        getData(parseInt(categoryID))
            .then(res => setListaProductos(res))
            .catch(err => console.log(err))
    }, [categoryID])
    return (
        <div>
            <CategoryBar />
            <div className={containerProducts}>
                <ProductList productosLista={productos} />
            </div>
        </div>
    )
}

export default ProductContainer

