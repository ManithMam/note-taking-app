import Note from "../../Model/Note.js";
import User from "../../Model/User.js";

async function createUser(newUsername: string, newPassword: string){
    try{        
        const newUser = new User({
            username: newUsername,
            password: newPassword
        })
        newUser.save()        
    }
    catch(err){
        console.log("couldnt create new user")
    }
}

async function getUser(toFindUsername: string){
    try{
        const user = await User.findOne({username: toFindUsername}).exec()
        return user
    }
    catch(err){
        console.log("Couldnt find user")
    }
}

async function createNoteForUser(noteContent: string, username: string){
    try{
        const note = new Note({
            content: noteContent
        }) 
        const user = await getUser(username)
        await user.notes.push(note)
        user.save()
    }
    catch(err){
        console.log("Couldnt add note")
    }
}

async function deleteUserNote(noteId: string, username: string){
    try{
        const user = await getUser(username)
        const index = user.notes.findIndex((note) => note._id === noteId)
        user.notes.splice(index, 1)
        user.save()
    }
    catch(err){
        console.log("Couldnt delete note")
    }
}

export default {createUser, getUser, createNoteForUser, deleteUserNote}
