import NoteTaking from "./NoteTaking"
import NoteDisplay from "./NoteDisplay"
import { DATA } from "../../Data/data"


export default function NoteTable(){
    return(
        <div>
            <NoteTaking />
            {DATA.map((note) => <NoteDisplay notes={note} key={note.id}/>)}
        </div>
    )
}

