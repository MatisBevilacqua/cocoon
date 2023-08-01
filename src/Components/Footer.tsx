import { useState } from 'react'
import she from '../assets/img/she.png';

interface HeaderProps {
    setActiveComponent: (component: string) => void;
    title:string,
    img: string
}

export default function Footer() {

    return (
        <footer className="footer">
            <h2>Cocoon M’design</h2>
            <p>©2023 Cocoon M’design. All Rights Reserved.</p>
        </footer>
    )
}
