import Note from "../Model/Note.js"
import express from "express"
import {default as noteController} from "../Controller/Notes/NoteController.js"


const noteRouter = express.Router()

noteRouter.get('/notes', async (req, res) => {   
    try{
       const notes = await Note.find({})
       console.log(notes)
       res.json(notes).status(200)       
   }
   catch(err){
       res.status(500).send('Internal Server Error')
   } 
})

noteRouter.post('/notes/add', (req, res) => {
    try{
        const noteContent: string = req.body.content
        const newNote = noteController.createNote(noteContent)
        res.json(newNote).status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }       
})

noteRouter.delete('/notes', async (req, res) => {
    try{
        const noteId: string = req.body.id
        const deletedNote = await noteController.deleteNote(noteId)
        res.json(deletedNote).status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }
})

export {noteRouter}




