import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem';
import { collection, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import { Link } from 'react-router-dom'
import db from '../../utils/firebaseConfig';
import Modals from '../modal/Modals';

const Cart = () => {

    const context = useContext(CartContext);

    const [show, setShow] = useState(false);
    const [showOrder, setShowOrder] = useState(false);


    const handleClose = () => {
        setShow(false);
        setShowOrder(false);
        context.emptyCart()
    }
    const handleCancel = () => {
        setShow(false);
        setShowOrder(false);
    }
    const confirmaDelete = () => {
        setShow(true);
    }
    const createOrder = () => {
        let order = {
            buyer: {
                name: "Sofia",
                email: "sofia@gmail.com",
                phone: "66232569"
            },
            items: context.cart.map(product => ({
                id: product.idProduct,
                name: product.nameProduct,
                qty: product.qtyProduct,
                price: product.priceProduct
            })),
            total: context.totalPurchase()
        }
        console.log(order);
        const createOrderFS = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderFS()
            .then(result => {
                console.log(result.id);
                setShowOrder(true)})
            .catch(err => console.log(err))

        context.cart.forEach(async (item) => {
            const productRef = doc(db, "products", item.idProduct);
            await updateDoc(productRef, {
                stock: increment(-item.qtyProduct)
            });

        })
        context.emptyCart()
    }
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
                        : <div className="center"><button className="btnCantidad" onClick={confirmaDelete}>VACIAR CARRITO</button></div>
                }
            </div>
            <div>
                {
                    context.cart.length !== 0
                        ? <div className="ordenSummary">
                            <p>Subtotal: ${context.subTotal()}</p>
                            <p>Descuento online: -${context.onlineDiscount()}</p>
                            <h4>TOTAL: ${context.totalPurchase()} </h4>
                            <button onClick={createOrder} className="btnCantidad">TERMINAR MI COMPRA</button>
                        </div>
                        : <p></p>
                }
            </div>
            <div>
                {
                    show === true
                        ? <Modals show={show} handleClose={handleClose} handleCancel={handleCancel} botonText={'Sí, estoy seguro'} modalText={'¿Esta seguro que quiere vaciar su carrito?'} />
                        : <div></div>
                }
            </div>
            <div>
                {
                    showOrder === true
                        ? <Modals show={showOrder} handleClose={handleClose} handleCancel={handleCancel} botonText={'¡Genial!'} modalText={`¡Su pedido Roaster ha sido recibido! Será enviado a preparación pronto. Gracias por confiar en nosotros.`}/>
                        : <div></div>
                }
            </div>
        </>
    )
}

export default Cart
