import  express  from "express";
import mongoose from "mongoose";
import { userRouter } from "./Routes/UserRoutes.js";
import { noteRouter } from "./Routes/NoteRoutes.js";
import cors from 'cors'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

let db = null
const url = `mongodb://127.0.0.1:27017/NoteTakingApp`
mongoose.connect(url)
.then(() => {
    console.log('Connecting to database NoteTakingApp...')    
})

app.use(noteRouter)
app.listen(8080)
console.log('Server listening on Port 3000')





