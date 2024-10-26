import { useState } from "react";
import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import NavBar from "./Components/NavBar";

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
      imgSrc:
        "https://wallpapers.com/images/hd/pokemon-mew-phjyrk0qc9p51zlx.jpg",
    },
  ];

  return (
    <div>
      <h1>Pokédex 🧸</h1>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;

//
