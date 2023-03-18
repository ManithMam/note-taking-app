
function Login(){
    return (
        <form>
            <label>
                Username:
                <input type="text" name="username"/>
            </label>
            <label>
                Password:
                <input type="text" name="password"/>
            </label>           
            <input type="submit" name="login"/>
        </form>
    );
}

function NoteTaking(){
    return (
        <div>
            <h1>Note</h1>
            <form>
                <label>
                    Enter Note:
                    <input type="text" name="noteName"/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    );
}

function NoteDisplay(props: {notes: note[]}){        

    const {notes} = props

    const test = notes.map((note) => (
        <div key={note.id}>
            <ul>{note.content}</ul>
            <input type="button"/>
        </div>
    ))
    
    return(
        <div>
            <ul>{test}</ul>
        </div>
    )    
}

type note = {
    content: string,
    id: string
}

const DATA : note[] = [
    {content: "Das ist ne Notiz", id: "idhaha2"},
    {content: "Wow die zweite", id: "idhaha3"},
    {content: "Gleich ne dritte???", id: "idhaha4"}    
]    


function NoteTable(){
    return(
        <div>
            <NoteTaking />
            <NoteDisplay notes={DATA} />
        </div>
    )
}


function NoteApp(){
    return (
        <div>           
            <Login />
            <NoteTable />
        </div>
    );
}


export default function App(){
    return <NoteApp />;
}