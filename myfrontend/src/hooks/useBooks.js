import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBooks } from 'actions'
import BooksApi from 'services/books.service'

function useBooks() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)

    const fetchBooks = async () => {
        const booksApi = new BooksApi()
        const res = await booksApi.getBooks()
        console.log(res.message)
        if (res.data) {
            dispatch(getBooks(res.data))
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchBooks()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return { books, loading }
}

export default useBooks
