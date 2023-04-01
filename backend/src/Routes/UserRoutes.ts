import express from "express"
import UserController, {default as userController} from "../Controller/User/UserController.js"
import User from "../Model/User.js"

const userRouter = express.Router()

userRouter.post('/users', async (req, res) => {
    try{
        const username: string = req.body.username
        const password: string = req.body.password
        const newUser = userController.createUser(username, password)
        res.json(newUser).status(200)
    }
    catch(err){

    }
})

userRouter.patch('/users', async (req, res) => {
    try{
        const noteContent: string = req.body.noteContent
        const username: string = req.body.username
        
        UserController.createNoteForUser(noteContent, username) 
        res.send(noteContent).status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }
})

userRouter.patch('/users/deleteNote', async(req, res) => {
    try{
        const noteId = req.body.noteId
        const username = req.body.username

        UserController.deleteUserNote(noteId, username)
        res.send("deleted note").status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }
})

export {userRouter}