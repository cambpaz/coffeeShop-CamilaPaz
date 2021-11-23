import React from 'react';
import { OurCollection } from './OurCollection';
import '../App.css';
import imageDanche from '../image-danche.png';
import imagePiccollo from '../image-piccollo.png';
import imageGranEspresso from '../image-gran-espresso.png';
import imagePlanalto from '../image-danche.png';


const Hero = () => {
    return (
        <div>
            <div className="hero-section">
                <h2 className="hero-title">El placer de un buen café.</h2>
                <p className="hero-text">Nada mejor mejor que un buen café para comenzar el día.
                    Probá nuestros Roasters, un café de artesano cultivado en las cordilleras de Africa.
                    Un café de altura.</p>
                <p className="boton-hero">Quiero un Roaster</p>
            </div>
            <OurCollection />
            <div className="contenedor-productos">
                <div className="producto">
                    <img className="imagen-producto" src={imageDanche} alt='danche cafe' />
                    <p className="producto-texto">Danche</p>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
                <div className="producto">
                    <img className="imagen-producto" src={imagePiccollo} alt="piccollo cafe" />
                    <p className="producto-texto">Piccollo</p>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
                <div className="producto">
                    <img className="imagen-producto" src={imageGranEspresso} alt='gran espresso cafe' />
                    <p className="producto-texto">Gran espresso</p>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
                <div className="producto">
                    <img className="imagen-producto" src={imagePlanalto} alt="piccollo cafe" />
                    <p className="producto-texto">Planalto</p>
                    <p className="producto-descripcion">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
