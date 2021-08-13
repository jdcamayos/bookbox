import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import useToken from 'hooks/useToken'

function AdminRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    useToken()
    return (
        <Route
            {...rest}
            render={props =>
                auth.token && user.isAdmin  ? (
                    <Component {...rest} />
                ) : (
                    <Redirect push to='/home' />
                )
            }
        />
    )
}

export default AdminRoute


