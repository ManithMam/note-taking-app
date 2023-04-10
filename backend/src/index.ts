import  express  from "express";
import mongoose from "mongoose";
import { noteRouter } from "./Routes/NoteRoutes.js";
import cors from 'cors'
import { errorHandling } from "./Middleware/ErrorHandler.js";

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const url = `mongodb://127.0.0.1:27017/NoteTakingApp`
mongoose.connect(url)
.then(() => {
    console.log('Connecting to database NoteTakingApp...')    
})


app.use(noteRouter)

app.use(errorHandling)

app.listen(8080)
console.log('Server listening on Port 3000')





