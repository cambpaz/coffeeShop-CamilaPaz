import React from 'react';
import { Link } from 'react-router-dom';
import {heroContainer, qualityContainer, containerCountries, containerCountry, headqContainer} from './nosotros.module.scss';
import imageCommitment from '../../assets/image-commitment.jpg';
import imageQuality from '../../assets/image-quality.jpg';
import australia from "../../assets/illustration-australia.svg";
import canada from "../../assets/illustration-canada.svg";
import uk from "../../assets/illustration-uk.svg";


const Nosotros = () => {
    return (
        <>
            <div className={heroContainer}>
                <h2 className="hero-title">Sobre Nosotros.</h2>
                <p className="hero-text">
                    Coffeeroasters comenzó su viaje de descubrimiento exótico en 1999, destacando historias de café de todo el mundo. Desde entonces, nos hemos dedicado a traer la taza perfecta, desde el frijol hasta la infusión, en cada envío.</p>
                <Link to="/shop"><p className="boton-hero">Quiero un Roaster</p></Link>
            </div>
            <div className="container-commitment">
                <img src={imageCommitment} alt="commitment boy stirring coffee" />
                <div className="text-commitment">
                    <h3 className="title-text">Nuestro juramento</h3>
                    <p>Nos basamos en una misión simple y el compromiso de hacer el bien en el camino. Queremos facilitarle la tarea de descubrir y preparar el mejor café del mundo en casa. Todo comienza en la fuente. Para ubicar los lotes específicos que queremos comprar, viajamos casi 60 días al año tratando de comprender los desafíos y oportunidades en cada uno de estos lugares. Colaboramos con productores de café excepcionales y empoderamos a una comunidad global de agricultores a través de puntos de referencia muy por encima del comercio justo. También ofrecemos capacitación, apoyamos iniciativas de la comunidad agrícola e invertimos en ciencia de la planta de café. 
                        Curando solo las mejores mezclas, tostamos cada lote para resaltar los perfiles de degustación distintivos de su región de cultivo nativa.</p>
                </div>
            </div>
            <div className={qualityContainer}>
                <div>
                    <h3 className="subtitle">Compromiso de calidad</h3>
                    <p className="hero-text">Aunque trabajamos con productores que prestan mucha atención a todas las etapas de la cosecha y el procesamiento, empleamos, por nuestra parte, un riguroso programa de control de calidad para evitar tostar o hornear el café en exceso. Cada bolsa de café está etiquetada con una fecha de tueste y un número de lote.
                        Nuestro objetivo es tostar café consistente y fácil de usar, para que prepararlo sea fácil y agradable.</p>
                </div>
                <img src={imageQuality} alt="coffee quality" />
            </div>
            <div className={headqContainer}>
                <h3>Nuestros Headquarters</h3>
                <div className={containerCountries}>
                    <div className={containerCountry}>
                        <img src={uk} alt="united kingdom" />
                        <h4>United Kingdom</h4>
                        <p>68 Any Name Rd</p>
                        <p>Londres</p>
                        <p>+44 123 455323</p>
                    </div>
                    <div className={containerCountry}>
                        <img src={canada} alt="canada" />
                        <h4>Canada</h4>
                        <p>68 Any Name Rd</p>
                        <p>Londres</p>
                        <p>+44 123 455323</p>
                    </div>
                    <div className={containerCountry}>
                        <img src={australia} alt="australia" />
                        <h4>Australia</h4>
                        <p>68 Any Name Rd</p>
                        <p>Londres</p>
                        <p>+44 123 455323</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros
