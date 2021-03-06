const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB  = require('./config/db.js')
const port = process.env.PORT || 5000

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use('/api/users', require('./routes/userRoutes.js'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})