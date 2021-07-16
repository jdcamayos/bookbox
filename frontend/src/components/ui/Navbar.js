import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import routes from '../../routes/routes'
import BookBoxLogo500 from '../../assets/images/bookbox_L500.png'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
// import { AuthContext } from '../../auth/AuthContext'
// import { types } from '../../types/types';

export const Navbar = () => {
    const {
        user: { name },
        dispatch,
    } = useContext(AuthContext)

    const history = useHistory()

    const handleLogout = () => {
        history.replace('/login')

        dispatch({
            type: types.logout,
        })
    }

    return (
        <header className="bg-dark">
            {/* <nav className="navbar navbar-expand-sm navbar-dark container"> */}
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={BookBoxLogo500}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-10"
                        alt=""
                    />
                    BookBox
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <div className="d-flex justify-content-between">
                        <div className="navbar-nav">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={routes.home}
                            >
                                Inicio
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={routes.books}
                            >
                                Libros
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={routes.searchBooks}
                            >
                                Buscar
                            </NavLink>
                        </div>
                        <div className="navbar-nav">
                            <ul className="navbar-nav text-right">
                                <span className="nav-item nav-link text-info font-weight-bold text-capitalize">
                                    {name}
                                </span>

                                <button
                                    className="nav-item nav-link btn"
                                    onClick={handleLogout}
                                >
                                    Cerrar sesión
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
