import { note } from "../../Types/note"

export default function NoteDisplay(props: {notes: note}){        

    const {notes} = props

    function deleteNote(){
        fetch('http://localhost:8080/notes', {
            headers: { 'Content-Type': 'application/json' },
            method: "DELETE",
            mode: "cors",
            body: JSON.stringify({id: notes.stringId})
        })
    }

    const display = (
        <div key={notes.stringId}>
            <ul>{notes.content}</ul>
            <input type="button" onClick={deleteNote}/>
        </div>
    )    
    
    return(
        <div>
            <ul>{display}</ul>
        </div>
    )    
}



   