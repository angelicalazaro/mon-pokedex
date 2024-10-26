import { useState } from "react";
import "./App.css";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

const pokemonList = [
    {
      name: "Vulpix",
      imgSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png",
    },
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];

  
  const precedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const suivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }


  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <p>{pokemonIndex}</p>
      <button type="button" onClick={precedent}>Précédent</button>
      <button type="button" onClick={suivant}>Suivant</button>
    </div>
  );
}

export default App;

// 