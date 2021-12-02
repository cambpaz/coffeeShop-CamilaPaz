import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    let reducer = function(acumulador, currentValue) {return acumulador + currentValue};

    // FUNCION PARA AGREGAR AL CARRITO
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
            alert("Se agrego al carrito " + cantidad + ` de ${product.product}`);
        } else {
            let confirmacion = window.confirm('Ya tienes este producto en tu carrito, quieres agregar otro?')
            if (confirmacion) {
                foundItem.qtyProduct += cantidad;
                setCart([...cart])
                alert("Se agrego al carrito" + cantidad + ` de ${product.product}`);
            }
        }
    }
    // FUNCION PARA VACIAR EL CARRITO
    const emptyCart = () => {
        setCart([]);
    }
    // FUNCION PARA ELIMINAR UN ITEM DEL CARRITO
    const deleteProduct = (id) => {
        let filterCart = cart.filter(item => item.idProduct !== id);
        setCart(filterCart);
    }

    // FUNCION PARA CALCULAR EL TOTAL POR ITEM
    function totalPerProduct(id) {
        let itemCost = cart.find(item => item.idProduct === id)
        return itemCost.priceProduct * itemCost.qtyProduct;
    }

    // FUNCION PARA EL SUBTOTAL
        function subTotal() {
            let totalPurchase = cart.map(item => totalPerProduct(item.idProduct))
            return totalPurchase.reduce(reducer, 0);
        }

    //FUNCION PARA EL DESCUENTO ONLINE
    function onlineDiscount() {
        return subTotal() * 0.15;
    }

    // FUNCION PARA CALCULAR EL TOTAL
    function totalPurchase() {
        return subTotal() * 0.85;
    }

    // FUNCION PARA EL NUMERO DE ITEMS EN EL CARRITO
    function cantidadItems() {
        let cantidad = cart.map(item => item.qtyProduct);
        return cantidad.reduce(reducer, 0)
    }
    return (
        <CartContext.Provider value={{cart, addToCart, deleteProduct, emptyCart, totalPerProduct, subTotal, onlineDiscount, totalPurchase, cantidadItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
