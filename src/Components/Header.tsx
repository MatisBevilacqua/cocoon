import { useState } from 'react'
import she from '../assets/img/she.png';

interface HeaderProps {
    setActiveComponent: (component: string) => void;
    title:string,
    img: string
}

export default function Header({ setActiveComponent, title, img }: HeaderProps) {

    return (
        <>
            <header className="section__top">
                <div id="beige" className="top__welcome">
                    <h1 className="welcome__title">Cocoon M’design</h1>
                    <img className="welcome__img" src={img}></img>
                </div>

                <div id="brown" className="top__welcome">
                    <nav className="top__nav">
                        <ul className="nav__item">

                            <li className="item" onClick={() => {
                                setActiveComponent('Acceuil');
                            }}><a className="item__link" href="#acceuil">Accueil</a></li>

                            <li className="item" onClick={() => {
                                setActiveComponent('Realisations');
                            }}><a className="item__link" href="#realisations">Mes realisations</a></li>

                            <li className="item" onClick={() => {
                                setActiveComponent('Propos');
                            }}><a className="item__link" href="#propos">A propos de moi</a></li>

                            <li className="item" onClick={() => {
                                setActiveComponent('Acceuil');
                            }}><a className="item__link" href="#contact">Me contacter</a></li>

                        </ul>
                    </nav>
                    <h2 className="welcome__citation">{title}</h2>
                </div>
            </header>
        </>
    )
}
