import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Importing routes
import routes from './routes'

// Importing components
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../components/Layout'
import Book from '../pages/Book'
import Books from '../pages/Books'
import MyBooks from '../pages/MyBooks'
import MyProfile from '../pages/MyProfile'
import AdminUsers from '../pages/AdminUsers'
import AdminBooks from '../pages/AdminBooks'



function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.login} component={Login} />
          <Route exact path={routes.register} component={Register} />
          <Route exact path={routes.books} component={Books} />
          <Route exact path={routes.book} component={Book} />
          <Route exact path={routes.user.myBooks} component={MyBooks} />
          <Route exact path={routes.user.updateProfile} component={MyProfile} />
          <Route exact path={routes.admin.users} component={AdminUsers} />
          <Route exact path={routes.admin.user} component={AdminUsers} />
          <Route exact path={routes.admin.updateUser} component={AdminUsers} />
          <Route exact path={routes.admin.createBook} component={AdminBooks} />
          <Route exact path={routes.admin.updateBook} component={AdminBooks} />
          <Route exact path={routes.admin.deleteBook} component={AdminBooks} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
