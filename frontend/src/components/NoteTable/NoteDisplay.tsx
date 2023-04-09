import { note } from "../../Types/note"

export default function NoteDisplay(props: {note: note, deleteNote_: Function}){        

    const {note, deleteNote_} = props     
    
    return(        
        <li key={note._id} className="note">            
            <p className="noteContent">{note.content}</p> 
            <button onClick={() => deleteNote_(note)} className="noteButton">Delete</button>                        
        </li>
    )    
}



   