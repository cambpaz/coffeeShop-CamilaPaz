import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getData } from '../../api';
import CategoryBar from '../../utils/CategoryBar';
import ProductList from './ProductMap';


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
            <div className="contenedor-productos">
                <ProductList productosLista={productos} />
            </div>
        </div>
    )
}

export default ProductContainer

