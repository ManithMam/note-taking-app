import { useRef } from "react"
import "../../Styles/noteTaking.css"

export default function NoteTaking(props: {setNotes: Function, setError: Function} ){     
    
    const {setNotes, setError} = props

    const input = useRef<HTMLInputElement>(null)    

     function sendNotes(){
        if(input.current?.value === ""){
            return alert("Please enter a value.")
        }

         fetch('http://localhost:8080/notes', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({content: input.current?.value}),
            method: "POST",
            mode: "cors"         
        })
        .then(res => res.json())
        .then(newNotes => {
            setNotes(newNotes)
        }, (error: Error) => {
            setError(error)
        })
        
    }       

    return (                   
        <form className="noteTakingForm">
            <label className="noteLabel">
                Enter Note:
                <input type="text" ref={input} className="inputField"/>
            </label>                 
            <button onClick={sendNotes} className="noteCreateButton">Create new note</button>            
        </form>        
    );
}