import Title from "./components/Title";
import NoteTable from "./components/NoteTable/NoteTable";
import "./Styles/app.css"

export default function App(){
    return (
        <div className="App">               
                <Title />            
                <NoteTable />                 
        </div>
    );
}
