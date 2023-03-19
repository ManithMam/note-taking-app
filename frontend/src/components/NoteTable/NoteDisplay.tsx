import { note } from "../../Types/note"

export default function NoteDisplay(props: {notes: note[]}){        

    const {notes} = props

    const test = notes.map((note) => (
        <div key={note.id}>
            <ul>{note.content}</ul>
            <input type="button"/>
        </div>
    ))
    
    return(
        <div>
            <ul>{test}</ul>
        </div>
    )    
}



   