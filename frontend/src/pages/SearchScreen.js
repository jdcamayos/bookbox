import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../hooks/useForm';

import { BooksCard } from '../components/books/BooksCard';
import { getBooksByName } from '../selectors/getBooksByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;

    const booksFiltered = useMemo(() => getBooksByName(q), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(formValues)
        history.push(`?q=${searchText}`);
    }

    return (
        <div style={{ height: '90vh' }}>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your book"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a book
                        </div>
                    }

                    {
                        (q !== '' && booksFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a book with {q}
                        </div>
                    }

                    {
                        booksFiltered.map(book => (
                            <BooksCard
                                key={book.id}
                                {...book}
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
