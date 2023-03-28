import { createContext } from "react";

const initialState = {
    name: 'Warley Jr',
    age: 80
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}