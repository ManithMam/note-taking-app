import Title from "./Title";
import NoteTable from "./NoteTable/NoteTable";

export default function NoteApp(){
    return (
        <div>   
            <header>
                <Title />
            </header>       
            <body>
                <NoteTable />
            </body>            
        </div>
    );
}