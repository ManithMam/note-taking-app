import { note } from "../../Types/note"

export default function NoteDisplay(props: {note: note, deleteNote_: Function}){        

    const {note, deleteNote_} = props
         

    const display = (
        <div key={note.stringId}>
            <ul>{note.content}</ul>            
            <button onClick={() => deleteNote_(note)}>Delete</button>
        </div>
    )    
    
    return(
        <div>
            <ul>{display}</ul>
        </div>
    )    
}



   