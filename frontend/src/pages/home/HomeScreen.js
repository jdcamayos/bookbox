import React from 'react'
import { BooksCard } from '../../components/books/BooksCard';

import '../../css/pages/Home.css'
import { heroes } from '../../data/heroes';
import { getBooksByPublisher } from '../../selectors/getBooksByPublisher';




export const HomeScreen = () => {








    return (
        <div style={{ height: '114vh' }}>
            <h1>Landing page</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner carousel-min">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="assets/images/slider1.jpeg" alt="Max-width 70%" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/images/slider2.jpeg" alt="Max-width 70%" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/images/slider3.jpeg" alt="Max-width 70%" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div id="carouselBookIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselBookIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselBookIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselBookIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner clases-carrusel ">
                    <div className="carousel-item active ">
                        <h1>DC Comics</h1>
                        <hr />
                        <div className="carousel-item-book">
                            {

                                getBooksByPublisher("DC Comics").map((filterBook, index) => {

                                    if (index < 3) {

                                        return <BooksCard key={filterBook.id}
                                            {...filterBook}
                                        />
                                    }

                                }
                                )

                            }

                        </div>
                    </div>
                    <div className="carousel-item carousel-item-book">
                        <h1>Marvel Comics</h1>
                        <hr />
                        <div className="carousel-item-book">

                            {

                                getBooksByPublisher("Marvel Comics").map((filterBook, index) => {

                                    if (index < 3) {

                                        return <BooksCard key={filterBook.id}
                                            {...filterBook}
                                        />
                                    }

                                }
                                )

                            }
                        </div>

                    </div>
                    <div className="carousel-item carousel-item-book">
                        <h1>TODOS</h1>
                        <hr />
                        <div className="carousel-item-book">

                            {

                                heroes.map((filterBook, index) => {

                                    if (index < 3) {

                                        return <BooksCard key={filterBook.id}
                                            {...filterBook}
                                        />
                                    }

                                }
                                )

                            }

                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselBookIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselBookIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}
