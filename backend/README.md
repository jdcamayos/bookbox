# Descripción
Aplicación de tienda de libros desarrollada como proyecto para MisiónTic 2022 - Ciclo 4 - Desarrollo Web

# Frontend

# Base de datos

## Tabla "users"

Guarda informacion basica del usuario

    Columna     Tipo        Formato         Longitud
    _id         String      0-9A-Fa-f       24
    name        String                      100
    email       String      
    password    String
    isAdmin     Boolean

## Tabla "books"

Guarda informacion de libros 

    Columna     Tipo
    _id         String
    title       String
    description String

## Tabla "userBooks

Guarda información de libros obtenidos por un usuario

    Columna     Tipo
    _id         String
    userId      String
    bookId      String

# Backend

Pasos para crear un backend
- Configuración del proyecto Nodejs
  - Inicializar un proyecto Nodejs
        
        npm init -y

        {
            "name": "backend",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "",
            "license": "ISC"
        }

  - Instalar dependencias 
    
        yarn add express

    Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. 
    
    https://expressjs.com/es/

  - Instalar dependencias de desarrollo
        
        yarn add -D nodemon
    
    Nodemon es una libreria que nos permite reiniciar la ejecución del proyecto al detectar un cambio en sus archivos.

    https://nodemon.io/

  - Configurar variables de entorno

        yarn add dotenv

    Dotenv es un modulo que permite cargar variables de entorno desde un archivo .env al proces.env., permitiendo configurar las variables de entorno de nuestra aplicación de forma facil independientemente del sistema operativo.

    Se crea el archivo *.env* y *.env.example*, en donde .env es el archivo con la información de las variables de entorno y .env.example es el archivo con la misma estructura del .env pero sin valores, para que sirva de referencia para cualquier otra persona que vea el proyecto.

  - Crear configuración de prettier
    
    Se crea el archivo .prettierrc.json con la configuración del proyecto

        {
            "tabWidth": 4,
            "semi": false,
            "singleQuote": true,
            "arrowParens": "avoid"
        }

  - Crear scripts para modo desarrollo y producción

        "scripts": {
          "dev": "DEBUG=app:* nodemon --exec node index.js",
          "start": "NODE_ENV=production node index.js"
        }

    *start:* se encarga de correr el servidor en modo producción.

    *dev:* se encarga de correr el servidor en modo desarrollo con nodemon.

- Creación de servidor con Express
  - Instanciar express
  - Configurar puerto de servidor
  - Configuración de middlewares
- Creación de Rutas
  - Creación de rutas para CRUD de usuarios
  - Creación de rutas para CRUD de libros
  - Creación de rutas para autenticación de usuarios
- Configuracion de Librerias
  - Configuracion de MongoDB
  
    yarn add mongodb

  Se instala la libreria mongodb, la cual contiene el driver oficial para manejar bases de datos Mongo con Nodejs

  https://docs.mongodb.com/drivers/node/current/

    - Crear configuración para desarrollo y producción
  
  Se crea el archivo mongo.js con la configuración de la libreria
  
    - Creacion de modelos de consultas
- Creación de Modelos
- Creación de Servicios
- Creación de Middlewares
- Protección de Rutas
