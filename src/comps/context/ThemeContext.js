import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [color, setColor] = useState("tomato");
    const changeThemeColor = color => {
        setColor(color);
    }

    return (
        <ThemeContext.Provider value={{color, changeThemeColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
