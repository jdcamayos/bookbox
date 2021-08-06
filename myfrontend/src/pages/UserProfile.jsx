import { connect } from 'react-redux'

import HeaderPage from 'components/misc/HeaderPage'
import BooksContainer from 'components/books/BooksContainer'
import UserBooksContainer from 'components/books/UserBooksContainer'

const mapStateToProp = state => {
    return {
        user: state.user,
    }
}

function UserProfile(props) {
    const { user } = props

    return (
        <main className='container'>
            <HeaderPage
                title={`Bienvenido,
                ${user?.firstName ? `${user.firstName} ${user.lastName}` : ''}`}
            />
            <div>
                <h2>Mis Libros</h2>
                <UserBooksContainer />
            </div>
            <div>
                <h2>Todos los libros</h2>
                <BooksContainer />
            </div>
        </main>
    )
}

export default connect(mapStateToProp, null)(UserProfile)
