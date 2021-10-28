import logo from '../assets/logo.svg';

function NavBar () {
    return  (
        <>
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">ABOUT US</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">BUY YOU A COFFEE</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">CREATE YOUR PLAN</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
        <div className="hero-section">
            <h2 className="hero-title">Great coffee made simple.</h2>
            <p className="hero-text">Start your mornings with the world’s best coffees. 
                Try our expertly curated artisan coffees from our best 
                roasters delivered directly to your door, at your schedule.</p>
            <a className="boton-hero" href="#">Create your plan</a>
        </div>
        </>
)}
function CartWidget () {
    return (
        <li className="nav-item"><a href="#" className="nav-link"><i class="fas fa-shopping-cart carritoInicio"></i></a></li>
    )
}



export default NavBar;