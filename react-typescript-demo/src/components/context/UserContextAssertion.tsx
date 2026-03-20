import React, { useState, createContext } from "react"

export type AuthUser ={
    name: string
    email: string
}

type UserContextType ={
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContextAssertion = createContext({} as UserContextType)

export const UserContextAssertionProvider = ({children}: UserContextProviderProps) =>{
    const [user, setUser] = useState<AuthUser | null>(null)

    return(
        <UserContextAssertion.Provider value = {{user, setUser}}> 
            {children}
        </UserContextAssertion.Provider>
    )

}