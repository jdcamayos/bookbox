import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import useToken from 'hooks/useToken'

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    useToken()
    return (
        <Route
            {...rest}
            render={props =>
                auth.token ? (
                    <Component {...rest} />
                ) : (
                    <Redirect push to='/home' />
                )
            }
        />
    )
}

export default PrivateRoute
