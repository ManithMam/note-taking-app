import { useRef } from "react"

export default function NoteTaking(){       

    const input = useRef<HTMLInputElement>(null)

    function sendNotes(){
        fetch('http://localhost:8080/notes', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({content: input.current?.value}),
            method: "POST",
            mode: "cors"         
        })
    }      

    return (
        <div>
            <h1>Note</h1>
            <form>
                <label>
                    Enter Note:
                    <input type="text" ref={input}/>
                </label>                 
                <button onClick={sendNotes}>Create new note</button>            
            </form>
        </div>
    );
}