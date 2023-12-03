const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { errorHandler } = require('./middleware/Error')
const connectDB = require('./config/db')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
connectDB()

app.use(express.urlencoded({extended:true}))
app.use(errorHandler)
app.listen(PORT,() => {console.log(`Server Started On http://localhost:${PORT}`)})
app.use(express.static('uploads'))
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/Auth.routes'))
app.use('/api/client',require('./routes/Client.routes'))
app.use('/api/admin',require('./routes/Admin.routes'))
app.use('/api/lawyer',require('./routes/Lawyer.routes'))
app.use('/api/community',require('./routes/CommunityConnect.routes'))
app.use('/api/websiteContent',require('./routes/WebsiteContent.routes'))