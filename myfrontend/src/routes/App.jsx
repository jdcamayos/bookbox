import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Books from '../pages/Books'
import Home from '../pages/Home'
import MyBooks from '../pages/MyBooks'
import NotFound from '../pages/NotFound'
import UserProfile from '../pages/UserProfile'

export default function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/books' component={Books} />
                    <Route exact path='/my-books' component={MyBooks} />
                    <Route exact path='/profile' component={UserProfile} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}
