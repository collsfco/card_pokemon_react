import React from "react"
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Card from "./Card"

function App() {
 
  const [pokemonData, setPokemonData] = useState({});
  const [randomNumber, setrandomNumber] = useState(getRandom());
  
  //https://pokeapi.co/api/v2/pokemon/ditto

  function getRandom(){
    return Math.floor(Math.random() * 150);
  }

  function handleClick(){
    setrandomNumber(getRandom())
  }
   
 React.useEffect(function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
     
  },[randomNumber]);

  return (
    <main>
      {pokemonData.name && 
      <Card 
      img={pokemonData.sprites.other.dream_world.front_default}
      name={pokemonData.name}
      hp={`${pokemonData.stats[0].base_stat}${pokemonData.stats[0].stat.name}` }
      experience={pokemonData.base_experience}
      attack={pokemonData.stats[1].base_stat}
      defense={pokemonData.stats[2].base_stat}
      special_attack={pokemonData.stats[3].base_stat}
      fun={handleClick}
      />}
    </main>
  );
}

export default App;
