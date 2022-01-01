const express = require('express')
const mydb = require('./mongodb/mongo')
const moviesRouter = require('./routes/movies')
require('dotenv').config();
// CORS For fixing Policy issue : 
// TODO :  needs to be more restricted for production
var cors = require('cors')
const app = express()
const port = process.env.PORT
// This is to make sure the app accepts JSON requests 
app.use(cors())
app.use(express.json())
// MongoDB connexion()
mydb.connexion()
// Routes: 
app.use('/api/movies', moviesRouter)
// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})