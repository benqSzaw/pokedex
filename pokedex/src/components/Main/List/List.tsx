import "./list.scss"
import PokeCard from "./PokeCard"

import { PokemonType } from "../../../common/Constants"
import defualtData from "../../../common/data/pokedex.json"

import { useState, useEffect } from "react"
import { useAppSelector } from "../../../common/redux/hooks"
import { selectSearchInput, selectType } from "../../../common/redux/appSlice"

const List = () => {
    const searchValue = useAppSelector(selectSearchInput)?.toUpperCase();
    const typeValue = useAppSelector(selectType);

    const [data, setData] = useState<PokemonType[]>(defualtData);

    useEffect(() => {
        let newData: PokemonType[];

        //check if search value is number
        if (searchValue.match(/^[0-9]+$/) != null) {
            newData = defualtData.filter(pokemon => pokemon.id.toString().padStart(3, "0").includes(searchValue))
        }
        else {
            newData = defualtData.filter(pokemon => pokemon.name.english?.toUpperCase().includes(searchValue))
        }

        if (typeValue.length != 0) {
            typeValue.forEach((type) => {
                newData = newData.filter(pokemon => pokemon.type?.includes(type))
            })
        }

        setData(newData);
    }, [searchValue, typeValue])

    return (
        <div className="list-container">
            <div className="pokemons-container">
                {data.map((pokemon: PokemonType) => {
                    return <PokeCard key={pokemon.id} pokemon={pokemon} />
                })}
            </div>
        </div>
    )
}

export default List