function BookCard(props) {
    const { title, cover, description } = props.book
    return (
        <article className='col'>
            <div
                className='card bg-dark text-light mb-3 card-book'
            >
                <div className='row g-0'>
                    <div className='col-md-4 card-book-img'>
                        <img
                            src={cover}
                            className='img-fluid rounded-start'
                            alt={title}
                        />
                    </div>
                    <div className='col-md-8'>
                        <div
                            className='card-body card-body-book'
                        >
                            <h5 className='card-title text-warning'>{title}</h5>
                            <p className='card-text'>{description}</p>
                        </div>
                        <div className='card-footer text-center'>
                            <button
                                className='btn btn-danger mx-3'
                                // onClick={handleDeleteUserBook}
                            >
                                Eliminar de mis libros
                            </button>
                            {/* {isUserBook ? (
                                <button
                                    className='btn btn-danger mx-3'
                                    // onClick={handleDeleteUserBook}
                                >
                                    Eliminar de mis libros
                                </button>
                            ) : isFavorite ? (
                                <p className='text-warning'>
                                    Este libro ya es tuyo
                                </p>
                            ) : (
                                <button
                                    className='btn btn-warning mx-3'
                                    // onClick={handleSetUserBook}
                                >
                                    Agregar a mis libros
                                </button>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default BookCard
