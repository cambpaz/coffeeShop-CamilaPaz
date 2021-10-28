import logo from '../assets/logo.svg';

function NavBar () {
    return  (
        <>
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">SOBRE NOSOTROS</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">COMPRAR CAFE ROASTER</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">CONTACTO</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
        <div className="hero-section">
            <h2 className="hero-title">El placer de un buen café.</h2>
            <p className="hero-text">Nada mejor mejor que un buen café para comenzar el día. 
            Probá nuestros Roasters, un café de artesano cultivado en las cordilleras de Africa. 
            Un café de altura.</p>
            <a className="boton-hero" href="#">Quiero un Roaster</a>
        </div>
        </>
)}
function CartWidget () {
    return (
        <li className="nav-item"><a href="#" className="nav-link"><i class="fas fa-shopping-cart carritoInicio"></i></a></li>
    )
}



export default NavBar;