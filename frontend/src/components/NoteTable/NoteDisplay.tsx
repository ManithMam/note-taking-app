import { note } from "../../Types/note"

export default function NoteDisplay(props: {notes: note}){        

    const {notes} = props

    const display = (
        <div key={notes.stringId}>
            <ul>{notes.content}</ul>
            <input type="button"/>
        </div>
    )
    
    
    return(
        <div>
            <ul>{display}</ul>
        </div>
    )    
}



   