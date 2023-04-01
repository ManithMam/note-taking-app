import express from "express"
import UserController, {default as userController} from "../Controller/User/UserController.js"

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

export {userRouter}