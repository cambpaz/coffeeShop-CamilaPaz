import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBar = () => {
    return (
        <div className="contenedor-categorias">
            <p className="category active">Todos</p>
            <Link to="/category/1"><p className="category">Nuestros Granos</p></Link>
            <Link to="/category/3"><p className="category">Cafeteras</p></Link>
            <Link to="/category/2"><p className="category">Accesorios</p></Link>
            <Link to="/category/4"><p className="category">Saborizantes</p></Link>
        </div>
    )
}

export default CategoryBar;
