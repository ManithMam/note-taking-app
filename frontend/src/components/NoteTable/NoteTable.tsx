import NoteTaking from "./NoteTaking"
import NoteDisplay from "./NoteDisplay"
import { useEffect, useState } from "react"
import { note } from "../../Types/note"
import "../../Styles/noteTable.css"

export default function NoteTable(){

    const [notes, setNotes] = useState<note[]>([])
    const [isLoaded, setLoaded] = useState(false)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        fetchNotes()           
    }, [])  

    function fetchNotes() {
        fetch('http://localhost:8080/notes', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            method: "GET",
            mode: "cors"
        })
            .then(res => res.json())
            .then( (notesFromDB) => {
                setLoaded(true)
                setNotes(notesFromDB)
            }, (error: Error) => {
                setLoaded(true)
                setError(error)
            }) 
    }

    function deleteNote(note: note){
        fetch(`http://localhost:8080/notes/${note._id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: "DELETE",
            mode: "cors"
        })
        .then(res =>  res.json())
        .then((remainingNotes) => {
            setNotes(remainingNotes)
        })
        , (error: Error) => {
            setError(error)
        }                    
    }

    if(error){
        return <div>{error.message}</div>
    }

    if(!isLoaded){
        return <div>Loading</div>
    }
    else{
        return(
            <div>
                <NoteTaking setNotes={setNotes} setError={setError}/>
                <ul className="notes">
                    {notes.map((note) => <NoteDisplay note={note} key={note._id} deleteNote_={deleteNote}/>)}
                </ul>
            </div>
        )
    }
    
}

