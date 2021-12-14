import logo from './../../logo.svg';
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import { logoImg, navList, navItem, cartWidget } from './navbar.module.scss'


function NavBar() {
    return (
        <>
            <header>
                <Link to="/"><img className={logoImg} src={logo} alt="logo" /></Link>
                <nav className="nav-bar">
                    <ul className={navList}>
                        <Link to="/"><NavItem text="HOME" /></Link>
                        <Link to="/shop"><NavItem text="TIENDA" /></Link>
                        <Link to="/aboutus"><NavItem text="SOBRE NOSOTROS" /></Link>
                        <Link to="/cart"> <CartWidget /> </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}
function CartWidget() {
    const context = useContext(CartContext)
    return (
        <li className={navItem}>
            <div className={cartWidget}>
                <i className="fas fa-shopping-cart carritoInicio"></i>
                {
                context.cart.length !== 0 && <p>{context.cantidadItems()}</p>
                }
            </div></li>
    )
}

export default NavBar;