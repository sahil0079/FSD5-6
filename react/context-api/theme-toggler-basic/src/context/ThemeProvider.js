import React, { createContext, useState } from 'react'

//create a context 

export const ThemeContext = createContext(false)


function ThemeProvider({ children }) {
    const [toggle, setToggle] = useState(false)

    //2.to use provider component to provide the data

    const toggleFunction = () => {
        setToggle(!toggle)
    }

    return (
        <ThemeContext.Provider value={{ toggle, toggleFunction }} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider