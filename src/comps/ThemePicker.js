import React, { useContext } from 'react'
import '../App.css';
import { ThemeContext } from './context/ThemeContext';

const ThemePicker = () => {

    const { color, changeThemeColor } = useContext(ThemeContext)

    const pickers = ["red", "dodgerblue", "black", "seagreen",
        "tomato", "orange"]

    const changeTheme = (color) => {
        changeThemeColor(color)
    }
    return (
        <header className="App-header" style={{ backgroundColor: color }}>
            <div>
                (
            {pickers.map(selectedColor => {
                return <button className="button" onClick={() => changeTheme(selectedColor)}
                    style={{ backgroundColor: selectedColor }}></button>
            })}
            )
        </div>
        </header>
    )
}

export default ThemePicker
