import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBar = () => {
    return (
        <div className="contenedor-categorias">
            <Link to="/category/1"><p>Nuestros Granos</p></Link>
            <Link to="/category/3"><p>Cafeteras</p></Link>
            <Link to="/category/2"><p>Accesorios</p></Link>
            <Link to="/category/4"><p>Saborizantes</p></Link>
        </div>
    )
}

export default CategoryBar;
