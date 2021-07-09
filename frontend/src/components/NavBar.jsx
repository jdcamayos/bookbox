import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { NavDropdown } from 'react-bootstrap'

import routes from '../routes/routes'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to={routes.home}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={routes.login}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={routes.register}>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={routes.books}>Books</Link>
                    </li>
                    <NavDropdown title="Usuario">
                        <NavDropdown.Item eventKey="1.1">
                            <Link to={routes.user.myBooks}>Mis Libros</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="1.2">
                            <Link to={routes.user.updateProfile}>Mi perfil</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Administrador">
                        <NavDropdown.Item eventKey="2.1">
                            <Link to={routes.admin.users}>Usuarios</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="2.2">
                            <Link to={routes.admin.createBook}>Crear Libro</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.3">
                            <Link to={routes.admin.updateBook}>Actualizar Libro</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.4">
                            <Link to={routes.admin.deleteBook}>Eliminar Libro</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="2.5">
                            <Link to={routes.user.updateProfile}>Mi perfil</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </nav>
        )
    }
}

export default NavBar
