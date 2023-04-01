import User from "../../Model/User.js";

async function createUser(newUsername: string, newPassword: string){
    try{        
        const newUser = new User({
            username: newUsername,
            password: newPassword
        })
        newUser.save()        
    }
    catch(err){
        console.log("couldnt create new user")
    }
}


export default {createUser}
