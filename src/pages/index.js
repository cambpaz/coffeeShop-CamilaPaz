import React from 'react'
import './../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import {OurCollection} from '../utils/OurCollection'
import CategoryBar from '../utils/CategoryBar';
import ProductContainer from '../components/products/ProductContainer';
import ItemDetailContainer from '../components/products/ItemDetailContainer';

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <OurCollection />
            <CategoryBar />
            <Routes>
                <Route path='/' element={<ProductContainer />}/>
                <Route path='/category/:categoryID' element={<ProductContainer />} />
                <Route path='/item/:itemID' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;