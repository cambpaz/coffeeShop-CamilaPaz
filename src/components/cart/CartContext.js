import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, cantidad) => {

        let foundItem = cart.find(item => item.idProduct === product.id);

        if (foundItem === undefined) {
            setCart([
                ...cart,
                {
                    idProduct: product.id,
                    imgProduct: product.image,
                    nameProduct: product.product,
                    priceProduct: product.price,
                    qtyProduct: cantidad
                }
            ]);
        } else {
            foundItem.qtyProduct += cantidad;
        }
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteProduct = (id) => {
        let filterCart = cart.filter(item => item.idProduct !== id);
        setCart(filterCart);
    }
    return (
        <CartContext.Provider value={{cart, addToCart, deleteProduct, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
