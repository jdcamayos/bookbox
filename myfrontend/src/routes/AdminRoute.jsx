import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth,
        user: state.user
    }
}

function AdminRoute({ component: Component, auth, user, ...rest }) {
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

export default connect(mapStateToProps, null)(AdminRoute)


