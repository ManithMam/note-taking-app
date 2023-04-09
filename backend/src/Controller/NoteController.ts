import Note  from "../Model/Note.js";

async function createNote(contentInput: string){
    try{
        const note = new Note({
            content: contentInput
        })        
        note.save()               
    }
    catch(err){
        console.error(err)
    }        
}

async function deleteNote(id: string){
    try{
        await Note.deleteOne({_id: id})
    }
    catch(err){
        console.error(err)
    }       
}

async function getNotes(){
    const note = await Note.find({})
    return note
}

export default {getNotes, createNote, deleteNote}