import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { LoginScreen } from '../pages/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import routes from './routes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={routes.login} component={LoginScreen} />
                    {/* <Route exact path={routes.register} component={Register} /> */}
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
