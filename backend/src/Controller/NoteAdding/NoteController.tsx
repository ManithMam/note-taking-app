import express from "express";
import Note from "../../Model/Note.js";

export async function createNote(contentInput: String){
    try{
        const note = await Note.create({content: contentInput})
        console.log(note)
    }
    catch(err){
        console.log('error couldnt create')
    }        
}

export async function deleteNote(noteId: String){
    try{
        const note = await Note.findById({noteId})
        note.deleteOne()
    }
    catch(err){
        console.log('couldnt delete')
    }   
    
}