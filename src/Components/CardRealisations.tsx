import { useState } from 'react'

interface CardRealisations {
    img: string,
    title: string
}
export default function CardRealisations({img, title}: CardRealisations) {

    return (
        <>
            <img className="card__img" src={img}></img>
            <h5 className='card__title'>{title}</h5>
        </>
    )
}
