import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminBooks from 'components/admin/books/AdminBooks'
import AdminMenu from 'components/admin/AdminMenu'
import AdminUsers from 'components/admin/users/AdminUsers'
import Layout from 'components/layout/Layout'
// import AdminPage from 'pages/AdminPage'
import Books from 'pages/Books'
import Home from 'pages/Home'
import MyBooks from 'pages/MyBooks'
import NotFound from 'pages/NotFound'
import UserProfile from 'pages/UserProfile'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'
// import Test from 'pages/Test'

export default function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    {/* <Route exact path='/' component={Test} /> */}
                    <Route exact path='/home' component={Home} />
                    <PrivateRoute exact path='/books' component={Books} />
                    <PrivateRoute exact path='/my-books' component={MyBooks} />
                    <PrivateRoute exact path='/profile' component={UserProfile} />
                    <AdminRoute exact path='/admin' component={AdminMenu} />
                    <AdminRoute exact path='/admin/users' component={AdminUsers} />
                    {/* <AdminRoute exact path='/admin/books' component={AdminBooks} /> */}
                    <Route exact path='/admin/books' component={AdminBooks} />
                    <PrivateRoute component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}
