import PokemonCard from "./PokemonCard";

interface NavBar {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: [];
}
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const precedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const suivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <button type="button" onClick={precedent}>
        Précédent
      </button>
      <button type="button" onClick={suivant}>
        Suivant
      </button>
    </div>
  );
}

export default NavBar;
