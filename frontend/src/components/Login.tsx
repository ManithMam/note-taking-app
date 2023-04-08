export default function Login(){
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