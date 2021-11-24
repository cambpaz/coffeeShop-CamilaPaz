import React from 'react'
import './../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import ProductContainer from '../components/products/ProductContainer';
import ItemDetailContainer from '../components/products/ItemDetailContainer';
import Cart from '../cart/Cart';
import Hero from '../utils/Hero';

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/shop' element={<ProductContainer />}/>
                <Route path='/category/:categoryID' element={<ProductContainer />} />
                <Route path='/item/:itemID' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;