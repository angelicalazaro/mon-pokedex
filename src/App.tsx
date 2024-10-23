import "./App.css";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "Vulpix",
      imgSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  );
}

export default App;
