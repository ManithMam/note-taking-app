import { note } from "../../Types/note"
import NoteTaking from "./NoteTaking"
import NoteDisplay from "./NoteDisplay"


export default function NoteTable(){
    return(
        <div>
            <NoteTaking />
            <NoteDisplay notes={DATA} />
        </div>
    )
}

const DATA : note[] = [
    {content: "Das ist ne Notiz", id: "idhaha2"},
    {content: "Wow die zweite", id: "idhaha3"},
    {content: "Gleich ne dritte???", id: "idhaha4"}    
] 