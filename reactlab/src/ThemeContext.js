import { createContext, useState, useContext } from 'react'


const ThemeCotext = createContext(undefined)


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    return (
        <ThemeCotext.Provider
            value={{
                theme,
                toggleTheme:
                    () => setTheme(theme === "light" ? "dark" : "light")
            }} >
            {children}
        </ThemeCotext.Provider>
    )
};

export const useTheme = () => useContext(ThemeCotext);
