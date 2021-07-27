import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    }
}

function PrivateRoute({ component: Component, auth, ...rest }) {
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

export default connect(mapStateToProps, null)(PrivateRoute)


