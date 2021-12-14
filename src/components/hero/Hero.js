import React from 'react';
import { OurCollection } from '../../utils/OurCollection';
import '../../App.css';

import imageDanche from '../../assets/image-danche.png'
import imagePiccollo from '../../assets/image-piccollo.png'
import imagePlanalto from '../../assets/image-planalto.png'
import imageGranEspresso from '../../assets/image-gran-espresso.png'
import { heroSection, contenedorProductos, producto } from './hero.module.scss'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div>
            <div className={heroSection}>
                <h2 className="hero-title">El placer de un buen café.</h2>
                <p className="hero-text">Nada mejor mejor que un buen café para comenzar el día.
                    Probá nuestros Roasters, un café de artesano cultivado en las cordilleras de Africa.
                    Un café de altura.</p>
                <Link to="/shop"><button className="boton-azul">Quiero un Roaster</button></Link>
            </div>
            <OurCollection />
            <div className={contenedorProductos}>
                <div className={producto}>
                    <img className="imagen-producto" src={imageDanche} alt='danche cafe' />
                    <h5 className="producto-texto">Danche</h5>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
                <div className={producto}>
                    <img className="imagen-producto" src={imagePiccollo} alt="piccollo cafe" />
                    <h5 className="producto-texto">Piccollo</h5>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
                <div className={producto}>
                    <img className="imagen-producto" src={imageGranEspresso} alt='gran espresso cafe' />
                    <h5 className="producto-texto">Gran espresso</h5>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
                <div className={producto}>
                    <img className="imagen-producto" src={imagePlanalto} alt="piccollo cafe" />
                    <h5 className="producto-texto">Planalto</h5>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
