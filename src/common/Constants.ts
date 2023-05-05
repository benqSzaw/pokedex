import pokedex from "./data/pokedex.json";

export const githubLink = "https://github.com/benqSzaw/Portfolio";

export const getIcon = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const getName = (id: number) => {
  return pokedex.filter((pokemon) => {
    return pokemon.id == id;
  })[0].name.english;
};

export interface PokemonType {
  id: number;
  name: Name;
  type?: string[] | null;
  base: Base;
}
interface Name {
  english?: string | null;
  japanese: string;
  chinese: string;
  french?: string | null;
}
interface Base {
  HP: number;
  Attack: number;
  Defense: number;
  Speed: number;
}

export interface PokemonApiType {
  abilities?: AbilitiesEntity[];
  base_experience: number;
  forms?: { name: string; url: string }[] | null;
  game_indices?: GameIndicesEntity[] | null;
  height: number;
  held_items?: null[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  name: string;
  order: number;
  past_types?: null[] | null;
  species: { name: string; url: string };
  sprites: Sprites;
  stats?: StatsEntity[] | null;
  types?: TypesEntity[] | null;
  weight: number;
}

interface AbilitiesEntity {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}
interface GameIndicesEntity {
  game_index: number;
  version: { name: string; url: string };
}
interface MovesEntity {
  move: { name: string; url: string };
  version_group_details?: VersionGroupDetailsEntity[] | null;
}
interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: { name: string; url: string };
  version_group: { name: string; url: string };
}
interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: never;
}
interface Other {
  dream_world: DreamWorldOrIcons;
  home: Home;
  official_artwork: {
    front_default: string;
    front_shiny: string;
  };
}
interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}
interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}
interface TypesEntity {
  slot: number;
  type: { name: string; url: string };
}
