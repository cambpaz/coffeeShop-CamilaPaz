import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getProduct } from '../../api';
import CategoryBar from '../../utils/CategoryBar';
import ProductList from './ProductMap';

const ProductContainer = () => {
    const [productos, setListaProductos] = useState([]);
    const { categoryID } = useParams();
    
    useEffect(() => {
        console.log("esto es categoryID:" + categoryID);
        getProduct(categoryID)
        .then(res => console.log(res))
            // .then(res => {
            //     data = res;
            //     console.log(data);
            //     if (categoryID === undefined) {
            //         setListaProductos(data)
            //     } else {
            //         data.filter(item => item.idCategory === parseInt(categoryID))
            //         console.log(data);
            //         setListaProductos(data)
            //     }
            // })
    }, [categoryID])
    return (
        <div>
            <CategoryBar />
            <div className="contenedor-productos">
                {/* <ProductList productosLista={productos} /> */}
            </div>
        </div>
    )
}

export default ProductContainer

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import { getData } from '../../api';
// import ProductList from './ProductMap';
// import CategoryBar from '../../utils/CategoryBar';


// const ProductContainer = () => {
//     const [productos, setListaProductos] = useState([]);
//     const { categoryID } = useParams();

//     useEffect(() => {
//         getData()
//             .then(res => {
//                 if (categoryID === undefined) {
//                     setListaProductos(res)
//                 } else {
//                     let filterProducts = res.filter(item => item.idCategory === parseInt(categoryID))
//                     setListaProductos(filterProducts)
//                 }
//             })
//     }, [productos])
//     return (
//         <div>
//             <CategoryBar />
//             <div className="contenedor-productos">
//                 <ProductList productosLista={productos} />
//             </div>
//         </div>
//     )
// }

// export default ProductContainer