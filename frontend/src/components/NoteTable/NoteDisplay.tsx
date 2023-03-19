import { note } from "../../Types/note"

export default function NoteDisplay(props: {notes: note}){        

    const {notes} = props

    const test = (
        <div key={notes.id}>
            <ul>{notes.content}</ul>
            <input type="button"/>
        </div>
    )
    
    
    return(
        <div>
            <ul>{test}</ul>
        </div>
    )    
}



   