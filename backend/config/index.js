require('dotenv').config()

const enviroment = process.env.NODE_ENV === 'production'

const config = {
    dev: process.env.NODE_ENV === 'production',
    port: enviroment 
        ? process.env.PORT
        : process.env.DEV_PORT || 4000,
    cors: enviroment
        ? process.env.CORS
        : process.env.DEV_CORS,
    dbUser: enviroment
        ? process.env.DB_USER
        : process.env.DEV_DB_USER,
    dbPassword: enviroment
        ? process.env.DB_PASSWORD
        : process.env.DEV_DB_PASSWORD,
    dbHost: enviroment
        ? process.env.DB_HOST
        : process.env.DEV_DB_HOST,
    dbName: enviroment
        ? process.env.DB_NAME
        : process.env.DEV_DB_NAME,
    defaultAdminPassword: enviroment
        ? process.env.DEFAULT_ADMIN_PASSWORD
        : process.env.DEV_DEFAULT_ADMIN_PASSWORD,
    defaultUserPassword: enviroment
        ? process.env.DEFAULT_USER_PASSWORD
        : process.env.DEV_DEFAULT_USER_PASSWORD,
    authJwtSecret: enviroment
        ? process.env.AUTH_JWT_SECRET
        : process.env.DEV_AUTH_JWT_SECRET,
    publicApiKeyToken: enviroment
        ? process.env.PUBLIC_API_KEY_TOKEN
        : process.env.DEV_PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: enviroment
        ? process.env.ADMIN_API_KEY_TOKEN
        : process.env.DEV_ADMIN_API_KEY_TOKEN,
}

module.exports = { config }
