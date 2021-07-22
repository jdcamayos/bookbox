import { useState } from 'react'

import LogoBookBoxL500 from '../../assets/bookbox_L500.png'
import NavBar from './NavBar'

export default function Header() {
    const [collapse, setCollapse] = useState(false)
    const [auth, setAuth] = useState(false) // For dev
    return (
        <header
            className="container-fluid bg-warning"
            style={{ minHeight: '60px' }}
        >
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container">
                    <span className="navbar-brand d-flex justify-content-center align-items-center">
                        <img
                            onClick={() => setAuth(!auth)} //For dev
                            className="mx-3"
                            src={LogoBookBoxL500}
                            alt="Logo BookBox"
                            width="50px"
                            height="50px"
                        />
                        <h3 className="h3">
                            <strong>BookBox</strong>
                        </h3>
                    </span>
                    {auth ? (
                        <>
                            <button
                                className={`navbar-toggler ${
                                    collapse ? 'collapsed' : ''
                                }`}
                                type="button"
                                aria-expanded={collapse}
                                onClick={() => setCollapse(!collapse)}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <NavBar isAdmin={false} collapse={collapse} />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </nav>
        </header>
    )
}
