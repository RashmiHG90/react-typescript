import { useState } from "react"
    type AuthUser ={
        name: string
        email: string
    }

    //this can be used when u r sure that state will have value always(like it will get value as soon as mounting or useeffect)
export const UserTypeAssertion = ()=>{
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () =>{
        setUser({
            name: 'Sunshine',
            email: 'sunshine@gmail.com'
        })
    }

    return(
        <>
        <button onClick = {handleLogin}>Login</button>
        <div>User name is {user.name}</div>
        <div>User email is{user.email}</div>
        </>
    )
}