export default function Footer() {
    const ourTeam = [
        { name: 'Alexandra Medina', github: 'nelamero' },
        { name: 'Brayan Y. Marin', github: 'brayan12y' },
        { name: 'Cristian C. Castañeda', github: 'cccastanedaa' },
        { name: 'Juan A. Rios', github: 'juanrios26' },
        { name: 'Juan D. Camayo', github: 'jdcamayos' },
    ]
    return (
        <footer
            className='container-fluid  bg-warning'
            style={{ minHeight: '80px' }}
        >
            <div className='container'>
                <div className='row pt-3'>
                    <div className='col-12 text-center'>
                        <p>
                            <strong>
                                &copy; BookBox {new Date().getFullYear()}
                            </strong>
                        </p>
                    </div>
                </div>
                <div className='row p-2'>
                    <section className='col-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center'>
                                <p className='h5'>
                                    <strong>Nuestro Equipo</strong>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex flex-column'>
                                <div className='row justify-content-center'>
                                    {ourTeam.map((member, index) => (
                                        <div
                                            className='col-12 col-lg-6'
                                            key={index}
                                        >
                                            <a
                                                className='btn btn-warning btn-sm w-100'
                                                href={`https://github.com/${member.github}`}
                                            >
                                                <span className='ms-2'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='16'
                                                        height='16'
                                                        fill='currentColor'
                                                        className='bi bi-github'
                                                        viewBox='0 0 16 16'
                                                    >
                                                        <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                                                    </svg>
                                                </span>
                                                <span className='ms-2'>
                                                    <strong>
                                                        {member.name}
                                                    </strong>
                                                </span>
                                                {/* <span className="ms-1">
                                                    @{member.github}
                                                </span> */}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <p align="justify">
                            <strong>BookBox</strong> es una página web 
                            con un catálogo de libros considerable de diferentes 
                            géneros y autores, donde los usuarios puede escoger 
                            los libros de su interés para solicitar su préstamo. 
                            El administrador de la página BOOKBOX puede agregar 
                            nuevos libros disponibles o editar y borrar 
                            los libros existentes en el catálogo de acuerdo a la demanda
                            de los mismo.
                        </p>
                    </section>
                </div>
            </div>
        </footer>
    )
}
