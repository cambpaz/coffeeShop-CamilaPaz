import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom'


const Cart = () => {
    const context = useContext(CartContext)
    return (
        <>
            <p className="text-carrito">TU CARRITO</p>
            <div>
                {
                context.cart.length === 0 
                ? <p className="text-carrito">Tu carrito esta vacío.</p>
                : context.cart.map((item, index) =>
                    <CartItem
                        key={index}
                        img={item.imgProduct}
                        product={item.nameProduct}
                        price={item.priceProduct}
                        id={item.idProduct}
                        qty={item.qtyProduct}
                        deleteProduct={context.deleteProduct}
                    />
                )
            }
            </div>
            <div>
                {
                context.cart.length === 0 
                ? <Link to="/shop"><div className="center"><button className="btnCarrito">Comenza la experienza Roaster</button></div></Link>
                : <div className="center"><button className="btnCantidad" onClick={() => context.emptyCart()}>VACIAR CARRITO</button></div>
                }
            </div>
        </>
    )
}

export default Cart
