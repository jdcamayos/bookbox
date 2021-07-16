import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import routes from '../../routes/routes'
import BookBoxLogo500 from '../../assets/images/bookbox_L500.png'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
// import { AuthContext } from '../../auth/AuthContext'
// import { types } from '../../types/types';

export const Navbar = () => {

    const { user: {name}, dispatch } = useContext(AuthContext);

    const history =  useHistory();

    const handleLogout = () => {

        history.replace('/login')

        dispatch ({
            type: types.logout
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                <img src={BookBoxLogo500} width="30" height="30" className="d-inline-block align-top" alt="" />
                BookBOx
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to={routes.home}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to={routes.books}
                    >
                        Books
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to={routes.searchBooks}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                    onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}