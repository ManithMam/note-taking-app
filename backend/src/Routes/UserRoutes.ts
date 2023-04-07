import express from "express"
import UserController from "../Controller/User/UserController.js"
import User from "../Model/User.js"

const userRouter = express.Router()

userRouter.post('/users', async (req, res) => {
    try{
        const username: string = req.body.username
        const password: string = req.body.password
        const newUser = UserController.createUser(username, password)
        res.json(newUser).status(200)
    }
    catch(err){

    }
})

userRouter.get('/users/:username', async (req, res, next) => {
    try{
        const username: string = req.params.username
        const user = await User.find({username: username})
        res.send(user).status(200)
    }
    catch(err){
        next(err)
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

/* userRouter.patch('/users/deleteNote', async(req, res) => {
    try{
        const noteId: string = req.body.noteId
        const username: string = req.body.username

        UserController.deleteUserNote(noteId, username)
        res.send("deleted note").status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }
}) */

export {userRouter}