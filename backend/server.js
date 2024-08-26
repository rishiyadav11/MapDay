const express = require('express')
const app = express()
const connectDb = require("./config/db")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser');
const authRouter =require("./routes/auth-routes")
const videoRouter = require("./routes/video-routes")
const cors = require("cors")




require('dotenv').config()



const port = process.env.PORT || 5000
connectDb()
const corsOptions = {
    origin: process.env.FRONTEND_URL, // Correct origin without trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  };
  app.use(cors(corsOptions));
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
app.use('/api/video', videoRouter)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`listening at http://localhost:${port}`))




