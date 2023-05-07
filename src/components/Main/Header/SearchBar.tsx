import "./searchBar.scss"
import { useRef } from "react"
import { selectSearchInput, setSearchInput } from "../../../common/redux/appSlice";
import { useAppDispatch, useAppSelector } from "../../../common/redux/hooks";

const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(selectSearchInput);

    const inputHandler = () => {
        if (!searchRef.current) return;
        dispatch(setSearchInput(searchRef.current.value))
    }

    return (
        <div className="searchBar-container">
            <input placeholder="Search by name or id" onChange={inputHandler} value={searchValue} ref={searchRef} />
        </div>
    )
}

export default SearchBar