import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';

import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

import { HomeScreen } from '../pages/home/HomeScreen';
import { BooksScreen } from '../pages/books/BooksScreen';
import { SearchScreen } from '../pages/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path={routes.home} component={HomeScreen} />
                    <Route exact path={routes.books} component={BooksScreen} />
                    <Route exact path={routes.searchBooks} component={SearchScreen} />
                    {/* <Route exact path={routes.book} component={Book} /> */}
                    {/* <Route exact path={routes.user.myBooks} component={MyBooks} /> */}
                    {/* <Route exact path={routes.user.updateProfile} component={MyProfile} /> */}
                    {/* <Route exact path={routes.admin.users} component={AdminUsers} />
                        <Route exact path={routes.admin.user} component={AdminUsers} />
                        <Route exact path={routes.admin.updateUser} component={AdminUsers} />
                        <Route exact path={routes.admin.createBook} component={AdminBooks} />
                        <Route exact path={routes.admin.updateBook} component={AdminBooks} />
                        <Route exact path={routes.admin.deleteBook} component={AdminBooks} /> */}

                    <Redirect to={routes.home} />
                </Switch>
            </div>

            <Footer />

        </>
    )
}
