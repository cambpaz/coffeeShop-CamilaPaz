import logo from './../../logo.svg';
import { NavItem } from './NavItem';

function NavBar () {
    return  (
        <>
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <NavItem text="HOME"/>
                    <NavItem text="TIENDA"/>
                    <NavItem text="SOBRE NOSOTROS"/>
                    <NavItem text="CONTACTO"/>
                    <CartWidget />
                </ul>
            </nav>
        </header>
        <div className="hero-section">
            <h2 className="hero-title">El placer de un buen café.</h2>
            <p className="hero-text">Nada mejor mejor que un buen café para comenzar el día. 
            Probá nuestros Roasters, un café de artesano cultivado en las cordilleras de Africa. 
            Un café de altura.</p>
            <p className="boton-hero">Quiero un Roaster</p>
        </div>
        </>
)}
function CartWidget () {
    return (
        <li className="nav-item"><p className="nav-link"><i className="fas fa-shopping-cart carritoInicio"></i></p></li>
    )
}

export default NavBar;