import React from 'react'

import '../../css/components/Books.css'


export const BooksCard = ({
    id,
    superhero,
    first_appearance,
}) => {
    return (
        <div className="card" style={{ maxWidth: 312 }}>
            <img className="card-img-top" src={`./assets/heroes/${id}.jpg`} alt={superhero} />
            <div className="card-body">
                <h5 className="card-title"> { superhero } </h5>
                <p className="card-text">{ first_appearance } </p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
