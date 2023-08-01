import { useState } from 'react'

interface RealisationsProps {
    setActiveComponent?: (component: string) => void,
    banniere: string,
    lieux: string,
    moodboard: string,
    titre: string,
    texte: string,
    texte_fin: string,
    realisations: [],
    avant: [],
    apres: []
}


export default function ShowRealisation({ lieux, moodboard, titre, texte, texte_fin, realisations, avant, apres }: RealisationsProps) {

    return (
        <article className="realisation__card">
            <h1 className='realisation__t'>{titre}</h1>
            <p className='realisation__place'>{lieux}</p>
            <img  className="moodboard___img" src={moodboard} alt="Moodboard" />
            <p className='realisation__txt'>{texte}</p>
            <p className='realisation__txtEnd'>{texte_fin}</p>
            
            <ul>
                {realisations.map((realisation, index) => (
                    <li className="rea__img" key={index}><img className="rea__imgMain" src={realisation} alt='realisation'></img></li>
                ))}
            </ul>

            <h2 className='before__after'>Avant :</h2>
            <ul>
                {avant.map((item, index) => (
                    <li className="rea__img" key={index}><img className="rea__imgMain" src={item} alt='avant'></img></li>
                ))}
            </ul>

            <h2 className='before__after'>Après :</h2>
            <ul>
                {apres.map((item, index) => (
                    <li className="rea__img" key={index}><img className="rea__imgMain" src={item} alt='apres'></img></li>
                ))}
            </ul>
        </article>
    )
}
