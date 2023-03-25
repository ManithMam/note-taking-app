import Note from "../../Model/Note.js";

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


export default {getNotes, createNote, deleteNote}
