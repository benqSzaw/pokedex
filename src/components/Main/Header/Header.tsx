import "./header.scss"
import { MdCatchingPokemon } from "react-icons/md"
import TypesButtons from "./TypesButtons"
import SearchBar from "./SearchBar"

import { useState } from "react"
import { useAppDispatch } from "../../../common/redux/hooks"
import { resetType, setSearchInput } from "../../../common/redux/appSlice"

const Header = () => {
    const dispatch = useAppDispatch();
    const [isTypesButtons, setIsTypesBUttons] = useState(false);

    const logoClick = () => {
        window.scrollTo(0, 0)
        dispatch(resetType())
        dispatch(setSearchInput(""))
    }

    return (
        <div className="header-container">
            <div onClick={logoClick}>
                <MdCatchingPokemon size={60} className="icon" />
            </div>
            <SearchBar />
            <button className="showTypes" onClick={() => setIsTypesBUttons(!isTypesButtons)}> Types </button>
            <TypesButtons show={isTypesButtons} onHide={() => setIsTypesBUttons(false)} />
        </div>
    )
}

export default Header