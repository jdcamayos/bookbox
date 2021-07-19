import React from 'react'

import '../../css/components/Books.css'


export const BooksCard = ({
    // _id,
    // title,
    // description,
    // cover,
    id,
    superhero,
    first_appearance,
}) => {
    return (
        // <div className="card" style={{ maxWidth: 312 }}>
        //     <img className="card-img-top" src={`./assets/heroes/${id}.jpg`} alt={superhero} />
        //     <div className="card-body">
        //         <h5 className="card-title"> { superhero } </h5>
        //         <p className="card-text">{ first_appearance } </p>
        //         <a href="/" className="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>

        <div className="card col-md-3" style={{ maxWidth: 312 }}>
            <div className="card mb-2">
                <img className="card-img-top"
                    src={`./assets/heroes/${id}.jpg`} alt={superhero} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{superhero}</h4>
                    <p className="card-text">{first_appearance}</p>
                    <a href="/" className="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
        //          <div className="card" style={{ maxWidth: 312 }}>
        //          <img className="card-img-top" src={cover} alt={title} />
        //          <div className="card-body">
        //              <h5 className="card-title"> { title } </h5>
        //              <p className="card-text">{ description } </p>
        //              <a href="/" className="btn btn-primary">Agregar a mis libros</a>
        //          </div>
        //      </div>
    )
}
