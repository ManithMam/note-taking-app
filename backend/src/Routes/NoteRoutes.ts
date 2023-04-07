import express from "express"
import NoteController from "../Controller/Note/NoteController.js"

const noteRouter = express.Router()

noteRouter.get('/notes', async (req, res) => {   
    try{
       const notes = await NoteController.getNotes()       
       res.json(notes).status(200)       
   }
   catch(err){
       res.status(500).send('Internal Server Error')
   } 
})

noteRouter.post('/notes', (req, res) => {
    try{
        const noteContent: string = req.body.content
        const newNote = NoteController.createNote(noteContent)
        res.json(newNote).status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }       
})

noteRouter.delete('/notes/:id', async (req, res) => {
    try{
        const noteId: string = req.params.id     
        await NoteController.deleteNote(noteId)  
        const remainingNotes = await NoteController.getNotes()    
        res.json(remainingNotes).status(200)
    }
    catch(err){
        res.status(500).send('Internal Server Error')
    }
})

export {noteRouter}