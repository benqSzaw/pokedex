import "./header.scss"
import { MdCatchingPokemon } from "react-icons/md"
import TypesButtons from "./TypesButtons"
import SearchBar from "./SearchBar"
import { useState } from "react"

const Header = () => {
    const [isTypesButtons, setIsTypesBUttons] = useState(false);

    return (
        <div className="header-container">
            <MdCatchingPokemon size={60} onClick={() => window.scrollTo(0, 0)} className="icon" />
            <SearchBar />
            <button className="showTypes" onClick={() => setIsTypesBUttons(!isTypesButtons)}> Types </button>
            <TypesButtons show={isTypesButtons} onHide={() => setIsTypesBUttons(false)} />
        </div>
    )
}

export default Header