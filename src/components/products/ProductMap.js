import Item from './ItemCard';

const ProductList = ({ productosLista }) => {
    return (
        <>
            {
                productosLista.length > 0
                    ? productosLista.map((producto, index) =>
                        <Item
                            id={producto.id}
                            key={index}
                            product={producto.product}
                            price={producto.price}
                            image={producto.image}
                            stock={producto.stock}
                        />
                    )
                    : <div className="loader-wrapper">
                        <div className="loader"></div>
                    </div>
            }
        </>
    )
}
export default ProductList;

