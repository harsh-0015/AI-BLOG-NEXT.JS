import React, { useState } from 'react'
import { createContext } from 'react'
export let context = createContext()
const ThemeContext = ({ children }) => {

    let [theme, setTheme] = useState("")

    return (
        <context.Provider value={{ theme, setTheme }}>{children}</context.Provider>
    )
}

export default ThemeContext