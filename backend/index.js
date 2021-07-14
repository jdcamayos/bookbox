const express = require('express')
const app = express()

const { config } = require('./config/index')

// Importing Routes
const booksApi = require('./routes/books.routes')

// Body parser
app.use(express.json())

// Routes
booksApi(app)

app.listen(config.port, function () {
    console.log(`Server listening on http://localhost:${config.port}`)
})
