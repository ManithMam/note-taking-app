import  express  from "express";
import mongoose from "mongoose";
import { userRouter } from "./Routes/UserRoutes.js";

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

let db = null
const url = `mongodb://127.0.0.1:27017/NoteTakingApp`
mongoose.connect(url)
.then(() => {
    console.log('Connecting to database NoteTakingApp...')    
})


app.use(userRouter)
app.listen(3000)
console.log('Server listening on Port 3000')





