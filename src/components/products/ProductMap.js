import Item from './ItemCard';

const ProductList = ({productosLista}) => {
    return (
        <>
        {
            productosLista.map((producto, index) => 
            <Item 
            id={producto.id}
            key={index}
            product={producto.product}
            price={producto.price}
            image={producto.image}
            stock={producto.stock}
            />
            )
        }
        </>
    )
}
export default ProductList;

//NO TOCAR!!
