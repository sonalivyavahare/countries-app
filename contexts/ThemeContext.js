import { createContext, useState } from "react";

export const ThemeContext = createContext("Hi")


export function ThemeProvider({children}){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
        </ThemeContext.Provider>
}