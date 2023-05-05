import "./stats.scss"
import { useEffect, useState } from "react"
import PokeApi from "../../common/PokeApi"
import { PokemonApiType, getIcon, getName } from "../../common/Constants"
import TypeColor from "../../common/TypesColor";
import TypeDiv from "../TypeDiv";
import { useNavigate } from 'react-router-dom';

const Stats = ({ id }: { id: number }) => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonApiType>();
    const [backgroundColor, setBackgroundColor] = useState<string>();
    const beforeId = id == 1 ? 809 : id - 1;
    const afterId = id == 809 ? 1 : id + 1

    useEffect(() => {
        PokeApi.get(id.toString()).then(res => setPokemon(res.data))
    }, [id])

    useEffect(() => {
        if (!pokemon?.types) return;
        const colors = pokemon.types.map((type) => {
            return TypeColor(type.type.name).color
        })

        if (colors.length == 2) setBackgroundColor(`linear-gradient(0deg, ${colors[0]} 0%, ${colors[1]} 100%)`)
        else setBackgroundColor(colors[0])
    }, [pokemon?.types])


    const heightToMeters = (height: number) => {
        const str = height.toString();

        switch (str.length) {
            case 1:
                return str.padStart(3, "0.")
            case 2:
                return str.slice(0, str.length - 1) + "." + str.slice(str.length - 1, str.length)
        }
    }

    const weightToKilograms = (weight: number) => {
        const str = weight.toString();
        return str.slice(0, str.length - 1) + "." + str.slice(str.length).padEnd(1, "0");
    }

    const removeDashString = (str: string) => {
        str = str.replace("-", " ");
        const words = str.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    const toIdPokemon = (id: number) => {
        return `#${id.toString().padStart(3, "0")}`
    }

    const changePage = (id: number) => {
        const name = getName(id)
        navigate(`/${name}`)
    }

    const getHome = () => {
        navigate("/")
    }

    if (!pokemon) return <>loading</>;
    return (
        <div className='background' style={{ background: backgroundColor }} onClick={getHome}>
            <div className="main-container">

                <div className="buttons">
                    <button onClick={() => changePage(beforeId)}> {toIdPokemon(beforeId)} {getName(beforeId)}</button>
                    <button onClick={getHome}>Home</button>
                    <button onClick={() => changePage(afterId)}> {toIdPokemon(afterId)} {getName(afterId)}</button>
                </div>

                <div className="pokemon-container">
                    <div>
                        <h1> {removeDashString(pokemon.name)} </h1>
                        <h3> {toIdPokemon(pokemon.id)} </h3>
                    </div>

                    <div className="top-container">
                        <div className="top-first-container">
                            <img src={getIcon(pokemon.id)} alt="pokemon" />
                            <div className="types-container">
                                {pokemon.types?.map((type, id) => {
                                    return <TypeDiv key={id} pokemonType={type.type.name} className="type" />
                                })}
                            </div>
                        </div>

                        <div className="top-second-container">
                            <div>
                                <div>
                                    <div className="title">Height  </div>
                                    <div className="value">{heightToMeters(pokemon.height)}m</div>
                                </div>
                                <div>
                                    <div className="title">Weight</div>
                                    <div className="value">{weightToKilograms(pokemon.weight)}kg</div>
                                </div>

                            </div>
                            <div>
                                <div className="title">Abbilities</div>
                                <div>
                                    {pokemon.abilities?.map((ability, id) => {
                                        return (
                                            <div key={id} className="value">
                                                {removeDashString(ability.ability.name)}
                                                {ability.is_hidden && <div className="hidden"> (hidden ability) </div>}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-container">
                        <h5> Shiny form: </h5>
                        <div>
                            {pokemon.sprites.front_shiny && <img src={pokemon.sprites.front_shiny} />}
                            {pokemon.sprites.back_shiny && <img src={pokemon.sprites.back_shiny} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats