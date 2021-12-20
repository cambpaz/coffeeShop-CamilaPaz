import React from 'react'
import './../App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import ProductContainer from '../components/products/ProductContainer';
import ItemDetailContainer from '../components/products/ItemDetailContainer';
import Cart from '../components/cart/Cart';
import CartContextProvider from '../components/cart/CartContext';
import Footer from '../components/footer/Footer';
import Nosotros from './nosotros/Nosotros';
import { HomePage } from './homePage/Home';


const Home = () => {
    return (
        <CartContextProvider >
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/shop' element={<ProductContainer />}/>
                    <Route path='/category/:categoryID' element={<ProductContainer />} />
                    <Route path='/item/:itemID' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/aboutus' element={<Nosotros />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default Home;