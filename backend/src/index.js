const express = require('express')
const app = express()

const { config } = require('./config/index')

// Importing Middlewares
const morgan = require('morgan')
const cors = require('cors')
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandler')

// Importing Routes
const booksApi = require('./routes/books.routes')
const authApi = require('./routes/auth.routes')
const usersApi = require('./routes/users.routes')

// Body parser
app.use(express.json())

// Morgan 
app.use(morgan('dev'))

// CORS
app.user(cors())

// Routes
authApi(app)
usersApi(app)
booksApi(app)


// Errors Middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function () {
    console.log(`Server listening on http://localhost:${config.port}`)
})
