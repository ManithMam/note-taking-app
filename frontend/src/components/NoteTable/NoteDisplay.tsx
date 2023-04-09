import { note } from "../../Types/note"
import "../../Styles/noteDisplay.css"

export default function NoteDisplay(props: {note: note, deleteNote_: Function}){        

    const {note, deleteNote_} = props     
    
    return(        
        <li key={note._id} className="noteEntrie">      
            <div className="note">
                <p className="noteContent">{note.content}</p> 
                <button onClick={() => deleteNote_(note)} className="noteDeleteButton">Delete</button>   
            </div>                                        
        </li>
    )    
}



   