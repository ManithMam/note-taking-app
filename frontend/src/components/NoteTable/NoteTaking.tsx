export default function NoteTaking(){
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