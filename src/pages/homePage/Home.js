import React from 'react';
import { contenedorChoose, contenedorReasons, imgTruck } from './homePage.module.scss'
import bestQuality from '../../assets/icon-coffee-bean.svg'
import gift from '../../assets/icon-gift.svg'
import truck from '../../assets/icon-truck.svg'
import Hero from '../../components/hero/Hero';


export const HomePage = () => {
    return (
        <>
        <Hero />
        <div className={contenedorChoose}>
            <div>
                <h3>¿Por qué elegirnos?</h3>
                <p>Una gran parte de nuestro papel es elegir qué cafés en particular se presentarán
                    en nuestra gama. Esto significa trabajar en estrecha colaboración con los mejores productores de café para brindarle a
                    usted una experiencia más impactante en todos los niveles.</p>
            </div>
            <div className={contenedorReasons}>
                <div>
                    <img src={bestQuality} alt="" />
                    <h4>La mejor calidad</h4>
                    <p>Descubra una variedad infinita del mejor café artesanal del mundo de cada uno de nuestros tostadores.</p>
                </div>
                <div>
                    <img src={gift} alt="" />
                    <h4>Beneficios exclusivos</h4>
                    <p>Ofertas especiales y botín cuando se suscribe, incluido un 30% de descuento en su primer envío.</p>
                </div>
                <div>
                    <img src={truck} className={imgTruck} alt="" />
                    <h4>Envio gratis</h4>
                    <p>Cubrimos el costo y el café se entrega rápido. Frescura máxima: garantizada.</p>
                </div>
            </div>
        </div>
        </>
    )
}

