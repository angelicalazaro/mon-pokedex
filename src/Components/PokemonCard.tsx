function PokemonCard() {
    const pokemon = pokemonList[1];
    // si l'on change le 0 à 1 dans la variable, nous parcourons le deuxième élement donc Mew // 
  
    return (
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
  
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
  
  export default PokemonCard;
  