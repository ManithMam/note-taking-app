import NoteTaking from "./NoteTaking"
import NoteDisplay from "./NoteDisplay"
import { useEffect, useState } from "react"
import { note } from "../../Types/note"

export default function NoteTable(){

    const [notes, setNotes] = useState<note[]>([])
    const [isLoaded, setLoaded] = useState(false)
    const [error, setError] = useState<Error>()

    useEffect(() => {
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
    }, [])      

    if(error){
        return <div>{error.message}</div>
    }

    if(!isLoaded){
        return <div>Loading</div>
    }
    else{
        return(
            <div>
                <NoteTaking />
                {notes.map((note) => <NoteDisplay notes={note} key={note.stringId}/>)}
            </div>
        )
    }
    
}

