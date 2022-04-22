/**
 * ----------------------------
 * for server side requirements
 * ----------------------------
 * 1. create folder and then write command npm init.
 * 2. create file in the folder> index.js
 * 3. then npm i express cors mongodb dotenv
 * 
 * ----------------------------
 *  In index.js file
 * ----------------------------
 * 1. require express from express
 * 2. require cors from cors.
 * 3. require dotenv.
 * 4. create app const
 * 5. create a root get call 
 * 6. create a port.
 * 7. app.listening
 * 
 * ==============================
 * Middleware
 * ==============================
 * 1. app.use(cors())
 * 2. app.use(express/json())
 * 
 * =========================
 * 1. add script in package.json file ("start": "node index.js")
 * ("start-dev": "nodemon index.js");
 * =========================
 * 
 * ===========================
 * connect mongodb to server
 * ===========================
 * 1. create a database in mongodb.
 * 2. you can use same cluster or add new cluster.
 * 3. in the same cluster you need to create new database.
 * 4. in the database you can insert document from local json file
 * 5. now time to connect your database to the server.
 * 6. go to database connect and copy the connect code from there.
 * 7. and then paste the code in server code.
 * 8. 
 * 
 */