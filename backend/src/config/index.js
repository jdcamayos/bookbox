require('dotenv').config()

const dev = !(process.env.NODE_ENV === 'production')
console.log(`Running in ${dev ? 'Development' : 'Production'} mode`)

const config = {
    dev,
    port: dev 
    ? process.env.DEV_PORT || 4000
    : process.env.PORT,
    cors: dev
    ? process.env.DEV_CORS
    : process.env.CORS,
    dbUser: dev
    ? process.env.DEV_DB_USER
    : process.env.DB_USER,
    dbPassword: dev
    ? process.env.DEV_DB_PASSWORD
    : process.env.DB_PASSWORD,
    dbHost: dev
    ? process.env.DEV_DB_HOST
    : process.env.DB_HOST,
    dbName: dev
    ? process.env.DEV_DB_NAME
    : process.env.DB_NAME,
    defaultAdminPassword: dev
    ? process.env.DEV_DEFAULT_ADMIN_PASSWORD
    : process.env.DEFAULT_ADMIN_PASSWORD,
    defaultUserPassword: dev
    ? process.env.DEV_DEFAULT_USER_PASSWORD
    : process.env.DEFAULT_USER_PASSWORD,
    authJwtSecret: dev
    ? process.env.DEV_AUTH_JWT_SECRET
    : process.env.AUTH_JWT_SECRET,
    publicApiKeyToken: dev
    ? process.env.DEV_PUBLIC_API_KEY_TOKEN
    : process.env.PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: dev
    ? process.env.DEV_ADMIN_API_KEY_TOKEN
    : process.env.ADMIN_API_KEY_TOKEN,
}

module.exports = { config }
