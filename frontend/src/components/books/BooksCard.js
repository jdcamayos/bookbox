import React from 'react'

import '../../css/components/Books.css'


export const BooksCard = ({
    _id,
    title,
    description,
    cover,
}) => {
    return (
        <div className="card" style={{ maxWidth: 312 }}>
            <img className="card-img-top" src={cover} alt={title} />
            <div className="card-body">
                <h5 className="card-title"> { title } </h5>
                <p className="card-text">{ description } </p>
                <a href="/" className="btn btn-primary">Agregar a mis libros</a>
            </div>
        </div>
    )
}
