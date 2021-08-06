import { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logoutRequest } from 'actions'

import NavBar from './NavBar'
import LogoBookBoxL500 from 'assets/bookbox_L500.png'

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = {
    logoutRequest,
}

function Header(props) {
    const { user } = props
    const history = useHistory()
    // const hasUser = Object.keys(user).length > 0
    const hasUser = user?._id
    // const isAdmin = Object.keys(user).isAdmin
    const [collapse, setCollapse] = useState(false)
    const handleLogout = () => {
        props.logoutRequest({})
        window.localStorage.removeItem('tokenSession')
        window.localStorage.removeItem('userSession')
        history.push('/home')
    }
    return (
        <header
            className='container-fluid bg-warning'
            style={{ minHeight: '60px' }}
        >
            <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
                <div className='container'>
                    <Link
                        className='navbar-brand d-flex justify-content-center align-items-center'
                        to={'/home'}
                    >
                        <img
                            className='mx-3'
                            src={LogoBookBoxL500}
                            alt='Logo BookBox'
                            width='50px'
                            height='50px'
                        />
                        <h3 className='h3'>
                            <strong>BookBox</strong>
                        </h3>
                    </Link>
                    {hasUser ? (
                        <>
                            <button
                                className={`navbar-toggler ${
                                    collapse ? 'collapsed' : ''
                                }`}
                                type='button'
                                aria-expanded={collapse}
                                onClick={() => setCollapse(!collapse)}
                            >
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <NavBar
                                collapse={collapse}
                                handleLogout={handleLogout}
                                user={user}
                                {...props}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
