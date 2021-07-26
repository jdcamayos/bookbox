import { Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBar({ collapse, handleLogout, user }) {
    return (
        <div className={`collapse navbar-collapse ${collapse ? 'show' : ''}`}>
            {/* Content navbar collapse */}
            <div className='container'>
                <div className='row '>
                    <div className='col-12 col-lg-6 d-flex justify-content-start align-items-center'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item me-3'>
                                <NavLink
                                    to='/home'
                                    className='nav-link'
                                    activeClassName='active'
                                >
                                    Inicio
                                </NavLink>
                            </li>

                            <li className='nav-item me-3'>
                                <NavLink
                                    to='/books'
                                    className='nav-link'
                                    activeClassName='active'
                                >
                                    Libros
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-end align-items-center'>
                        <ul className='navbar-nav  mb-2 mb-lg-0'>
                            <li className='nav-item me-5'>
                                <NavLink
                                    to='/my-books'
                                    className='nav-link'
                                    activeClassName='active'
                                >
                                    Mis Libros
                                </NavLink>
                            </li>
                        </ul>
                        <Dropdown>
                            <Dropdown.Toggle variant='dark'>
                                <span className='me-3'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        fill='currentColor'
                                        className='bi bi-person-circle'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                                        <path
                                            fillRule='evenodd'
                                            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                                        />
                                    </svg>
                                </span>
                                {`${user.firstName} ${user.lastName}`}
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                className='bg-dark text-light'
                                variant='dark'
                            >
                                <NavLink
                                    to='/profile'
                                    className='dropdown-item text-white'
                                    activeClassName='bg-warning color-dark'
                                >
                                    Mi perfil
                                </NavLink>
                                {user.isAdmin ? (
                                    <NavLink
                                        to='/admin'
                                        className='dropdown-item text-white'
                                        activeClassName='bg-warning color-dark'
                                    >
                                        Administrador
                                    </NavLink>
                                ) : null}
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>
                                    Cerrar sesión
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}
