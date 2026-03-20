import {useContext} from 'react'
//import{UserContext} from './UserContext'
import { UserContextAssertion } from './UserContextAssertion'

export const User = () =>{
    //const userContext = useContext(UserContext)
    const userContext = useContext(UserContextAssertion)
    
    const handleLogin =() =>{
       // if(userContext){   -- not required for assertion
            userContext.setUser({
                name: 'Sunshine',
                email: 'sunshine@gmail.com'
            })
        //}
    }

    const handleLogout= () =>{
       // if(userContext){  -- not required for assertion
            userContext.setUser(null)
       // }
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
            {/* <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div> */}
        </div>
    )

}