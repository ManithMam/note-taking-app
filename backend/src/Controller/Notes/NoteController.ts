import Note, { note } from "../../Model/Note.js";
import UserController from "../User/UserController.js";

async function createNote(contentInput: string){
    try{
        const note = new Note({
            content: contentInput
        })        
        note.save()        
        console.log(note)
    }
    catch(err){
        console.log('error couldnt create')
    }        
}

async function createNoteForUser(noteContent: string, username: string){
    try{
        const note = new Note({
            content: noteContent
        }) 
        const user = await UserController.getUser(username)
        await user.notes.push(note)
    }
    catch(err){
        console.log("Couldnt add note")
    }
}

async function deleteNote(_id: string){
    try{
        await Note.findByIdAndDelete(_id)
    }
    catch(err){
        console.log('couldnt delete')
    }       
}

 function getNotes(){
    const note = Note.find({})
    return note
}

export default {getNotes, createNote, deleteNote, createNoteForUser}
