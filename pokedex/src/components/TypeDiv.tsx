import "./typeDiv.scss"
import TypeColor from "../common/TypesColor"

type TypeDivConfig = {
    pokemonType?: string,
    className?: string
    onClick?: () => void
}

const TypeDiv = ({ pokemonType = "", className = "", onClick }: TypeDivConfig) => {
    const PokemonType = pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1);
    const { color, colorFont } = TypeColor(PokemonType);

    return (
        <div onClick={onClick} className={`type-container ${className}`} style={{ backgroundColor: color, color: colorFont }}>
            {PokemonType}
        </div>
    )
}

export default TypeDiv