import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../pages/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import routes from './routes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={routes.login} component={LoginScreen} />
                    {/* <Route exact path={routes.register} component={Register} /> */}
                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}
