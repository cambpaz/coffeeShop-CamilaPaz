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
                        totalPerProduct={context.totalPerProduct}
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
            <div>
                {
                context.cart.length !== 0 
                ? <div className="ordenSummary"><p>Subtotal: ${context.subTotal()}</p><p>Descuento online: -${context.onlineDiscount()}</p><h4>TOTAL: ${context.totalPurchase()} </h4></div>
                : <p></p>
                    
                }
            </div>
            
        </>
    )
}

export default Cart
