import Login from "./Login";
import NoteTable from "./NoteTable/NoteTable";

export default function NoteApp(){
    return (
        <div>           
            <Login />
            <NoteTable />
        </div>
    );
}