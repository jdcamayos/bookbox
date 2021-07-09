import React from 'react'
import { DEFAULT_USER_CONTEXT } from '../contexts/UserContext'

function useUserContext() {
    const [ context, setContext ] = React.useState(DEFAULT_USER_CONTEXT.context)

    const update = React.useCallback((context) => {
        setContext(context)
    }, [])

    return {
        context,
        update
    }
}

export default useUserContext