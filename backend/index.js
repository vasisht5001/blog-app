import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'

import userRoute from './routes/user.route.js'
import blogRoute from './routes/blog.route.js'

import cors from 'cors'

import { v2 as cloudinary } from 'cloudinary';

const app = express()
dotenv.config()
const port = process.env.PORT

const MONGO_URL=process.env.MONGO_URI

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
  methods:["GET","POST","PUT","DELETE"],
}))

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:"/tmp/",
}))


// DB code

try {
    mongoose.connect(MONGO_URL)
    console.log('connected to mongodb');
    
} catch (error) {
    console.log(error);
    
}

//defining routes
app.use('/api/users',userRoute)
app.use('/api/blogs',blogRoute)

// cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY // Click 'View API Keys' above to copy your API secret
});



app.listen(port, () => {
  console.log(`server is running  on port ${port}`)
})