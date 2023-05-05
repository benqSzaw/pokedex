import "./searchBar.scss"
import { useRef } from "react"
import { setSearchInput } from "../../../common/redux/appSlice";
import { useAppDispatch } from "../../../common/redux/hooks";

const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const inputHandler = () => {
        if (!searchRef.current) return;
        dispatch(setSearchInput(searchRef.current.value))
    }

    return (
        <div className="searchBar-container">
            <input placeholder="Search by name or id" onChange={inputHandler} ref={searchRef} />
        </div>
    )
}

export default SearchBar