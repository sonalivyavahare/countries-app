import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import "./App.css"
import { useState } from "react"
import { ThemeProvider } from "./contexts/ThemeContext"

const App = () => {
    return <ThemeProvider>
        <Header />
        <Outlet />
    </ThemeProvider>
}
export default App