import PokemonCard from "./PokemonCard";

interface PokemonCard {
    pokemon: {
      name: string;
      imgSrc?: string;
    };
}
  
interface NavBar {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: [];
  button: (index: number) => void;
}
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList } : NavBar) {

  return (
    <div>
        {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => setPokemonIndex(index)}>
              {pokemon.name}
            </button>
          ))}
        </div>
      );
}

export default NavBar;
