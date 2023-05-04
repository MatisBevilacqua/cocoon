import { useState } from 'react'

interface CardRealisations {
    img: string,
    title: string
}
export default function CardRealisations({img, title}: CardRealisations) {

    return (
        <article className="realisation__card">
            <img className="card__img" src={img}></img>
            <h5>{title}</h5>
        </article>
    )
}
