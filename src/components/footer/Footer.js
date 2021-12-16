import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/whiteLogo.png'
import { footer } from './footer.module.scss'
const Footer = () => {
    return (
        <>
        <footer className={footer}>
            <img src={logo} alt="" />
            <Link to="/"><p>HOME</p></Link>
            <Link to="/shop"><p>TIENDA</p></Link>
            <Link to="/aboutus"><p>SOBRE NOSTROS</p></Link>
        </footer>
        </>
    )
}

export default Footer
