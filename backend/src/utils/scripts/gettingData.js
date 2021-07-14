// This script fetching data from OpenLibra Public API
const axios = require('axios')
const fs = require('fs')

const URL = 'https://www.etnassoft.com/api/v1/get'
const GET_BOOKS_CATEGORY = '/?get_categories=all'
const GET_BOOKS_BY_CATEGORY = '/?category='
const BOOKS_LENGTH = 'num_items=' + 10

// function get 10 books per categorie and makes a booksMock.json
async function main() {
    const { data: categories } = await axios.get(`${URL}${GET_BOOKS_CATEGORY}`)
    let booksMock = []
    await Promise.all(
        categories.map(async category => {
            const { data: books } = await axios.get(
                `${URL}${GET_BOOKS_BY_CATEGORY}${category.nicename}&${BOOKS_LENGTH}`
            )
            const myBooks = books.map(book => {
                let myBook = {
                    title: book.title,
                    author: book.author,
                    description: book.content_short,
                    date: Number(book.publisher_date),
                    cover: book.cover,
                    tags: book.tags.map(tag => tag.nicename),
                }
                booksMock.push(myBook) 
            })
            console.log(myBooks.length, `books added of ${category.nicename}`)
        })
    )
    console.log('BookMock with ',booksMock.length, 'books')
    await fs.promises.writeFile(
        './src/utils/mocks/bookMock.json',
        JSON.stringify(booksMock)
    )
    console.log('File saved succesfully')
}

main()

// const book = {
//     _id: 'dfañlskjfalsjdf',
//     title: title,
//     author: author,
//     content_short: description,
//     publisher_date: date,
//     cover: cover,
//     tags: tags.map(tag => tag.nicename)
// }
