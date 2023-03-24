import express from "express"
import mongoose from "mongoose"
import Note from "../Model/Note.js"
import { createNote } from "../Controller/Notes/NoteController.js"

const app = express()

app.get('/api/notes', async(req, res) => {
    const notes = await Note.find()
    res.send(notes).status(400)
    console.log("worked")
})

app.post('/api/note', async(req, res) => {
    const noteContent : string = req.body.content
    createNote(noteContent)
    res.send("Note created").status(400)
})