import { useContext, useState } from "react"
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"
import { ThemeContext } from "../contexts/ThemeContext"

const Home = () => {
    const [query, setQuery] = useState('');
    const [menu, setMenu] = useState('')
    const [isDark, setIsDark] = useContext(ThemeContext)

    return <>
       <main className={`${isDark?'dark':''}`}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu setMenu={setMenu} />
            </div>
            <CountriesList query={query} menu={menu} />
        </main>
    </>
}

export default Home