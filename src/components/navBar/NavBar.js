import logo from './../../logo.svg';
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom'


function NavBar () {
    return  (
        <>
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <Link to="/"><NavItem text="HOME"/></Link>
                    <Link to="/shop"><NavItem text="TIENDA"/></Link>
                    <Link to="/aboutus"><NavItem text="SOBRE NOSOTROS"/></Link>
                    <Link to="/contact"><NavItem text="CONTACTO"/></Link>
                    <Link to="/cart"> <CartWidget /> </Link>
                </ul>
            </nav>
        </header>
        </>
)}
function CartWidget () {
    return (
        <li className="nav-item"><p className="nav-link"><i className="fas fa-shopping-cart carritoInicio"></i></p></li>
    )
}

export default NavBar;