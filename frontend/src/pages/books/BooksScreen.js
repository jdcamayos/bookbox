import React from 'react'
import { BooksCard } from '../../components/books/BooksCard'
import { heroes } from '../../data/heroes'


export const BooksScreen = () => {
    return (
        <div className="container animate__animated animate__fadeIn">

            <div className="container-fluid">
                <h1>BooksScreen</h1>
            </div>
            <div className="card-columns">
                {
                    heroes.map(hero => (
                        <BooksCard key={hero.id}
                            {...hero}
                        />

                    ))
                }

            </div>



        </div>
    )
}
