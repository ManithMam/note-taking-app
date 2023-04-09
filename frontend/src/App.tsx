import Title from "./components/Title";
import NoteTable from "./components/NoteTable/NoteTable";

export default function App(){
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
