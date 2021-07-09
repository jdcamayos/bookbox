const routes = {
    // Public Routes
    "home": "/",
    "login": "/login",
    "register": "/register",
    // Logged Routes
    "books": "/books",
    "book": "/book/:id",
    // User Routes
    "user": {
        "myBooks": "/user/:id/",
        "updateProfile": "/user/update/:id",
    },
    // Admin Routes
    "admin": {
        // Admin Users
        "users": "/admin/users/",
        "user": "/admin/user/:id",
        "updateUser": "/admin/user/update/:id",
        // Admin Books
        "createBook": "/admin/book/create/",
        "updateBook": "/admin/book/update/:id",
        "deleteBook": "/admin/book/delete/:id",
    },
}

// https://www.youtube.com/watch?v=1O496C-79Pg

export default routes