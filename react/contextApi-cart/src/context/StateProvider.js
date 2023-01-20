import React, { createContext, useContext, useReducer } from 'react'

//global data using context api
export const StateContext = createContext()
//provide the data using provider
function StateProvider({ reducer, initialState, children }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
    )
}
export default StateProvider
//thats how we can use context and get the state from it

export const useStateValue = () => useContext(StateContext)