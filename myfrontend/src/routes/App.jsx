import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import AdminBooks from 'components/admin/books/AdminBooks'
import AdminMenu from 'components/admin/AdminMenu'
import AdminUsers from 'components/admin/users/AdminUsers'
import Layout from 'components/layout/Layout'
// Pages
import Books from 'pages/Books'
import Home from 'pages/Home'
import MyBooks from 'pages/MyBooks'
import NotFound from 'pages/NotFound'
import UserProfile from 'pages/UserProfile'
// Routes
import AdminRoute from 'routes/AdminRoute'
import PrivateRoute from 'routes/PrivateRoute'

import { useEffect } from 'react'
import { loginRequest } from 'actions'
import AuthApi from 'services/auth.service'

const mapDispatchToProps = {
    loginRequest,
}

function App(props) {
    const reloadSession = async () => {
        if (window.localStorage.getItem('tokenSession')) {
            const authApi = new AuthApi()
            const data = await authApi.verifyToken()
            if (data.token && data.user) {
                props.loginRequest(data)
                // history.push('/profile')
                window.localStorage.setItem('tokenSession', data.token)
            }
        }
    }

    useEffect(() => {
        reloadSession()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <PrivateRoute exact path='/books' component={Books} />
                    <PrivateRoute exact path='/my-books' component={MyBooks} />
                    <PrivateRoute
                        exact
                        path='/profile'
                        component={UserProfile}
                    />
                    <AdminRoute exact path='/admin' component={AdminMenu} />
                    <AdminRoute
                        exact
                        path='/admin/users'
                        component={AdminUsers}
                    />
                    <Route exact path='/admin/books' component={AdminBooks} />
                    <PrivateRoute component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default connect(null, mapDispatchToProps)(App)
