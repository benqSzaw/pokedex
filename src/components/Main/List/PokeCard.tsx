import "./pokeCard.scss";
import Card from 'react-bootstrap/Card';
import TypeDiv from "../../TypeDiv";
import { PokemonType, getIcon } from "../../../common/Constants";
import { Link } from 'react-router-dom'

const PokeCard = ({ pokemon }: { pokemon: PokemonType }) => {
    return (
        <Link to={`/${pokemon.name.english}`} className="link" >
            <Card className="card-container">
                <Card.Img variant="top" src={getIcon(pokemon.id)} />
                <Card.Body>
                    <Card.Title> {pokemon.name.english} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> #{pokemon.id.toString().padStart(3, "0")} </Card.Subtitle>
                    <div className="types-contianer">
                        {pokemon.type?.map((type) => {
                            return <TypeDiv key={type} pokemonType={type} />
                        })}
                    </div>
                </Card.Body>
            </Card>
        </Link>

    )
}

export default PokeCard