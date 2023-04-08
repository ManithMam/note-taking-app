import express from "express"
import NoteController from "../Controller/NoteController.js"

const noteRouter = express.Router()

noteRouter.get('/notes', async (req, res, next) => {   
    try{
       const notes = await NoteController.getNotes()       
       res.json(notes).status(200)       
   }
   catch(err){
       next(err)
   } 
})

noteRouter.get('/', (req, res, next) => {
    try{
        throw new Error('Sth went wrong')
    }
    catch(err){
        next(err)
    }
})

noteRouter.post('/notes', async (req, res, next) => {
    try{
        const noteContent: string = req.body.content
        await NoteController.createNote(noteContent)
        const newNotes = await NoteController.getNotes()   
        res.json(newNotes).status(200)
    }
    catch(err){
        next(err)
    }       
})

noteRouter.delete('/notes/:id', async (req, res, next) => {
    try{
        const noteId: string = req.params.id     
        await NoteController.deleteNote(noteId)  
        const remainingNotes = await NoteController.getNotes()    
        res.json(remainingNotes).status(200)
    }
    catch(err){
        next(err)
    }
})

export {noteRouter}