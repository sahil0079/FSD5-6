import React, { createContext, useContext, useEffect, useState } from "react";

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

const ThemeContext = createContext(initialState)


function ThemeProvider({ children }) {
    //default theme light
    const [dark, setDark] = useState(false)




    //On mount, get the user preffered theme from the local storage

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    //toggle between light theme and dark
    const toggle = () => {
        //keeping a track of theme in local storage
        localStorage.setItem('dark', JSON.stringify(!dark))
        setDark(!dark)
    }

    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }} >{children}
        </ThemeContext.Provider>
    )
}

const useContextValue = () => useContext(ThemeContext)


export { ThemeProvider, ThemeContext, useContextValue }