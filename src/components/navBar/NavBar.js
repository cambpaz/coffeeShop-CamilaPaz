import logo from './../../logo.svg';
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';


function NavBar() {
    return (
        <>
            <header>
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                <nav className="nav-bar">
                    <ul className="nav-list">
                        <Link to="/"><NavItem text="HOME" /></Link>
                        <Link to="/shop"><NavItem text="TIENDA" /></Link>
                        <Link to="/aboutus"><NavItem text="SOBRE NOSOTROS" /></Link>
                        <Link to="/contact"><NavItem text="CONTACTO" /></Link>
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
        <li className="nav-item ">
            <p className="nav-link cartWidget">
                <i className="fas fa-shopping-cart carritoInicio"></i>
                {
                context.cart.length !== 0 && <p>{context.cantidadItems()}</p>
                }
            </p></li>
    )
}

export default NavBar;