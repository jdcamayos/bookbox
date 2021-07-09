import React from 'react'

export const USER_ROLE_ADMIN = 'ADMIN'
export const USER_ROLE_USER = 'USER'

export const DEFAULT_USER_CONTEXT = {
    context: {
        id: -1,
        names: '',
        identification: -1,
        logged: false,
        user: '',
        role: '',
        // logged: true,
        // user: 'Test',
        // role: 'USER_ROLE_ADMIN',

    },
    update: ({
        id,
        names,
        identification,
        logged,
        user,
        role
    }) => {}
}

const UserContext = React.createContext(DEFAULT_USER_CONTEXT)

export default UserContext